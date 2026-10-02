const CACHE='mtg-collection-v4';
const APP=['./','./index.html','./manifest.json','./service-worker.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.hostname==='api.scryfall.com'||u.hostname==='cdn.jsdelivr.net'){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
