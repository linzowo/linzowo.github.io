(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"0de2":function(t,a,o){"use strict";var n;o.d(a,"b",(function(){return e})),o.d(a,"c",(function(){return r})),o.d(a,"a",(function(){return n}));var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",{staticClass:"order-box flex-direction bg-grey-f5",style:{height:t.$system_info.containerHeight+"px"}},[t.login?t._e():o("v-uni-view",{staticClass:"login-no flex-sub flex-direction align-center"},[o("v-uni-image",{staticClass:"logged-img",attrs:{src:t.$i_u.login_no,mode:"widthFix"}}),o("v-uni-text",{staticClass:"margin-bottom-sm text-xl login-text"},[t._v(t._s(t.$c_t.login.order.login_tips))]),o("v-uni-navigator",{staticClass:"logged-btn cu-btn lg",attrs:{url:"/pages/login/login"}},[t._v("立即登录")])],1),t.login?o("v-uni-view",{staticClass:"flex-direction"},[t.hasOrderIn3m?t._e():o("v-uni-view",{staticClass:"flex-direction no-order-box align-center"},[o("v-uni-image",{staticClass:"no_order_img margin-bottom",attrs:{src:t.$i_u.no_order,mode:"widthFix"}}),o("v-uni-text",{staticClass:"text-color-6 margin-bottom text-xl"},[t._v(t._s(t.$c_t.order.no_order))])],1),o("v-uni-view",{staticClass:"order-list flex-direction"},t._l(t.orderData,(function(a,n){return o("v-uni-view",{key:n,staticClass:"order-item flex-sub padding margin-bottom bg-white flex-direction",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.gotoOrderInfo(a)}}},[o("v-uni-view",{staticClass:"flex-sub"},[o("v-uni-image",{staticClass:"store-cover margin-right-sm",attrs:{src:t._f("imgUrlFilter")(a.image_path),mode:"widthFix"}}),o("v-uni-view",{staticClass:"flex-direction flex-sub"},[o("v-uni-view",{staticClass:"justify-between padding-bottom-sm border-bottom border-color-e"},[o("v-uni-view",{staticClass:"flex-direction"},[o("v-uni-view",{staticClass:"align-center margin-bottom-xs"},[o("v-uni-text",{staticClass:"text-xl text-color-3 margin-right-xs"},[t._v(t._s(a.name))]),o("v-uni-text",{staticClass:"lg text-gray cuIcon-right"})],1),o("v-uni-text",{staticClass:"text-xs text-grey"},[t._v(t._s(a.created_at))])],1),o("v-uni-text",{staticClass:"text-color-3"},[t._v(t._s(t.getArrayTips(a)))])],1),o("v-uni-view",{staticClass:"align-center padding-tb-sm justify-between"},[o("v-uni-text",{staticClass:"text-color-6 food-name text-cut"},[t._v(t._s(a.foods[0].name)+t._s(a.foods.length>1?"等"+a.foods.length+"件商品":""))]),o("v-uni-text",{staticClass:"text-price text-color-3 text-lg"},[t._v(t._s(a.total_price))])],1)],1)],1),"订单超时未支付"==t.getArrayTips(a)?o("v-uni-view",{staticClass:"border-top border-color-e justify-end padding-top"},[o("v-uni-text",{staticClass:"padding-xs border border-color-blue text-blue",on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.reCreatOrder.apply(void 0,arguments)}}},[t._v("再来一单")])],1):t._e()],1)})),1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.dataLoading,expression:"dataLoading"}],staticClass:"cu-load bg-white loading"}),t.showGetMoreBtn?o("v-uni-view",{staticClass:"text-color-9 justify-center text-xs",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.get3mOrder.apply(void 0,arguments)}}},[o("v-uni-text",[t._v(t._s(t.$c_t.order.show_more))]),o("v-uni-text",{staticClass:"lg cuIcon-unfold"})],1):t._e(),t.showGetMoreBtn?t._e():o("v-uni-view",{staticClass:"justify-center text-color-9 text-xs"},[o("v-uni-text",[t._v(t._s(t.$c_t.order.over_year))])],1)],1):t._e()],1)},r=[]},2714:function(t,a,o){var n=o("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 布局\r\n * \r\n */uni-view[data-v-3b4f85ac],\r\n.flex[data-v-3b4f85ac]{display:-webkit-box;display:-webkit-flex;display:flex}.vs-flex-item[data-v-3b4f85ac]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.vs-space-between[data-v-3b4f85ac]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.vs-space-around[data-v-3b4f85ac]{-webkit-justify-content:space-around;justify-content:space-around}.vs-space-center[data-v-3b4f85ac]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vs-space-end[data-v-3b4f85ac]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.vs-row[data-v-3b4f85ac]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.vs-column[data-v-3b4f85ac]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vs-align-end[data-v-3b4f85ac]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.vs-align-center[data-v-3b4f85ac]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vs-item-hover[data-v-3b4f85ac]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-3b4f85ac]{opacity:.8}\r\n/**\r\n * 基础背景颜色\r\n * \r\n */.bg-base[data-v-3b4f85ac]{background-color:#0097fd}.bg-page[data-v-3b4f85ac]{background-color:#f5f5f5}.bg-white[data-v-3b4f85ac]{background-color:#fff}.bg-green1[data-v-3b4f85ac]{background-color:#2cb98e}.bg-green2[data-v-3b4f85ac]{background-color:#00d762}.text-left[data-v-3b4f85ac]{text-align:left}.text-right[data-v-3b4f85ac]{text-align:right}.text-center[data-v-3b4f85ac]{text-align:center}\r\n/**\r\n * 基础文本颜色 \r\n * \r\n */.color-base[data-v-3b4f85ac]{color:#ab6ff6}.color-white[data-v-3b4f85ac]{color:#fff}.color-red[data-v-3b4f85ac]{color:#e84a54}.color-black2[data-v-3b4f85ac]{color:#222}.color-black3[data-v-3b4f85ac]{color:#333}.color-black4[data-v-3b4f85ac]{color:#444}.color-black6[data-v-3b4f85ac]{color:#666}.color-black7[data-v-3b4f85ac]{color:#777}.color-black8[data-v-3b4f85ac]{color:#888}.color-black9[data-v-3b4f85ac]{color:#999}.color-blue1[data-v-3b4f85ac]{color:#226fd1}.color-blue2[data-v-3b4f85ac]{color:#5ca3fc}.color-blue3[data-v-3b4f85ac]{color:#4399fc}.font-20[data-v-3b4f85ac]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-3b4f85ac]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-3b4f85ac]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-3b4f85ac]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-3b4f85ac]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-3b4f85ac]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-3b4f85ac]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-3b4f85ac]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-3b4f85ac]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-3b4f85ac]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-3b4f85ac]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-42[data-v-3b4f85ac]{font-style:normal;font-size:%?42?%;font-family:Droid Sans Fallback}.font-44[data-v-3b4f85ac]{font-style:normal;font-size:%?44?%;font-family:Droid Sans Fallback}.font-46[data-v-3b4f85ac]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-48[data-v-3b4f85ac]{font-style:normal;font-size:%?48?%;font-family:Droid Sans Fallback}.font-60[data-v-3b4f85ac]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-w400[data-v-3b4f85ac]{font-style:normal;font-weight:400}.font-w500[data-v-3b4f85ac]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.font-w600[data-v-3b4f85ac]{font-style:normal;font-weight:600;font-family:DroidSans-Bold}.font-w700[data-v-3b4f85ac]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.line20[data-v-3b4f85ac]{line-height:20}.line16[data-v-3b4f85ac]{line-height:16}.vun-hairline[data-v-3b4f85ac],\r\n.vun-hairline--bottom[data-v-3b4f85ac],\r\n.vun-hairline--left[data-v-3b4f85ac],\r\n.vun-hairline--right[data-v-3b4f85ac],\r\n.vun-hairline--surround[data-v-3b4f85ac],\r\n.vun-hairline--top[data-v-3b4f85ac],\r\n.vun-hairline--top-bottom[data-v-3b4f85ac]{position:relative;border-style:solid;border-color:#f5f5f5}.vun-hairline--top[data-v-3b4f85ac]{border-top-width:%?1?%}.vun-hairline--left[data-v-3b4f85ac]{border-left-width:%?1?%}.vun-hairline--right[data-v-3b4f85ac]{border-right-width:%?1?%}.vun-hairline--bottom[data-v-3b4f85ac]{border-bottom-width:%?1?%}.vun-hairline--top-bottom[data-v-3b4f85ac]{border-top-width:%?1?%;border-bottom-width:%?1?%}.vun-hairline--surround[data-v-3b4f85ac]{border-width:%?1?%}.margin-b5[data-v-3b4f85ac]{margin-bottom:%?5?%}.margin-b10[data-v-3b4f85ac]{margin-bottom:%?10?%}.margin-b15[data-v-3b4f85ac]{margin-bottom:%?15?%}.margin-b20[data-v-3b4f85ac]{margin-bottom:%?20?%}.margin-b25[data-v-3b4f85ac]{margin-bottom:%?25?%}.margin-b30[data-v-3b4f85ac]{margin-bottom:%?30?%}.margin-b35[data-v-3b4f85ac]{margin-bottom:%?35?%}.margin-b40[data-v-3b4f85ac]{margin-bottom:%?40?%}.margin-b50[data-v-3b4f85ac]{margin-bottom:%?50?%}.margin-b60[data-v-3b4f85ac]{margin-bottom:%?60?%}.margin-b70[data-v-3b4f85ac]{margin-bottom:%?70?%}.margin-b80[data-v-3b4f85ac]{margin-bottom:%?80?%}.whitespace-s[data-v-3b4f85ac]{padding-left:%?15?%;padding-right:%?15?%}.whitespace[data-v-3b4f85ac]{padding-left:%?30?%;padding-right:%?30?%}uni-page-body[data-v-3b4f85ac]{background-color:#f5f5f5}.login-no[data-v-3b4f85ac]{padding-top:%?200?%}.logged-btn[data-v-3b4f85ac]{width:%?256?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;background-color:#56d176;color:#fff}.logged-img[data-v-3b4f85ac]{width:%?400?%;height:%?400?%}.login-text[data-v-3b4f85ac]{color:#6a6a6a}.no-order-box[data-v-3b4f85ac]{padding-top:%?200?%}.no_order_img[data-v-3b4f85ac]{width:%?400?%}.store-cover[data-v-3b4f85ac]{width:%?80?%}.food-name[data-v-3b4f85ac]{width:%?450?%}.cu-load[data-v-3b4f85ac]{display:block}.cu-load[data-v-3b4f85ac]::after{content:""}body.?%PAGE?%[data-v-3b4f85ac]{background-color:#f5f5f5}',""]),t.exports=a},"34b1":function(t,a,o){"use strict";(function(t){var n=o("4ea4");o("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(o("5530")),r=o("2f62"),i={name:"order",data:function(){return{hasOrderIn3m:!1,hasOrderIn1y:!1,showGetMoreBtn:!0,orderData:[],showCodingTips:!1,dataLoading:!1,unpaidOrder:null}},computed:(0,e.default)({},(0,r.mapState)(["login"])),created:function(){var a=this;try{var o=uni.getStorageSync("unpaid_order");o&&(this.unpaidOrder=JSON.parse(o))}catch(n){t.log(n)}this.unpaidOrder&&this.$http.get.history_order().then((function(t){for(var o in a.unpaidOrder)t.orders[0].expires=a.unpaidOrder[o].expires,a.orderData=a.orderData.concat(t.orders);a.hasOrderIn3m=!0,a.dataLoading=!1}),(function(a){t.log("请求数据失败",a)})),t.log("需要测试三个月内有数据的取消下方注释")},methods:{reCreatOrder:function(){uni.navigateTo({url:this.$pages_path.store_index,fail:function(a){t.log(a)}})},getArrayTips:function(t){return t.expires?this._.now()+9e5>t.expires?this.$c_t.order.timeup:this.$c_t.order.unpaid:t.is_arrive?this.$c_t.order.is_arrive:this.$c_t.order.deliverying},get3mOrder:function(){var a=this;this.showGetMoreBtn=!1,this.dataLoading=!0,this.$http.get.history_order().then((function(o){a.$set(a,"orderData",[].concat(a.orderData,o.orders)),t.log(a.orderData),a.dataLoading=!1}),(function(a){t.log("请求数据失败",a)}))},gotoOrderInfo:function(a){try{uni.setStorageSync("order_info",JSON.stringify(a))}catch(o){t.log("存储数据失败",o)}uni.navigateTo({url:this.$pages_path.order_info,fail:function(a){t.log("跳转失败",a)}})}}};a.default=i}).call(this,o("5a52")["default"])},"51b6":function(t,a,o){"use strict";o.r(a);var n=o("0de2"),e=o("7ca5");for(var r in e)"default"!==r&&function(t){o.d(a,t,(function(){return e[t]}))}(r);o("fb1b");var i,c=o("f0c5"),l=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"3b4f85ac",null,!1,n["a"],i);a["default"]=l.exports},"7ca5":function(t,a,o){"use strict";o.r(a);var n=o("34b1"),e=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(a,t,(function(){return n[t]}))}(r);a["default"]=e.a},be4f:function(t,a,o){var n=o("2714");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=o("4f06").default;e("14e19182",n,!0,{sourceMap:!1,shadowMode:!1})},fb1b:function(t,a,o){"use strict";var n=o("be4f"),e=o.n(n);e.a}}]);