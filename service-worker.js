/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "33097bb5446bf15789919f5feb5378a9"
  },
  {
    "url": "assets/css/0.styles.fe22244e.css",
    "revision": "d66612d119163956add22d20fa9a10da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aeb21020.js",
    "revision": "454fee949909fb68d491482524d18df7"
  },
  {
    "url": "assets/js/3.4faf14b0.js",
    "revision": "b8329db41c97f2c64fa46e76c9c43964"
  },
  {
    "url": "assets/js/4.c413163b.js",
    "revision": "fc043fbe4f33fee8d6dc9f969263ed2f"
  },
  {
    "url": "assets/js/5.e0ee18d4.js",
    "revision": "b38c74ae155724a517407fd8a20e9927"
  },
  {
    "url": "assets/js/6.0bde997c.js",
    "revision": "ac1709cdf653bd6077536ad6092d1504"
  },
  {
    "url": "assets/js/7.6dd7a7b9.js",
    "revision": "702b27e424c5d1204cc3ec7ebc9317fa"
  },
  {
    "url": "assets/js/8.d47dc876.js",
    "revision": "6cea565e117cb0f2b84ed80d3d6a6ac8"
  },
  {
    "url": "assets/js/9.f17b1dc9.js",
    "revision": "99e69f705158fc642dce9b5d531ace5d"
  },
  {
    "url": "assets/js/app.065e117a.js",
    "revision": "54b0074b15357524c7798af33ad7297c"
  },
  {
    "url": "assets/js/vendors~docsearch.f0c01e70.js",
    "revision": "c9f1c01bb01a7fed2764a1155de27eb6"
  },
  {
    "url": "categories/css.html",
    "revision": "fa08e33097c611ee2c31266f786dcd92"
  },
  {
    "url": "categories/es6.html",
    "revision": "dabe34fed19aae1d47724d31b548968a"
  },
  {
    "url": "categories/javascript.html",
    "revision": "f46595307c9dcc95bab0ef38dc75741e"
  },
  {
    "url": "categories/vue.html",
    "revision": "d02a72a2b18aeced7437ac13786ccdbc"
  },
  {
    "url": "index.html",
    "revision": "f393bdb1643d4f57e8933447e8daf0fc"
  },
  {
    "url": "tags/index.html",
    "revision": "1121273f37a01a24280e0a688eb3a69f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
