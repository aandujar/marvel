(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-ca408d74":"d15bc196","chunk-2d21e3f4":"7fe5b59d","chunk-2d22c862":"137fab23","chunk-d1c1253a":"16aea4da","chunk-e6ccf326":"cc0f4b46","chunk-214e9444":"513b5249","chunk-6e9ede8b":"754ccf0b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-ca408d74":1,"chunk-d1c1253a":1,"chunk-214e9444":1,"chunk-6e9ede8b":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-ca408d74":"4cbb86d2","chunk-2d21e3f4":"31d6cfe0","chunk-2d22c862":"31d6cfe0","chunk-d1c1253a":"b8bd31aa","chunk-e6ccf326":"31d6cfe0","chunk-214e9444":"e3492e52","chunk-6e9ede8b":"bd231ecf"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/marvel/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03e5":function(e,t,n){},"08f9":function(e,t,n){"use strict";n("03e5")},"1ab4":function(e,t,n){"use strict";n("bd11")},"26ef":function(e,t,n){"use strict";n("5aa7")},"2fc3":function(e,t,n){"use strict";n("aece")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getImg",(function(){return he}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={id:"app"};function a(e,t,n,r,a,i){var u=Object(o["F"])("Loader"),s=Object(o["F"])("Toolbar"),l=Object(o["F"])("Footer"),d=Object(o["F"])("router-view"),f=Object(o["F"])("Notification");return Object(o["x"])(),Object(o["g"])("div",c,[r.showLoader?(Object(o["x"])(),Object(o["e"])(u,{key:0})):Object(o["f"])("",!0),Object(o["N"])(Object(o["j"])(s,null,null,512),[[o["K"],r.isInContent]]),Object(o["N"])(Object(o["j"])(l,null,null,512),[[o["K"],r.isInContent]]),Object(o["j"])(d,{class:Object(o["p"])(["content",{"content--padding":r.isInContent,"content--no-padding":!r.isInContent}])},null,8,["class"]),Object(o["j"])(f)])}var i=function(e){return Object(o["A"])("data-v-3f6803e7"),e=e(),Object(o["y"])(),e},u={class:"loader"},s=i((function(){return Object(o["h"])("div",{class:"loader__spinner"},null,-1)})),l=[s];function d(e,t,n,r,c,a){return Object(o["x"])(),Object(o["g"])("div",u,l)}var f={name:"Loader"},h=(n("1ab4"),n("d959")),b=n.n(h);const p=b()(f,[["render",d],["__scopeId","data-v-3f6803e7"]]);var m=p,O={class:"notification",id:"notification"};function v(e,t,n,r,c,a){return Object(o["x"])(),Object(o["g"])("div",O,Object(o["H"])(r.message),1)}var T={name:"Notification",setup:function(){var e=Object(o["C"])(null);return Object(o["v"])((function(){var t=Object(o["n"])("emitter");t.on("notification",(function(t){e.value="string"===typeof t?t:"Ha ocurrido un error",document.getElementById("notification").classList.remove("notification--hidded"),document.getElementById("notification").classList.add("notification--shown"),setTimeout((function(){document.getElementById("notification").classList.remove("notification--shown"),document.getElementById("notification").classList.add("notification--hidded"),setTimeout((function(){return e.value=null}),1e3)}),6e3)}))})),{message:e}}};n("26ef");const E=b()(T,[["render",v],["__scopeId","data-v-6c096c19"]]);var g=E,j={class:"toolbar__content"};function S(e,t,n,r,c,a){var i=Object(o["F"])("Icon"),u=Object(o["F"])("ToolbarItem");return Object(o["x"])(),Object(o["g"])("div",{class:Object(o["p"])(["toolbar",{"toolbar--shown":r.showToolbar,"toolbar--hided":!r.showToolbar}])},[Object(o["N"])(Object(o["j"])(i,{icon:"arrowLeft",onClick:r.hide,class:"toolbar__icon",height:"40px",width:"40px",stroke:"white",strokeWidth:2},null,8,["onClick"]),[[o["K"],r.showToolbar]]),Object(o["N"])(Object(o["j"])(i,{icon:"arrowRight",onClick:r.show,class:"toolbar__icon",height:"40px",width:"40px",stroke:"white",strokeWidth:2},null,8,["onClick"]),[[o["K"],!r.showToolbar]]),Object(o["h"])("div",j,[Object(o["j"])(u,{type:"home",showToolbar:r.showToolbar,onClick:t[0]||(t[0]=function(e){return r.goTo("")})},null,8,["showToolbar"]),Object(o["j"])(u,{type:"characters",showToolbar:r.showToolbar,onClick:t[1]||(t[1]=function(e){return r.goTo("characters")})},null,8,["showToolbar"]),Object(o["j"])(u,{type:"series",showToolbar:r.showToolbar,onClick:t[2]||(t[2]=function(e){return r.goTo("series")})},null,8,["showToolbar"])])],2)}var _=n("cdae");function y(e,t,n,r,c,a){var i=Object(o["F"])("Icon");return Object(o["x"])(),Object(o["g"])("div",{class:"toolbar-item",onMouseenter:t[0]||(t[0]=function(e){return r.setColour("black")}),onMouseleave:t[1]||(t[1]=function(e){return r.setColour("white")})},[Object(o["j"])(i,{icon:n.type,class:"toolbar-item__icon",stroke:r.colour,strokeWidth:4},null,8,["icon","stroke"]),Object(o["h"])("div",{class:Object(o["p"])(["toolbar-item__text",{"toolbar-item__text--shown":n.showToolbar,"toolbar-item__text--hided":!n.showToolbar}]),style:Object(o["q"])("color:".concat(r.colour))},Object(o["H"])(r.title),7)],32)}var k={name:"ToolbarItem",components:{Icon:_["a"]},props:{type:{type:String,required:!0},showToolbar:{type:Boolean,required:!0}},setup:function(e){var t=Object(o["C"])("white");function n(e){t.value=e}var r=Object(o["c"])((function(){var t="";switch(e.type){case"characters":t="Personajes";break;case"series":t="Series";break;default:t="Inicio";break}return t}));return{colour:t,title:r,setColour:n}}};n("08f9");const I=b()(k,[["render",y],["__scopeId","data-v-c6440c54"]]);var w=I,C=n("6c02"),L={name:"Toolbar",components:{Icon:_["a"],ToolbarItem:w},setup:function(){var e=Object(C["c"])(),t=Object(o["C"])(!1);function n(){t.value=!1}function r(){t.value=!0}function c(t){e.push("/".concat(t))}return{showToolbar:t,hide:n,show:r,goTo:c}}};n("2fc3");const A=b()(L,[["render",S],["__scopeId","data-v-abc70806"]]);var x=A,N=function(e){return Object(o["A"])("data-v-12bc776e"),e=e(),Object(o["y"])(),e},D={class:"footer"},P=N((function(){return Object(o["h"])("div",null,"Datos proporcionados por Marvel.",-1)})),R=N((function(){return Object(o["h"])("div",null,"© 2014 Marvel",-1)})),B=[P,R];function G(e,t){return Object(o["x"])(),Object(o["g"])("div",D,B)}n("dc2a");const q={},M=b()(q,[["render",G],["__scopeId","data-v-12bc776e"]]);var F=M,$=n("5502"),H={name:"App",components:{Loader:m,Notification:g,Toolbar:x,Footer:F},setup:function(){var e=Object($["b"])(),t=Object(C["c"])(),n=Object(o["c"])((function(){var t=e.state.characters.loading,n=e.state.series.loading;return t||n})),r=Object(o["c"])((function(){return"/"!==t.currentRoute.value.path}));return{showLoader:n,isInContent:r}}};n("c12f");const W=b()(H,[["render",a],["__scopeId","data-v-7a8c3ee4"]]);var K=W,U=(n("d3b7"),n("3ca3"),n("ddb0"),[{path:"/",name:"Index",component:function(){return n.e("chunk-d1c1253a").then(n.bind(null,"cd56"))}},{path:"/characters",name:"Characters",component:function(){return Promise.all([n.e("chunk-ca408d74"),n.e("chunk-2d21e3f4")]).then(n.bind(null,"d56c"))}},{path:"/characters/:id",name:"Character",component:function(){return Promise.all([n.e("chunk-e6ccf326"),n.e("chunk-6e9ede8b")]).then(n.bind(null,"ecbd"))}},{path:"/series",name:"Series",component:function(){return Promise.all([n.e("chunk-ca408d74"),n.e("chunk-2d22c862")]).then(n.bind(null,"f431"))}},{path:"/series/:id",name:"Serie",component:function(){return Promise.all([n.e("chunk-e6ccf326"),n.e("chunk-214e9444")]).then(n.bind(null,"aa12"))}}]),J=Object(C["a"])({history:Object(C["b"])("/marvel/"),routes:U}),z=J,Q=n("d4ec"),V=n("bee2"),X=n("bc3a"),Y=n.n(X),Z=n("8237"),ee=n.n(Z),te=Y.a.create({baseURL:"https://gateway.marvel.com/v1/public"});te.interceptors.request.use((function(e){Object.prototype.hasOwnProperty.call(e,"params")||(e["params"]={}),e.params["apikey"]="cbceedc9a5f1d014ca941a372440ce6a";var t=ee()("".concat((new Date).getTime(),"8749f020b439697e909eec404da7e3faf1c62aee"));return e.params["hash"]=t,e}));var ne={$axios:te};Y.a.interceptors.request.use((function(e){Object.prototype.hasOwnProperty.call(e,"params")||(e["params"]={}),e.params["apikey"]="cbceedc9a5f1d014ca941a372440ce6a";var t=ee()("".concat((new Date).getTime(),"8749f020b439697e909eec404da7e3faf1c62aee"));return e.params["hash"]=t,e}));var re={$axios:Y.a},oe=function(){function e(){Object(Q["a"])(this,e)}return Object(V["a"])(e,[{key:"getCharacters",value:function(e){return ne.$axios({url:"/characters",method:"GET",params:e})}},{key:"getCharacterById",value:function(e){return ne.$axios({url:"/characters/".concat(e),method:"GET"})}},{key:"getSpecialEndpoint",value:function(e){return re.$axios.get(e)}}]),e}(),ce=new oe,ae={namespaced:!0,state:{listData:[],characterSelected:{},totalElements:0,loading:!1,comics:[],filters:null},mutations:{SET_LIST_DATA:function(e,t){e.listData=t},SET_CHARACTER_SELECTED:function(e,t){e.characterSelected=t},SET_CURRENT_POSITION:function(e,t){e.currentPosition=t},SET_TOTAL_ELEMENTS:function(e,t){e.totalElements=t},SET_LOADING:function(e,t){e.loading=t},SET_COMICS:function(e,t){e.comics=t},SET_FILTERS:function(e,t){e.filters=Object.assign({},t)}},actions:{getListData:function(e,t){var n=e.commit;return n("SET_LOADING",!0),new Promise((function(e,r){ce.getCharacters(t).then((function(t){n("SET_LIST_DATA",200===t.status?t.data.data.results:[]),n("SET_TOTAL_ELEMENTS",200===t.status?t.data.data.total:[]),n("SET_LOADING",!1),e(t)})).catch((function(e){n("SET_LOADING",!1),r(e)}))}))},getCharacterById:function(e,t){var n=e.commit;return n("SET_LOADING",!0),new Promise((function(e,r){ce.getCharacterById(t).then((function(t){n("SET_CHARACTER_SELECTED",200===t.status?t.data.data.results[0]:{}),n("SET_LOADING",!1),e(t)})).catch((function(e){n("SET_LOADING",!1),r(e)}))}))},getSpecialEndpoint:function(e,t){var n=e.commit;return n("SET_LOADING",!0),new Promise((function(e,r){ce.getSpecialEndpoint(t).then((function(t){n("SET_COMICS",200===t.status?t.data.data.results:[]),n("SET_LOADING",!1),e(t)})).catch((function(e){n("SET_LOADING",!1),r(e)}))}))}}},ie=function(){function e(){Object(Q["a"])(this,e)}return Object(V["a"])(e,[{key:"getSeries",value:function(e){return ne.$axios({url:"/series",method:"GET",params:e})}},{key:"getSerieById",value:function(e){return ne.$axios({url:"/series/".concat(e),method:"GET"})}},{key:"getSerieCharactersById",value:function(e){return ne.$axios({url:"/series/".concat(e,"/characters"),method:"GET"})}},{key:"getSerieCreatorsById",value:function(e){return ne.$axios({url:"/series/".concat(e,"/creators"),method:"GET"})}}]),e}(),ue=new ie,se={namespaced:!0,state:{listData:[],serieSelected:{},serieCharacters:[],serieCreators:[],totalElements:0,loading:!1,comics:[],filters:null},mutations:{SET_LIST_DATA:function(e,t){e.listData=t},SET_SERIE_SELECTED:function(e,t){e.serieSelected=t},SET_SERIE_CHARACTERS:function(e,t){e.serieCharacters=t},SET_SERIE_CREATORS:function(e,t){e.serieCreators=t},SET_CURRENT_POSITION:function(e,t){e.currentPosition=t},SET_TOTAL_ELEMENTS:function(e,t){e.totalElements=t},SET_LOADING:function(e,t){e.loading=t},SET_FILTERS:function(e,t){e.filters=Object.assign({},t)}},actions:{getListData:function(e,t){var n=e.commit;return n("SET_LOADING",!0),new Promise((function(e,r){ue.getSeries(t).then((function(t){n("SET_LIST_DATA",200===t.status?t.data.data.results:[]),n("SET_TOTAL_ELEMENTS",200===t.status?t.data.data.total:[]),n("SET_LOADING",!1),e(t)})).catch((function(e){n("SET_LOADING",!1),r(e)}))}))},getSerieById:function(e,t){var n=e.commit;return new Promise((function(e,r){ue.getSerieById(t).then((function(t){n("SET_SERIE_SELECTED",200===t.status?t.data.data.results[0]:{}),e(t)})).catch((function(e){r(e)}))}))},getSerieCharactersById:function(e,t){var n=e.commit;return new Promise((function(e,r){ue.getSerieCharactersById(t).then((function(t){n("SET_SERIE_CHARACTERS",200===t.status?t.data.data.results:[]),e(t)})).catch((function(e){r(e)}))}))},getSerieCreatorsById:function(e,t){var n=e.commit;return new Promise((function(e,r){ue.getSerieCreatorsById(t).then((function(t){n("SET_SERIE_CREATORS",200===t.status?t.data.data.results:[]),e(t)})).catch((function(e){r(e)}))}))}}},le=Object($["a"])({modules:{characters:ae,series:se}}),de=le,fe=n("1344");n("99af");function he(e){return e.thumbnail?"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension):""}var be=Object(fe["a"])(),pe=Object(o["d"])(K);pe.config.globalProperties.$functions=r,pe.use(de).use(z).provide("emitter",be).mount("#app")},"57c9":function(e,t,n){},"5aa7":function(e,t,n){},a5e1:function(e,t,n){"use strict";n("e1dc")},aece:function(e,t,n){},bd11:function(e,t,n){},c12f:function(e,t,n){"use strict";n("cbf0")},cbf0:function(e,t,n){},cdae:function(e,t,n){"use strict";var r=n("7a23"),o=["xlink:href"];function c(e,t,c,a,i,u){return Object(r["x"])(),Object(r["g"])("svg",{class:"svg",style:Object(r["q"])(a.getStyle)},[Object(r["h"])("use",{"xlink:href":n("d4d3")+"#".concat(c.icon)},null,8,o)],4)}n("a9e3"),n("cb29");var a={name:"Toolbar",props:{icon:{type:String,required:!0},height:{type:String,required:!1,default:"30px"},width:{type:String,required:!1,default:"30px"},fill:{type:String,required:!1,default:"none"},stroke:{type:String,required:!1,default:"#202020"},strokeWidth:{type:Number,required:!1,default:2}},setup:function(e){var t=Object(r["c"])((function(){return{height:e.height,width:e.width,fill:e.fill,stroke:e.stroke,color:e.stroke,strokeWidth:e.strokeWidth}}));return{getStyle:t}}},i=(n("a5e1"),n("d959")),u=n.n(i);const s=u()(a,[["render",c],["__scopeId","data-v-844b5a84"]]);t["a"]=s},d4d3:function(e,t,n){e.exports=n.p+"img/icons.f5c936df.svg"},dc2a:function(e,t,n){"use strict";n("57c9")},e1dc:function(e,t,n){}});
//# sourceMappingURL=app.8f02ad53.js.map