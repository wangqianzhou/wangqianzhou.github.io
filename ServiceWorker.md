# ServiceWorker
## navigator.serviceworker
~~~
navigator.serviceWorker, [object ServiceWorkerContainer] //navigator.serviceWorker, [object object]
~~~

[Namespace for page-side ServiceWorker API](https://jakearchibald.github.io/isserviceworkerready/demos/navigator.serviceWorker/)


## register/unregister/ready
注册、取消注册，ready测试

~~~
ready, [object Promise]


Registered!, [object ServiceWorkerRegistration]
ready resolved
Unregistered
~~~

[Register for a SW and get a registration instance back, unregister undoes](https://jakearchibald.github.io/isserviceworkerready/demos/registerunregister/)

## postmessage-to-&-from-worker

~~~
Registered!, [object ServiceWorkerRegistration]
Got reply from serviceworker via navigator.serviceWorker, Woop!
~~~

[postMessage](https://jakearchibald.github.io/isserviceworkerready/demos/postMessage/)

## FetchEvent/FetchEvent.request/FetchEvent.respondwith()
~~~
Hello world
~~~

~~~
console.log("SW startup");

this.onfetch = function(event) {
  console.log("Fetch event", event);
  console.log(".request", event.request);
  console.log(".respondWith", event.respondWith);
  console.log(".default", event.default);

  if (event.respondWith) {
    event.respondWith(new Response(new Blob(["Hello <b>world</b>"], {type : 'text/html'}), {
      headers: {"Content-Type": "text/html"}
    }));
  }
};
~~~

[FetchEvent](https://jakearchibald.github.io/isserviceworkerready/demos/fetchevent/)


## InstallEvent/skipWaiting()/ActiveEvent
~~~
Registered!, [object ServiceWorkerRegistration]
~~~

~~~
console.log("SW startup");

this.oninstall = function(event) {
  console.log("Install event", event);
  console.log(".replace", event.replace);
  console.log("self.skipWaiting", self.skipWaiting);

  if (event.waitUntil) {
    console.log("Testing waitUntil:");
    event.waitUntil(new Promise(function(resolve) {
      setTimeout(function() {
        console.log("This should appear before activate");
        resolve();
      }, 3000);
    }));
  }
};

this.onactivate = function(event) {
  console.log("Activate event", event);
  console.log(".waitUntil", event.waitUntil);
};
~~~

[InstallEvent](https://jakearchibald.github.io/isserviceworkerready/demos/installactivate/)

## Clients.claim()
~~~
Page already claimed


From the ServiceWorker:, {"This came from":"The ServiceWorker"}
~~~

~~~
self.onactivate = function() {
  clients.claim();
};

self.onmessage = function(event) {
  if (event.data == 'claim') {
    clients.claim();
  }
};


self.onfetch = function(event) {
  var url = new URL(event.request.url);
  if (url.pathname.endsWith('/404.json')) {
    event.respondWith(
      new Response('{"This came from": "The ServiceWorker"}', {
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
  }
};

~~~
[Clients.claim()](https://jakearchibald.github.io/isserviceworkerready/demos/claim/)

## UpdateCheck
Browser checks for SW updates after navigation. *Not Demo*, [update algorithm](https://w3c.github.io/ServiceWorker/#update-algorithm)

## ServiceWorker LifeCycle
Allow a next version to be in waiting & take over when appropriate.

## Request/Response/Caches
~~~
console.log("SW startup");
console.log("Request", this.Request);
console.log("Response", this.Response);
console.log("fetch", this.fetch);
console.log("Cache", this.Cache);
console.log("caches", this.caches);
console.log("getAll", this.getAll); //undefined
~~~
[Request](https://jakearchibald.github.io/isserviceworkerready/demos/globalapis/)


## Fetch
~~~
console.log("fetch", this.fetch);

if (this.fetch) {
  console.log("Attempting fetch");
  fetch('./').then(function(res) {
    console.log("Response", res);
    return res.text();
  }).then(function(text) {
    console.log("body", text);
  }).catch(function(err) {
    console.error(err);
  }).then(function() {
    console.log("Attempting JSON fetch");
    return fetch('./json.json');
  }).then(function(res) {
    console.log("Response", res);
    return res.json();
  }).then(function(data) {
    console.log("body", data);
  }).catch(function(err) {
    console.error(err);
  }).then(function() {
    console.log("Attempting fetch outside of scope");
    return fetch('/');
  }).then(function(res) {
    console.log("Response", res);
    return res.text();
  }).then(function(text) {
    console.log("body", text);
  }).catch(function(err) {
    console.error(err);
  });
}
~~~
[Fetch](https://jakearchibald.github.io/isserviceworkerready/demos/fetch/)



## Background Sync
[Background Sync](https://jakearchibald.github.io/isserviceworkerready/demos/sync/)

## 性能压力测试
[压力测试链接](https://wangqianzhou.github.io/performance/index.html)


## Links
https://m.douban.com
https://mdn.github.io/sw-test
https://jakearchibald.github.io/isserviceworkerready/demos/navigator.serviceWorker/
https://jakearchibald.github.io/isserviceworkerready/demos/registerunregister/
https://jakearchibald.github.io/isserviceworkerready/demos/postMessage/
https://jakearchibald.github.io/isserviceworkerready/demos/fetchevent/
https://jakearchibald.github.io/isserviceworkerready/demos/installactivate/
https://jakearchibald.github.io/isserviceworkerready/demos/claim/
https://jakearchibald.github.io/isserviceworkerready/demos/globalapis/
https://jakearchibald.github.io/isserviceworkerready/demos/fetch/
https://wangqianzhou.github.io/performance/index.html


https://cartoon.uc.cn/
