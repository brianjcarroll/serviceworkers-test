// service workers shit goes here.

if (navigator.serviceWorker) {
  this.oninstall = function(event) {
    event.waitUntil(
      caches.create('static-v1').then(function(cache) {
        return cache.add(
          '/',
          '/index.html',
          '/js/main.js',
          '/css/main.css',
          '/css/normalize.css',
          '/css/normalize.min.css'
        );
      })
    );
  };

  console.log('hey');
}
