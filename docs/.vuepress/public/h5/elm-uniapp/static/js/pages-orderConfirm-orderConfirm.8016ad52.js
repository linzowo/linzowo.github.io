(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orderConfirm-orderConfirm"],{"2cb7":function(e,t,i){"use strict";(function(e){var a=i("ee27");i("caad"),i("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("f3f3")),r=i("2f62"),l=a(i("b7b6")),o={name:"orderConfirm",components:{mpvuePicker:l.default},data:function(){return{orderId:null,orderData:{},cart:{},storeData:{},goodsList:[],redpackData:{},deliverTimes:[],deliverTimesCur:[0,0],deliverTimesTabIndex:0,dinnerwareCount:null,pickerValueArray:[],pageState:{loading:!0},popupStack:[]}},computed:(0,n.default)({},(0,r.mapState)(["userInfo","note","invoice"])),onLoad:function(e){this.orderId=e.order_id},created:function(){var t=this;this.$http.get.order_data().then((function(e){t.orderData=e,t.cart=e.cart,t.goodsList=e.cart.group[0],t.storeData=e.cart.restaurant,t.redpackData=e.hongpon_info,t.deliverTimes=e.deliver_times,t.pageState.loading=!1}),(function(i){e.log("请求失败",i),t.pageState.loading=!1}));for(var i=0;i<12;i++){var a="";a=i+"份",0==i&&(a="无需餐具"),11==i&&(a="10份以上"),this.pickerValueArray.push({label:a,value:i})}},onBackPress:function(e){return this.$refs.dinnerwarePopup.showPicker?(this.$refs.dinnerwarePopup.pickerCancel(),!0):this.popupStack.length>0?(this.closePopup(this.popupStack[this.popupStack.length-1]),!0):void 0},onUnload:function(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel()},methods:(0,n.default)({pay:function(){var t=null,i=null;try{i=JSON.parse(uni.getStorageSync("cart_map"))}catch(a){e.log(a)}try{t=JSON.parse(uni.getStorageSync("unpaid_order"))}catch(a){e.log(a)}t||(t={}),t[this.orderId]={info:i[this.orderId],expires:this._.now()+9e5},uni.setStorage({key:"unpaid_order",data:JSON.stringify(t),success:function(){e.log("success")}}),this.REMOVE_CART(this.orderId),uni.navigateTo({url:this.$pages_path.pay,fail:function(t){e.log(t)}})},invoiceTap:function(){e.log("开发票"),uni.navigateTo({url:this.$pages_path.choose_invoice,fail:function(t){e.log(t)}})},noteTap:function(){uni.navigateTo({url:this.$pages_path.order_note,fail:function(t){e.log(t)}})},showSinglePicker:function(){this.$refs.dinnerwarePopup.show()},onCancel:function(e){},onConfirm:function(t){e.log(t.value[0]),this.dinnerwareCount=t.value[0]},switchDelicerTab:function(e){this.deliverTimesTabIndex=e},chooseDeliverTimes:function(e){this.$set(this.deliverTimesCur,0,this.deliverTimesTabIndex),this.$set(this.deliverTimesCur,1,e)},chooseAddress:function(){uni.navigateTo({url:this.$pages_path.choose_address,fail:function(t){e.log(t)}})},popupChange:function(e){this.$utils.log("popupChange","弹窗状态改变==>"+(e.show?"开":"关"),e),0==e.show&&this.popupStack.pop()},openPopup:function(e){this.$utils.log("openPopup","打开弹窗"+e),this.popupStack.includes(e)||(this.popupStack.push(e),this.$refs[e].open())},closePopup:function(e){this.$utils.log("closePopup","关闭弹窗"+e),this.$refs[e].close()}},(0,r.mapMutations)(["REMOVE_CART"]))};t.default=o}).call(this,i("5a52")["default"])},3130:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"mpvue-picker"},[i("v-uni-view",{class:{pickerMask:e.showPicker},attrs:{catchtouchmove:"true"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.maskClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"mpvue-picker-content flex-direction",class:{"mpvue-picker-view-show":e.showPicker}},[i("v-uni-view",{staticClass:"mpvue-picker__hd align-center",attrs:{catchtouchmove:"true"}},[i("v-uni-view",{staticClass:"mpvue-picker__action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerCancel.apply(void 0,arguments)}}},[i("v-uni-text",{},[e._v("取消")])],1),i("v-uni-view",{staticClass:"padding-sm"},[i("v-uni-text",[e._v("选择本单餐具")])],1),i("v-uni-view",{staticClass:"mpvue-picker__action",style:{color:e.themeColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerConfirm.apply(void 0,arguments)}}},[i("v-uni-text",{},[e._v("确定")])],1)],1),"selector"===e.mode&&e.pickerValueSingleArray.length>0?i("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)}}},[[i("v-uni-picker-view-column",e._l(e.pickerValueSingleArray,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item justify-center align-center"},["无需餐具"==t.label?i("v-uni-view",{staticClass:"flex-direction align-center",style:{lineHeight:1.5}},[i("v-uni-view",{staticClass:"align-center"},[i("v-uni-image",{staticClass:"margin-right-xs",style:{width:"32rpx"},attrs:{src:e.$i_u.green_leaf,mode:"widthFix"}}),i("v-uni-text",[e._v(e._s(t.label))])],1),i("v-uni-text",{staticClass:"text-xs",style:{color:"#0bb473"}},[e._v("选无需餐具，马上助力环保")])],1):i("v-uni-view",[e._v(e._s(t.label))])],1)})),1)]],2):e._e(),"timeSelector"===e.mode?i("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)}}},[[i("v-uni-picker-view-column",e._l(e.pickerValueHour,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1),i("v-uni-picker-view-column",e._l(e.pickerValueMinute,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1)]],2):e._e(),"multiSelector"===e.mode?i("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)}}},[e._l(e.pickerValueMulArray.length,(function(t,a){return[i("v-uni-picker-view-column",e._l(e.pickerValueMulArray[t],(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1)]}))],2):e._e(),"multiLinkageSelector"===e.mode&&2===e.deepLength?i("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChangeMul.apply(void 0,arguments)}}},[[i("v-uni-picker-view-column",e._l(e.pickerValueMulTwoOne,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1),i("v-uni-picker-view-column",e._l(e.pickerValueMulTwoTwo,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1)]],2):e._e(),"multiLinkageSelector"===e.mode&&3===e.deepLength?i("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChangeMul.apply(void 0,arguments)}}},[[i("v-uni-picker-view-column",e._l(e.pickerValueMulThreeOne,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1),i("v-uni-picker-view-column",e._l(e.pickerValueMulThreeTwo,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1),i("v-uni-picker-view-column",e._l(e.pickerValueMulThreeThree,(function(t,a){return i("v-uni-view",{key:a,staticClass:"picker-item"},[e._v(e._s(t.label))])})),1)]],2):e._e()],1)],1)},r=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}))},"335a":function(e,t,i){"use strict";var a=i("adc7"),n=i.n(a);n.a},"35aa":function(e,t,i){"use strict";var a=i("b07e"),n=i.n(a);n.a},"39c1":function(e,t,i){"use strict";i.r(t);var a=i("c066"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},4213:function(e,t,i){"use strict";var a={uniPopup:i("4c9a").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"order-confirm-container flex-direction"},[i("loading",{attrs:{loading:e.pageState.loading,success:!e._.isEmpty(e.orderData)}}),e.pageState.loading?e._e():i("v-uni-view",{staticClass:"flex-direction padding-lr-sm"},[i("v-uni-view",{staticClass:"margin-bottom-xs flex-direction padding-sm ",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseAddress.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"text-color-e margin-bottom-xs"},[i("v-uni-text",[e._v("订单配送至")])],1),i("v-uni-view",{staticClass:"text-white flex-direction"},[i("v-uni-view",{staticClass:"text-xl align-center margin-bottom-xs"},[i("v-uni-text",{staticClass:"text-cut"},[e._v(e._s(e.userInfo.shipAddress?e.userInfo.shipAddress.address:"选择收货地址"))]),i("v-uni-text",{staticClass:"lg cuIcon-right"})],1),e.userInfo.shipAddress?i("v-uni-view",{staticClass:"align-center"},[i("v-uni-text",[e._v(e._s(e.userInfo.shipAddress.name)+e._s(null===e.userInfo.shipAddress.gender?"":e.userInfo.shipAddress.gender?"（先生）":"（女士）"))]),i("v-uni-text",{},[e._v(e._s(e.userInfo.shipAddress.phone))])],1):e._e()],1)],1),i("v-uni-view",{staticClass:"bg-white margin-bottom-sm padding-lr flex-direction"},[i("v-uni-view",{staticClass:"padding-tb border-bottom border-color-e justify-between text-lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup("arriveTimePopup")}}},[i("v-uni-view",{staticClass:"flex-direction"},[i("v-uni-text",{staticClass:"text-color-3 margin-bottom-xs"},[e._v("送达时间")]),i("v-uni-view",[i("v-uni-text",{staticClass:"text-xs padding-lr-xs fengniao"},[e._v("蜂鸟专送")])],1)],1),i("v-uni-view",{staticClass:"align-center"},[i("v-uni-text",{staticClass:"text-color-blue"},[e._v(e._s(e.deliverTimesCur[0]||e.deliverTimesCur[1]?e.deliverTimes[e.deliverTimesCur[0]].tab+e.deliverTimes[e.deliverTimesCur[0]].time_points[e.deliverTimesCur[1]].time:"尽快送达"))]),i("v-uni-text",{staticClass:"lg text-color-c cuIcon-right"})],1)],1),i("v-uni-view",{staticClass:"padding-tb justify-between text-lg"},[i("v-uni-text",{staticClass:"text-color-3"},[e._v("支付方式")]),i("v-uni-view",{staticClass:"align-center"},[i("v-uni-text",{staticClass:"text-color-blue"},[e._v("在线支付")])],1)],1)],1),i("v-uni-view",{staticClass:"bg-white margin-bottom flex-direction padding-lr"},[i("v-uni-view",{staticClass:"padding-tb border-bottom border-color-e"},[i("v-uni-text",{staticClass:"store-name text-bold text-lg text-color-3 margin-right-sm"},[e._v(e._s(e.storeData.name.split("(")[0]))]),i("v-uni-text",{staticClass:"store-name-sub text-color-3"},[e._v(e._s("("+e.storeData.name.split("(")[1]))])],1),i("v-uni-view",{staticClass:"flex-direction goods-list"},e._l(e.goodsList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"goods-item align-center padding-tb-sm justify-between border-bottom border-color-e"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"goods-img-box margin-right-xs"},[i("v-uni-image",{attrs:{src:e._f("imgUrlFilter")(t.image_hash,"w_72,h_72"),mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"align-center"},[i("v-uni-view",{staticClass:"flex-direction margin-right-xs"},[i("v-uni-text",{staticClass:"text-cut goods-name text-color-3 margin-bottom-xs"},[e._v(e._s(t.name))]),e._l(t.specs,(function(t,a){return i("v-uni-text",{key:a,staticClass:"text-xs text-color-6"},[e._v(e._s(t))])}))],2),i("v-uni-text",{staticClass:"text-xs"},[e._v("x "+e._s(t.quantity))])],1)],1),i("v-uni-view",{staticClass:"text-lg"},[0!=t.total_discount_amount?i("v-uni-text",{staticClass:"text-price delete-line margin-right-xs text-color-c"},[e._v(e._s(t.total_price))]):e._e(),i("v-uni-text",{staticClass:"text-price",class:0!=t.total_discount_amount?"text-color-price":"text-color-3"},[e._v(e._s(t.total_price+t.total_discount_amount))])],1)],1)})),1),i("v-uni-view",{staticClass:"justify-between padding-tb text-color-3 border-bottom border-color-e"},[i("v-uni-view",{},[i("v-uni-text",[e._v("配送费")])],1),i("v-uni-view",{staticClass:"text-lg align-center"},[e.cart.extra.agent_fee.original_price>e.cart.extra.agent_fee.price?i("v-uni-text",{staticClass:"delete-line text-color-c margin-right"},[e._v("￥"+e._s(e.cart.extra.agent_fee.original_price))]):e._e(),i("v-uni-text",{staticClass:"text-price text-color-3"},[e._v(e._s(e.cart.extra.agent_fee.price))])],1)],1),e.cart.abandoned_extra.length?i("v-uni-view",{staticClass:"justify-between border-bottom border-color-e padding-tb-sm"},[i("v-uni-view",{},[i("v-uni-text",{staticClass:"activity-tag"},[e._v("折扣商品不与满减津贴等优惠同享")])],1),i("v-uni-view",{},[i("v-uni-text",{},[e._v("-")]),i("v-uni-text",{staticClass:"text-price text-color-price"},[e._v("9")])],1)],1):e._e(),e.cart.extra.others.length?i("v-uni-view",{staticClass:"activity-list flex-direction"},e._l(e.cart.extra.others,(function(t,a){return i("v-uni-view",{key:a,staticClass:"activity-item padding-tb justify-between border-bottom border-color-e"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"text-xs activity-tag margin-right-sm text-white",style:{backgroundColor:"#"+t.icon.color}},[i("v-uni-text",[e._v(e._s(t.icon.name))])],1),i("v-uni-text",[e._v(e._s(t.name))])],1),i("v-uni-view",{staticClass:"text-color-price"},[i("v-uni-text",{staticClass:"margin-right-xs"},[e._v("-")]),i("v-uni-text",{staticClass:"text-price text-lg"},[e._v(e._s(-t.price))])],1)],1)})),1):e._e(),i("v-uni-view",{staticClass:"justify-between border-bottom border-color-e padding-tb",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup("codingPopup")}}},[i("v-uni-view",{staticClass:"text-color-3"},[i("v-uni-text",[e._v(e._s(e.redpackData.title))])],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"align-center text-white padding-lr-xs text-xs",style:{backgroundImage:"linear-gradient(106deg,#ff7417,#ff3c15)"}},[i("v-uni-text",{staticClass:"lg cuIcon-redpacket_fill margin-right-xs"}),i("v-uni-text",{},[e._v(e._s(e.redpackData.status_text))])],1)],1)],1),i("v-uni-view",{staticClass:"justify-between border-bottom border-color-e padding-tb"},[i("v-uni-view",{staticClass:"text-color-c align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup("codingPopup")}}},[i("v-uni-text",[e._v("优惠说明")]),i("v-uni-text",{staticClass:"lg cuIcon-question"})],1),i("v-uni-view",{staticClass:"text-color-3 align-center"},[i("v-uni-text",{staticClass:"margin-right-xs"},[e._v("小计")]),i("v-uni-text",{staticClass:"text-price text-xxl"},[e._v(e._s(e.cart.total))])],1)],1)],1),i("v-uni-view",{staticClass:"bg-white margin-bottom-sm flex-direction padding-lr"},[i("v-uni-view",{staticClass:"padding-tb align-center border-bottom border-color-e justify-between",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showSinglePicker.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"text-color-3"},[i("v-uni-text",[e._v("餐具份数")])],1),i("v-uni-view",{staticClass:"align-center"},[null==e.dinnerwareCount?i("v-uni-view",{staticClass:"flex-direction align-end"},[i("v-uni-text",{staticClass:"text-color-c margin-bottom-xs"},[e._v("未选择")]),i("v-uni-view",{},[i("v-uni-image",{staticClass:"margin-right-xs",style:{width:"32rpx"},attrs:{src:e.$i_u.green_leaf,mode:"widthFix"}}),i("v-uni-text",{staticClass:"text-xs",style:{color:"#0bb473"}},[e._v("选无需餐具，马上助力环保")])],1)],1):i("v-uni-view",{},[0==e.dinnerwareCount?i("v-uni-view",{},[i("v-uni-image",{staticClass:"margin-right-xs",style:{width:"32rpx"},attrs:{src:e.$i_u.green_leaf,mode:"widthFix"}}),i("v-uni-text",{staticClass:"text-xs"},[e._v(e._s(e.pickerValueArray[e.dinnerwareCount].label))])],1):i("v-uni-view",{},[i("v-uni-text",[e._v(e._s(e.pickerValueArray[e.dinnerwareCount].label)+"餐具")])],1)],1),i("v-uni-text",{staticClass:"lg text-color-c cuIcon-right margin-left-xs"})],1)],1),i("v-uni-view",{staticClass:"padding-tb border-bottom border-color-e justify-between",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.noteTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"text-color-3"},[i("v-uni-text",{staticClass:"text-cut",style:{maxWidth:"600rpx"}},[e._v(e._s(e.note?e.note:"订单备注"))])],1),i("v-uni-view",{staticClass:"align-center"},[e.note?e._e():i("v-uni-text",{staticClass:"text-color-c"},[e._v("口味、偏好")]),i("v-uni-text",{staticClass:"lg text-color-c cuIcon-right margin-left-xs"})],1)],1),i("v-uni-view",{staticClass:"padding-tb border-bottom border-color-e justify-between",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.orderData.invoice.is_available&&e.invoiceTap()}}},[i("v-uni-view",{staticClass:"text-color-3"},[i("v-uni-text",[e._v("发票信息")])],1),i("v-uni-view",{staticClass:"align-center"},[i("v-uni-text",{staticClass:"text-color-c"},[e._v(e._s(e.invoice?e.invoice.name:e.orderData.invoice.status_text))]),e.orderData.invoice.is_available?i("v-uni-text",{staticClass:"lg text-color-c cuIcon-right margin-left-xs"}):e._e()],1)],1),i("v-uni-view",{staticClass:"padding-tb flex-direction"},[i("v-uni-view",{staticClass:"margin-bottom-xs align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup("codingPopup")}}},[i("v-uni-text",{staticClass:"text-color-3 margin-right-xs"},[e._v("号码保护")]),i("v-uni-text",{staticClass:"lg text-color-c cuIcon-question"})],1),i("v-uni-text",{staticClass:"text-xs text-color-c"},[e._v("号码保护中，将对商家、骑士隐藏您的真实手机号")])],1)],1),i("v-uni-view",{staticClass:"footer-box justify-between padding-left-sm"},[i("v-uni-view",{staticClass:"justify-center align-center"},[i("v-uni-text",{staticClass:"text-price text-white text-xl text-bold"},[e._v("25")]),i("v-uni-text",{staticClass:"text-color-9 text-xs padding-lr-xs border-left border-color-9 margin-left-xs"},[e._v("已优惠￥14")])],1),i("v-uni-view",{staticClass:"pay-btn text-xl padding-lr-xl justify-center align-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pay.apply(void 0,arguments)}}},[i("v-uni-text",[e._v("去支付")])],1)],1)],1),e.pageState.loading?e._e():i("v-uni-view",{},[i("uni-popup",{ref:"arriveTimePopup",attrs:{type:"bottom"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.popupChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"arrive-time-box bg-e flex-direction"},[i("v-uni-view",{staticClass:"arrive-time-title-box justify-center text-lg padding-top padding-bottom-xs"},[i("v-uni-text",[e._v("选择送达时间")])],1),i("v-uni-view",{staticClass:"arrive-time-body-box text-sm"},[i("v-uni-scroll-view",{staticClass:"arrive-time-nav-head nav-head-list",attrs:{"scroll-y":!0}},e._l(e.deliverTimes,(function(t,a){return i("v-uni-view",{key:a,staticClass:"nav-head-item bg-white text-color-3 justify-center padding border-bottom border-color-e",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.switchDelicerTab(a)}}},[i("v-uni-text",[e._v(e._s(t.tab))])],1)})),1),i("v-uni-scroll-view",{staticClass:"arrive-time-nav-body nav-body-list",attrs:{"scroll-y":!0}},e._l(e.deliverTimes[e.deliverTimesCur[0]].time_points,(function(t,a){return i("v-uni-view",{key:a,staticClass:"nav-body-item bg-white text-color-3 padding-lr",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseDeliverTimes(a)}}},[i("v-uni-view",{staticClass:"border-bottom border-color-e padding-tb flex-sub align-center justify-between"},[i("v-uni-view",{staticClass:"align-center"},[i("v-uni-text",{staticClass:"text-df"},[e._v(e._s(e.deliverTimesCur[0]||a?"":"尽快送达 | ")+e._s(t.time))]),i("v-uni-text",{staticClass:"text-color-9 text-xs"},[e._v("（"+e._s(t.delivery_fee_description)+"）")])],1),i("v-uni-view",{staticClass:"text-xxl"},[i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.deliverTimesTabIndex==e.deliverTimesCur[0]&&a==e.deliverTimesCur[1],expression:"deliverTimesTabIndex == deliverTimesCur[0] && index == deliverTimesCur[1]"}],staticClass:"lg text-green cuIcon-roundcheckfill"})],1)],1)],1)})),1)],1)],1)],1),i("mpvue-picker",{ref:"dinnerwarePopup",attrs:{themeColor:"#007AFF",mode:"selector",deepLength:1,pickerValueArray:e.pickerValueArray},on:{onConfirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},onCancel:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)}}}),i("codingPopup",{ref:"codingPopup",attrs:{change:e.popupChange}})],1)],1)},r=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}))},"6c39":function(e,t,i){"use strict";i.r(t);var a=i("4213"),n=i("f292");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("335a");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"45077102",null,!1,a["a"],l);t["default"]=s.exports},"6cee":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/**\r\n * 布局\r\n * \r\n */uni-view[data-v-45077102],\r\n.flex[data-v-45077102]{display:-webkit-box;display:-webkit-flex;display:flex}.vs-flex-item[data-v-45077102]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.vs-space-between[data-v-45077102]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.vs-space-around[data-v-45077102]{-webkit-justify-content:space-around;justify-content:space-around}.vs-space-center[data-v-45077102]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.vs-space-end[data-v-45077102]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.vs-row[data-v-45077102]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.vs-column[data-v-45077102]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.vs-align-end[data-v-45077102]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.vs-align-center[data-v-45077102]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vs-item-hover[data-v-45077102]{background-color:rgba(0,0,0,.05)}.vs-btn-hover[data-v-45077102]{opacity:.8}\r\n/**\r\n * 基础背景颜色\r\n * \r\n */.bg-base[data-v-45077102]{background-color:#0097fd}.bg-page[data-v-45077102]{background-color:#f5f5f5}.bg-white[data-v-45077102]{background-color:#fff}.bg-green1[data-v-45077102]{background-color:#2cb98e}.bg-green2[data-v-45077102]{background-color:#00d762}.text-left[data-v-45077102]{text-align:left}.text-right[data-v-45077102]{text-align:right}.text-center[data-v-45077102]{text-align:center}\r\n/**\r\n * 基础文本颜色 \r\n * \r\n */.color-base[data-v-45077102]{color:#ab6ff6}.color-white[data-v-45077102]{color:#fff}.color-red[data-v-45077102]{color:#e84a54}.color-black2[data-v-45077102]{color:#222}.color-black3[data-v-45077102]{color:#333}.color-black4[data-v-45077102]{color:#444}.color-black6[data-v-45077102]{color:#666}.color-black7[data-v-45077102]{color:#777}.color-black8[data-v-45077102]{color:#888}.color-black9[data-v-45077102]{color:#999}.color-blue1[data-v-45077102]{color:#226fd1}.color-blue2[data-v-45077102]{color:#5ca3fc}.color-blue3[data-v-45077102]{color:#4399fc}.font-20[data-v-45077102]{font-style:normal;font-size:%?20?%;font-family:Droid Sans Fallback}.font-22[data-v-45077102]{font-style:normal;font-size:%?22?%;font-family:Droid Sans Fallback}.font-24[data-v-45077102]{font-style:normal;font-size:%?24?%;font-family:Droid Sans Fallback}.font-26[data-v-45077102]{font-style:normal;font-size:%?26?%;font-family:Droid Sans Fallback}.font-28[data-v-45077102]{font-style:normal;font-size:%?28?%;font-family:Droid Sans Fallback}.font-30[data-v-45077102]{font-style:normal;font-size:%?30?%;font-family:Droid Sans Fallback}.font-32[data-v-45077102]{font-style:normal;font-size:%?32?%;font-family:Droid Sans Fallback}.font-34[data-v-45077102]{font-style:normal;font-size:%?34?%;font-family:Droid Sans Fallback}.font-36[data-v-45077102]{font-style:normal;font-size:%?36?%;font-family:Droid Sans Fallback}.font-38[data-v-45077102]{font-style:normal;font-size:%?38?%;font-family:Droid Sans Fallback}.font-40[data-v-45077102]{font-style:normal;font-size:%?40?%;font-family:Droid Sans Fallback}.font-42[data-v-45077102]{font-style:normal;font-size:%?42?%;font-family:Droid Sans Fallback}.font-44[data-v-45077102]{font-style:normal;font-size:%?44?%;font-family:Droid Sans Fallback}.font-46[data-v-45077102]{font-style:normal;font-size:%?46?%;font-family:Droid Sans Fallback}.font-48[data-v-45077102]{font-style:normal;font-size:%?48?%;font-family:Droid Sans Fallback}.font-60[data-v-45077102]{font-style:normal;font-size:%?60?%;font-family:Droid Sans Fallback}.font-w400[data-v-45077102]{font-style:normal;font-weight:400}.font-w500[data-v-45077102]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.font-w600[data-v-45077102]{font-style:normal;font-weight:600;font-family:DroidSans-Bold}.font-w700[data-v-45077102]{font-style:normal;font-weight:700;font-family:DroidSans-Bold}.line20[data-v-45077102]{line-height:20}.line16[data-v-45077102]{line-height:16}.vun-hairline[data-v-45077102],\r\n.vun-hairline--bottom[data-v-45077102],\r\n.vun-hairline--left[data-v-45077102],\r\n.vun-hairline--right[data-v-45077102],\r\n.vun-hairline--surround[data-v-45077102],\r\n.vun-hairline--top[data-v-45077102],\r\n.vun-hairline--top-bottom[data-v-45077102]{position:relative;border-style:solid;border-color:#f5f5f5}.vun-hairline--top[data-v-45077102]{border-top-width:%?1?%}.vun-hairline--left[data-v-45077102]{border-left-width:%?1?%}.vun-hairline--right[data-v-45077102]{border-right-width:%?1?%}.vun-hairline--bottom[data-v-45077102]{border-bottom-width:%?1?%}.vun-hairline--top-bottom[data-v-45077102]{border-top-width:%?1?%;border-bottom-width:%?1?%}.vun-hairline--surround[data-v-45077102]{border-width:%?1?%}.margin-b5[data-v-45077102]{margin-bottom:%?5?%}.margin-b10[data-v-45077102]{margin-bottom:%?10?%}.margin-b15[data-v-45077102]{margin-bottom:%?15?%}.margin-b20[data-v-45077102]{margin-bottom:%?20?%}.margin-b25[data-v-45077102]{margin-bottom:%?25?%}.margin-b30[data-v-45077102]{margin-bottom:%?30?%}.margin-b35[data-v-45077102]{margin-bottom:%?35?%}.margin-b40[data-v-45077102]{margin-bottom:%?40?%}.margin-b50[data-v-45077102]{margin-bottom:%?50?%}.margin-b60[data-v-45077102]{margin-bottom:%?60?%}.margin-b70[data-v-45077102]{margin-bottom:%?70?%}.margin-b80[data-v-45077102]{margin-bottom:%?80?%}.whitespace-s[data-v-45077102]{padding-left:%?15?%;padding-right:%?15?%}.whitespace[data-v-45077102]{padding-left:%?30?%;padding-right:%?30?%}uni-page-body[data-v-45077102]{background-image:-webkit-linear-gradient(bottom,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96.1%,.3) 75%,hsla(0,0%,96.1%,0)),-webkit-linear-gradient(right,#0085ff,#0af);background-image:linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96.1%,.3) 75%,hsla(0,0%,96.1%,0)),linear-gradient(270deg,#0085ff,#0af)}.order-confirm-container[data-v-45077102]{padding-bottom:%?100?%}.footer-box[data-v-45077102]{position:fixed;bottom:0;left:0;right:0;height:%?88?%;background-color:#3c3c3c}.pay-btn[data-v-45077102]{background-color:#00e067;color:#fff}.goods-img-box[data-v-45077102]{width:%?72?%}.goods-name[data-v-45077102]{width:%?300?%}.arrive-time-box[data-v-45077102]{width:%?750?%;height:%?600?%}.nav-head-list[data-v-45077102], .nav-body-list[data-v-45077102]{height:%?550?%}.nav-head-list[data-v-45077102]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.nav-body-list[data-v-45077102]{-webkit-box-flex:7;-webkit-flex:7;flex:7}.dinnerware-box[data-v-45077102]{height:%?550?%;width:%?750?%}.dinnerware-type-list[data-v-45077102], .dinnerware-body[data-v-45077102]{height:%?440?%}.dinnerware-body[data-v-45077102]{position:relative;overflow:hidden}.scroll-picker-layer[data-v-45077102]{position:absolute;left:0;right:0;bottom:0;top:0}.scroll-picker-layer .middle[data-v-45077102]{position:absolute;left:0;right:0;top:50%;height:%?88?%;border-top:.133333vw solid #979797;border-bottom:.133333vw solid #979797;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.scroll-picker-layer .middle[data-v-45077102]::before, .scroll-picker-layer .middle[data-v-45077102]::after{content:"";position:absolute;left:0;width:100%;height:%?176?%}.scroll-picker-layer .middle[data-v-45077102]::before{top:%?-240?%;background:-webkit-linear-gradient(top,#fff 10%,hsla(0,0%,100%,.7));background:linear-gradient(180deg,#fff 10%,hsla(0,0%,100%,.7))}.scroll-picker-layer .middle[data-v-45077102]::after{top:%?160?%;background:-webkit-linear-gradient(bottom,#fff 10%,hsla(0,0%,100%,.7));background:linear-gradient(0deg,#fff 10%,hsla(0,0%,100%,.7))}body.?%PAGE?%[data-v-45077102]{background-image:-webkit-linear-gradient(bottom,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96.1%,.3) 75%,hsla(0,0%,96.1%,0)),-webkit-linear-gradient(right,#0085ff,#0af);background-image:linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96.1%,.3) 75%,hsla(0,0%,96.1%,0)),linear-gradient(270deg,#0085ff,#0af)}',""]),e.exports=t},adc7:function(e,t,i){var a=i("6cee");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("7e73f24e",a,!0,{sourceMap:!1,shadowMode:!1})},b07e:function(e,t,i){var a=i("e985");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("6a8a7bc5",a,!0,{sourceMap:!1,shadowMode:!1})},b7b6:function(e,t,i){"use strict";i.r(t);var a=i("3130"),n=i("39c1");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("35aa");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"059692a4",null,!1,a["a"],l);t["default"]=s.exports},c066:function(e,t,i){"use strict";var a=i("ee27");i("99af"),i("ace4"),i("a9e3"),i("d3b7"),i("fd87"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("fc11")),r={data:function(){return{pickerChangeValue:[],pickerValue:[],pickerValueArrayChange:!0,modeChange:!1,pickerValueSingleArray:[],pickerValueHour:[],pickerValueMinute:[],pickerValueMulArray:[],pickerValueMulTwoOne:[],pickerValueMulTwoTwo:[],pickerValueMulThreeOne:[],pickerValueMulThreeTwo:[],pickerValueMulThreeThree:[],showPicker:!1}},props:{mode:{type:String,default:"selector"},pickerValueArray:{type:Array,default:function(){return[]}},pickerValueDefault:{type:Array,default:function(){return[]}},deepLength:{type:Number,default:2},themeColor:String},watch:(0,n.default)({pickerValueArray:function(e,t){this.pickerValueArrayChange=!0},mode:function(e,t){this.modeChange=!0}},"pickerValueArray",(function(e){this.initPicker(e)})),methods:{initPicker:function(e){var t=e;if(this.pickerValue=this.pickerValueDefault,"selector"===this.mode)this.pickerValueSingleArray=e;else if("timeSelector"===this.mode){this.modeChange=!1;for(var i=[],a=[],n=0;n<24;n++)i.push({value:n,label:n>9?"".concat(n," 时"):"0".concat(n," 时")});for(var r=0;r<60;r++)a.push({value:r,label:r>9?"".concat(r," 分"):"0".concat(r," 分")});this.pickerValueHour=i,this.pickerValueMinute=a}else if("multiSelector"===this.mode)this.pickerValueMulArray=e;else if("multiLinkageSelector"===this.mode&&2===this.deepLength){for(var l=[],o=[],s=0,c=t.length;s<c;s++)l.push(t[s]);if(2===this.pickerValueDefault.length)for(var u=this.pickerValueDefault[0],d=0,v=t[u].children.length;d<v;d++)o.push(t[u].children[d]);else for(var p=0,f=t[0].children.length;p<f;p++)o.push(t[0].children[p]);this.pickerValueMulTwoOne=l,this.pickerValueMulTwoTwo=o}else if("multiLinkageSelector"===this.mode&&3===this.deepLength){for(var h=[],g=[],m=[],b=0,k=t.length;b<k;b++)h.push(t[b]);if(this.pickerValueDefault=3===this.pickerValueDefault.length?this.pickerValueDefault:[0,0,0],3===this.pickerValueDefault.length){for(var x=this.pickerValueDefault[0],w=0,_=t[x].children.length;w<_;w++)g.push(t[x].children[w]);for(var y=this.pickerValueDefault[1],C=0,V=t[x].children[y].children.length;C<V;C++)m.push(t[x].children[y].children[C])}this.pickerValueMulThreeOne=h,this.pickerValueMulThreeTwo=g,this.pickerValueMulThreeThree=m}},show:function(){var e=this;setTimeout((function(){e.pickerValueArrayChange||e.modeChange?(e.initPicker(e.pickerValueArray),e.showPicker=!0,e.pickerValueArrayChange=!1,e.modeChange=!1):e.showPicker=!0}),0)},maskClick:function(){this.pickerCancel()},pickerCancel:function(){this.showPicker=!1,this._initPickerVale();var e={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onCancel",e)},pickerConfirm:function(e){this.showPicker=!1,this._initPickerVale();var t={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onConfirm",t)},showPickerView:function(){this.showPicker=!0},pickerChange:function(e){this.pickerValue=e.mp.detail.value;var t={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",t)},pickerChangeMul:function(e){if(2===this.deepLength){var t=this.pickerValueArray,i=e.mp.detail.value;if(i[0]!==this.pickerValue[0]){for(var a=[],n=0,r=t[i[0]].children.length;n<r;n++)a.push(t[i[0]].children[n]);this.pickerValueMulTwoTwo=a,i[1]=0}this.pickerValue=i}else if(3===this.deepLength){var l=this.pickerValueArray,o=e.mp.detail.value,s=[],c=[];if(o[0]!==this.pickerValue[0]){this.pickerValueMulThreeTwo=[];for(var u=0,d=l[o[0]].children.length;u<d;u++)s.push(l[o[0]].children[u]);for(var v=0,p=l[o[0]].children[0].children.length;v<p;v++)c.push(l[o[0]].children[0].children[v]);o[1]=0,o[2]=0,this.pickerValueMulThreeTwo=s,this.pickerValueMulThreeThree=c}else if(o[1]!==this.pickerValue[1]){this.pickerValueMulThreeThree=[],s=this.pickerValueMulThreeTwo;for(var f=0,h=l[o[0]].children[o[1]].children.length;f<h;f++)c.push(l[o[0]].children[o[1]].children[f]);o[2]=0,this.pickerValueMulThreeThree=c}this.pickerValue=o}var g={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",g)},_getPickerLabelAndValue:function(e,t){var i,a=[];if("selector"===t)i=this.pickerValueSingleArray[e].label,a.push(this.pickerValueSingleArray[e].value);else if("timeSelector"===t)i="".concat(this.pickerValueHour[e[0]].label,"-").concat(this.pickerValueMinute[e[1]].label),a.push(this.pickerValueHour[e[0]].value),a.push(this.pickerValueHour[e[1]].value);else if("multiSelector"===t)for(var n=0;n<e.length;n++)n>0?i+=this.pickerValueMulArray[n][e[n]].label+(n===e.length-1?"":"-"):i=this.pickerValueMulArray[n][e[n]].label+"-",a.push(this.pickerValueMulArray[n][e[n]].value);else"multiLinkageSelector"===t&&(i=2===this.deepLength?"".concat(this.pickerValueMulTwoOne[e[0]].label,"-").concat(this.pickerValueMulTwoTwo[e[1]].label):"".concat(this.pickerValueMulThreeOne[e[0]].label,"-").concat(this.pickerValueMulThreeTwo[e[1]].label,"-").concat(this.pickerValueMulThreeThree[e[2]].label),2===this.deepLength?(a.push(this.pickerValueMulTwoOne[e[0]].value),a.push(this.pickerValueMulTwoTwo[e[1]].value)):(a.push(this.pickerValueMulThreeOne[e[0]].value),a.push(this.pickerValueMulThreeTwo[e[1]].value),a.push(this.pickerValueMulThreeThree[e[2]].value)));return{label:i,value:a}},_initPickerVale:function(){0===this.pickerValue.length&&("selector"===this.mode?this.pickerValue=[0]:"multiSelector"===this.mode?this.pickerValue=new Int8Array(this.pickerValueArray.length):"multiLinkageSelector"===this.mode&&2===this.deepLength?this.pickerValue=[0,0]:"multiLinkageSelector"===this.mode&&3===this.deepLength&&(this.pickerValue=[0,0,0]))}}};t.default=r},e985:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.pickerMask[data-v-059692a4]{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.6)}.mpvue-picker-content[data-v-059692a4]{position:fixed;bottom:0;left:0;width:100%;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3000}.mpvue-picker-view-show[data-v-059692a4]{-webkit-transform:translateY(0);transform:translateY(0)}.mpvue-picker__hd[data-v-059692a4]{display:-webkit-box;display:-webkit-flex;display:flex;padding:9px 15px;background-color:#fff;position:relative;text-align:center;font-size:17px}.mpvue-picker__hd[data-v-059692a4]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.mpvue-picker__action[data-v-059692a4]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#1aad19}.mpvue-picker__action[data-v-059692a4]:first-child{text-align:left;color:#888}.mpvue-picker__action[data-v-059692a4]:last-child{text-align:right}.picker-item[data-v-059692a4]{text-align:center;line-height:40px;font-size:16px}.mpvue-picker-view[data-v-059692a4]{position:relative;bottom:0;left:0;width:100%;height:238px;background-color:#fff}',""]),e.exports=t},f292:function(e,t,i){"use strict";i.r(t);var a=i("2cb7"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},fd87:function(e,t,i){var a=i("74e8");a("Int8",(function(e){return function(t,i,a){return e(this,t,i,a)}}))}}]);