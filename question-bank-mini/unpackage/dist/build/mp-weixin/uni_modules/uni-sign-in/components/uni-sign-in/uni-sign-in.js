(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in"],{"31ac":function(n,e,t){"use strict";var o=t("3e6a"),r=t.n(o);r.a},"3e6a":function(n,e,t){},"6bf7":function(n,e,t){"use strict";t.r(e);var o=t("e36c"),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},e09c:function(n,e,t){"use strict";t.r(e);var o=t("edac"),r=t("6bf7");for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t("31ac");var a,u=t("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=s.exports},e36c:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t("a34a")),i=a(t("83c7"));function a(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,o,r,i,a){try{var u=n[i](a),s=u.value}catch(c){return void t(c)}u.done?e(s):Promise.resolve(s).then(o,r)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(o,r){var i=n.apply(e,t);function a(n){u(i,o,r,a,s,"next",n)}function s(n){u(i,o,r,a,s,"throw",n)}a(void 0)}))}}var c=n.database(),l=c.action("signIn").collection("opendb-sign-in"),d=(new Date((new Date).toLocaleDateString()).getTime(),{name:"uni-signIn",data:function(){return{total:0,scores:0,weekdays:[1,2,3,4,5,6,7],signInRes:{days:[],n:0}}},mounted:function(){},methods:{getSignedInInfo:function(){var n=arguments,e=this;return s(r.default.mark((function t(){var i,a,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=n.length>0&&void 0!==n[0]?n[0]:"今日已签过",a=new Date((new Date).toLocaleDateString()).getTime(),t.next=4,l.where("'user_id' == $env.uid && 'date' == ".concat(a," && 'isDelete' == false")).get();case 4:return u=t.sent,u.result.data.length&&(e.signInRes=u.result,e.$refs.popup.open(),o.showToast({title:i,duration:3e3,icon:"none"})),t.abrupt("return",u.result.data);case 7:case"end":return t.stop()}}),t)})))()},showRewardedVideoAd:function(){var e=this;return s(r.default.mark((function t(){var a,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getSignedInInfo();case 2:if(a=t.sent,console.log(a),!a||0!=a.length){t.next=9;break}if(u=n.getCurrentUserInfo().uid,u){t.next=8;break}return t.abrupt("return",o.navigateTo({url:"/pages/ucenter/login-page/index/index"}));case 8:i.default.show({adpid:1733738477,adType:"RewardedVideo",urlCallback:{userId:u,extra:"uniSignIn"}},(function(n){if(n&&n.isEnded){console.log("onClose "+n.isEnded);var t=0;o.showLoading({mask:!0});var i=setInterval(function(){var a=s(r.default.mark((function a(u){return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t++,r.next=3,e.getSignedInInfo("签到成功");case 3:n=r.sent,(t>2||n.length)&&(n.length||o.showToast({title:"签到失败！",icon:"error",duration:6e3}),clearInterval(i),o.hideLoading());case 5:case"end":return r.stop()}}),a)})));return function(n){return a.apply(this,arguments)}}(),2e3)}else console.log("onClose "+n.isEnded),o.showToast({title:"播放中途退出,签到失败！",icon:"error",duration:5e3})}),(function(n){console.log(n),o.showToast({title:n.errMsg,icon:"none"})}));case 9:case"end":return t.stop()}}),t)})))()},open:function(){var n=this;return s(r.default.mark((function e(){var t,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.showLoading({mask:!0}),e.prev=1,e.next=4,n.getSignedInInfo();case 4:if(t=e.sent,!t||0!=t.length){e.next=14;break}return e.next=8,l.add({});case 8:i=e.sent,console.log(i),o.hideLoading(),n.signInRes=i.result,n.$refs.popup.open(),7==n.signInRes.days.length?o.showToast({title:"你已完成7日连续签到，获得60积分！",icon:"none",duration:5e3}):o.showToast({title:"签到成功,获得10积分！",icon:"none",duration:5e3});case 14:e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](1),o.hideLoading(),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))()},closeMe:function(n){this.$refs.popup.close()}}});e.default=d}).call(this,t("a9ff")["default"],t("543d")["default"])},edac:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"15c5"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"1ae1"))}},r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.weekdays,(function(e,t){var o=n.__get_orig(e),r=n.signInRes.days.includes(e-1),i=n.signInRes.days.includes(e-1)||e>n.signInRes.n;return{$orig:o,g0:r,g1:i}})));n.$mp.data=Object.assign({},{$root:{l0:t}})},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in-create-component',
    {
        'uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e09c"))
        })
    },
    [['uni_modules/uni-sign-in/components/uni-sign-in/uni-sign-in-create-component']]
]);
