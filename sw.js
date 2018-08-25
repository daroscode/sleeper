self.addEventListener('install', function(event){
    console.log('ServiceWorker installed');
    event.waitUntil(
      caches.open('static')
        .then(function(cache){
          cache.addAll([
            '.',
            'index.html',
            'js/main.js',
            'css/main.css',
            'img/96x96.png',
            'img/144x144.png',
            'img/256x256.png',
            'img/512x512.png',
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            'https://code.jquery.com/jquery-3.3.1.min.js',
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js'
          ]);
        })
    );
  });
  
  self.addEventListener('activate', function(){
    console.log('ServiceWorker activated');
  });
  
  self.addEventListener('fetch', function(event){
    event.respondWith(
      caches.match(event.request)
        .then(function(res){
          if (res) {
            return res;
          } else {
            return fetch(event.request);
          }
        })
    );
  });