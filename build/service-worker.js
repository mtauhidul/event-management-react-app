"use strict";var precacheConfig=[["/index.html","b0976a561b0d64abb3b81535c24fb81e"],["/static/css/main.1e6b54b1.css","1689959cc24c49d70a14179fa98976bc"],["/static/js/main.a685f7b8.js","7df62537f7726efd489a43c3b1650878"],["/static/media/FURNITURE.1752ba51.jpg","1752ba51f1eb26b3f2411401c4cea6b3"],["/static/media/background-image.78ff36c2.jpg","78ff36c26333af1c1cd6f2391cdbe955"],["/static/media/bluster.2f916720.jpg","2f916720253d3fd14992faa6f548afda"],["/static/media/canoon.c13db585.jpg","c13db58573c3f6269a65c22e27b3f63f"],["/static/media/chair_table.d9704594.jpg","d97045947d03ae0b173af680bc9e6554"],["/static/media/contactBg.eb6704a6.jpg","eb6704a629482adac4f7de618ecb49ff"],["/static/media/dj-service.66b6b8d7.jpg","66b6b8d7ad71e0d34035c18365001c05"],["/static/media/event.98775bf8.jpg","98775bf80a5a1f9215b2b8414e66aa20"],["/static/media/furniture_img_three.347327c4.jpg","347327c4c31f126dbff27c5385521116"],["/static/media/furniture_img_two.0e102d4e.jpg","0e102d4e537e6f8e5d74f7bb51eb63f5"],["/static/media/img_chair_five.db2f19bd.png","db2f19bd32a9f25b20ad838e178759be"],["/static/media/img_chair_four.6655f18b.png","6655f18b53d971ae2a6d628d42771ead"],["/static/media/img_chair_one.7e6bf0a8.png","7e6bf0a8129ddcdd8b33b04912e8a4fe"],["/static/media/img_chair_six.d991f594.png","d991f59447f564c18a3e89f449138dd6"],["/static/media/img_chair_three.8e41775d.png","8e41775d6652de9523e89f6cdf22d1ff"],["/static/media/img_chair_two.0fb34eb9.png","0fb34eb9c2b1803365da7c28b293aee6"],["/static/media/led_dance.a52e1299.jpg","a52e129956c4de87e6a27e5d3e18cbd0"],["/static/media/led_fox.0f8bb741.jpg","0f8bb741ef1f123753513bdd6df2c06a"],["/static/media/led_rentals_four.a90a50d1.jpeg","a90a50d179b2ea8531b2baf2b037cb70"],["/static/media/led_rentals_one.18f727e3.jpg","18f727e3ed94f617e22ed1e18cbe71c0"],["/static/media/led_rentals_three.505cf9bd.jpg","505cf9bda8c9165db6e5d2cfb5bef5c5"],["/static/media/led_rentals_two.564671a2.jpg","564671a2c709e53615a247fe775a3727"],["/static/media/mitzvah.7a75a4be.jpg","7a75a4be2dbece5dbd5b246e328af1ee"],["/static/media/rentals.ccb35563.jpg","ccb355633dd14dc947e4c65a90cdd114"],["/static/media/sweet.6a907152.jpg","6a90715212e9db8b5c4182a1e50fe4a4"],["/static/media/weeding.4634bd73.jpg","4634bd73abd11c9c41febfdaf4085fec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});