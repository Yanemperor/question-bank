(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/read-news-log/read-news-log"],{1088:function(e,n,t){},"461b":function(e,n,t){"use strict";t.r(n);var o=t("48c7"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},"48c7":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{isLoading:!0,loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},readNewsLog:[],udbWhere:""}},onLoad:function(){this.readNewsLog=e.getStorageSync("readNewsLog")||[];var n=this.readNewsLog.map((function(e){var n=e.article_id;return n}));console.log(typeof n,n),this.udbWhere='"_id" in '.concat(JSON.stringify(n)),e.setNavigationBarTitle({title:this.$t("newsLog.navigationBarTitle")})},onPullDownRefresh:function(){this.refreshData()},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{refreshData:function(){this.$refs.udb.loadData({clear:!0},(function(n){console.log(n),e.stopPullDownRefresh()}))},handleItemClick:function(n){console.log(n),e.navigateTo({url:"/pages/list/detail?id="+n._id+"&title="+n.title})}}};n.default=t}).call(this,t("543d")["default"])},"4caf":function(e,n,t){"use strict";t.r(n);var o=t("e638"),a=t("461b");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("d1c9");var u,r=t("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=l.exports},d1c9:function(e,n,t){"use strict";var o=t("1088"),a=t.n(o);a.a},e638:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}));var o={unicloudDb:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(t.bind(null,"960d"))},uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,"85c4"))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,"c7c3"))},uniDateformat:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat")]).then(t.bind(null,"7924"))},uniLoadState:function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-load-state/uni-load-state")]).then(t.bind(null,"a34a2"))}},a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$hasScopedSlotsParams("a772113e-1")),o=t?e.$getScopedSlotsParams("a772113e-1","default","data"):null,a=t?{data:e.$getScopedSlotsParams("a772113e-1","default","data"),pagination:e.$getScopedSlotsParams("a772113e-1","default","pagination"),hasMore:e.$getScopedSlotsParams("a772113e-1","default","hasMore"),loading:e.$getScopedSlotsParams("a772113e-1","default","loading"),error:e.$getScopedSlotsParams("a772113e-1","default","error")}:null;e._isMounted||(e.e0=function(n){e.isLoading},e.e1=function(n){e.isLoading},e.e2=function(n,t){var o=arguments[arguments.length-1].currentTarget.dataset,a=o.eventParams||o["event-params"];t=a.item;return e.handleItemClick(t)}),e.$mp.data=Object.assign({},{$root:{m0:t,l0:o,a0:a}})},i=[]},e713:function(e,n,t){"use strict";(function(e){t("3870"),t("a9ff");o(t("66fd"));var n=o(t("4caf"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["e713","common/runtime","common/vendor"]]]);