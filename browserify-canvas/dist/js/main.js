!function e(n,o,t){function r(i,s){if(!o[i]){if(!n[i]){var f="function"==typeof require&&require;if(!s&&f)return f(i,!0);if(u)return u(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var a=o[i]={exports:{}};n[i][0].call(a.exports,function(e){var o=n[i][1][e];return r(o||e)},a,a.exports,e,n,o,t)}return o[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("Meteor"),console.log("111")}},{}],2:[function(e,n,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("Moon"),console.log("22222")}},{}],3:[function(e,n,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("Meteor")}},{}],4:[function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=t(e("./Stars.js")),u=t(e("./Moon.js")),i=t(e("./Meteor.js"));new r.default,new u.default,new i.default},{"./Meteor.js":1,"./Moon.js":2,"./Stars.js":3}]},{},[4]);