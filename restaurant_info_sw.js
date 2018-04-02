var CACHE_NAME = 'restaurant-info-cache-v1';

var urlsToCache = [
  '/restaurant.html',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
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
          console.log('response found in cache');
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(event.request, responseToCache);
                console.log(event.request + ' is added to cache');
            });

            return response;
          }
        );
        return fetch(event.request);
      }
    )
  );
});
