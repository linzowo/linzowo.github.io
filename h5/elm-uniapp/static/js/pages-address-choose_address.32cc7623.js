(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-choose_address"],{"2c52":function(t,e,a){"use strict";a.r(e);var n=a("cd6d"),i=a("72fb");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("efdd");var s,r=a("f0c5"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"0b6246be",null,!1,n["a"],s);e["default"]=d.exports},"58a5":function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("caad"),a("a434"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=a("2f62"),s={name:"choose_address",data:function(){return{myAddress:[],deleteIndex:null,pageState:{loading:!0},deleteTips:{title:"删除地址",content:"确定要删除地址"}}},computed:(0,i.default)({},(0,o.mapState)(["userInfo"])),created:function(){var e=this;try{var a=uni.getStorageSync("my_address");a&&(this.myAddress=JSON.parse(a)),this.pageState.loading=!1}catch(n){t.log("获取缓存失败")}this.myAddress&&this.myAddress.length||this.$http.get.address_data().then((function(a){e.myAddress=a.my_address,e.pageState.loading=!1,uni.setStorage({key:"my_address",data:JSON.stringify(a.my_address),success:function(){t.log("存储my_address成功")}})}),(function(a){t.log("请求失败",a),e.pageState.loading=!1}))},methods:(0,i.default)((0,i.default)({},(0,o.mapMutations)(["SAVE_SHIP_ADDRESS"])),{},{addAddress:function(){uni.navigateTo({url:this.$pages_path.add_address,fail:function(e){t.log(e)}})},editAddress:function(e){t.log("编辑地址",e),uni.navigateTo({url:this.$pages_path.edit_address,fail:function(e){t.log(e)}})},deleteAddress:function(e){t.log("删除地址",e),this.$refs.deletePopup.open(),this.deleteIndex=e},close:function(e){t.log("取消"),this.deleteIndex=null,e()},confirm:function(e){t.log("确定"),this.myAddress.splice(this.deleteIndex,1),this.deleteIndex=null,JSON.stringify(this.myAddress).includes(JSON.stringify(this.userInfo.shipAddress))||this.SAVE_SHIP_ADDRESS(this.myAddress[0]),uni.setStorage({key:"my_address",data:JSON.stringify(this.myAddress),success:function(){t.log("success")}}),e()}})};e.default=s}).call(this,a("5a52")["default"])},"72fb":function(t,e,a){"use strict";a.r(e);var n=a("58a5"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"739b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 布局\r\n * \r\n */uni-view[data-v-0b6246be],\r\n.flex[data-v-0b6246be]{display:-webkit-box;display:-webkit-flex;display:flex}.vs-flex-item[data-v-0b6246be]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.vs-space-between[data-v-0b6246be]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.vs-space-around[data-v-0b6246be]{-webkit-justify-content:space-around;justify-content:space-around}.vs-space-center[data-v-0b6246be]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vs-space-end[data-v-0b6246be]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.vs-row[data-v-0b6246be]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.vs-column[data-v-0b6246be]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vs-align-end[data-v-0b6246be]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.vs-align-center[data-v-0b6246be]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vs-item-hover[data-v-0b6246be]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-0b6246be]{opacity:.8}\r\n/**\r\n * 基础背景颜色\r\n * \r\n */.bg-base[data-v-0b6246be]{background-color:#0097fd}.bg-page[data-v-0b6246be]{background-color:#f5f5f5}.bg-white[data-v-0b6246be]{background-color:#fff}.bg-green1[data-v-0b6246be]{background-color:#2cb98e}.bg-green2[data-v-0b6246be]{background-color:#00d762}.text-left[data-v-0b6246be]{text-align:left}.text-right[data-v-0b6246be]{text-align:right}.text-center[data-v-0b6246be]{text-align:center}\r\n/**\r\n * 基础文本颜色 \r\n * \r\n */.color-base[data-v-0b6246be]{color:#ab6ff6}.color-white[data-v-0b6246be]{color:#fff}.color-red[data-v-0b6246be]{color:#e84a54}.color-black2[data-v-0b6246be]{color:#222}.color-black3[data-v-0b6246be]{color:#333}.color-black4[data-v-0b6246be]{color:#444}.color-black6[data-v-0b6246be]{color:#666}.color-black7[data-v-0b6246be]{color:#777}.color-black8[data-v-0b6246be]{color:#888}.color-black9[data-v-0b6246be]{color:#999}.color-blue1[data-v-0b6246be]{color:#226fd1}.color-blue2[data-v-0b6246be]{color:#5ca3fc}.color-blue3[data-v-0b6246be]{color:#4399fc}.font-20[data-v-0b6246be]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-0b6246be]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-0b6246be]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-0b6246be]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-0b6246be]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-0b6246be]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-0b6246be]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-0b6246be]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-0b6246be]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-0b6246be]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-0b6246be]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-42[data-v-0b6246be]{font-style:normal;font-size:%?42?%;font-family:Droid Sans Fallback}.font-44[data-v-0b6246be]{font-style:normal;font-size:%?44?%;font-family:Droid Sans Fallback}.font-46[data-v-0b6246be]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-48[data-v-0b6246be]{font-style:normal;font-size:%?48?%;font-family:Droid Sans Fallback}.font-60[data-v-0b6246be]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-w400[data-v-0b6246be]{font-style:normal;font-weight:400}.font-w500[data-v-0b6246be]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.font-w600[data-v-0b6246be]{font-style:normal;font-weight:600;font-family:DroidSans-Bold}.font-w700[data-v-0b6246be]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.line20[data-v-0b6246be]{line-height:20}.line16[data-v-0b6246be]{line-height:16}.vun-hairline[data-v-0b6246be],\r\n.vun-hairline--bottom[data-v-0b6246be],\r\n.vun-hairline--left[data-v-0b6246be],\r\n.vun-hairline--right[data-v-0b6246be],\r\n.vun-hairline--surround[data-v-0b6246be],\r\n.vun-hairline--top[data-v-0b6246be],\r\n.vun-hairline--top-bottom[data-v-0b6246be]{position:relative;border-style:solid;border-color:#f5f5f5}.vun-hairline--top[data-v-0b6246be]{border-top-width:%?1?%}.vun-hairline--left[data-v-0b6246be]{border-left-width:%?1?%}.vun-hairline--right[data-v-0b6246be]{border-right-width:%?1?%}.vun-hairline--bottom[data-v-0b6246be]{border-bottom-width:%?1?%}.vun-hairline--top-bottom[data-v-0b6246be]{border-top-width:%?1?%;border-bottom-width:%?1?%}.vun-hairline--surround[data-v-0b6246be]{border-width:%?1?%}.margin-b5[data-v-0b6246be]{margin-bottom:%?5?%}.margin-b10[data-v-0b6246be]{margin-bottom:%?10?%}.margin-b15[data-v-0b6246be]{margin-bottom:%?15?%}.margin-b20[data-v-0b6246be]{margin-bottom:%?20?%}.margin-b25[data-v-0b6246be]{margin-bottom:%?25?%}.margin-b30[data-v-0b6246be]{margin-bottom:%?30?%}.margin-b35[data-v-0b6246be]{margin-bottom:%?35?%}.margin-b40[data-v-0b6246be]{margin-bottom:%?40?%}.margin-b50[data-v-0b6246be]{margin-bottom:%?50?%}.margin-b60[data-v-0b6246be]{margin-bottom:%?60?%}.margin-b70[data-v-0b6246be]{margin-bottom:%?70?%}.margin-b80[data-v-0b6246be]{margin-bottom:%?80?%}.whitespace-s[data-v-0b6246be]{padding-left:%?15?%;padding-right:%?15?%}.whitespace[data-v-0b6246be]{padding-left:%?30?%;padding-right:%?30?%}.choose-address-container[data-v-0b6246be]{padding-bottom:%?120?%}.add-address-btn-box[data-v-0b6246be]{position:fixed;bottom:0;left:0;right:0;height:%?100?%}.choose-tag-box[data-v-0b6246be]{min-width:%?55?%;min-height:%?55?%}.user-box[data-v-0b6246be]{width:%?535?%}.type-tag[data-v-0b6246be]{height:%?30?%;padding:%?5?%}.over-distance-box[data-v-0b6246be]{opacity:.5}',""]),t.exports=e},ab95:function(t,e,a){var n=a("739b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3d3ad4b0",n,!0,{sourceMap:!1,shadowMode:!1})},cd6d:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={loading:a("006f").default,uniPopup:a("fc61").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"choose-address-container flex-direction"},[a("loading",{attrs:{loading:t.pageState.loading,success:0!==t.myAddress.length}}),t.pageState.loading?t._e():a("v-uni-view",{staticClass:"flex-direction"},[a("v-uni-view",{staticClass:"flex-direction address-list"},t._l(t.myAddress,(function(e,n){return a("v-uni-view",{key:n,staticClass:"address-item padding bg-white justify-between align-center"},[a("v-uni-view",{staticClass:"align-center",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.SAVE_SHIP_ADDRESS(e)}}},[a("v-uni-view",{staticClass:"choose-tag-box margin-right-xs text-xxl"},[a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:JSON.stringify(e)==JSON.stringify(t.userInfo.shipAddress),expression:"JSON.stringify(item) == JSON.stringify(userInfo.shipAddress)"}],staticClass:"lg text-green cuIcon-roundcheckfill"})],1),a("v-uni-view",{staticClass:"user-box flex-direction"},[a("v-uni-view",{staticClass:"align-center text-xl"},[a("v-uni-text",{staticClass:"text-bold text-color-3 margin-right-xs"},[t._v(t._s(e.name))]),null!==e.gender?a("v-uni-text",{staticClass:"margin-right-xs"},[t._v(t._s(e.gender?"先生":"女士"))]):t._e(),a("v-uni-text",{},[t._v(t._s(e.phone))])],1),a("v-uni-view",{staticClass:"align-center"},[e.tag?a("v-uni-view",{staticClass:"cu-tag line-blue type-tag margin-right-xs"},[t._v(t._s(e.tag))]):t._e(),a("v-uni-text",{},[t._v(t._s(e.address))])],1)],1)],1),a("v-uni-view",{staticClass:"text-xxl"},[a("v-uni-text",{staticClass:"lg text-gray cuIcon-post margin-right-sm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editAddress(n)}}}),a("v-uni-text",{staticClass:"lg text-gray cuIcon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteAddress(n)}}})],1)],1)})),1),a("v-uni-view",{staticClass:"flex-direction address-list"},[a("v-uni-view",{staticClass:"padding padding-bottom-xs text-color-6"},[a("v-uni-text",[t._v("以下地址超出配送范围")])],1),t._l(t.myAddress,(function(e,n){return a("v-uni-view",{key:n,staticClass:"address-item padding bg-white justify-between align-center"},[a("v-uni-view",{staticClass:"align-center"},[a("v-uni-view",{staticClass:"flex-direction over-distance-box"},[a("v-uni-view",{staticClass:"align-center text-lg"},[a("v-uni-text",{staticClass:"text-bold text-color-3 margin-right-xs"},[t._v(t._s(e.name))]),null!==e.gender?a("v-uni-text",{staticClass:"margin-right-xs"},[t._v(t._s(e.gender?"先生":"女士"))]):t._e(),a("v-uni-text",{},[t._v(t._s(e.phone))])],1),a("v-uni-view",{staticClass:"align-center"},[e.tag?a("v-uni-view",{staticClass:"cu-tag line-blue type-tag margin-right-xs"},[t._v(t._s(e.tag))]):t._e(),a("v-uni-text",{},[t._v(t._s(e.address))])],1)],1)],1),a("v-uni-view",{staticClass:"text-xxl"},[a("v-uni-text",{staticClass:"lg text-gray cuIcon-post margin-right-sm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editAddress(n)}}}),a("v-uni-text",{staticClass:"lg text-gray cuIcon-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteAddress(n)}}})],1)],1)}))],2)],1),a("v-uni-view",{staticClass:"add-address-btn-box bg-white justify-center align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"lg text-color-blue-0 text-xxl cuIcon-roundadd margin-right-xs"}),a("v-uni-text",{staticClass:"text-color-blue text-lg"},[t._v("新增收货地址")])],1),a("uni-popup",{ref:"deletePopup",attrs:{type:"dialog"}},[a("uni-popup-dialog",{style:{display:"block"},attrs:{message:"成功消息",duration:2e3,"before-close":!0,title:t.deleteTips.title,content:t.deleteTips.content},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}})],1)],1)},o=[]},efdd:function(t,e,a){"use strict";var n=a("ab95"),i=a.n(n);i.a}}]);