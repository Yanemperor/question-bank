(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uni-agree/uni-agree"],{"01fa":function(n,e,t){"use strict";t.r(e);var u=t("8591"),a=t("043e");for(var o in a)"default"!==o&&function(n){t.d(e,n,(function(){return a[n]}))}(o);t("7094"),t("1be1");var r,c=t("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=i.exports},"043e":function(n,e,t){"use strict";t.r(e);var u=t("28e8"),a=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);e["default"]=a.a},"1be1":function(n,e,t){"use strict";var u=t("e9cd"),a=t.n(u);a.a},"28e8":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(t("0973"));function a(n){return n&&n.__esModule?n:{default:n}}var o=u.default.about,r={data:function(){return{}},onLoad:function(){this._canBack=!1},onBackPress:function(){return!this._canBack},methods:{openprotocol:function(e){n.navigateTo({url:"/pages/common/webview/webview?url="+o.agreements[0].url})},openPrivacyPolicy:function(e){n.navigateTo({url:"/pages/common/webview/webview?url="+o.agreements[1].url})},agree:function(e){n.setStorageSync("userprotocol",1);this._canBack=!0,setTimeout((function(){n.navigateBack({animationDuration:0})}),100)},disagree:function(){}}};e.default=r}).call(this,t("543d")["default"])},"462d":function(n,e,t){"use strict";(function(n){t("3870"),t("a9ff");u(t("66fd"));var e=u(t("01fa"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},7094:function(n,e,t){"use strict";var u=t("73d1"),a=t.n(u);a.a},"73d1":function(n,e,t){},8591:function(n,e,t){"use strict";var u;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return u}));var a=function(){var n=this,e=n.$createElement;n._self._c},o=[]},e9cd:function(n,e,t){}},[["462d","common/runtime","common/vendor"]]]);