if (navigator.serviceWorker) {
    navigator.serviceWorker.register('serviceworker.js', {
    }).then(function(sw) {
        console.log('Service worker succesfully registered.');
        console.log(sw);
    }).catch(function(err) {
        console.error('Service worker registering failed.');
        throw err;
    });
}
