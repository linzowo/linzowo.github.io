(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invoice-choose_invoice"],{"0063":function(a,t,n){var i=n("81b6");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var c=n("4f06").default;c("6476b173",i,!0,{sourceMap:!1,shadowMode:!1})},"0a79":function(a,t,n){"use strict";(function(a){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=i(n("5530")),o=n("2f62"),e={name:"choose_invoice",data:function(){return{invoiceList:[]}},computed:(0,c.default)({},(0,o.mapState)(["invoice"])),created:function(){try{var t=uni.getStorageSync("invoice_list");t&&(this.invoiceList=JSON.parse(t))}catch(n){a.log("获取缓存失败"),uni.setStorage({key:"invoice_list",data:"[]",success:function(){a.log("success")}})}},methods:(0,c.default)((0,c.default)({},(0,o.mapMutations)(["CONFIRM_INVOICE"])),{},{chooseInvoice:function(a){null!==a?this.CONFIRM_INVOICE(this.invoiceList[a]):this.CONFIRM_INVOICE(null)},editInvoice:function(t){uni.navigateTo({url:this.$pages_path.edit_invoice+"?index="+t,fail:function(t){a.log(t)}})},addInvoice:function(){uni.navigateTo({url:this.$pages_path.add_invoice,fail:function(t){a.log(t)}})}})};t.default=e}).call(this,n("5a52")["default"])},"27cc":function(a,t,n){"use strict";n.r(t);var i=n("0a79"),c=n.n(i);for(var o in i)"default"!==o&&function(a){n.d(t,a,(function(){return i[a]}))}(o);t["default"]=c.a},6895:function(a,t,n){"use strict";var i;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var c=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"flex-direction padding-tb"},[n("v-uni-view",{staticClass:"padding bg-white align-center",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chooseInvoice(null)}}},[n("v-uni-view",{staticClass:"confirm-tag-box text-xxl margin-right-xs"},[n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:null===a.invoice,expression:"invoice === null"}],staticClass:"lg text-green cuIcon-roundcheckfill"})],1),n("v-uni-text",{staticClass:"text-bold text-lg text-color-3"},[a._v("不需要发票")])],1),a.invoiceList.length?n("v-uni-view",{staticClass:"invoice-list flex-direction"},[n("v-uni-view",{staticClass:"padding-lr padding-top padding-bottom-xs text-color-6"},[n("v-uni-text",[a._v("发票信息")])],1),a._l(a.invoiceList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"invoice-item bg-white padding justify-between"},[n("v-uni-view",{staticClass:"align-center flex-sub",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chooseInvoice(i)}}},[n("v-uni-view",{staticClass:"confirm-tag-box text-xxl margin-right-xs"},[n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:JSON.stringify(a.invoice)==JSON.stringify(t),expression:"JSON.stringify(invoice) == JSON.stringify(item)"}],staticClass:"lg text-green cuIcon-roundcheckfill"})],1),"单位"==t.type?n("v-uni-view",{staticClass:"invoice-company flex-direction"},[n("v-uni-view",{staticClass:"align-center margin-bottom-xs"},[n("v-uni-view",{staticClass:"cu-tag line-blue sm margin-right-xs"},[n("v-uni-text",[a._v("单位")])],1),n("v-uni-text",{staticClass:"text-color-3 text-bold"},[a._v(a._s(t.name))])],1),n("v-uni-text",{staticClass:"text-color-9"},[a._v(a._s(t.tax_id))])],1):a._e(),"个人"==t.type?n("v-uni-view",{staticClass:"invoice-person align-center"},[n("v-uni-view",{staticClass:"cu-tag line-green sm margin-right-xs"},[n("v-uni-text",[a._v("个人")])],1),n("v-uni-text",{staticClass:"text-color-3 text-bold"},[a._v(a._s(t.name))])],1):a._e()],1),n("v-uni-view",{staticClass:"text-xxl"},[n("v-uni-text",{staticClass:"lg text-gray cuIcon-post margin-right-sm",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.editInvoice(i)}}})],1)],1)}))],2):a._e(),n("v-uni-view",{staticClass:"add-invoice-box justify-center bg-white align-center text-xl text-blue",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.addInvoice.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"lg cuIcon-roundadd margin-right-xs"}),n("v-uni-text",{},[a._v("新增发票信息")])],1)],1)},o=[]},"81b6":function(a,t,n){var i=n("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 布局\r\n * \r\n */uni-view[data-v-aac27cd8],\r\n.flex[data-v-aac27cd8]{display:-webkit-box;display:-webkit-flex;display:flex}.vs-flex-item[data-v-aac27cd8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.vs-space-between[data-v-aac27cd8]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.vs-space-around[data-v-aac27cd8]{-webkit-justify-content:space-around;justify-content:space-around}.vs-space-center[data-v-aac27cd8]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vs-space-end[data-v-aac27cd8]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.vs-row[data-v-aac27cd8]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.vs-column[data-v-aac27cd8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vs-align-end[data-v-aac27cd8]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.vs-align-center[data-v-aac27cd8]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vs-item-hover[data-v-aac27cd8]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-aac27cd8]{opacity:.8}\r\n/**\r\n * 基础背景颜色\r\n * \r\n */.bg-base[data-v-aac27cd8]{background-color:#0097fd}.bg-page[data-v-aac27cd8]{background-color:#f5f5f5}.bg-white[data-v-aac27cd8]{background-color:#fff}.bg-green1[data-v-aac27cd8]{background-color:#2cb98e}.bg-green2[data-v-aac27cd8]{background-color:#00d762}.text-left[data-v-aac27cd8]{text-align:left}.text-right[data-v-aac27cd8]{text-align:right}.text-center[data-v-aac27cd8]{text-align:center}\r\n/**\r\n * 基础文本颜色 \r\n * \r\n */.color-base[data-v-aac27cd8]{color:#ab6ff6}.color-white[data-v-aac27cd8]{color:#fff}.color-red[data-v-aac27cd8]{color:#e84a54}.color-black2[data-v-aac27cd8]{color:#222}.color-black3[data-v-aac27cd8]{color:#333}.color-black4[data-v-aac27cd8]{color:#444}.color-black6[data-v-aac27cd8]{color:#666}.color-black7[data-v-aac27cd8]{color:#777}.color-black8[data-v-aac27cd8]{color:#888}.color-black9[data-v-aac27cd8]{color:#999}.color-blue1[data-v-aac27cd8]{color:#226fd1}.color-blue2[data-v-aac27cd8]{color:#5ca3fc}.color-blue3[data-v-aac27cd8]{color:#4399fc}.font-20[data-v-aac27cd8]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-aac27cd8]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-aac27cd8]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-aac27cd8]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-aac27cd8]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-aac27cd8]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-aac27cd8]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-aac27cd8]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-aac27cd8]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-aac27cd8]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-aac27cd8]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-42[data-v-aac27cd8]{font-style:normal;font-size:%?42?%;font-family:Droid Sans Fallback}.font-44[data-v-aac27cd8]{font-style:normal;font-size:%?44?%;font-family:Droid Sans Fallback}.font-46[data-v-aac27cd8]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-48[data-v-aac27cd8]{font-style:normal;font-size:%?48?%;font-family:Droid Sans Fallback}.font-60[data-v-aac27cd8]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-w400[data-v-aac27cd8]{font-style:normal;font-weight:400}.font-w500[data-v-aac27cd8]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.font-w600[data-v-aac27cd8]{font-style:normal;font-weight:600;font-family:DroidSans-Bold}.font-w700[data-v-aac27cd8]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.line20[data-v-aac27cd8]{line-height:20}.line16[data-v-aac27cd8]{line-height:16}.vun-hairline[data-v-aac27cd8],\r\n.vun-hairline--bottom[data-v-aac27cd8],\r\n.vun-hairline--left[data-v-aac27cd8],\r\n.vun-hairline--right[data-v-aac27cd8],\r\n.vun-hairline--surround[data-v-aac27cd8],\r\n.vun-hairline--top[data-v-aac27cd8],\r\n.vun-hairline--top-bottom[data-v-aac27cd8]{position:relative;border-style:solid;border-color:#f5f5f5}.vun-hairline--top[data-v-aac27cd8]{border-top-width:%?1?%}.vun-hairline--left[data-v-aac27cd8]{border-left-width:%?1?%}.vun-hairline--right[data-v-aac27cd8]{border-right-width:%?1?%}.vun-hairline--bottom[data-v-aac27cd8]{border-bottom-width:%?1?%}.vun-hairline--top-bottom[data-v-aac27cd8]{border-top-width:%?1?%;border-bottom-width:%?1?%}.vun-hairline--surround[data-v-aac27cd8]{border-width:%?1?%}.margin-b5[data-v-aac27cd8]{margin-bottom:%?5?%}.margin-b10[data-v-aac27cd8]{margin-bottom:%?10?%}.margin-b15[data-v-aac27cd8]{margin-bottom:%?15?%}.margin-b20[data-v-aac27cd8]{margin-bottom:%?20?%}.margin-b25[data-v-aac27cd8]{margin-bottom:%?25?%}.margin-b30[data-v-aac27cd8]{margin-bottom:%?30?%}.margin-b35[data-v-aac27cd8]{margin-bottom:%?35?%}.margin-b40[data-v-aac27cd8]{margin-bottom:%?40?%}.margin-b50[data-v-aac27cd8]{margin-bottom:%?50?%}.margin-b60[data-v-aac27cd8]{margin-bottom:%?60?%}.margin-b70[data-v-aac27cd8]{margin-bottom:%?70?%}.margin-b80[data-v-aac27cd8]{margin-bottom:%?80?%}.whitespace-s[data-v-aac27cd8]{padding-left:%?15?%;padding-right:%?15?%}.whitespace[data-v-aac27cd8]{padding-left:%?30?%;padding-right:%?30?%}.add-invoice-box[data-v-aac27cd8]{position:fixed;bottom:0;left:0;right:0;height:%?100?%}.confirm-tag-box[data-v-aac27cd8]{min-width:%?44?%}',""]),a.exports=t},bf5c:function(a,t,n){"use strict";var i=n("0063"),c=n.n(i);c.a},e45e:function(a,t,n){"use strict";n.r(t);var i=n("6895"),c=n("27cc");for(var o in c)"default"!==o&&function(a){n.d(t,a,(function(){return c[a]}))}(o);n("bf5c");var e,r=n("f0c5"),d=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"aac27cd8",null,!1,i["a"],e);t["default"]=d.exports}}]);