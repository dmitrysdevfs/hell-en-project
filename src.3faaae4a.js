parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/hero_img/bg/hero-bg__mob.png":[["hero-bg__mob.822ade01.png","X7WS"],"X7WS"],"./../images/hero_img/bg/hero-bg__mob@2x.png":[["hero-bg__mob@2x.3314df78.png","JMQW"],"JMQW"],"./../images/hero_img/bg/hero-bg__tab.png":[["hero-bg__tab.415c03ec.png","dk7A"],"dk7A"],"./../images/hero_img/bg/hero-bg__tab@2x.png":[["hero-bg__tab@2x.7b630ff0.png","eswa"],"eswa"],"./../images/hero_img/bg/hero-bg__desk.png":[["hero-bg__desk.29b74dc1.png","rlyG"],"rlyG"],"./../images/hero_img/bg/hero-bg__desk@2x.png":[["hero-bg__desk@2x.2cb8e6d4.png","eoKJ"],"eoKJ"],"./../images/hero_img/mobile/hero-bg__mob.png":[["hero-bg__mob.904b62ce.png","ZRFJ"],"ZRFJ"],"./../images/hero_img/mobile/hero-img__mob.png":[["hero-img__mob.3401bee0.png","nlyO"],"nlyO"],"./../images/hero_img/mobile/hero-bg__mob@2x.png":[["hero-bg__mob@2x.0d1abbc4.png","IImL"],"IImL"],"./../images/hero_img/mobile/hero-img__mob@2x.png":[["hero-img__mob@2x.db8bc154.png","z1tv"],"z1tv"],"./../images/hero_img/tablet/hero-bg__tab.png":[["hero-bg__tab.c2816199.png","rmDS"],"rmDS"],"./../images/hero_img/tablet/hero-img__tab.png":[["hero-img__tab.1dae7596.png","QqXS"],"QqXS"],"./../images/hero_img/tablet/hero-bg__tab@2x.png":[["hero-bg__tab@2x.b44dee5d.png","wPts"],"wPts"],"./../images/hero_img/tablet/hero-img__tab@2x.png":[["hero-img__tab@2x.01279741.png","odMv"],"odMv"],"./../images/hero_img/desktop/hero-bg__desk.png":[["hero-bg__desk.f4be67b2.png","VI0B"],"VI0B"],"./../images/hero_img/desktop/hero-img__desk.png":[["hero-img__desk.1dae7596.png","ZPqc"],"ZPqc"],"./../images/hero_img/desktop/hero-bg__desk@2x.png":[["hero-bg__desk@2x.47cbf4de.png","V10g"],"V10g"],"./../images/hero_img/desktop/hero-img__desk@2x.png":[["hero-img__desk@2x.01279741.png","Nupw"],"Nupw"],"./../images/svg/student.svg":[["student.9389c9b9.svg","Q1g2"],"Q1g2"],"./../images/galka.svg":[["galka.e72fcc84.svg","ZKn8"],"ZKn8"],"./../images/icon-fire.svg":[["icon-fire.7016eef5.svg","PUcA"],"PUcA"],"./../images/arrow1.svg":[["arrow1.f61da90e.svg","z49O"],"z49O"],"./../images/arrow2.svg":[["arrow2.df20ad7b.svg","lJDN"],"lJDN"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-mob.png":[["contact-bg-img-mob.eff79d62.png","YGX6"],"YGX6"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-mob@2x.png":[["contact-bg-img-mob@2x.8471301e.png","UyND"],"UyND"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-tab.png":[["contact-bg-img-tab.529860fa.png","GgY7"],"GgY7"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img-tab@2x.png":[["contact-bg-img-tab@2x.cf061237.png","TG10"],"TG10"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img.png":[["contact-bg-img.0cc1c4c3.png","zHsq"],"zHsq"],"/home/runner/work/hell-en-project/hell-en-project/src/images/contact-bg-img@2x.png":[["contact-bg-img@2x.977a77b1.png","J8tZ"],"J8tZ"]}],"i0CD":[function(require,module,exports) {

},{}],"L4bL":[function(require,module,exports) {
$(document).ready(function(){$(".slider").slick({speed:750,infinite:!1,initialSlide:5,waitForAnimate:!1,centerMode:!0,fade:!0,arrows:!0,asNavFor:".slider-pagination"}),$(".slider-pagination").slick({infinite:!1,asNavFor:".slider"})});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/menu"),require("./js/script");
},{"./sass/main.scss":"clu1","./js/menu":"i0CD","./js/script":"L4bL"}]},{},["Focm"], null)
//# sourceMappingURL=/hell-en-project/src.3faaae4a.js.map