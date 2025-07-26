const cacheName = 'tool-fibo-v1';
const assets = [
  '/',
  '/index.html',
  '/lateralus.html',
  '/fibonacci.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/js/fibonacci.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});