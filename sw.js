self.addEventListener('install', function (event) {
    console.log('SW install');
});

self.addEventListener('activate', function (event) {
    console.log('SW activate');
});



self.addEventListener('fetch', function (event) {
    console.log('SW fetch event recv');
});

self.addEventListener('push', function (event) {
    console.log('SW push event recv');
});


function broadcastOnRequest(clients) {
    clients.forEach(function (client) {
        client.postMessage({
            "command": "broadcastOnRequest",
            "message": "This is a broadcast on request from the SW"
        });
    })
}

self.addEventListener('message', function (event) {
    var data = event.data;
    if (data.command === "clear_cache") {

    } else if (data.command === "prefetch_cache") {

    }
});