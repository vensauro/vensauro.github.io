parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NvjX":[function(require,module,exports) {
document.querySelectorAll(".navigationbar__list__item").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),window.setTimeout(function(){document.querySelector(e.attributes.href.value).scrollIntoView({behavior:"smooth"})},450),document.querySelector(".navigationbar__pokeball").animate([{transform:"rotate(0)"},{transform:"rotate(360deg) "}],{duration:400,easing:"ease-in-out"})})}),fetch("https://pokeapi.co/api/v2/pokemon/".concat(Math.floor(807*Math.random()))).then(function(e){return e.json()}).then(function(e){var t=document.createElement("div");t.classList.add(".navigationbar__pokemon__name"),t.innerText=e.name;var n=document.createElement("img");n.classList.add(".navigationbar__pokemon__sprite"),n.src=e.sprites.front_default,n.addEventListener("mouseenter",function(t){n.src=e.sprites.back_default||e.sprites.front_default}),n.addEventListener("mouseleave",function(t){n.src=e.sprites.front_default}),document.querySelector(".navigationbar__pokemon").appendChild(n),document.querySelector(".navigationbar__pokemon").appendChild(t)});
},{}]},{},["NvjX"], null)
//# sourceMappingURL=/js.d3d63403.js.map