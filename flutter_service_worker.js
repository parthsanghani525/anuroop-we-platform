'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e7d581d94e169b8166dddee4785e062c",
"index.html": "63286d575e6cea5d51954b8b40458de9",
"/": "63286d575e6cea5d51954b8b40458de9",
"main.dart.js": "891c4ca1a225f7c8aa1839d98d8f1869",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f37e4b47733e7f4732e4d91c22fdd3d8",
"assets/AssetManifest.json": "b172af4d53a9ca74ef6f948a2789b0e1",
"assets/NOTICES": "56598d689438719272ff7b20ad1daa83",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/place-holder-female.png": "ccb4b8bf8b63efbfe8fcfcdfcb2e96cd",
"assets/assets/images/ic_basic_star.png": "508140a4277d3feb3770d8f09e21e49f",
"assets/assets/images/ic_blocked_list.png": "99b8416b011217f5d48502b63b2f0241",
"assets/assets/images/login_bg.png": "cda0c5da16646f90fa37c7b2b610adc5",
"assets/assets/images/place-holder-male.png": "f57324819ab7e76f02a6c6b8857e722a",
"assets/assets/images/Tick-purple@2.5x.png": "8e7af492b9120a217d5df82889a18f89",
"assets/assets/images/single-tick-grey.png": "3dc5dace35075c42f1f7fdf428095e19",
"assets/assets/images/genericErrorPopup.png": "4c21b41c6f93692ae06a609ee1e20dec",
"assets/assets/images/ic_action_favorite.png": "e55e554a016b038f29f75d7250a8642f",
"assets/assets/images/verified_number_small.png": "742e9393361c70ed7b6699695b4bf60d",
"assets/assets/images/Tick-green@2.5x.png": "94542af93d3d59f18a90976ba4b3af0d",
"assets/assets/images/premium_reg_header.png": "20efa33f5697f77d7f732de21997d91b",
"assets/assets/images/premium_plus_reg_header.png": "a9369ca4eee2f490793b2fe45ac04c2d",
"assets/assets/images/tab-5-outline.png": "f755f7d1bc2f246bd3a6d20f78f47178",
"assets/assets/images/premium_plus.png": "92032e310050f938917c3743df28c7f1",
"assets/assets/images/double-tick-blue.png": "96dfb7b3c0eaf2c98bd9ce6588d4b2fa",
"assets/assets/images/sort_filter.png": "7589983c994f5316c6ff5e7ad7dca7f9",
"assets/assets/images/read3x.png": "85b301dda7dc15fc237ece23cef7016c",
"assets/assets/images/locked.png": "3cc3ab9e01d6e007a7db43620eb489ab",
"assets/assets/images/location_matches.png": "597f10312cced1c2c3a290ceee8de90c",
"assets/assets/images/tab-2-outline.png": "41028022db0ca3cba09bccf93c9b54c7",
"assets/assets/images/help.png": "6cf68554050033c64b41fc77a646b0d5",
"assets/assets/images/ic_action_visibility.png": "44753ab77ec2db1fd76a9008f838c323",
"assets/assets/images/double-tick-grey.png": "6bfcb0efce5b44d4830b65dd487487a9",
"assets/assets/images/logo.png": "bf5f5f4c6c01a5b3720baf713d549df8",
"assets/assets/images/sent3x.png": "68bac9ae85ad62a34b6a362f65773efb",
"assets/assets/images/Under-verification.png": "38683e56df59fb98b341af0200d9b280",
"assets/assets/images/Group-11@3x.png": "c70689533462079d17586ba7288baf9e",
"assets/assets/images/header_web.jpg": "9e4c17151006afa7fa6413ad9d3a3b8b",
"assets/assets/images/ic_age.png": "a0708581ebe0cdc5733a4b557f3d8b86",
"assets/assets/images/gradient_patch.png": "65f21777fc3f7eb45652f6a43ef02b68",
"assets/assets/images/ic_calender.png": "74e53316f02fc08879a85011528113c9",
"assets/assets/images/seperationProof.png": "2a90d2b5458984ff6cd25659296fe0c3",
"assets/assets/images/discover_matches.png": "359cb1ae8403f2967cfe0b21d10092fe",
"assets/assets/images/ic_common_diet.svg": "3a782dbfed0d3d7cc116b4ece16a2310",
"assets/assets/images/Upload-File@3x.png": "ea21b03047db5e7f03af17cd67a46fe7",
"assets/assets/images/login_top_logo.png": "4afccd7f90c935a16efd25c112189230",
"assets/assets/images/divorceproof.png": "f612d322d32984f737b0e5f39b97ebc4",
"assets/assets/images/flower_bg.png": "9a9ada6bf47086f2b07406aeda66e7e9",
"assets/assets/images/tab-2-filled.png": "f4df73913f836ebdb8152fc19f270916",
"assets/assets/images/premium.png": "dee294542573191cf248b6b03b9367f1",
"assets/assets/images/login%2520bg.png": "cda0c5da16646f90fa37c7b2b610adc5",
"assets/assets/images/send.png": "cba1f8db0013eab3447e9da6e7f412ff",
"assets/assets/images/message.png": "20daf0ef50710551238eeecb6394b810",
"assets/assets/images/Delivered@3x.png": "7c34b4f43001dad959cd6d5a54127616",
"assets/assets/images/message-white@3x.png": "4564dfcd5c981d8018f592ca59f34461",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
