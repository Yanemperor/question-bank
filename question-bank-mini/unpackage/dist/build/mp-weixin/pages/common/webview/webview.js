(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/webview/webview"],{1511:function(t,n,e){"use strict";e.r(n);var u=e("8217"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},"37ee":function(t,n,e){"use strict";e.r(n);var u=e("b3f1"),a=e("1511");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);var r,c=e("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=i.exports},8217:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={onLoad:function(n){var e=n.url,u=n.title;"http"!=e.substring(0,4)?(t.showModal({title:"错误",content:'不是一个有效的网站链接,"'+e+'"',showCancel:!1,confirmText:"知道了",complete:function(){t.navigateBack()}}),u="页面路径错误"):(console.log(e,u),this.url=e),u&&t.setNavigationBarTitle({title:u})},data:function(){return{url:null}}};n.default=e}).call(this,e("543d")["default"])},b3f1:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},d872:function(t,n,e){"use strict";(function(t){e("3870"),e("a9ff");u(e("66fd"));var n=u(e("37ee"));function u(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])}},[["d872","common/runtime","common/vendor"]]]);