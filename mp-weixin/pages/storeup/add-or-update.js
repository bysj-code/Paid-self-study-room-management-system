(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/storeup/add-or-update"],{"0aa1":function(e,t,r){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}))},"0cf8":function(e,t,r){"use strict";(function(e){r("6cdc"),r("921b");n(r("66fd"));var t=n(r("d26a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"34b2":function(e,t,r){"use strict";var n=r("f974"),a=r.n(n);a.a},"9c28":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,n,a,i,u){try{var s=e[i](u),o=s.value}catch(c){return void r(c)}s.done?t(o):Promise.resolve(o).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function s(e){i(u,n,a,s,o,"next",e)}function o(e){i(u,n,a,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"e2b1"))},o=function(){return r.e("components/xia-editor/xia-editor").then(r.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{userid:"",refid:"",tablename:"",name:"",picture:"",type:"",inteltype:"",remark:""},user:{},ro:{userid:!1,refid:!1,tablename:!1,name:!1,picture:!1,type:!1,inteltype:!1,remark:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(n.default.mark((function t(r){var a,i,u,s;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:if(i=t.sent,this.user=i.data,this.ruleForm.userid=e.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!r.id){t.next=13;break}return this.ruleForm.id=r.id,t.next=11,this.$api.info("storeup",this.ruleForm.id);case 11:i=t.sent,this.ruleForm=i.data;case 13:if(this.cross=r.cross,!r.cross){t.next=53;break}u=e.getStorageSync("crossObj"),t.t0=n.default.keys(u);case 17:if((t.t1=t.t0()).done){t.next=53;break}if(s=t.t1.value,"userid"!=s){t.next=23;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,t.abrupt("continue",17);case 23:if("refid"!=s){t.next=27;break}return this.ruleForm.refid=u[s],this.ro.refid=!0,t.abrupt("continue",17);case 27:if("tablename"!=s){t.next=31;break}return this.ruleForm.tablename=u[s],this.ro.tablename=!0,t.abrupt("continue",17);case 31:if("name"!=s){t.next=35;break}return this.ruleForm.name=u[s],this.ro.name=!0,t.abrupt("continue",17);case 35:if("picture"!=s){t.next=39;break}return this.ruleForm.picture=u[s],this.ro.picture=!0,t.abrupt("continue",17);case 39:if("type"!=s){t.next=43;break}return this.ruleForm.type=u[s],this.ro.type=!0,t.abrupt("continue",17);case 43:if("inteltype"!=s){t.next=47;break}return this.ruleForm.inteltype=u[s],this.ro.inteltype=!0,t.abrupt("continue",17);case 47:if("remark"!=s){t.next=51;break}return this.ruleForm.remark=u[s],this.ro.remark=!0,t.abrupt("continue",17);case 51:t.next=17;break;case 53:this.styleChange();case 54:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(n.default.mark((function t(){var r,a,i,u,s,o,c,l,f,d;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.userid){t.next=3;break}return this.$utils.msg("用户id不能为空"),t.abrupt("return");case 3:if(this.ruleForm.name){t.next=6;break}return this.$utils.msg("名称不能为空"),t.abrupt("return");case 6:if(this.ruleForm.picture){t.next=9;break}return this.$utils.msg("图片不能为空"),t.abrupt("return");case 9:if(!this.cross){t.next=25;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=25;break}if(r||(r=e.getStorageSync("crossObj")),s.startsWith("[")){t.next=21;break}for(c in r)c==s&&(r[c]=o);return l=e.getStorageSync("crossTable"),t.next=19,this.$api.update("".concat(l),r);case 19:t.next=25;break;case 21:a=Number(e.getStorageSync("userid")),i=r["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!a){t.next=47;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=31,this.$api.list("storeup",f);case 31:if(d=t.sent,!(d.data.total>=u)){t.next=37;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 37:if(!this.ruleForm.id){t.next=42;break}return t.next=40,this.$api.update("storeup",this.ruleForm);case 40:t.next=44;break;case 42:return t.next=44,this.$api.add("storeup",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:t.next=55;break;case 47:if(!this.ruleForm.id){t.next=52;break}return t.next=50,this.$api.update("storeup",this.ruleForm);case 50:t.next=54;break;case 52:return t.next=54,this.$api.add("storeup",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,r("543d")["default"])},c3d0:function(e,t,r){"use strict";r.r(t);var n=r("9c28"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},d26a:function(e,t,r){"use strict";r.r(t);var n=r("0aa1"),a=r("c3d0");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("34b2");var u,s=r("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"9e41ed74",null,!1,n["a"],u);t["default"]=o.exports},f974:function(e,t,r){}},[["0cf8","common/runtime","common/vendor"]]]);