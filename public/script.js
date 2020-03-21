(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";(function(){var a=document.querySelector(".copy__button"),b=document.querySelector(".clipboard__el");b.value!==window.location.href&&(b.value=window.location.href),navigator.clipboard?(console.log("Support du presse papier"),a.addEventListener("click",function(){navigator.clipboard.writeText(b.getAttribute("data-clipboard")).then(function(){console.log("Copi\xE9 !"),a.innerHTML="Copi\xE9 !",setTimeout(function(){return a.innerHTML="Copier"},2e3)})["catch"](function(a){return console.warn(a)})})):(console.warn("Pas de support"),a.style.display="none")})();

},{}],2:[function(require,module,exports){
"use strict";var socket=io(window.location.pathname);socket.on("updatItems",function(){console.log("new Items"),location.reload()});

},{}],3:[function(require,module,exports){
"use strict";(function(){var a=document.querySelector(".share__button");navigator.share||(a.style.display="none")})();

},{}]},{},[1,2,3]);
