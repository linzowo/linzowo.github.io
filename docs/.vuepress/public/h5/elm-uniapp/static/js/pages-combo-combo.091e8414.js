(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-combo-combo"],{"05a7":function(t,a,o){var n=o("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 布局\r\n * \r\n */uni-view[data-v-4aa7dc53],\r\n.flex[data-v-4aa7dc53]{display:-webkit-box;display:-webkit-flex;display:flex}.vs-flex-item[data-v-4aa7dc53]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.vs-space-between[data-v-4aa7dc53]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.vs-space-around[data-v-4aa7dc53]{-webkit-justify-content:space-around;justify-content:space-around}.vs-space-center[data-v-4aa7dc53]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vs-space-end[data-v-4aa7dc53]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.vs-row[data-v-4aa7dc53]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.vs-column[data-v-4aa7dc53]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vs-align-end[data-v-4aa7dc53]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.vs-align-center[data-v-4aa7dc53]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vs-item-hover[data-v-4aa7dc53]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-4aa7dc53]{opacity:.8}\r\n/**\r\n * 基础背景颜色\r\n * \r\n */.bg-base[data-v-4aa7dc53]{background-color:#0097fd}.bg-page[data-v-4aa7dc53]{background-color:#f5f5f5}.bg-white[data-v-4aa7dc53]{background-color:#fff}.bg-green1[data-v-4aa7dc53]{background-color:#2cb98e}.bg-green2[data-v-4aa7dc53]{background-color:#00d762}.text-left[data-v-4aa7dc53]{text-align:left}.text-right[data-v-4aa7dc53]{text-align:right}.text-center[data-v-4aa7dc53]{text-align:center}\r\n/**\r\n * 基础文本颜色 \r\n * \r\n */.color-base[data-v-4aa7dc53]{color:#ab6ff6}.color-white[data-v-4aa7dc53]{color:#fff}.color-red[data-v-4aa7dc53]{color:#e84a54}.color-black2[data-v-4aa7dc53]{color:#222}.color-black3[data-v-4aa7dc53]{color:#333}.color-black4[data-v-4aa7dc53]{color:#444}.color-black6[data-v-4aa7dc53]{color:#666}.color-black7[data-v-4aa7dc53]{color:#777}.color-black8[data-v-4aa7dc53]{color:#888}.color-black9[data-v-4aa7dc53]{color:#999}.color-blue1[data-v-4aa7dc53]{color:#226fd1}.color-blue2[data-v-4aa7dc53]{color:#5ca3fc}.color-blue3[data-v-4aa7dc53]{color:#4399fc}.font-20[data-v-4aa7dc53]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-4aa7dc53]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-4aa7dc53]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-4aa7dc53]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-4aa7dc53]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-4aa7dc53]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-4aa7dc53]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-4aa7dc53]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-4aa7dc53]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-4aa7dc53]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-4aa7dc53]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-42[data-v-4aa7dc53]{font-style:normal;font-size:%?42?%;font-family:Droid Sans Fallback}.font-44[data-v-4aa7dc53]{font-style:normal;font-size:%?44?%;font-family:Droid Sans Fallback}.font-46[data-v-4aa7dc53]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-48[data-v-4aa7dc53]{font-style:normal;font-size:%?48?%;font-family:Droid Sans Fallback}.font-60[data-v-4aa7dc53]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-w400[data-v-4aa7dc53]{font-style:normal;font-weight:400}.font-w500[data-v-4aa7dc53]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.font-w600[data-v-4aa7dc53]{font-style:normal;font-weight:600;font-family:DroidSans-Bold}.font-w700[data-v-4aa7dc53]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.line20[data-v-4aa7dc53]{line-height:20}.line16[data-v-4aa7dc53]{line-height:16}.vun-hairline[data-v-4aa7dc53],\r\n.vun-hairline--bottom[data-v-4aa7dc53],\r\n.vun-hairline--left[data-v-4aa7dc53],\r\n.vun-hairline--right[data-v-4aa7dc53],\r\n.vun-hairline--surround[data-v-4aa7dc53],\r\n.vun-hairline--top[data-v-4aa7dc53],\r\n.vun-hairline--top-bottom[data-v-4aa7dc53]{position:relative;border-style:solid;border-color:#f5f5f5}.vun-hairline--top[data-v-4aa7dc53]{border-top-width:%?1?%}.vun-hairline--left[data-v-4aa7dc53]{border-left-width:%?1?%}.vun-hairline--right[data-v-4aa7dc53]{border-right-width:%?1?%}.vun-hairline--bottom[data-v-4aa7dc53]{border-bottom-width:%?1?%}.vun-hairline--top-bottom[data-v-4aa7dc53]{border-top-width:%?1?%;border-bottom-width:%?1?%}.vun-hairline--surround[data-v-4aa7dc53]{border-width:%?1?%}.margin-b5[data-v-4aa7dc53]{margin-bottom:%?5?%}.margin-b10[data-v-4aa7dc53]{margin-bottom:%?10?%}.margin-b15[data-v-4aa7dc53]{margin-bottom:%?15?%}.margin-b20[data-v-4aa7dc53]{margin-bottom:%?20?%}.margin-b25[data-v-4aa7dc53]{margin-bottom:%?25?%}.margin-b30[data-v-4aa7dc53]{margin-bottom:%?30?%}.margin-b35[data-v-4aa7dc53]{margin-bottom:%?35?%}.margin-b40[data-v-4aa7dc53]{margin-bottom:%?40?%}.margin-b50[data-v-4aa7dc53]{margin-bottom:%?50?%}.margin-b60[data-v-4aa7dc53]{margin-bottom:%?60?%}.margin-b70[data-v-4aa7dc53]{margin-bottom:%?70?%}.margin-b80[data-v-4aa7dc53]{margin-bottom:%?80?%}.whitespace-s[data-v-4aa7dc53]{padding-left:%?15?%;padding-right:%?15?%}.whitespace[data-v-4aa7dc53]{padding-left:%?30?%;padding-right:%?30?%}uni-page-body[data-v-4aa7dc53]{background-color:#fff}.store-img[data-v-4aa7dc53]{width:%?80?%}.combo-img[data-v-4aa7dc53]{width:%?218?%}.store-tag[data-v-4aa7dc53]{color:#a45b1c;border-color:#a45b1c}.line[data-v-4aa7dc53]{width:1px;height:%?20?%;background-color:#ccc;margin:0 %?15?%}.store-name[data-v-4aa7dc53]{width:%?350?%}.combo-description[data-v-4aa7dc53], .combo-title[data-v-4aa7dc53]{width:%?460?%}.combo-description[data-v-4aa7dc53]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.text-price[data-v-4aa7dc53]{color:#b91f20}body.?%PAGE?%[data-v-4aa7dc53]{background-color:#fff}',""]),t.exports=a},3418:function(t,a,o){"use strict";var n=o("c129"),e=o.n(n);e.a},"41cf":function(t,a,o){"use strict";o.r(a);var n=o("7e5d"),e=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(a,t,(function(){return n[t]}))}(i);a["default"]=e.a},"68c4":function(t,a,o){"use strict";o.r(a);var n=o("747d"),e=o("41cf");for(var i in e)"default"!==i&&function(t){o.d(a,t,(function(){return e[t]}))}(i);o("3418");var r,c=o("f0c5"),s=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"4aa7dc53",null,!1,n["a"],r);a["default"]=s.exports},"747d":function(t,a,o){"use strict";var n,e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",{staticClass:"combo-container flex-direction"},[o("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-into-view":t.categotyID}},t._l(t.navData,(function(a,n){return o("v-uni-view",{key:n,staticClass:"cu-item",class:n==t.TabCur?"text-green cur":"",attrs:{id:"cu-item"+n,"data-id":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect(n)}}},[t._v(t._s(a.name))])})),1),o("v-uni-view",{staticClass:"body flex-sub flex-direction"},[o("v-uni-view",{staticClass:"store-list flex-direction flex-sub"},t._l(t.storeList,(function(a,n){return o("v-uni-view",{key:n,staticClass:"store-item flex-direction flex-sub border-bottom border-color-e padding"},[o("v-uni-view",{staticClass:"store-info justify-between align-center margin-bottom",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.storeTap(a.restaurant.id)}}},[o("v-uni-image",{staticClass:"store-img margin-right-sm",attrs:{src:t._f("imgUrlFilter")(a.restaurant.image_path),mode:"widthFix"}}),o("v-uni-view",{staticClass:"flex-sub justify-start flex-direction"},[o("v-uni-view",{staticClass:"justify-between margin-bottom-xs align-center"},[o("v-uni-text",{staticClass:"store-name text-color-6 text-cut"},[t._v(t._s(a.restaurant.name))]),o("v-uni-view",{staticClass:"rating-sale text-xs text-color-c align-center"},[o("v-uni-text",{},[t._v("评分"+t._s(a.restaurant.rating))]),o("v-uni-text",{staticClass:"line"}),o("v-uni-text",[t._v("月售"+t._s(a.restaurant.recent_order_num))])],1)],1),o("v-uni-view",t._l(a.restaurant.recommend_reasons,(function(a,n){return o("v-uni-text",{key:n,staticClass:"store-tag border padding-lr-xs text-xs text-scale-9"},[t._v(t._s(a.name))])})),1)],1)],1),o("v-uni-view",{staticClass:"combo-list flex-direction"},[t._l(a.foods.slice(0,1),(function(n,e){return o("v-uni-view",{key:n.food_id,staticClass:"combo-item margin-bottom",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.comboTap(a.restaurant.id,n.food_id)}}},[o("v-uni-image",{staticClass:"combo-img margin-right-sm",attrs:{src:t._f("imgUrlFilter")(n.image_path),mode:"widthFix"}}),o("v-uni-view",{staticClass:"combo-info flex-direction justify-between"},[o("v-uni-view",{staticClass:"flex-direction"},[o("v-uni-text",{staticClass:"combo-title text-lg text-cut margin-bottom-xs"},[t._v(t._s(n.name))]),o("v-uni-text",{staticClass:"combo-description text-sm text-color-9"},[t._v(t._s(n.description.replace(/\n/g,"")))])],1),o("v-uni-view",{staticClass:"combo-buy justify-between"},[o("v-uni-text",{staticClass:"text-price text-xl text-bold"},[t._v(t._s(n.price))]),o("v-uni-text",{staticClass:"lg text-xxl text-color-3 cuIcon-roundaddfill"})],1)],1)],1)})),t._l(a.foods.slice(1),(function(e,i){return o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showMoreGoods.includes(n),expression:"showMoreGoods.includes(index)"}],key:e.food_id,staticClass:"combo-item margin-bottom",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.comboTap(a.restaurant.id,e.food_id)}}},[o("v-uni-image",{staticClass:"combo-img margin-right-sm",attrs:{src:t._f("imgUrlFilter")(e.image_path),mode:"widthFix"}}),o("v-uni-view",{staticClass:"combo-info flex-direction justify-between"},[o("v-uni-view",{staticClass:"flex-direction"},[o("v-uni-text",{staticClass:"combo-title text-lg text-cut margin-bottom-xs"},[t._v(t._s(e.name))]),o("v-uni-text",{staticClass:"combo-description text-sm text-color-9"},[t._v(t._s(e.description.replace(/\n/g,"")))])],1),o("v-uni-view",{staticClass:"combo-buy justify-between"},[o("v-uni-text",{staticClass:"text-price text-xl text-bold"},[t._v(t._s(e.price))]),o("v-uni-text",{staticClass:"lg text-xxl text-color-3 cuIcon-roundaddfill"})],1)],1)],1)}))],2),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.showMoreGoods.includes(n),expression:"!showMoreGoods.includes(index)"}],staticClass:"show-more padding-sm justify-center text-color-9 align-center",on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.controlGoodsList(n)}}},[o("v-uni-text",[t._v("展开更多套餐 "+t._s(a.foods.length-1)+"个")]),o("v-uni-text",{staticClass:"lg text-gray cuIcon-unfold margin-left-xs"})],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showMoreGoods.includes(n),expression:"showMoreGoods.includes(index)"}],staticClass:"show-more padding-sm justify-center text-color-9 align-center",on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.controlGoodsList(n)}}},[o("v-uni-text",[t._v("收起")]),o("v-uni-text",{staticClass:"lg text-gray cuIcon-fold margin-left-xs"})],1)],1)})),1),o("v-uni-view",{staticClass:"list-end align-center justify-center"},[o("v-uni-view",{staticClass:"cu-load",class:t.hasNext?"loading":"over"})],1)],1)],1)},i=[];o.d(a,"b",(function(){return e})),o.d(a,"c",(function(){return i})),o.d(a,"a",(function(){return n}))},"7e5d":function(t,a,o){"use strict";(function(t){o("caad"),o("c975"),o("a434"),o("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{TabCur:0,categotyID:null,navData:[],storeList:[],showMoreGoods:[],hasNext:!1}},created:function(){var a,o=this;uni.showLoading({title:""});try{a=JSON.parse(uni.getStorageSync("combo_data")),this.navData=a.tabs,this.storeList=a.query_list,uni.hideLoading()}catch(n){t.log("获取缓存失败")}a&&!this._.isEmpty(a)||this.$http.get.combo_data().then((function(a){o.navData=a.tabs,o.storeList=a.query_list,uni.hideLoading(),uni.setStorage({key:"combo_data",data:JSON.stringify(a),success:function(){t.log("存储combo_data成功")}})}),(function(a){t.log("请求失败",a)}))},onReachBottom:function(){this.getMore()},methods:{comboTap:function(a,o){uni.navigateTo({url:this.$pages_path.store_index+"?food_id="+o+"&store_id="+a,fail:function(a){t.log("跳转失败")}})},storeTap:function(a){uni.navigateTo({url:this.$pages_path.store_index+"?store_id="+a,fail:function(a){t.log("跳转失败")}})},tabSelect:function(t){this.$utils.log("tabSelect","切换分类"),this.TabCur=t,this.categotyID="cu-item"+t},controlGoodsList:function(t){this.showMoreGoods.includes(t)?this.showMoreGoods.splice(this.showMoreGoods.indexOf(t),1):this.showMoreGoods.push(t)},getMore:function(){this.hasNext&&this.$utils.log("getMore","获取更多套餐数据")}}};a.default=n}).call(this,o("5a52")["default"])},c129:function(t,a,o){var n=o("05a7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=o("4f06").default;e("7c175072",n,!0,{sourceMap:!1,shadowMode:!1})}}]);