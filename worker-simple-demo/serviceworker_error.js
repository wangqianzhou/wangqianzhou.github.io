// Install is called when the page is loaded first time, or when the service
self.addEventListener('install', function(event) {
    console.log('Installing Service Worker');

});

self.addEventListener('fetch', function(event) {
    console.log('Received fetch');
    console.log(event);

    event.respondWith(null);
});

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}