(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4923c5c8"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("main",[n("div",{staticClass:"search-area"},[n("input",{attrs:{id:"inputText",type:"text"},on:{change:t.saveInputText}}),n("div",{staticClass:"btn btn-search",attrs:{role:"button"},on:{click:t.findInputText}},[t._v("Find text")])]),n("table",{staticClass:"tab"},[n("thead",[n("tr",{staticClass:"table-header",on:{click:t.sortProductList}},[n("th",{staticClass:"column-header"},[t._v("id")]),n("th",{staticClass:"column-header"},[t._v("type")]),n("th",{staticClass:"column-header"},[t._v("name")]),n("th",{staticClass:"column-header"},[t._v("price")])])]),n("tbody",t._l(t.displayedProductList,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.price))])])})),0)]),n("nav",{staticClass:"nav"},[n("ul",{staticClass:"pagination"},[n("li",[n("div",{staticClass:"btn btn-pagination",attrs:{id:"prev",role:"button"},on:{click:t.moveToPrevPage}},[t._v("Prev")])]),n("li",t._l(t.pages.slice(t.page-1,t.page+this.numOfPages),(function(e){return n("div",{key:e,staticClass:"btn btn-pagination",attrs:{role:"button"},on:{click:function(n){t.page=e}}},[t._v(" "+t._s(e))])})),0),n("li",[n("div",{staticClass:"btn btn-pagination",attrs:{id:"next",role:"button"},on:{click:t.moveToNextPage}},[t._v("Next")])])])])]),t._m(1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Pagination")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("© Pytalev 2021")])])}],i=(n("fb6a"),n("4e82"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0"),{name:"App",components:{},data:function(){return{goods:[],page:1,perPage:50,pages:[],inputText:"",isProductListSorted:!1}},methods:{getGoods:function(){for(var t=0;t<250;t++)this.goods.push({id:250-t,type:"Book"+5*t,name:"Peace"+30*t,price:21*t})},setPages:function(){for(var t=1;t<=this.numOfPages;t++)this.pages.push(t)},paginate:function(t){var e=this.page,n=this.perPage,r=(e-1)*n,o=r+n;return t.slice(r,o)},moveToPrevPage:function(){this.page>1&&this.page--},moveToNextPage:function(){this.page<this.pages.length&&this.page++},sortProductList:function(){!0===this.isProductListSorted?this.goods.reverse():this.goods.sort((function(t,e){return t.id-e.id})),this.isProductListSorted=!0},saveInputText:function(t){this.inputText=t.target.value},findInputText:function(){var t=this;return this.goods.filter((function(e){return+e.id===+t.inputText||e.type.includes(t.inputText)||e.name.includes(t.inputText)||e.price===t.inputText}))}},computed:{displayedProductList:function(){return""!==this.inputText?this.paginate(this.findInputText(this.goods)):this.paginate(this.goods)},numOfPages:function(){return Math.ceil(this.goods.length/this.perPage)}},created:function(){this.getGoods(),this.setPages()}}),s=i,u=(n("cf25"),n("2877")),c=Object(u["a"])(s,o,a,!1,null,null,null),l=c.exports,p=(n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"})},f=[],h={name:"Home",components:{}},v=h,g=Object(u["a"])(v,d,f,!1,null,null,null),m=g.exports;r["a"].use(p["a"]);var b=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],_=new p["a"]({mode:"history",base:"/",routes:b}),P=_,y=n("2f62");r["a"].use(y["a"]);var x=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=n("9871"),C=n.n(T);r["a"].config.productionTip=!1,new r["a"]({router:P,store:x,SortedTablePlugin:C.a,render:function(t){return t(l)}}).$mount("#app")},cf25:function(t,e,n){"use strict";n("fea6")},fea6:function(t,e,n){}});
//# sourceMappingURL=app.7b36c8dd.js.map