(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invoice-add_invoice"],{"12bd":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"flex-direction padding-tb"},[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.addInvoice.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"form-list flex-direction"},[i("v-uni-view",{staticClass:"bg-white border-bottom border-color-e padding flex-sub align-center"},[i("v-uni-view",{staticClass:"text-color-3 text-bold margin-right-xs"},[i("v-uni-text",[t._v("类型")])],1),i("v-uni-radio-group",{staticClass:"flex",attrs:{name:"type"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.radioItems,(function(e,n){return i("v-uni-view",{key:n,staticClass:"border border-color-c margin-lr-xs padding-tb-xs padding-lr border-radius-10",class:[n==t.curType?"border-color-blue text-blue":""]},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[i("v-uni-radio",{attrs:{id:n+"",value:n+"",checked:n==t.curType}})],1),i("v-uni-label",{staticClass:"label-2-text",attrs:{for:n+""}},[i("v-uni-text",[t._v(t._s(e))])],1)],1)})),1)],1),i("v-uni-view",{staticClass:"bg-white justify-between align-center border-bottom border-color-e padding flex-sub align-center"},[i("v-uni-view",{staticClass:"align-center flex-sub"},[i("v-uni-view",{staticClass:"text-color-3 text-bold margin-right-xs"},[i("v-uni-text",[t._v("抬头")])],1),i("v-uni-view",{staticClass:"flex-sub margin-right-xs"},[i("v-uni-input",{staticClass:"flex flex-sub",attrs:{placeholder:"请填写准确的抬头名称",maxlength:"20",name:"name"},model:{value:t.nameInput,callback:function(e){t.nameInput=e},expression:"nameInput"}})],1)],1),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.nameInput,expression:"nameInput"}],staticClass:"lg text-gray cuIcon-roundclosefill text-xl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput("nameInput")}}})],1),0==t.curType?i("v-uni-view",{staticClass:"flex-direction"},[i("v-uni-view",{staticClass:"bg-white justify-between align-center border-bottom border-color-e padding flex-sub align-center"},[i("v-uni-view",{staticClass:"align-center flex-sub"},[i("v-uni-view",{staticClass:"text-color-3 text-bold margin-right-xs"},[i("v-uni-text",[t._v("税号")])],1),i("v-uni-view",{staticClass:"flex-sub margin-right-xs"},[i("v-uni-input",{staticClass:"flex flex-sub",attrs:{placeholder:"请填写「税号」或「社会信用代码」",name:"tax_id"},model:{value:t.taxidInput,callback:function(e){t.taxidInput=e},expression:"taxidInput"}})],1)],1),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.taxidInput,expression:"taxidInput"}],staticClass:"lg text-gray cuIcon-roundclosefill text-xl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput("taxidInput")}}})],1),i("v-uni-view",{staticClass:"padding text-xs text-color-9"},[i("v-uni-text",[t._v("可咨询公司财务部门获得「税号」或「社会信用代码」信息")])],1)],1):t._e()],1),i("v-uni-view",{staticClass:"padding flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-green lg",attrs:{"form-type":"submit"}},[t._v("保存")])],1)],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"22c5":function(t,e,i){"use strict";i.r(e);var n=i("12bd"),a=i("2c7e");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var u,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2d0921bc",null,!1,n["a"],u);e["default"]=r.exports},"2c7e":function(t,e,i){"use strict";i.r(e);var n=i("6fc7"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"6fc7":function(t,e,i){"use strict";(function(t){i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{curType:0,radioItems:["单位","个人"],nameInput:"",taxidInput:""}},methods:{addInvoice:function(e){var i=e.detail.value;if(i.name.length>20||!i.name.length)uni.showToast({title:"抬头不符合规范请填写正确抬头",duration:2e3,icon:"none"});else if(/^[0-9a-zA-Z]*$/.test(i.tax_id)&&""!=i.tax_id){i.type=this.radioItems[i.type],i.id=this._.uniqueId();var n=[];try{n=JSON.parse(uni.getStorageSync("invoice_list"))}catch(e){t.log(e)}n=[].concat(n,i);try{uni.setStorageSync("invoice_list",JSON.stringify(n)),uni.navigateTo({url:this.$pages_path.choose_invoice,fail:function(e){t.log(e)}})}catch(e){uni.showToast({title:"保存失败，请重试",duration:2e3,icon:"none"})}}else uni.showToast({title:"税号不符合规范请重新填写",duration:2e3,icon:"none"})},radioChange:function(t){this.curType=t.detail.value},clearInput:function(t){this[t]=""}}};e.default=n}).call(this,i("5a52")["default"])}}]);