// Install is called when the page is loaded first time, or when the service
self.addEventListener('install', function(event) {
    console.log('Installing Service Worker');

});

self.addEventListener('fetch', function(event) {
    console.log('Received fetch');
    console.log(event);

    if (/\.jpeg$/.test(event.request.url)) {
        console.log('Replace image!');

        event.respondWith(
            fetch('dog.jpeg', {
                mode: 'no-cors'
            })
        );
    }
});

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}