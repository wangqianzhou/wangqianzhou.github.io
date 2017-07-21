## 基础功能测试

- [检测是否支持navigator.serviceWorker](https://jakearchibald.github.io/isserviceworkerready/demos/navigator.serviceWorker/)


- [Register for a SW and get a registration instance back, unregister undoes](https://jakearchibald.github.io/isserviceworkerready/demos/registerunregister/)

- [FetchEvent/FetchEvent.request/FetchEvent.respondwith()](https://jakearchibald.github.io/isserviceworkerready/demos/fetchevent/)

- [InstallEvent/skipWaiting()/ActiveEvent](https://jakearchibald.github.io/isserviceworkerready/demos/installactivate/)

- [Request/Response/Caches](https://jakearchibald.github.io/isserviceworkerready/demos/globalapis/)

- [Fetch](https://jakearchibald.github.io/isserviceworkerready/demos/fetch/)


## 性能压力测试
- [压力测试链接](https://wangqianzhou.github.io/performance/index.html)

## Google Demos
- [Basic Demo](https://googlechrome.github.io/samples/service-worker/basic/index.html) -
a sample covering a basic, common use case. It precaches a set of local resources in a
versioned cache, and maintains another cache that's populated at runtime as additional
resources are requested.

- [Simple registration](https://googlechrome.github.io/samples/service-worker/registration/index.html) -
a bare-bones sample that simply performs service worker registration, with placeholders for various event handlers.

- [Detailed registration](https://googlechrome.github.io/samples/service-worker/registration-events/index.html) -
a sample that provides detailed information about the service worker registration and the state changes that a
service worker undergoes.

- [Prefetching resources during installation](https://googlechrome.github.io/samples/service-worker/prefetch/index.html) -
a sample demonstrating how to prefetch and cache a list of URLs during the service worker's installation, ensuring that they're
available offline.

- [Selective caching](https://googlechrome.github.io/samples/service-worker/selective-caching/index.html) -
a sample of how a service worker can cache resources "on the fly", assuming the resources meet certain criteria (MIME type,
domain, etc.).

- [Read-through caching](https://googlechrome.github.io/samples/service-worker/read-through-caching/index.html) -
a sample of caching _all_ resources that are requested "on the fly", unconditionally.


- [Fallback responses](https://googlechrome.github.io/samples/service-worker/fallback-response/index.html) -
a sample illustrating how you can return alternative "fallback" content if an initial fetch request fails.

- [Mock responses](https://googlechrome.github.io/samples/service-worker/mock-responses/index.html) -
a sample illustrating how you can return content created on the fly in response to a page's requests.


- [Multiple `fetch` handlers](https://googlechrome.github.io/samples/service-worker/multiple-handlers/index.html) -
a sample illustrating multiple `fetch` handlers, each of which intercepts a different type of request.

- [Custom offline page](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html) -
a sample showing how to display a custom "Sorry, you're offline." error page when a network request fails.

- 以上Google Samples只列出目前支持的部分，[完整的在这里](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/README.md)


## 其它用到ServiceWorker业务的站点
- https://m.douban.com
- https://mdn.github.io/sw-test
- https://cartoon.uc.cn/
- https://m.jd.com
- https://mdianying.baidu.com/
- https://h5.ele.me
- https://h5.ele.me/order/
- https://h5.ele.me/discover/
- https://h5.ele.me/profile/
- https://m.aliexpress.com/
- https://new.o2btc.com/
- https://m.booking.com/
- https://www.youzhan.com/
- https://m.dhgate.com/
- https://m.my188live.com

## W3C Service Worker测试案例
- https://www.w3c-test.org/service-workers/
- https://www.w3c-test.org/fetch/api/
