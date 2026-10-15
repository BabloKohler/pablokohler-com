(() => {
  const C = window.TM_CONFIG;
  const STATUSES = ['to review', 'contacted', 'applied', 'interview', 'secured', 'rejected'];
  const $ = (id) => document.getElementById(id);
  const ls = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
    del: (k) => { try { localStorage.removeItem(k); } catch {} }
  };
  let me = ls.get('tm_name') || '', pass = ls.get('tm_pass') || '';
  let pins = [], votes = [], stops = [], map, pinLayer, stopLayer, walkLayer, markers = {};
  let adding = null, editing = null, draft = null, tempMarker = null, timer = null;

  const KIND = { trabajo: 'job', hospedaje: 'stay' };
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const safeUrl = (u) => (/^https?:\/\//i.test(u || '') ? u : '');

  async function rpc(fn, args) {
    const r = await fetch(`${C.SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: { apikey: C.SUPABASE_KEY, Authorization: `Bearer ${C.SUPABASE_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(args)
    });
    const t = await r.text();
    if (!r.ok) throw new Error(/clave incorrecta/.test(t) ? 'clave' : t.slice(0, 200));
    return t ? JSON.parse(t) : null;
  }

  // ---------- login ----------
  $('lgName').value = me;
  $('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    $('lgErr').textContent = '';
    const n = $('lgName').value.trim(), p = $('lgPass').value;
    try {
      const d = await rpc('tm_list', { p_pass: p });
      me = n; pass = p; ls.set('tm_name', me); ls.set('tm_pass', pass);
      start(d);
    } catch (err) {
      $('lgErr').textContent = err.message === 'clave' ? 'Wrong password' : 'Could not connect: ' + err.message;
    }
  });
  $('logout').onclick = () => { ls.del('tm_pass'); location.reload(); };

  async function boot() {
    if (me && pass) {
      try { start(await rpc('tm_list', { p_pass: pass })); return; } catch (e) { if (e.message !== 'clave') console.warn(e); }
    }
    $('login').hidden = false;
  }

  // ---------- app ----------
  function start(d) {
    $('login').hidden = true; $('app').hidden = false;
    $('who').textContent = me;
    STATUSES.forEach((s) => { $('fStatus').add(new Option(s, s)); $('pStatus').add(new Option(s, s)); });
    initMap();
    apply(d);
    loadStops();
    timer = setInterval(refresh, 6000);
  }

  function initMap() {
    map = L.map('map', { zoomControl: true }).setView([-42.0, 146.6], 7);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
    const canvas = L.canvas({ padding: 0.3 });
    stopLayer = L.layerGroup(); walkLayer = L.layerGroup(); pinLayer = L.layerGroup().addTo(map);
    map._canvas = canvas;
    map.on('click', onMapClick);
    $('lyStops').onchange = syncLayers; $('lyWalk').onchange = syncLayers;
    $('togglePanel').onclick = () => $('app').classList.toggle('open');
    $('addWork').onclick = () => startAdd('trabajo');
    $('addStay').onclick = () => startAdd('hospedaje');
    ['fKind', 'fStatus', 'fSort'].forEach((i) => ($(i).onchange = render));
    $('csv').onclick = exportCsv;
    $('search').addEventListener('submit', onSearch);
  }

  async function loadStops() {
    try {
      const r = await fetch('data/stops.json');
      stops = await r.json();
    } catch { stops = []; }
    const canvas = map._canvas;
    stops.forEach(([la, ln, name]) => {
      L.circleMarker([la, ln], { renderer: canvas, radius: 3, color: '#f59e0b', weight: 1, fillOpacity: 0.9 })
        .bindTooltip(name || 'Bus stop').addTo(stopLayer);
      L.circle([la, ln], { renderer: canvas, radius: C.WALK_METERS, stroke: false, fillColor: '#f59e0b', fillOpacity: 0.05, interactive: false }).addTo(walkLayer);
    });
    syncLayers();
    render();
  }

  function syncLayers() {
    $('lyStops').checked ? stopLayer.addTo(map) : map.removeLayer(stopLayer);
    $('lyWalk').checked ? walkLayer.addTo(map) : map.removeLayer(walkLayer);
    pinLayer.eachLayer((l) => l.bringToFront && l.bringToFront());
  }

  function nearestStop(lat, lng) {
    if (!stops.length) return null;
    let best = Infinity;
    for (const s of stops) {
      const dy = (s[0] - lat) * 111320, dx = (s[1] - lng) * 111320 * Math.cos(lat * Math.PI / 180);
      const d = dx * dx + dy * dy;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  }
  const fmtDist = (m) => (m == null ? '' : m < 1000 ? `stop ${Math.round(m / 10) * 10} m away` : `stop ${(m / 1000).toFixed(1)} km away`);

  // ---------- datos ----------
  function apply(d) {
    pins = d.pins || []; votes = d.votes || [];
    render();
    $('sync').textContent = 'Updated ' + new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });
  }
  async function refresh() {
    if (document.hidden || $('dlg').open) return;
    try { apply(await rpc('tm_list', { p_pass: pass })); } catch (e) { $('sync').textContent = 'Offline'; }
  }
  const votesOf = (id) => votes.filter((v) => v.pin_id === id);

  function filtered() {
    const k = $('fKind').value, s = $('fStatus').value, o = $('fSort').value;
    let a = pins.filter((p) => (!k || p.kind === k) && (!s || p.status === s));
    a = [...a].sort((x, y) => (o === 'votes' ? votesOf(y.id).length - votesOf(x.id).length : new Date(y.created_at) - new Date(x.created_at)));
    return a;
  }

  function render() {
    if (!map) return;
    const list = filtered();
    pinLayer.clearLayers(); markers = {};
    list.forEach((p) => {
      const icon = L.divIcon({ className: '', iconSize: [30, 30], iconAnchor: [15, 30], html: `<div class="pin ${p.kind}"><span>${p.kind === 'trabajo' ? '💼' : '🏠'}</span></div>` });
      const m = L.marker([p.lat, p.lng], { icon }).addTo(pinLayer);
      m.bindPopup(() => popupHtml(p));
      markers[p.id] = m;
    });
    $('list').innerHTML = list.length ? list.map(itemHtml).join('') : '<p class="muted">No pins yet. Add the first one with the buttons above.</p>';
    $('list').querySelectorAll('.item').forEach((el) => {
      const id = el.dataset.id;
      el.onclick = (ev) => {
        const b = ev.target.closest('[data-act]');
        if (b) { ev.stopPropagation(); return act(b.dataset.act, id); }
        if (ev.target.closest('a')) return;
        const p = pins.find((x) => x.id === id);
        $('app').classList.remove('open');
        map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 12));
        markers[id]?.openPopup();
      };
    });
  }

  function gmapsLink(p) { return safeUrl(p.gmaps) || `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`; }
  function itemHtml(p) {
    const v = votesOf(p.id), mine = v.some((x) => x.author === me), d = fmtDist(nearestStop(p.lat, p.lng));
    return `<div class="item ${p.kind}" data-id="${p.id}">
      <h4><span>${p.kind === 'trabajo' ? '💼' : '🏠'} ${esc(p.title)}</span><span class="tag">${esc(p.status)}</span></h4>
      <div class="meta">${p.price ? `<span>${esc(p.price)}</span>` : ''}<span>${esc(p.author)}</span>${d ? `<span>🚌 ${d}</span>` : ''}</div>
      ${p.notes ? `<div class="meta">${esc(p.notes).slice(0, 140)}</div>` : ''}
      <div class="acts">
        <button data-act="vote" class="${mine ? 'on' : ''}">⭐ ${v.length}</button>
        <a href="${gmapsLink(p)}" target="_blank" rel="noopener">Google Maps</a>
        ${safeUrl(p.url) ? `<a href="${esc(safeUrl(p.url))}" target="_blank" rel="noopener">Listing</a>` : ''}
        <button data-act="edit">Edit</button>
      </div></div>`;
  }
  function popupHtml(p) {
    const d = fmtDist(nearestStop(p.lat, p.lng));
    return `<b>${esc(p.title)}</b>${p.price ? esc(p.price) + '<br>' : ''}${esc(p.status)} · ${esc(p.author)}<br>${d ? '🚌 ' + d + '<br>' : ''}<a href="${gmapsLink(p)}" target="_blank" rel="noopener">Open in Google Maps</a>`;
  }

  async function act(a, id) {
    const p = pins.find((x) => x.id === id);
    if (a === 'edit') return openDialog(p);
    if (a === 'vote') {
      const i = votes.findIndex((v) => v.pin_id === id && v.author === me);
      i >= 0 ? votes.splice(i, 1) : votes.push({ pin_id: id, author: me });
      render();
      try { await rpc('tm_vote', { p_pass: pass, p_id: id, p_author: me }); } catch { refresh(); }
    }
  }

  // ---------- agregar / editar ----------
  function startAdd(kind) {
    adding = kind;
    $('hint').hidden = false;
    $('hint').textContent = `Click on the map to place the ${kind === 'trabajo' ? 'job' : 'stay'}`;
    $('app').classList.remove('open');
    map.getContainer().style.cursor = 'crosshair';
  }
  function onMapClick(e) {
    if (!adding) return;
    const kind = adding; adding = null;
    $('hint').hidden = true; map.getContainer().style.cursor = '';
    openDialog(null, { kind, lat: e.latlng.lat, lng: e.latlng.lng });
  }

  function openDialog(p, init) {
    editing = p;
    draft = p ? { lat: p.lat, lng: p.lng } : { lat: init.lat, lng: init.lng };
    $('dlgTitle').textContent = p ? 'Edit pin' : 'New pin';
    $('pKind').value = p ? p.kind : init.kind;
    $('pTitle').value = p?.title || '';
    $('pUrl').value = p?.url || '';
    $('pGmaps').value = p?.gmaps || '';
    $('pPrice').value = p?.price || '';
    $('pStatus').value = p?.status || 'to review';
    $('pNotes').value = p?.notes || '';
    $('pDel').hidden = !p;
    showLoc();
    if (tempMarker) map.removeLayer(tempMarker);
    tempMarker = L.marker([draft.lat, draft.lng], { opacity: 0.6 }).addTo(map);
    $('dlg').showModal();
  }
  function showLoc() {
    const d = fmtDist(nearestStop(draft.lat, draft.lng));
    $('pLoc').textContent = `Location: ${draft.lat.toFixed(5)}, ${draft.lng.toFixed(5)}${d ? ' · 🚌 ' + d : ''}`;
  }
  function parseGmaps(s) {
    let m = s.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/) || s.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/) || s.match(/[?&](?:q|query|ll)=(-?\d+\.\d+)(?:,|%2C)(-?\d+\.\d+)/);
    return m ? { lat: +m[1], lng: +m[2] } : null;
  }
  $('pGmaps').addEventListener('input', () => {
    const g = parseGmaps($('pGmaps').value);
    if (g) { draft = g; showLoc(); tempMarker?.setLatLng([g.lat, g.lng]); map.panTo([g.lat, g.lng]); }
  });
  const closeDlg = () => { $('dlg').close(); if (tempMarker) { map.removeLayer(tempMarker); tempMarker = null; } };
  $('pCancel').onclick = closeDlg;
  $('dlg').addEventListener('cancel', () => { if (tempMarker) { map.removeLayer(tempMarker); tempMarker = null; } });
  $('pDel').onclick = async () => {
    if (!confirm('Delete this pin for everyone?')) return;
    try { await rpc('tm_delete', { p_pass: pass, p_id: editing.id }); } catch (e) { alert(e.message); }
    closeDlg(); refresh();
  };
  $('pinForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const pin = {
      id: editing?.id || null, kind: $('pKind').value, title: $('pTitle').value.trim(),
      lat: draft.lat, lng: draft.lng, url: $('pUrl').value.trim(), gmaps: $('pGmaps').value.trim(),
      price: $('pPrice').value.trim(), notes: $('pNotes').value.trim(), status: $('pStatus').value, author: me
    };
    if (!pin.title) return;
    try { await rpc('tm_upsert', { p_pass: pass, p_pin: pin }); } catch (err) { return alert('Could not save: ' + err.message); }
    closeDlg(); refresh();
  });

  // ---------- search ----------
  async function onSearch(e) {
    e.preventDefault();
    const q = $('q').value.trim();
    if (!q) return;
    const g = parseGmaps(q);
    if (g) { map.flyTo([g.lat, g.lng], 15); return; }
    try {
      const u = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=au&viewbox=143.7,-39.5,148.6,-43.8&bounded=1&q=${encodeURIComponent(q)}`;
      const r = await (await fetch(u)).json();
      if (!r.length) return alert('Could not find that place in Tasmania');
      map.flyTo([+r[0].lat, +r[0].lon], 15);
    } catch { alert('Search failed, please try again'); }
  }

  // ---------- CSV ----------
  function exportCsv() {
    const rows = [['type', 'name', 'status', 'price', 'author', 'stars', 'lat', 'lng', 'listing', 'google_maps', 'notes']];
    pins.forEach((p) => rows.push([KIND[p.kind], p.title, p.status, p.price, p.author, votesOf(p.id).length, p.lat, p.lng, p.url, gmapsLink(p), p.notes]));
    const csv = rows.map((r) => r.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv' }));
    a.download = 'tasmania-pines.csv'; a.click();
  }

  boot();
})();
