(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-order-confirm-shop-order-confirm"],{"4917e":function(e,t,r){"use strict";var s,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",[1!=e.seat?r("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddressTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title"},[e._v("地址")]),r("v-uni-view",[r("v-uni-view",[e._v(e._s(e.address.name)+" "+e._s(e.address.phone))]),r("v-uni-view",[e._v(e._s(e.address.address))])],1)],1):e._e(),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-view",{staticClass:"title"},[e._v("购买清单")])],1),e._l(e.orderGoods,(function(t,s){return r("v-uni-view",{key:s,staticClass:"cu-form-group"},[r("v-uni-image",{staticClass:"avator",attrs:{src:e.baseUrl+t.picture,mode:""}}),r("v-uni-view",{staticClass:"title"},[r("v-uni-view",[e._v(e._s(t.goodname))]),1!=e.seat?r("v-uni-view",[e._v("x"+e._s(t.buynumber)),1==e.type||3==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v("￥"+e._s(t.price))]):e._e(),2==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v(e._s(t.price)+"积分")]):e._e()],1):r("v-uni-view",[e._v(e._s(t.address)+"号"),1==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v("￥"+e._s(t.price))]):e._e(),2==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v(e._s(t.price)+"积分")]):e._e()],1)],1)],1)})),r("v-uni-view",{staticClass:"cu-form-group"},[1==e.type||3==e.type?r("v-uni-view",{staticClass:"title"},[e._v("总价")]):e._e(),2==e.type?r("v-uni-view",{staticClass:"title"},[e._v("总积分")]):e._e(),r("v-uni-view",[1==e.type||3==e.type?r("v-uni-text",[e._v("￥"+e._s(e.total))]):e._e(),2==e.type?r("v-uni-text",[e._v(e._s(e.total)+"积分")]):e._e()],1)],1),r("v-uni-view",{staticClass:"cu-form-group"},[e._v("备注"),r("v-uni-input",{staticStyle:{"margin-left":"30upx","border-bottom":"1px solid #999999",height:"60upx","font-size":"28rpx"},attrs:{name:"remark"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],2),r("v-uni-view",{staticClass:"padding",staticStyle:{"text-align":"center"}},[1==e.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap()}}},[e._v("确认支付")]):e._e(),2==e.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap()}}},[e._v("确认兑换")]):e._e()],1)],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return s}))},"83fd":function(e,t,r){"use strict";r.r(t);var s=r("daab"),n=r.n(s);for(var a in s)"default"!==a&&function(e){r.d(t,e,(function(){return s[e]}))}(a);t["default"]=n.a},a1e8:function(e,t,r){"use strict";var s=r("c089"),n=r.n(s);n.a},b1b8:function(e,t,r){"use strict";r.r(t);var s=r("4917e"),n=r("83fd");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("a1e8");var i,o=r("f0c5"),u=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"3267f562",null,!1,s["a"],i);t["default"]=u.exports},c089:function(e,t,r){var s=r("d0c9");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=r("4f06").default;n("0a4214b4",s,!0,{sourceMap:!1,shadowMode:!1})},d0c9:function(e,t,r){var s=r("24fb");t=s(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.avator[data-v-3267f562]{width:%?150?%;height:%?150?%;margin:%?20?% 0}',""]),e.exports=t},daab:function(e,t,r){"use strict";var s=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("28a5"),r("96cf");var n=s(r("3b8d")),a={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0,remark:""}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.type=t.type,this.seat=t.seat,this.orderGoods=uni.getStorageSync("orderGoods"),1!=this.seat)for(r=0;r<this.orderGoods.length;r++)0==this.total?this.total=parseFloat(this.orderGoods[r].price)*this.orderGoods[r].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[r].price)*this.orderGoods[r].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(r=e.sent,this.user=r.data,1==this.seat){e.next=15;break}if(s=uni.getStorageSync("address"),!s||this.user.id!=s.userid){e.next=11;break}this.address=uni.getStorageSync("address"),e.next=15;break;case 11:return e.next=13,this.$api.defaultAddress(this.user.id);case 13:r=e.sent,this.address=r.data;case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,1==t.seat||t.address){e.next=4;break}return t.$utils.msg("请选择地址"),e.abrupt("return");case 4:r=uni.getStorageSync("nowTable"),uni.showModal({title:"提示",content:"是否确认支付",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(s){var n,a,i,o,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!s.confirm){e.next=40;break}if(n=t.type,a=!0,i="已支付",1!=n){e.next=8;break}t.user.money-t.total<0&&(t.$utils.msg("余额不足，请先充值"),a=!1,i="未支付"),e.next=13;break;case 8:if(2!=n){e.next=13;break}if(!(t.user.jf-t.total<0)){e.next=13;break}return t.$utils.msg("积分不足，兑换商品失败"),a=!1,e.abrupt("return");case 13:o=0;case 14:if(!(o<t.orderGoods.length)){e.next=26;break}return u={orderid:t.$utils.genTradeNo(),tablename:t.orderGoods[o].tablename,userid:t.user.id,goodid:t.orderGoods[o].goodid,goodname:t.orderGoods[o].goodname,picture:t.orderGoods[o].picture,buynumber:t.orderGoods[o].buynumber,discountprice:t.orderGoods[o].price,price:t.orderGoods[o].price,total:t.orderGoods[o].price*t.orderGoods[o].buynumber,discounttotal:t.orderGoods[o].price*t.orderGoods[o].buynumber,type:n,remark:t.remark,address:t.address.address,tel:t.address.phone,consignee:t.address.name,shangjiazhanghao:t.orderGoods[o].shangjiazhanghao,status:i},1==t.seat&&(u["address"]=t.address,d=t.address.split(",").length,u["buynumber"]=d,u["total"]=t.orderGoods[o].price*d,u["discounttotal"]=t.orderGoods[o].price*d),e.next=19,t.$api.add("orders",u);case 19:if(!t.orderGoods[o].id){e.next=23;break}return e.next=22,t.$api.del("cart",JSON.stringify([t.orderGoods[o].id]));case 22:uni.removeStorageSync("cart".concat(t.orderGoods[o].goodid).concat(t.user.id));case 23:o++,e.next=14;break;case 26:if(!a){e.next=40;break}if(1!=n){e.next=35;break}return t.$utils.msgBack("支付成功"),t.user.money=t.user.money-t.total,(t.user.jf||0==t.user.jf)&&(t.user.jf=parseFloat(t.user.jf)+parseFloat(t.total)),e.next=33,t.$api.update(r,t.user);case 33:e.next=40;break;case 35:if(2!=n){e.next=40;break}return t.$utils.msgBack("兑换成功"),t.user.jf=t.user.jf-t.total,e.next=40,t.$api.update(r,t.user);case 40:case"end":return e.stop()}}),e)})));function s(t){return e.apply(this,arguments)}return s}()});case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=a}}]);