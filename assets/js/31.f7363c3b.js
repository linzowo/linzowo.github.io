(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{577:function(v,t,a){"use strict";a.r(t);var e=a(7),_=Object(e.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("Vue 是一套用于构建用户界面的渐进式的 JavaScript 框架。具有体积小，更高的运行效率，双向数据绑定，生态丰富、学习成本低等优点，所以 Vue 也被广泛用在移动端跨平台框架上。Vue 框架通过数据双向绑定和虚拟 DOM 技术，帮我们处理了前端开发中最脏最累的 DOM 操作部分， 我们不再需要去考虑如何操作 DOM 以及如何最高效地操作 DOM，但是我们仍然需要去关注 Vue 在跨平台项目性能方面的优化，使项目具有更高效的性能、更好的用户体验。")]),v._v(" "),a("h2",{attrs:{id:"_1-v-for-遍历必须为-item-添加-key，且避免同时使用-v-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-v-for-遍历必须为-item-添加-key，且避免同时使用-v-if"}},[v._v("#")]),v._v(" 1. v-for 遍历必须为 item 添加 key，且避免同时使用 v-if")]),v._v(" "),a("p",[v._v("在列表数据进行遍历渲染时，需要为每一项 item 设置唯一 key 值，方便 Vue.js 内部机制精准找到该条列表数据。当 state 更新时，新的状态值和旧的状态值对比，较快地定位到 diff 。我们在使用的使用经常会使用 index(即数组的下标)来作为 key,但其实这是不推荐的一种使用方法;")]),v._v(" "),a("p",[v._v("举个例子：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf11njmc8j612w0pi75i02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("在最后一条数据后再加一条数据：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf11xnwusj612w0s475g02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("此时前三条数据直接复用之前的，新渲染最后一条数据，此时用 index 作为 key，没有任何问题，在中间插入一条数据：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf125sn96j612w0s7ab602.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("此时更新渲染数据,通过 index 定义的 key 去进行前后数据的对比，发现：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf12eiw1cj612w0gxdh802.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("通过上面清晰的对比，发现除了第一个数据可以复用之前的之外,另外三条数据都需要重新渲染。是不是很惊奇，我明明只是插入了一条数据，怎么三条数据都要重新渲染？而我想要的只是新增的那一条数据新渲染出来就行了。最好的办法是使用数组中不会变化的那一项作为 key 值，对应到项目中，即每条数据都有一个唯一的 id，来标识这条数据的唯一性;")]),v._v(" "),a("p",[v._v("使用 id 作为 key 值，我们再来对比一下向中间插入一条数据，此时会怎么去渲染：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf12ngr2oj612w0h0abo02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("现在对比发现只有一条数据变化了，就是 id 为 4 的那条数据，因此只要新渲染这一条数据就可以了,其他都是就复用之前的。")]),v._v(" "),a("p",[v._v("总结：所以一句话，key 的作用主要是为了高效的更新虚拟 DOM。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。")]),v._v(" "),a("p",[v._v("v-for 遍历避免同时使用 v-if，v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，必要情况下应该替换成 computed 属性。")]),v._v(" "),a("h2",{attrs:{id:"_2-长列表性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-长列表性能优化"}},[v._v("#")]),v._v(" 2. 长列表性能优化")]),v._v(" "),a("p",[v._v("Vue 会通过 Object.defineProperty 对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 Vue 来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间，那如何禁止 Vue 劫持我们的数据呢？可以通过 Object.freeze 方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf16su58lj612w0j2q4002.jpg",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_3-vue-组件中的-data-是函数而不是对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-组件中的-data-是函数而不是对象"}},[v._v("#")]),v._v(" 3. vue 组件中的 data 是函数而不是对象")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf170pn1wj612w0g775502.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("而非如下所示：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf177lvraj612w0chdgc02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例，复用在多个页面。")]),v._v(" "),a("p",[v._v("如果 data 是一个纯碎的对象，则所有的实例将共享引用同一份 data 数据对象，无论在哪个组件实例中修改 data，都会影响到所有的组件实例。如果 data 是函数，每次创建一个新实例后，调用 data 函数，从而返回初始数据的一个全新副本数据对象。这样每复用一次组件，会返回一份新的 data 数据，类似于给每个组件实例创建一个私有的数据空间，让各个组件的实例各自独立，互不影响保持低耦合。")]),v._v(" "),a("h2",{attrs:{id:"_4-vue-钩子函数之钩子事件-hookevent-监听组件简化代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-钩子函数之钩子事件-hookevent-监听组件简化代码"}},[v._v("#")]),v._v(" 4. Vue 钩子函数之钩子事件 hookEvent,监听组件简化代码")]),v._v(" "),a("p",[v._v("用法：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("通过 $on(eventName, eventHandler) 侦听一个事件；")])]),v._v(" "),a("li",[a("p",[v._v("通过 $once(eventName,eventHandler) 一次性侦听一个事件；")])]),v._v(" "),a("li",[a("p",[v._v("通过 $off(eventName, eventHandler) 停止侦听一个事件；")])])]),v._v(" "),a("p",[v._v("通常实现一个定时器的调用与销毁我可能会以以下方式实现：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf17x1ndzj612w0qowg002.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("这种方法存在的问题是：")]),v._v(" "),a("p",[v._v("vue 实例中需要有这个定时器的实例，感觉有点多余。创建的定时器代码和销毁定时器的代码没有放在一起，不容易维护，通常很容易忘记去清理这个定时器。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf18fpzhdj612w03pq3r02.jpg",alt:"img"}})]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf18kfoyfj612w0n275o02.jpg",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_5-组件懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-组件懒加载"}},[v._v("#")]),v._v(" 5. 组件懒加载")]),v._v(" "),a("p",[v._v("在单页应用中，如果没有应用懒加载，运用 webpack 打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，延时过长，不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf18sor4sj612w03ht8v02.jpg",alt:"img"}})]),v._v(" "),a("ul",[a("li",[a("p",[v._v("支持 组件可见或即将可见时懒加载")])]),v._v(" "),a("li",[a("p",[v._v("支持 组件延时加载")])]),v._v(" "),a("li",[a("p",[v._v("支持 加载真实组件前展示骨架组件，提高用户体验")])]),v._v(" "),a("li",[a("p",[v._v("支持 真实组件代码分包异步加载安装")])])]),v._v(" "),a("p",[v._v("npm install @xunlei/vue-lazy-component")]),v._v(" "),a("p",[v._v("在组件中实现局部注册组件：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf19dp4ljj612w0dgdgr02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("需要懒加载的组件将其包裹在 vue-lazy-component 中，slot 值为 skeleton 指的是在懒加载过程中显示的加载状态组件：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf19lkd0cj612w0eomy502.jpg",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_6-非响应式数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-非响应式数据"}},[v._v("#")]),v._v(" 6. 非响应式数据")]),v._v(" "),a("p",[v._v("初始化时，vue 会对 data 做 getter、setter 改造。在 Vue 的文档中介绍数据绑定和响应时，特意标注了对于经过 Object.freeze() 方法的对象无法进行更新响应。")]),v._v(" "),a("p",[a("strong",[v._v("性能提升对比")])]),v._v(" "),a("p",[v._v("在基于 Vue 的一个 big table benchmark 里，可以看到在渲染一个一个 1000 x 10 的表格的时候，开启 Object.freeze()前后重新渲染的对比。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf19umizmj60u00mm0uy02.jpg",alt:"img"}})]),v._v(" "),a("p",[a("strong",[v._v("开启优化之前：")])]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf19ulqzhj60ts03idfy02.jpg",alt:"img"}})]),v._v(" "),a("p",[a("strong",[v._v("开启优化之后：")])]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf19uomo3j60t802w74e02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("在这个例子里,使用了 Object.freeze()比不使用快了 4 倍，为什么 Object.freeze()的性能会更好？")]),v._v(" "),a("p",[a("strong",[v._v("不使用 Object.freeze()的 CPU 开销")])]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf19uowexj60po0m8jtp02.jpg",alt:"img"}})]),v._v(" "),a("p",[a("strong",[v._v("使用 Object.freeze()的 CPU 开销")])]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf19utcmpj60nc0ekgmz02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("对比可以看出，使用了 Object.freeze()之后，减少了 observer 的开销。")]),v._v(" "),a("h2",{attrs:{id:"_7-不要将所有的数据都放到-data-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-不要将所有的数据都放到-data-中"}},[v._v("#")]),v._v(" 7. 不要将所有的数据都放到 data 中")]),v._v(" "),a("p",[v._v("data 中的数据都会增加 getter 和 setter，又会收集 watcher，这样还占内存。不需要响应式的数据我们可以定义在实例上。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf1aoqwgbj60u00bqaas02.jpg",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_8-v-for元素绑定事件代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-v-for元素绑定事件代理"}},[v._v("#")]),v._v(" 8. v-for元素绑定事件代理")]),v._v(" "),a("p",[v._v("事件代理作用主要是 2 个：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("将事件处理程序代理到父节点，减少内存占用率")])]),v._v(" "),a("li",[a("p",[v._v("动态生成子节点时能自动绑定事件处理程序到父节点")])])]),v._v(" "),a("p",[v._v("1、不使用事件代理，每个 span 节点绑定一个 click 事件，并指向同一个事件处理程序")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf1b0ge6yj612w0fwmy002.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("2、不使用事件代理，每个 span 节点绑定一个 click 事件，并指向不同的事件处理程序")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf1b9dzifj612w0fu75502.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("3、使用事件代理")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf1bh9dz2j612w0en0ti02.jpg",alt:"img"}})]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf1bogmp3j60u00v476z02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("可以看到使用事件代理无论是监听器数量和内存占用率都比前两者要少，同时对比 3 个图中监听器的数量并没有发现 vue 会自动做事件代理，但是一般给 v-for 绑定事件时，都会让节点指向同一个事件处理程序（第二种情况可以运行，但是 eslint 会警告），一定程度上比每生成一个节点都绑定一个不同的事件处理程序性能好，但是监听器的数量仍不会变，所以使用事件代理会更好一点。")]),v._v(" "),a("p",[v._v("代码使用：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf1bvdjzvj612w0ktta702.jpg",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_9-函数式组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-函数式组件"}},[v._v("#")]),v._v(" 9. 函数式组件")]),v._v(" "),a("p",[v._v("函数式组件是无状态，它无法实例化，没有任何的生命周期和方法。创建函数式组件也很简单，只需要在模板添加 functional 声明即可。一般适合只依赖于外部数据的变化而变化的组件，因其轻量，渲染性能也会有所提高。")]),v._v(" "),a("p",[v._v("组件需要的一切都是通过 context 参数传递。它是一个上下文对象，具体属性查看文档。这里 props 是一个包含所有绑定属性的对象。")]),v._v(" "),a("p",[v._v("函数式组件：")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf1c36yy2j60u00650t502.jpg",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_10-provide-和-inject-组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-provide-和-inject-组件通信"}},[v._v("#")]),v._v(" 10. provide 和 inject 组件通信")]),v._v(" "),a("p",[v._v("痛点：常用的父子组件通信方式都是父组件绑定要传递给子组件的数据，子组件通过 props 属性接收，一旦组件层级变多时，采用这种方式一级一级传递值非常麻烦，而且代码可读性不高，不便后期维护。")]),v._v(" "),a("p",[v._v("vue 提供了 provide 和 inject 帮助我们解决多层次嵌套嵌套通信问题。在 provide 中指定要传递给子孙组件的数据，子孙组件通过 inject 注入祖父组件传递过来的数据，可以轻松实现跨级访问父组件的数据。")]),v._v(" "),a("p",[v._v("provide：是一个对象，或者是一个返回对象的函数。里面呢就包含要给子孙后代的东西，也就是属性和属性值。注意：子孙层的 provide 会掩盖祖父层 provide 中相同 key 的属性值。")]),v._v(" "),a("p",[v._v("inject：一个字符串数组，或者是一个对象。属性值可以是一个对象，包含 from 和 default 默认值，from 是在可用的注入内容中搜索用的 key (字符串或 Symbol)，意思就是祖父多层 "),a("strong",[v._v("provide")]),v._v(" 提供了很多数据， "),a("strong",[v._v("from")]),v._v(" 属性指定取哪一个 "),a("strong",[v._v("key")]),v._v(" default 指定默认值。")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf1c2zhspj60h80bgaae02.jpg",alt:"img"}})]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf1c2ycxzj60o10glmxr02.jpg",alt:"img"}})]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Aply4gvf1c2zkzhj60l60bower02.jpg",alt:"img"}})]),v._v(" "),a("p",[v._v("从上面这个例子可以看出，只要在父组件中调用了，那么在这个父组件生效的生命周期内，所有的子组件都可以调用 inject 来注入父组件中的值。")]),v._v(" "),a("p",[v._v("在使用场景中，肯定是希望父组件的数据一旦发生改变，子孙组件获取到的也是父组件更新后的数据。那么，怎么实现父组件与子孙组件所绑定的数据动态响应呢？")]),v._v(" "),a("p",[a("img",{attrs:{src:"/i-10/008aq1Apgy1gvf1ef3g5ij60u00yajt302.jpg",alt:"img"}})])])}),[],!1,null,null,null);t.default=_.exports}}]);