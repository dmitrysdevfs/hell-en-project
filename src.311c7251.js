parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/hero_img/bg/hero-bg__mob.png":[["hero-bg__mob.822ade01.png","X7WS"],"X7WS"],"./../images/hero_img/bg/hero-bg__mob@2x.png":[["hero-bg__mob@2x.3314df78.png","JMQW"],"JMQW"],"./../images/hero_img/bg/hero-bg__tab.png":[["hero-bg__tab.415c03ec.png","dk7A"],"dk7A"],"./../images/hero_img/bg/hero-bg__tab@2x.png":[["hero-bg__tab@2x.7b630ff0.png","eswa"],"eswa"],"./../images/hero_img/bg/hero-bg__desk.png":[["hero-bg__desk.29b74dc1.png","rlyG"],"rlyG"],"./../images/hero_img/bg/hero-bg__desk@2x.png":[["hero-bg__desk@2x.2cb8e6d4.png","eoKJ"],"eoKJ"],"./../images/hero_img/mobile/hero-img.png":[["hero-img.dc59d176.png","DNI9"],"DNI9"],"./../images/hero_img/mobile/hero-img@2x.png":[["hero-img@2x.2937ab73.png","k1NU"],"k1NU"],"./../images/hero_img/tablet/hero-img.png":[["hero-img.f7c2d4c4.png","EJaW"],"EJaW"],"./../images/hero_img/tablet/hero-img@2x.png":[["hero-img@2x.151e1dca.png","JZ1T"],"JZ1T"],"./../images/hero_img/desktop/hero-img.png":[["hero-img.909ce303.png","m0VB"],"m0VB"],"./../images/hero_img/desktop/hero-img@2x.png":[["hero-img@2x.7f1a1f72.png","EZ7J"],"EZ7J"],"./../images/svg/student.svg":[["student.9389c9b9.svg","Q1g2"],"Q1g2"],"./../images/svg/student_big.svg":[["student_big.d345ba94.svg","stxN"],"stxN"],"./../images/svg/study.svg":[["study.4c7f8975.svg","f5EK"],"f5EK"],"./../images/svg/study_big.svg":[["study_big.e489518e.svg","tQVT"],"tQVT"],"./../images/svg/dolar.svg":[["dolar.96a468df.svg","WeVS"],"WeVS"],"./../images/svg/dolar_big.svg":[["dolar_big.830d3659.svg","BcgG"],"BcgG"],"./../images/problems-fire.svg":[["problems-fire.56d32684.svg","V9uk"],"V9uk"],"./../images/galka.svg":[["galka.e72fcc84.svg","ZKn8"],"ZKn8"],"./../images/icon-fire.svg":[["icon-fire.4abf1340.svg","PUcA"],"PUcA"],"./../images/arrow1.svg":[["arrow1.f61da90e.svg","z49O"],"z49O"],"./../images/arrow2.svg":[["arrow2.df20ad7b.svg","lJDN"],"lJDN"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-mob.png":[["contact-bg-img-mob.e393c573.png","YGX6"],"YGX6"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-mob@2x.png":[["contact-bg-img-mob@2x.345e6634.png","UyND"],"UyND"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-tab.png":[["contact-bg-img-tab.26130a5d.png","GgY7"],"GgY7"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-tab@2x.png":[["contact-bg-img-tab@2x.53679378.png","TG10"],"TG10"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img.png":[["contact-bg-img.cd46d1c6.png","zHsq"],"zHsq"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img@2x.png":[["contact-bg-img@2x.edddd338.png","J8tZ"],"J8tZ"]}],"i0CD":[function(require,module,exports) {
(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function n(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n)})();
},{}],"L4bL":[function(require,module,exports) {
$(document).ready(function(){$(".slider").slick({speed:750,infinite:!1,initialSlide:5,waitForAnimate:!1,centerMode:!0,fade:!0,arrows:!0,asNavFor:".slider-pagination"}),$(".slider-pagination").slick({infinite:!0,asNavFor:".slider",slidesToShow:3,centerMode:!0,variableWidth:!0})});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/menu"),require("./js/script");
},{"./sass/main.scss":"clu1","./js/menu":"i0CD","./js/script":"L4bL"}]},{},["Focm"], null)
//# sourceMappingURL=/hell-en-project/src.311c7251.js.map