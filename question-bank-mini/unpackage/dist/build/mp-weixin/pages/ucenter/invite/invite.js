(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/invite/invite"],{4215:function(t,e,n){"use strict";(function(t){n("3870"),n("a9ff");o(n("66fd"));var e=o(n("a058"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"555d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={computed:{uniStarterConfig:function(){return getApp().globalData.config}},data:function(){return{about:{},code:"",isIos:"",showMask:!1,downloadUrl:{ios:"",android:""}}},created:function(){this.about=this.uniStarterConfig.about,this.downloadUrl=this.uniStarterConfig.download,this.year=(new Date).getFullYear();var t=navigator.userAgent,e=t.toLowerCase();this.isWeixin=-1!=e.indexOf("micromessenger"),this.isIos=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},onLoad:function(t){var e=t.code;this.code=e,document.getElementById("openApp").style.display="none",document.getElementsByTagName("body")[0].style=""},methods:{download:function(){this.code&&t.setClipboardData({data:this.code,complete:function(e){console.log(e),t.hideToast(),document.getElementById("#clipboard").style.top="-999px",t.hideKeyboard()}}),this.isIos?window.location.href=this.downloadUrl.ios:this.isWeixin?this.showMask=!0:window.location.href=this.downloadUrl.android}}};e.default=n}).call(this,n("543d")["default"])},a058:function(t,e,n){"use strict";n.r(e);var o=n("b876"),i=n("a155");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("efcf");var r,d=n("f0c5"),u=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=u.exports},a155:function(t,e,n){"use strict";n.r(e);var o=n("555d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},b876:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("invite.download"));t.$mp.data=Object.assign({},{$root:{m0:n}})},a=[]},d6d1:function(t,e,n){},efcf:function(t,e,n){"use strict";var o=n("d6d1"),i=n.n(o);i.a}},[["4215","common/runtime","common/vendor"]]]);