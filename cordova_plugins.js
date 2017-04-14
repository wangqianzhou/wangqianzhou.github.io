cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "cordova-plugin-service-worker.ServiceWorkerContainer",
        "file": "plugins/cordova-plugin-service-worker/www/service_worker_container.js",
        "pluginId": "cordova-plugin-service-worker",
        "clobbers": [
            "navigator.serviceWorker"
        ]
    },
    {
        "id": "cordova-plugin-service-worker.ServiceWorkerRegistration",
        "file": "plugins/cordova-plugin-service-worker/www/service_worker_registration.js",
        "pluginId": "cordova-plugin-service-worker",
        "clobbers": [
            "ServiceWorkerRegistration"
        ]
    },
    {
        "id": "cordova-plugin-service-worker.ServiceWorker",
        "file": "plugins/cordova-plugin-service-worker/www/service_worker.js",
        "pluginId": "cordova-plugin-service-worker",
        "clobbers": [
            "ServiceWorker"
        ]
    },
    {
        "id": "cordova-plugin-service-worker.kamino.js",
        "file": "plugins/cordova-plugin-service-worker/www/kamino.js",
        "pluginId": "cordova-plugin-service-worker",
        "clobbers": [
            "Kamino"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "es6-promise-plugin": "4.1.0",
    "cordova-plugin-service-worker": "1.0.1"
};
// BOTTOM OF METADATA
});