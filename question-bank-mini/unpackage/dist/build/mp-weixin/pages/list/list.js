(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/list"],{"0598":function(e,t,n){},"4b0b":function(e,t,n){"use strict";var o=n("b2df"),r=n.n(o);r.a},"5e91":function(e,t,n){"use strict";var o=n("0598"),r=n.n(o);r.a},"8ba4":function(e,t,n){"use strict";n.r(t);var o=n("8f73"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},"8f73":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=a(n("a34a")),i=a(n("a14d"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o,r,u,i){try{var a=e[u](i),c=a.value}catch(s){return void n(s)}a.done?t(c):Promise.resolve(c).then(o,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var u=e.apply(t,n);function i(e){c(u,o,r,i,a,"next",e)}function a(e){c(u,o,r,i,a,"throw",e)}i(void 0)}))}}var l=function(){n.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar").then(function(){return resolve(n("5e31"))}.bind(null,n)).catch(n.oe)},f=(new i.default,e.database()),d={components:{statusBar:l},computed:{inputPlaceholder:function(e){return"en"==o.getStorageSync("CURRENT_LANG")?"Please enter the search content":"请输入搜索内容"},colList:function(){return[f.collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id,is_show_ad").getTemp(),f.collection("uni-id-users").field("_id,username").getTemp()]}},data:function(){return{where:'"article_status" == 1',keyword:"",showRefresh:!1,listHight:0}},watch:{keyword:function(e,t){var n='"article_status" == 1 ';this.where=e?n+"&& /".concat(e,"/.test(title)"):n}},onReady:function(){var e=this;return s(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.listHight="auto",r=e.$refs.udb;case 2:case"end":return t.stop()}}),t)})))()},onShow:function(){var e=this;return s(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.keyword=getApp().globalData.searchText,getApp().globalData.searchText="";case 2:case"end":return t.stop()}}),t)})))()},methods:{getDate:function(e){return o.$u.timeFrom(e)},searchClick:function(e){o.hideKeyboard(),o.navigateTo({url:"/pages/list/search/search",animationType:"fade-in"})},retry:function(){this.refresh()},refresh:function(){r.loadData({clear:!0},(function(){o.stopPullDownRefresh(),console.log("end")})),console.log("refresh")},loadMore:function(){r.loadMore()},onqueryerror:function(e){console.error(e)},onpullingdown:function(e){console.log(e),this.showRefresh=!0,e.pullingDistance>100&&this.refresh()}},onPullDownRefresh:function(){this.refresh()},onReachBottom:function(){this.loadMore()}};t.default=d}).call(this,n("a9ff")["default"],n("543d")["default"])},b0a7:function(e,t,n){"use strict";n.r(t);var o=n("ccea"),r=n("8ba4");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("4b0b"),n("5e91");var i,a=n("f0c5"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,"68b16327",null,!1,o["a"],i);t["default"]=c.exports},b2df:function(e,t,n){},ccea:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}));var o={unicloudDb:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(n.bind(null,"960d"))},uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,"85c4"))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,"c7c3"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$hasScopedSlotsParams("2e637200-1")),o=n?e.__map(e.$getScopedSlotsParams("2e637200-1","default","data"),(function(t,n){var o=e.__get_orig(t),r=e.getDate(t.last_modify_date);return{$orig:o,m1:r}})):null;e.$mp.data=Object.assign({},{$root:{m0:n,l0:o}})},u=[]},f492:function(e,t,n){"use strict";(function(e){n("3870"),n("a9ff");o(n("66fd"));var t=o(n("b0a7"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["f492","common/runtime","common/vendor"]]]);