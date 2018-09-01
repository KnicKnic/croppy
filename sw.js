// version 1
// v0
var prefix_name = "croppy_"
var CACHE_NAME = prefix_name + 'cache_1_5';
var cacheWhitelist = [CACHE_NAME];
var urlsToCache = [
    './',
    './index.html',
    './images/croppy.png',
    './manifest.json',
    './magick.js',
    './magick.wasm',
    './magickApi.js',
    './instructions.html',
    './favicon.png',
    'https://cdn.jsdelivr.net/g/filesaver.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js',
    //"https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
];

self.addEventListener('activate', function(event) {  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName.startsWith(prefix_name) && cacheWhitelist.indexOf(cacheName) ===-1) {
                //alert("asdf")
                //self.postMessage("deleting cache " + cacheName)
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

self.addEventListener('install', function(event) {
  self.skipWaiting();
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache: ' + CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });