(function(t){function e(e){for(var a,o,s=e[0],l=e[1],u=e[2],f=0,p=[];f<s.length;f++)o=s[f],r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3a4d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("CloudsList")],1)},i=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jumbotron header"},[n("h1",{staticClass:"jumbotron-title text-center"},[t._v("Taking Gender Equity to the Streets")]),n("p",{staticClass:"subtitle"},[t._v("Maoxuan Zhu, Dongyi He, Wei Jiang, Kaikang Zhu")])])}],l={name:"Header"},u=l,c=n("2877"),f=Object(c["a"])(u,o,s,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cloud-list"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-10"},[n("div",{staticClass:"tab-content"},[t._l(t.words,function(e,a,r){return t._t("default",[n("cloud",0==r?{staticClass:"tab-pane fade show active",attrs:{data:e,font:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",id:"zip-"+a,fontSizeMapper:t.fontSizeMapper}}:{staticClass:"tab-pane fade",attrs:{data:e,font:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",id:"zip-"+a,fontSizeMapper:t.fontSizeMapper}})])})],2)]),n("div",{staticClass:"col"},[n("div",{staticClass:"list-group",attrs:{id:"zipcodes"}},[t._l(t.words,function(e,a,r){return t._t("default",[n("a",0==r?{staticClass:"list-group-item list-group-item-action active",attrs:{"data-toggle":"list",href:"#zip-"+a}}:{staticClass:"list-group-item list-group-item-action",attrs:{"data-toggle":"list",href:"#zip-"+a}},[t._v(t._s(a))])])})],2)])])])])},v=[],b=(n("a69f"),n("e230")),h=n.n(b),g=n("bc3a"),m=n.n(g),_={name:"CloudsList",created:function(){var t=this;m.a.get("localhost:5000/words").then(function(e){t.words=e.body})},data:function(){return{words:{},fontSizeMapper:function(t){return 5*Math.log2(t.value)}}},compute:{},components:{Cloud:h.a}},w=_,y=(n("b470"),Object(c["a"])(w,d,v,!1,null,null,null)),C=y.exports,j={name:"app",components:{Header:p,CloudsList:C}},O=j,x=(n("7faf"),Object(c["a"])(O,r,i,!1,null,null,null)),M=x.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(M)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var a=n("8fba"),r=n.n(a);r.a},"8fba":function(t,e,n){},b470:function(t,e,n){"use strict";var a=n("3a4d"),r=n.n(a);r.a}});
//# sourceMappingURL=app.c17bdbda.js.map