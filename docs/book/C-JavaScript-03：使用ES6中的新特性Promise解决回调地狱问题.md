---
title: C-JavaScript-03：使用ES6中的新特性Promise解决回调地狱问题
date: 2019-08-30 11:57:01
categories:
- "C-JavaScript"
tags:
- '前端'
- 'ES6'
photos:
excerpt: 回调地狱在实际开发中难免会遇到,通过现有的一些手段可以方便规避这些问题
---

> 不想了解过程,请直接划到最后.看最终效果

## 什么是回调地狱

通俗的说就是回调函数嵌套回调函数的问题，如下

```javascript
// 声明一个函数
function foo(data, callback) {
    data++;
    callback(data);
}

// 回调地狱
foo(1, function(data) {
    foo(data, function(data) {
        foo(data, function(data){
            foo(data, function(data){
                foo(data, function(data){
                    foo(data, function(data){
                        console.log(data);// 7
                    })
                })
            })
        })
    });
});
```

怎么样是不是很刺激,稍微复杂一点，保证你看到头晕眼花。



## 解决回调地狱的基本思路

------

将这种`嵌套式`的调用改造为`串联式`,那么下面我们就来看看怎么解决.



## 解决办法===>Promise

------

### 1.什么是Promise 

1. **是一个构造函数:**我们通过输出window对象得到相关信息

2. 其中的关键方法

   - **then:** 用来指定接下来要执行的函数(成功的回调函数,失败的回调函数)
   - **resolve: **成功之后的回调函数 ===> 必须要传的
   - **reject:** 失败的回调函数 ===> 不是必须传的

3. **表示一个异步操作:** 当实例被创建时就表示一个具体异步操作`如果不传入执行函数,那么它只是在形式上是异步操作,但是没有任何的异步实操`如下

   ```javascript
   // 创建一个形式上的异步操作 ===> 没有任何具体的异步操作（例如ajax，jsonp等），我们知道它是异步操作但是不知道它究竟在操作什么
   var p = new Promise();
   
   // 创建一个实际的异步操作
   var p = new Promise(function(){
       // 在这里执行一个异步操作，例如：ajax请求
   })
   ```

4. **实例被创建时,传入的函数会被立即执行:** 所以一般都先将实例化过程封装在函数中,这样才能在需要的时候再执行

### 2.如何使用

1. 通过.then指定回调函数(包括成功和失败),如下:

   ```javascript
   // 为了防止我们的异步操作函数在Promise实例化过程中被执行，将其封装在一个函数中,在对应的时机去使用它
   function sendAjax() {
       // 创建并返回一个包含实际的异步操作的Promise对象
       return new Promise(function(resolve,reject) {
           // 在这里执行一个异步操作，例如：ajax请求
   
           if('ajax请求出现错误') return reject('错误内容')
           resolve('成功之后需要用到的数据或内容')
       });
   }
   
   // 接收实例对象
   var p = sendAjax()
   
   // 通过.then方法指定成功和失败的回调
   p.then(function(data){
       // 默认第一个是成功的回调
   }, function(err){
       // 默认第二个是失败的回调
   })
   ```

2. 同执行过程如下: 在异步操作的等待时间内完成后续的处理函数的注册(因为异步操作受网络和数据大小的限制一般时间都较长,而后续注册执行函数因为都是内存内直接操作且数据量很小注册时间几乎可以忽略不计)

```flow
st=>start: 开始
e=>end: 结束
op1=>operation: 调用函数实例化对象
op2=>operation: 发起异步操作请求
op3=>operation: 注册回调函数p.then
op4=>operation: 完成异步请求
op5=>operation: 调用回调函数
op6=>operation: 异步请求是否完成
cont=>condition: yes or no?
st->op1->op2->op6->cont
cont(no)->op3->op5
cont(yes)->op5->e
```

### 3.最终效果

**注意:**

> 在调用.then的时候,成功的回调(resolve)是必须的,失败的回调(reject)可以不传递

```javascript
// 为了防止我们的异步操作函数在Promise实例化过程中的执行，将其封装在一个函数中
function sendAjax(data) {
    // 创建并返回一个包含实际的异步操作的Promise对象
    return new Promise(function(resolve,reject) {
        // 在这里执行一个异步操作，例如：ajax请求

        if('ajax请求出现错误') return reject('错误内容')
        resolve('成功之后需要用到的数据或内容')
    });
}

// 接收实例对象
var p = sendAjax(data)
// 通过.then方法指定成功和失败的回调
p.then(function(data){
    // 默认第一个是成功的回调
}, function(err){
    // 默认第二个是失败的回调
})

// ========================
// 串联解决回调地狱问题
sendAjax(data)
    .then(function(newData1){
    // newData就是异步操作得到的数据或内容
    // 这里用来放成功之后如何处理

    // 数据处理完成后如果还需要执行嵌套的类似操作
    return sendAjax(newData2)
})
    .then(function(newData3){
    // newData就是异步操作得到的数据或内容
    // 这里用来放成功之后如何处理

    // 数据处理完成后如果还需要执行嵌套的类似操作
    return sendAjax(newData4)
})
    .then....
    .then(function(result){
        // 结束数据嵌套处理,输出数据
        console.log(result)
    })
```



