(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/download/index"],{1802:function(t,e,i){},"493d":function(t,e,i){"use strict";i.r(e);var n=i("a744"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},"5c50":function(t,e,i){"use strict";i.r(e);var n=i("8400"),a=i("493d");for(var u in a)"default"!==u&&function(t){i.d(e,t,(function(){return a[t]}))}(u);i("9fc4");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=r.exports},8400:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var n={uNavbar:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-navbar/u-navbar")]).then(i.bind(null,"3153"))}},a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"9fc4":function(t,e,i){"use strict";var n=i("1802"),a=i.n(n);a.a},a59e:function(t,e,i){"use strict";(function(t){i("3870"),i("a9ff");n(i("66fd"));var e=n(i("5c50"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},a744:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("27c3"),a={computed:{userInfo:function(){return n.store.userInfo}},data:function(){return{subjects:[],changeIndex:!0,currentChangeName:"专升本",changes:[{name:"专升本",subjects:[{img:"/static/subject/yuwen.png",title:"大学语文",paper_id:"top_up_language"},{img:"/static/subject/shuxue.png",title:"高数一",paper_id:"top_up_advanced_mathematics_1"},{img:"/static/subject/shuxue.png",title:"高数二",paper_id:"top_up_advanced_mathematics_2"},{img:"/static/subject/english.png",title:"大学英语",paper_id:"top_up_english"},{img:"/static/subject/zhengzhi.png",title:"大学政治",paper_id:"top_up_political"},{img:"/static/subject/jiaoyu.png",title:"教育理论",paper_id:"top_up_educational_theory"},{img:"/static/subject/minfa.png",title:"民法",paper_id:"top_up_civil_law"},{img:"/static/subject/yishu.png",title:"艺术概论",paper_id:"top_up_introduction_art"},{img:"/static/subject/shengtai1.png",title:"生态学",paper_id:"top_up_ecology"}]},{name:"高起专",subjects:[{img:"/static/subject/yuwen.png",title:"语文",paper_id:"high_up_language"},{img:"/static/subject/shuxue.png",title:"数学(理)",paper_id:"high_up_mathematics_science"},{img:"/static/subject/shuxue.png",title:"数学(文)",paper_id:"high_up_mathematics_arts"},{img:"/static/subject/english.png",title:"英语",paper_id:"high_up_english"},{img:"/static/subject/like.png",title:"理化综合",paper_id:"high_up_physical_chemical_synthesis"},{img:"/static/subject/wenke.png",title:"史地综合",paper_id:"high_up_comprehensive_history"}]}]}},onLoad:function(){wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),this.subjects=this.changes[0].subjects},methods:{itemClick:function(e){t.navigateTo({url:"/pages/download/list?paper_id="+e.paper_id})},navChange:function(){this.changeIndex=!this.changeIndex,this.changeIndex?(this.currentChangeName=this.changes[0].name,this.subjects=this.changes[0].subjects):(this.currentChangeName=this.changes[1].name,this.subjects=this.changes[1].subjects)},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"成考真题",path:"/pages/download/index",mpId:"wx1b87633653856f3e"}},onShareTimeline:function(t){return{title:"成考真题",type:0,summary:""}}}};e.default=a}).call(this,i("543d")["default"])}},[["a59e","common/runtime","common/vendor"]]]);