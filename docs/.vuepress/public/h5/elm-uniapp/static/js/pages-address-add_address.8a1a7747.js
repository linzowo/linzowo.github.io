(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-add_address"],{2294:function(t,a,e){"use strict";var n=e("4a2d"),o=e.n(n);o.a},"46c6":function(t,a,e){"use strict";var n,o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"add-address-container flex-direction"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.pageState.searchShow,expression:"!pageState.searchShow"}],staticClass:"from-box flex-direction"},[e("v-uni-form",{staticClass:"from-box",on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.formSubmit.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("联系人")]),e("v-uni-input",{attrs:{placeholder:"姓名",name:"name",type:"text"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("v-uni-view",{staticClass:"cu-form-group justify-start"},[e("v-uni-view",{staticClass:"title"}),e("v-uni-button",{staticClass:"cu-btn shadow",class:[1==t.formData.gender?"btn-bg-tag":"bg-white"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tagTap("gender",1)}}},[t._v("先生")]),e("v-uni-button",{staticClass:"cu-btn shadow",class:[0==t.formData.gender?"btn-bg-tag":"bg-white"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tagTap("gender",0)}}},[t._v("女士")]),e("v-uni-radio-group",{staticClass:"form-display",attrs:{name:"gender"},model:{value:t.formData.gender,callback:function(a){t.$set(t.formData,"gender",a)},expression:"formData.gender"}},[e("v-uni-label",[e("v-uni-radio",{attrs:{value:"1",checked:1==t.formData.gender}}),e("v-uni-text",[t._v("男")])],1),e("v-uni-label",[e("v-uni-radio",{attrs:{value:"0",checked:0==t.formData.gender}}),e("v-uni-text",[t._v("女")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("电话")]),e("v-uni-input",{attrs:{placeholder:"手机号码",name:"phone",type:"number"},model:{value:t.formData.phone,callback:function(a){t.$set(t.formData,"phone",a)},expression:"formData.phone"}})],1),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chooseAddress.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title"},[t._v("地址")]),e("v-uni-text",{staticClass:"placeholder flex flex-sub",class:[t.formData.address.position_address?"":"text-color-9"]},[t._v(t._s(t.formData.address.position_address?t.formData.address.position_address:"小区/写字楼/学校等"))]),e("v-uni-text",{staticClass:"lg text-gray",class:"cuIcon-right"}),e("v-uni-input",{staticClass:"form-display",attrs:{type:"text",name:"address"},model:{value:t.formData.address.position_address,callback:function(a){t.$set(t.formData.address,"position_address",a)},expression:"formData.address.position_address"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("门牌号")]),e("v-uni-input",{attrs:{placeholder:"10号楼5层501室222",name:"addressInfo"},model:{value:t.formData.addressInfo,callback:function(a){t.$set(t.formData,"addressInfo",a)},expression:"formData.addressInfo"}}),e("v-uni-text",{staticClass:"cuIcon-edit"})],1),e("v-uni-view",{staticClass:"cu-form-group justify-start"},[e("v-uni-view",{staticClass:"title"},[t._v("标签")]),e("v-uni-button",{staticClass:"cu-btn shadow",class:["家"===t.formData.tag?"btn-bg-tag":"bg-white"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tagTap("tag",0)}}},[t._v("家")]),e("v-uni-button",{staticClass:"cu-btn shadow",class:["学校"==t.formData.tag?"btn-bg-tag":"bg-white"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tagTap("tag",1)}}},[t._v("学校")]),e("v-uni-button",{staticClass:"cu-btn shadow",class:["公司"==t.formData.tag?"btn-bg-tag":"bg-white"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tagTap("tag",2)}}},[t._v("公司")]),e("v-uni-radio-group",{staticClass:"form-display",attrs:{name:"tag"},model:{value:t.formData.tag,callback:function(a){t.$set(t.formData,"tag",a)},expression:"formData.tag"}},[e("v-uni-label",[e("v-uni-radio",{attrs:{value:"家",checked:"家"===t.formData.tag}}),e("v-uni-text",[t._v("家")])],1),e("v-uni-label",[e("v-uni-radio",{attrs:{value:"学校",checked:"学校"===t.formData.tag}}),e("v-uni-text",[t._v("学校")])],1),e("v-uni-label",[e("v-uni-radio",{attrs:{value:"公司",checked:"公司"===t.formData.tag}}),e("v-uni-text",[t._v("公司")])],1)],1)],1),e("v-uni-view",{staticClass:"padding flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn btn-bg-green lg padding text-bold text-xl",attrs:{"form-type":"submit"}},[t._v("确定")])],1)],1)],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.pageState.searchShow,expression:"pageState.searchShow"}],staticClass:"search-address flex-direction flex-sub"},[e("v-uni-view",{staticClass:"cu-bar search bg-white"},[e("v-uni-view",{staticClass:"search-form round"},[e("v-uni-text",{staticClass:"cuIcon-search"}),e("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:"请输入小区/写字楼/学校等","confirm-type":"search"},on:{focus:function(a){arguments[0]=a=t.$handleEvent(a),t.InputFocus.apply(void 0,arguments)},blur:function(a){arguments[0]=a=t.$handleEvent(a),t.InputBlur.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-button",{staticClass:"cu-btn bg-blue-base shadow-blur round"},[t._v("搜索")])],1)],1),e("v-uni-view",{staticClass:"search-list flex-direction"},t._l(t.aroundAddList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"search-item flex-direction bg-white padding-sm border-bottom border-color-e",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAddress(a)}}},[e("v-uni-text",{staticClass:"add-name text-lg"},[t._v(t._s(a.position_name))]),e("v-uni-text",{staticClass:"add-info text-color-9 text-df"},[t._v(t._s(a.position_address))])],1)})),1)],1)],1)},i=[];e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}))},"4a2d":function(t,a,e){var n=e("83f7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("1e0a5579",n,!0,{sourceMap:!1,shadowMode:!1})},"57a2":function(t,a,e){"use strict";e.r(a);var n=e("b1a1"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"71dc":function(t,a,e){"use strict";e.r(a);var n=e("46c6"),o=e("57a2");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("2294");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"fec6b642",null,!1,n["a"],r);a["default"]=c.exports},"83f7":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 布局\r\n * \r\n */uni-view[data-v-fec6b642],\r\n.flex[data-v-fec6b642]{display:-webkit-box;display:-webkit-flex;display:flex}.vs-flex-item[data-v-fec6b642]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.vs-space-between[data-v-fec6b642]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.vs-space-around[data-v-fec6b642]{-webkit-justify-content:space-around;justify-content:space-around}.vs-space-center[data-v-fec6b642]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vs-space-end[data-v-fec6b642]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.vs-row[data-v-fec6b642]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.vs-column[data-v-fec6b642]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vs-align-end[data-v-fec6b642]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.vs-align-center[data-v-fec6b642]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vs-item-hover[data-v-fec6b642]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-fec6b642]{opacity:.8}\r\n/**\r\n * 基础背景颜色\r\n * \r\n */.bg-base[data-v-fec6b642]{background-color:#0097fd}.bg-page[data-v-fec6b642]{background-color:#f5f5f5}.bg-white[data-v-fec6b642]{background-color:#fff}.bg-green1[data-v-fec6b642]{background-color:#2cb98e}.bg-green2[data-v-fec6b642]{background-color:#00d762}.text-left[data-v-fec6b642]{text-align:left}.text-right[data-v-fec6b642]{text-align:right}.text-center[data-v-fec6b642]{text-align:center}\r\n/**\r\n * 基础文本颜色 \r\n * \r\n */.color-base[data-v-fec6b642]{color:#ab6ff6}.color-white[data-v-fec6b642]{color:#fff}.color-red[data-v-fec6b642]{color:#e84a54}.color-black2[data-v-fec6b642]{color:#222}.color-black3[data-v-fec6b642]{color:#333}.color-black4[data-v-fec6b642]{color:#444}.color-black6[data-v-fec6b642]{color:#666}.color-black7[data-v-fec6b642]{color:#777}.color-black8[data-v-fec6b642]{color:#888}.color-black9[data-v-fec6b642]{color:#999}.color-blue1[data-v-fec6b642]{color:#226fd1}.color-blue2[data-v-fec6b642]{color:#5ca3fc}.color-blue3[data-v-fec6b642]{color:#4399fc}.font-20[data-v-fec6b642]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-fec6b642]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-fec6b642]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-fec6b642]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-fec6b642]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-fec6b642]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-fec6b642]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-fec6b642]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-fec6b642]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-fec6b642]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-fec6b642]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-42[data-v-fec6b642]{font-style:normal;font-size:%?42?%;font-family:Droid Sans Fallback}.font-44[data-v-fec6b642]{font-style:normal;font-size:%?44?%;font-family:Droid Sans Fallback}.font-46[data-v-fec6b642]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-48[data-v-fec6b642]{font-style:normal;font-size:%?48?%;font-family:Droid Sans Fallback}.font-60[data-v-fec6b642]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-w400[data-v-fec6b642]{font-style:normal;font-weight:400}.font-w500[data-v-fec6b642]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.font-w600[data-v-fec6b642]{font-style:normal;font-weight:600;font-family:DroidSans-Bold}.font-w700[data-v-fec6b642]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.line20[data-v-fec6b642]{line-height:20}.line16[data-v-fec6b642]{line-height:16}.vun-hairline[data-v-fec6b642],\r\n.vun-hairline--bottom[data-v-fec6b642],\r\n.vun-hairline--left[data-v-fec6b642],\r\n.vun-hairline--right[data-v-fec6b642],\r\n.vun-hairline--surround[data-v-fec6b642],\r\n.vun-hairline--top[data-v-fec6b642],\r\n.vun-hairline--top-bottom[data-v-fec6b642]{position:relative;border-style:solid;border-color:#f5f5f5}.vun-hairline--top[data-v-fec6b642]{border-top-width:%?1?%}.vun-hairline--left[data-v-fec6b642]{border-left-width:%?1?%}.vun-hairline--right[data-v-fec6b642]{border-right-width:%?1?%}.vun-hairline--bottom[data-v-fec6b642]{border-bottom-width:%?1?%}.vun-hairline--top-bottom[data-v-fec6b642]{border-top-width:%?1?%;border-bottom-width:%?1?%}.vun-hairline--surround[data-v-fec6b642]{border-width:%?1?%}.margin-b5[data-v-fec6b642]{margin-bottom:%?5?%}.margin-b10[data-v-fec6b642]{margin-bottom:%?10?%}.margin-b15[data-v-fec6b642]{margin-bottom:%?15?%}.margin-b20[data-v-fec6b642]{margin-bottom:%?20?%}.margin-b25[data-v-fec6b642]{margin-bottom:%?25?%}.margin-b30[data-v-fec6b642]{margin-bottom:%?30?%}.margin-b35[data-v-fec6b642]{margin-bottom:%?35?%}.margin-b40[data-v-fec6b642]{margin-bottom:%?40?%}.margin-b50[data-v-fec6b642]{margin-bottom:%?50?%}.margin-b60[data-v-fec6b642]{margin-bottom:%?60?%}.margin-b70[data-v-fec6b642]{margin-bottom:%?70?%}.margin-b80[data-v-fec6b642]{margin-bottom:%?80?%}.whitespace-s[data-v-fec6b642]{padding-left:%?15?%;padding-right:%?15?%}.whitespace[data-v-fec6b642]{padding-left:%?30?%;padding-right:%?30?%}.cu-form-group .title[data-v-fec6b642]{min-width:calc(4em + 15px)}.title[data-v-fec6b642]{font-weight:600}.from-box[data-v-fec6b642]{width:%?750?%}.cu-form-group[data-v-fec6b642]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cu-form-group .cu-btn[data-v-fec6b642]{width:%?136?%;margin:0 %?10?%}.form-display[data-v-fec6b642]{display:none}',""]),t.exports=a},b1a1:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{formData:{name:null,gender:null,phone:null,address:{},addressInfo:null,tag:null},pageState:{searchShow:!1},aroundAddList:null,my_address:[]}},created:function(){var a=this;this.$http.get.address_data().then((function(t){a.aroundAddList=t.search_res}),(function(a){t.log("请求失败",a)}));try{this.my_address=JSON.parse(uni.getStorageSync("my_address"))}catch(e){t.log("获取缓存失败")}},methods:{chooseAddress:function(){this.$utils.log("chooseAddress","选择收货地址"),this.pageState.searchShow=!0},changeAddress:function(t){this.$utils.log("changeAddress","改变新的收货地址"),this.formData.address=t,this.pageState.searchShow=!1},tagTap:function(t,a){var e=["家","学校","公司"],n=this.formData[t];if("gender"==t){if(a==n)return;this.formData[t]=a}if("tag"==t){if(a==n)return void(this.formData[t]=null);this.formData[t]=e[a]}},formSubmit:function(a){t.log(a.detail.value),this.formData.name?this.formData.phone&&/^1[345789]\d{9}$/.test(this.formData.phone)?this.formData.address?(t.log("存储数据’"),this.my_address.push({name:this.formData.name,gender:this.formData.gender,phone:this.formData.phone,address:this.formData.address.position_address+this.formData.addressInfo,position_name:this.formData.address.position_name,tag:this.formData.tag}),uni.setStorage({key:"my_address",data:JSON.stringify(this.my_address),success:function(){t.log("success")}}),getCurrentPages().length<3?uni.redirectTo({url:"/pages/address/address"}):uni.navigateBack({delta:1})):uni.showToast({title:"请输入正确小区/写字楼/学校等信息",icon:"none"}):uni.showToast({title:"请输入正确的手机号",icon:"none"}):uni.showToast({title:"请输入联系人",icon:"none"})}}};a.default=e}).call(this,e("5a52")["default"])}}]);