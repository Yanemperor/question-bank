(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-forms/components/uni-forms/uni-forms"],{"1a89":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},6645:function(e,t,n){"use strict";var a=n("8fde"),r=n.n(a);r.a},"8e11":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n("a34a")),r=l(n("0446")),i=n("2c73"),u=l(n("66fd"));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,a,r,i,u){try{var l=e[i](u),o=l.value}catch(s){return void n(s)}l.done?t(o):Promise.resolve(o).then(a,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function u(e){o(i,a,r,u,l,"next",e)}function l(e){o(i,a,r,u,l,"throw",e)}u(void 0)}))}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}u.default.prototype.binddata=function(e,t,n){if(n)this.$refs[n].setValue(e,t);else{var a;for(var r in this.$refs){var i=this.$refs[r];if(i&&i.$options&&"uniForms"===i.$options.name){a=i;break}}if(!a)return console.error("当前 uni-froms 组件缺少 ref 属性");a.setValue(e,t)}};var c={name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:function(){return null}},modelValue:{type:Object,default:function(){return null}},model:{type:Object,default:function(){return null}},rules:{type:Object,default:function(){return{}}},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide:function(){return{uniForm:this}},data:function(){return{formData:{},formRules:{}}},computed:{localData:function(){var e=this.model||this.modelValue||this.value;return e?(0,i.deepCopy)(e):{}}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created:function(){this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules:function(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new r.default(e)},setValue:function(e,t){var n=this.childrens.find((function(t){return t.name===e}));return n?(this.formData[e]=(0,i.getValue)(e,t,this.formRules[e]&&this.formRules[e].rules||[]),n.onFieldChange(this.formData[e])):null},validate:function(e,t){return this.checkAll(this.formData,e,t)},validateField:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;t=[].concat(t);var a={};return this.childrens.forEach((function(n){var r=(0,i.realName)(n.name);-1!==t.indexOf(r)&&(a=Object.assign({},a,f({},r,e.formData[r])))})),this.checkAll(a,[],n)},clearValidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e=[].concat(e),this.childrens.forEach((function(t){if(0===e.length)t.errMsg="";else{var n=(0,i.realName)(t.name);-1!==e.indexOf(n)&&(t.errMsg="")}}))},submit:function(e,t,n){var a=this,r=function(e){var t=a.childrens.find((function(t){return t.name===e}));t&&void 0===a.formData[e]&&(a.formData[e]=a._getValue(e,a.dataValue[e]))};for(var i in this.dataValue)r(i);return n||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},checkAll:function(e,t,n,r){var u=this;return s(a.default.mark((function l(){var o,s,f,c,d,h,m,v,p,b,g;return a.default.wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(u.validator){l.next=2;break}return l.abrupt("return");case 2:for(f in o=[],s=function(e){var t=u.childrens.find((function(t){return(0,i.realName)(t.name)===e}));t&&o.push(t)},e)s(f);n||"function"!==typeof t||(n=t),!n&&"function"!==typeof n&&Promise&&(c=new Promise((function(e,t){n=function(n,a){n?t(n):e(a)}}))),d=[],h=JSON.parse(JSON.stringify(e)),l.t0=a.default.keys(o);case 10:if((l.t1=l.t0()).done){l.next=23;break}return m=l.t1.value,v=o[m],p=(0,i.realName)(v.name),l.next=16,v.onFieldChange(h[p]);case 16:if(b=l.sent,!b){l.next=21;break}if(d.push(b),"toast"!==u.errShowType&&"modal"!==u.errShowType){l.next=21;break}return l.abrupt("break",23);case 21:l.next=10;break;case 23:if(Array.isArray(d)&&0===d.length&&(d=null),Array.isArray(t)&&t.forEach((function(e){var t=(0,i.realName)(e),n=(0,i.getDataValue)(e,u.localData);void 0!==n&&(h[t]=n)})),"submit"===r?u.$emit("submit",{detail:{value:h,errors:d}}):u.$emit("validate",d),g={},g=(0,i.rawData)(h,u.name),n&&"function"===typeof n&&n(d,g),!c||!n){l.next=33;break}return l.abrupt("return",c);case 33:return l.abrupt("return",null);case 34:case"end":return l.stop()}}),l)})))()},validateCheck:function(e){this.$emit("validate",e)},_getValue:i.getValue,_isRequiredField:i.isRequiredField,_setDataValue:i.setDataValue,_getDataValue:i.getDataValue,_realName:i.realName,_isRealName:i.isRealName,_isEqual:i.isEqual}};t.default=c},"8fde":function(e,t,n){},d6fa:function(e,t,n){"use strict";n.r(t);var a=n("8e11"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},dc19:function(e,t,n){"use strict";n.r(t);var a=n("1a89"),r=n("d6fa");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("6645");var u,l=n("f0c5"),o=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-forms/components/uni-forms/uni-forms-create-component',
    {
        'uni_modules/uni-forms/components/uni-forms/uni-forms-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dc19"))
        })
    },
    [['uni_modules/uni-forms/components/uni-forms/uni-forms-create-component']]
]);
