"use strict";var precacheConfig=[["/portfolio/index.html","22c8c6b0915f9595523a8327f8ad7e2d"],["/portfolio/static/css/main.cfa4a9cd.css","9446a551141ce0d431e2ca2faa2adb18"],["/portfolio/static/js/main.96d3c0be.js","70b862a4332f015e6096fd327040ca5b"],["/portfolio/static/media/bkgd-square-pattern.dfd53f60.png","dfd53f60bad7444b39e6f559cfb3ffe0"],["/portfolio/static/media/down-arrow-glow.6296bc16.png","6296bc16378c9e8880c019b213be9cba"],["/portfolio/static/media/down-arrow.f2428cca.png","f2428cca1d9d1682a200d3a3815bb542"],["/portfolio/static/media/redux_logo.2309c5e4.png","2309c5e46334b95c899cb0ea29ac7b81"],["/portfolio/static/media/shot_01.729e4725.jpg","729e4725004a755b0424f34588abcfac"],["/portfolio/static/media/shot_02.e88ccf2e.jpg","e88ccf2e2bb490af149de8f01bd468db"],["/portfolio/static/media/shot_03.c317b06a.jpg","c317b06af64557946d2f0e3ef277cff6"],["/portfolio/static/media/shot_04.23dd2ec4.jpg","23dd2ec46e19895812c9303f8b9ae013"],["/portfolio/static/media/shot_05.f0fab3b9.jpg","f0fab3b954e90c9255ab3ca4463285b9"],["/portfolio/static/media/shot_06.712d451f.jpg","712d451f47264048930c0814f8651fd8"],["/portfolio/static/media/shot_07.c10b2f37.jpg","c10b2f3700ec409cdc3991b7140b61e7"],["/portfolio/static/media/thumb.01f896ad.jpg","01f896adcd6ac70caee0a4eb516d4444"],["/portfolio/static/media/thumb.8ba69df1.jpg","8ba69df19ff5d71964f28d2a2fe04cfa"],["/portfolio/static/media/thumb.c5fdcb02.jpg","c5fdcb02969f711e4c59e1e8d141e871"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});