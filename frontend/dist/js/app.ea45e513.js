(function(e){function t(t){for(var o,c,u=t[0],d=t[1],i=t[2],l=0,s=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);f&&f(t);while(s.length)s.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-10dcea08":"a5875fda","chunk-2d22c6cf":"b2479b9e","chunk-369fc9c2":"16ad7041","chunk-6b070f8d":"5a326a1a","chunk-10338758":"02887c75","chunk-3b25691e":"73307fc5","chunk-c11d520e":"c13cc9cf","chunk-2376a075":"6f7ceeaa","chunk-4cc3d9bf":"d0ec4403","chunk-2d0e95df":"327879ed","chunk-6871f2d2":"769cfc3e"}[e]+".js"}function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-10338758":1,"chunk-3b25691e":1,"chunk-c11d520e":1,"chunk-2376a075":1,"chunk-4cc3d9bf":1,"chunk-6871f2d2":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-10dcea08":"31d6cfe0","chunk-2d22c6cf":"31d6cfe0","chunk-369fc9c2":"31d6cfe0","chunk-6b070f8d":"31d6cfe0","chunk-10338758":"34747a82","chunk-3b25691e":"5d57f9ce","chunk-c11d520e":"293b3c59","chunk-2376a075":"c4b92a4e","chunk-4cc3d9bf":"807709ba","chunk-2d0e95df":"31d6cfe0","chunk-6871f2d2":"15bc6098"}[e]+".css",r=d.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===r))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],l=i.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],f.parentNode.removeChild(f),n(a)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=u(e);var s=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o,c=n("5530"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],d=(n("b107"),{created:function(){var e=this;window.addEventListener("swRegistered",(function(t){console.log(t),e.$store.dispatch("updateServiceWorker",t.detail.registration)})),window.addEventListener("swUpdateAvailable",(function(e){e.detail.worker.postMessage({type:"SKIP_WAITING"})}))}}),i=d,l=n("2877"),s=Object(l["a"])(i,a,u,!1,null,null,null),f=s.exports,p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(e){console.log("Service worker has been registered."),window.dispatchEvent(new CustomEvent("swRegistered",{detail:{registration:e}}))},cached:function(e){console.log("Content has been cached for offline use."),window.dispatchEvent(new CustomEvent("swRegistered",{detail:{registration:e}}))},updatefound:function(){console.log("New update is downloading.")},updated:function(e){window.dispatchEvent(new CustomEvent("swUpdateAvailable",{detail:{worker:e.waiting}}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",(function(){console.log("Activating new version"),o||(window.location.reload(),o=!0)}));n("d3b7"),n("3ca3"),n("ddb0");var h=n("8c4f");r["default"].use(h["a"]);var m=[{path:"",component:function(){return Promise.all([n.e("chunk-10dcea08"),n.e("chunk-2d22c6cf"),n.e("chunk-369fc9c2")]).then(n.bind(null,"8e31"))},children:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-6b070f8d"),n.e("chunk-6871f2d2")]).then(n.bind(null,"bb51"))}},{path:"/dashboard/:product_uid/:product_token",name:"seller-dashboard",component:function(){return Promise.all([n.e("chunk-10dcea08"),n.e("chunk-6b070f8d"),n.e("chunk-2d22c6cf"),n.e("chunk-3b25691e")]).then(n.bind(null,"11ab"))},meta:{layout:{cols:{md:12}},header:"sub"}},{path:"/product/:product_uid",name:"product",component:function(){return Promise.all([n.e("chunk-10dcea08"),n.e("chunk-6b070f8d"),n.e("chunk-2d22c6cf"),n.e("chunk-c11d520e"),n.e("chunk-2376a075")]).then(n.bind(null,"d2f1"))},meta:{header:"sub"}},{path:"/checkout/:order_uid",name:"checkout",component:function(){return Promise.all([n.e("chunk-10dcea08"),n.e("chunk-6b070f8d"),n.e("chunk-10338758")]).then(n.bind(null,"7cb4"))},meta:{layout:{cols:{md:7}},header:"sub"}},{path:"/order/:order_uid",name:"order",component:function(){return Promise.all([n.e("chunk-10dcea08"),n.e("chunk-6b070f8d"),n.e("chunk-c11d520e"),n.e("chunk-4cc3d9bf")]).then(n.bind(null,"cf2a"))},meta:{header:"sub"}},{path:"*",name:"page-404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}]}],b=new h["a"]({mode:"history",base:"/",routes:m}),v=b,k=n("2f62"),g=n("fcc2"),_={updateSidebarState:function(e,t){var n=e.commit;n("UPDATE_SIDEBAR_STATE",t)},updateSiteTitle:function(e,t){document.title="".concat(t," | FileShop")},updateHeaderTitle:function(e,t){var n=e.commit;n("UPDATE_HEADER_TITLE",t)},updateHeaderSide:function(e,t){var n=e.commit;n("UPDATE_HEADER_SIDE",t)},updateServiceWorker:function(e,t){var n=e.commit;n("SET_SERVICE_WORKER",t)}},w={UPDATE_SIDEBAR_STATE:function(e,t){e.sidebar_visible=t},UPDATE_HEADER_TITLE:function(e,t){e.header.title=t},UPDATE_HEADER_SIDE:function(e,t){e.header.side=t},SET_SERVICE_WORKER:function(e,t){e.active_service_worker=t}};r["default"].use(k["a"]);var E=new k["a"].Store({state:g["a"],mutations:w,actions:_,modules:{}}),y=n("5f5b"),S=n("b1e0"),T=n("ad3d");r["default"].config.productionTip=!1,r["default"].use(y["a"]),r["default"].use(S["a"]),r["default"].prototype.$copy_text=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.getElementById(e);n.select(),n.setSelectionRange(0,99999),document.execCommand("copy"),t&&t.$bvToast.toast("Copied Succesfully!",Object(c["a"])({title:"Success"},E.state.common_toast_options))},r["default"].prototype.$copy_arbitary_text=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createElement("input"),o="temp-"+Date.now();n.id=o,n.value=e,n.style.opacity=0,document.getElementsByTagName("body")[0].append(n);var r=document.getElementById(o);r.select(),r.setSelectionRange(0,99999),document.execCommand("copy"),r.remove(),t&&t.$bvToast.toast("Copied Succesfully!",Object(c["a"])({title:"Success"},E.state.common_toast_options))},r["default"].component("font-awesome-icon",T["a"]),new r["default"]({router:v,store:E,render:function(e){return e(f)}}).$mount("#app")},b107:function(e,t,n){},fcc2:function(e,t,n){"use strict";var o="http://api.fileshop.online",c="".concat(o,"/api"),r={product_create:"".concat(c,"/product"),product_get:"".concat(c,"/product"),product_get_orders:"".concat(c,"/product/:token/orders"),product_get_balances:"".concat(c,"/product/:token/balances"),product_withdraw:"".concat(c,"/product/:token/withdrawl"),product_get_withdrawls:"".concat(c,"/product/:token/withdrawls"),product_seller_email_update:"".concat(c,"/email_updates"),currency_converter:"".concat(c,"/currency-converter"),order_create:"".concat(c,"/order"),order_get:"".concat(c,"/order/:order_uid"),order_callback:"".concat(c,"/order/:order_uid/callback")},a={download_url:"".concat(o,"/order/:order_uid/download")};t["a"]={sidebar_visible:!1,apiendpoints:r,static_urls:a,common_toast_options:{autoHideDelay:5e3,appendToast:!1,variant:"success",toaster:"b-toaster-bottom-center"},header:{title:null,side:null},options:{disable_bch:!0},active_service_worker:null}}});
//# sourceMappingURL=app.ea45e513.js.map