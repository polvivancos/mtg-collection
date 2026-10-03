const CACHE = 'mtg-collection-v3';
const APP_SHELL = ['./', './index.html', './manifest.json', './service-worker.js'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(c => c.addAll(APP_SHELL))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const u = new URL(event.request.url);
  // Never cache Scryfall/API responses: card/printing data must stay fresh.
  if (u.hostname === 'api.scryfall.com' || u.hostname === 'cdn.jsdelivr.net') {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(r => { const copy=r.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy)); return r; }).catch(()=>caches.match('./index.html'))));
});
