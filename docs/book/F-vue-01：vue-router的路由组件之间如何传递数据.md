---
title: 01：vue-router的路由组件之间如何传递数据
date: 2019-08-30 16:45:29
categories:
- "F-vue"
tags:
- 'vue'
- '前端'
photos:
excerpt: 传递数据是刚需,那么在vue-router组件间如何传递数据呢
---

> 不想看太多,请查看最后的总结选择需要的

**欢迎访问我的博客：**[林除夕](http://linzowo.gitee.io)

在某个组件中只有一个路由视图区域,且各个路由组件之间不存在父子关系时,要在组件之间传递数据就不好通过父子组件传值的方式了.那么下面我们来看看怎么办吧.

## 在页面中实现路由导航链接的两种方式

```vue
// 声明式  
<router-link to=""></router-link>

// 编程式
// 将自定义的router模块引入
import router from './router.js'
router.push(...)

//或者
//在vue实例中使用
this.$router.push
```



## 关于数据与参数的差异

------

**为了避免理解差异导致的问题,我对数据和参数做如下规范:**

1. 参数:
   1. 就是我们常说的`query`
   2. 只能是数字或者字符串
   3. 长度有限制
2. 数据
   1. 就是我们常说的`params`
   2. 类型不限:字符串/数字/数组/对象/布尔值均可
   3. 长度不限



## 具体实现

------

### 1.声明式

```vue
// 方法1
//=========================================
// 步骤1:引入vue-router
import VueRouter from "vue-router";

// 步骤2:创建一个vue-router实例
const router = new VueRouter({
  routes: [
	// 在path中指定占位符【通过 : 的形式指定】例如下面的:id
    { path: "/home/:id", component: HomeContainer }
  ]
});

// 如何传值: 通过在路径中指定位置传入想要的内容来传递数据到其他组件:例如下面id所在位置
<router-link to="/home/id"></router-link>

// 在组件中怎么接收
// 在组件实例对象中 this.$router.params.id 就是传递过来那个值
// 在标签中 $router.params.id 就是传递过来那个值


// 方法2
==============================================
// 注意: 1. routes参数中的name必须要设置
// 步骤1:引入vue-router
import VueRouter from "vue-router";

// 步骤2:创建一个vue-router实例
const router = new VueRouter({
  routes: [
    { path: "/home", name: 'home', component: HomeContainer }
  ]
});

// 步骤3:注意这里的name如果不在步骤2中声明这里是无法找到对应选项的(会报错)
<router-link :to="{name: 'home', query: {index:index},params: { data: data}}">
</router-link>

// 步骤4:
// 接收这个值==>在上面我们看到这种方式可以传递query和params两种类型的参数,我们都可以在$router.params中找到,只需要通过 . 来调用对应的键就能得到值了
// 在组件实例对象中 this.$router.params.键 就是传递过来那个值
// 在标签中 $router.params.键 就是传递过来那个值


```

### 2.函数式

```
// 注意: 1. routes参数中的name必须要设置
// 步骤1:引入vue-router
import VueRouter from "vue-router";

// 步骤2:创建一个vue-router实例
const router = new VueRouter({
  routes: [
    { path: "/home", name: 'home', component: HomeContainer }
  ]
});

// 步骤3:在js中通过代码的方式发起路由跳转并传递参数或数据

// 传递数据
router.push(name: 'home', params: { data: data })

// 传递参数
router.push({ path: '/home', query: { index: index }})
router.push({ path: `/home/${index}` })

// 特别注意: 如果传递path那么默认的 会将 params 忽略,就是说你就算传了也没有用,所以在使用params传递数据的时候一定要注意,不能使用path,只能使用name来指定路由的目标对象


// 步骤4:
// 接收这个值===>与声明式没有太大差异
// 在组件实例对象中 this.$router.params.键 就是传递过来那个值
// 在标签中 $router.params.键 就是传递过来那个值
```



## 总结

------

1. 通过对比可以知道两种方式都可以传递`参数`和`数据`
2. 如果要在js代码中处理某些数据,处理完成后就跳转路由==>使用编程式
3. 如果要通过某些已经绑定了数据的元素进行跳转==>声明式
4. 按需选择
