const CACHE = 'aws-clf-c02-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './sw.js'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
