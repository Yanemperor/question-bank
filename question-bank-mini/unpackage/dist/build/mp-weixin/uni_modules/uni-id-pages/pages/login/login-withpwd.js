(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/login/login-withpwd"],{"5e6d":function(e,n,t){"use strict";(function(e,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=s(t("0355"));function s(e){return e&&e.__esModule?e:{default:e}}var a=e.importObject("uni-id-co",{errorOptions:{type:"toast"}}),o={mixins:[u.default],data:function(){return{password:"",username:"",captcha:"",needCaptcha:!1,focusUsername:!1,focusPassword:!1,logo:"/static/logo.png"}},onShow:function(){},methods:{toRetrievePwd:function(){var e="/uni_modules/uni-id-pages/pages/retrieve/retrieve";/^1\d{10}$/.test(this.username)&&(e+="?phoneNumber=".concat(this.username)),i.navigateTo({url:e})},pwdLogin:function(){var e=this;if(!this.password.length)return this.focusPassword=!0,i.showToast({title:"请输入密码",icon:"none"});if(!this.username.length)return this.focusUsername=!0,i.showToast({title:"请输入手机号/用户名/邮箱",icon:"none"});if(this.needCaptcha&&4!=this.captcha.length)return this.$refs.captcha.getImageCaptcha(),i.showToast({title:"请输入验证码",icon:"none"});if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup(this.pwdLogin);var n={password:this.password,captcha:this.captcha};/^1\d{10}$/.test(this.username)?n.mobile=this.username:/@/.test(this.username)?n.email=this.username:n.username=this.username,a.login(n).then((function(n){e.loginSuccess(n)})).catch((function(n){"uni-id-captcha-required"==n.errCode?e.needCaptcha=!0:e.needCaptcha&&e.$refs.captcha.getImageCaptcha()}))},toRegister:function(){i.navigateTo({url:this.config.isAdmin?"/uni_modules/uni-id-pages/pages/register/register-admin":"/uni_modules/uni-id-pages/pages/register/register",fail:function(e){console.error(e)}})}}};n.default=o}).call(this,t("a9ff")["default"],t("543d")["default"])},6191:function(e,n,t){"use strict";(function(e){t("3870"),t("a9ff");i(t("66fd"));var n=i(t("b826"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},8062:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return i}));var i={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"dc19"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"0b79"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"2180"))},uniCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(t.bind(null,"8299"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"8abc"))},uniIdPagesFabLogin:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-fab-login/uni-id-pages-fab-login").then(t.bind(null,"f556"))}},u=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusUsername=!1},e.e1=function(n){e.focusPassword=!1})},s=[]},a9e2:function(e,n,t){"use strict";t.r(n);var i=t("5e6d"),u=t.n(i);for(var s in i)"default"!==s&&function(e){t.d(n,e,(function(){return i[e]}))}(s);n["default"]=u.a},b826:function(e,n,t){"use strict";t.r(n);var i=t("8062"),u=t("a9e2");for(var s in u)"default"!==s&&function(e){t.d(n,e,(function(){return u[e]}))}(s);t("ce19");var a,o=t("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"43074b84",null,!1,i["a"],a);n["default"]=r.exports},c59d:function(e,n,t){},ce19:function(e,n,t){"use strict";var i=t("c59d"),u=t.n(i);u.a}},[["6191","common/runtime","common/vendor"]]]);