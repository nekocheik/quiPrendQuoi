(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";// Register your service worker:
navigator.serviceWorker.register("/sw.js"),navigator.serviceWorker.ready.then(function(a){a.periodicSync.register({tag:"get-latest-news",// default: ''
minPeriod:43200000,// default: 0
powerState:"avoid-draining",// default: 'auto'
networkState:"avoid-cellular"// default: 'online'
}).then(function(){// success
},function(){// failure
})}),self.addEventListener("sync",function(a){"myFirstSync"==a.tag&&a.waitUntil(doSomeStuff())});

},{}],2:[function(require,module,exports){
"use strict";(function(){var a=document.querySelector(".copy__button"),b=document.querySelector(".clipboard__el");b&&a&&(b.value!==window.location.href&&(b.value=window.location.href),console.log(b,a),navigator.clipboard?(console.log("Support du presse papier"),a.addEventListener("click",function(){navigator.clipboard.writeText(b.getAttribute("data-clipboard")).then(function(){console.log("Copi\xE9 !"),a.innerHTML="Copi\xE9 !",setTimeout(function(){return a.innerHTML="Copier"},2e3)})["catch"](function(a){return console.warn(a)})})):(console.warn("Pas de support"),a.style.display="none"))})();

},{}],3:[function(require,module,exports){
"use strict";(function(){window.addEventListener("load",function(){var a=io(window.location.pathname);a.on("updatItems",function(){new Notification("Un nouvelle objet a \xE9t\xE9 ajout\xE9"),location.reload()}),"denied"!==Notification.permission&&Notification.requestPermission(function(a){// Si l'utilisateur est OK, on crée une notification
if("permission"in Notification||(Notification.permission=a),console.log(localStorage.getItem("firstNotification")),"granted"===a&&"yes"!==localStorage.getItem("firstNotification")){new Notification("Les notification sont maintenant activ\xE9 \uD83D\uDE03");localStorage.setItem("firstNotification","yes")}})})})();

},{}],4:[function(require,module,exports){
"use strict";(function(){"undefined"!=typeof party&&(console.log(party),localStorage.setItem(location.href,party.name))})();

},{}],5:[function(require,module,exports){
"use strict";(function(){var a=document.querySelector(".share__button");a&&(navigator.share?navigator.share({title:document.title,text:"Hello World",url:window.location.href}):a.style.display="none")})();

},{}]},{},[1,2,3,4,5]);
