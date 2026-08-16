const CACHE='aws-clf-c02-v2';
const ASSETS=['./','./index.html','./questions.json','./manifest.webmanifest','./sw.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request))));
