---
title: I-学习笔记-04：AMD-CMD-Common简洁的模式对比
date: 2020-02-10 12:16:06
categories:
- I-学习笔记
tags:
- js
- 前端
- 模块化
excerpt: 简单比较一下当前流行的几种模块化规范，让你一目了然
---
AMD-CMD-CommonJS三者均为js语言的模块化规范，下表总结了，三者大致异同



## 对照表

| 名称           | AMD                            | CMD                      | CommonJs      | ES6                                        |
| -------------- | ------------------------------ | ------------------------ | ------------- | ------------------------------------------ |
| 全称           | Asynchronous Module Definition | Common Module Definition | CommonJs      | ECMAScript6.0                              |
| 同步异步       | 异步                           | 异步                     | 同步          | 同步/异步 均支持，取决于采用什么loader API |
| 实现实例       | RequireJS                      | SeaJS（淘宝）            | nodeJS        | JavaScript                                 |
| 函数定义与引入 | 见`代码块-01`                  | 见`代码块-02`            | 见`代码块-03` | 见`代码块-04`                              |
| 运行环境       | 浏览器                         | 浏览器                   | 服务端        | 前后端                                     |

## webpack下的模块化规范解释

**官方：** 推荐ES6规范，但是对各种模式做了兼容。详见https://www.webpackjs.com/api/module-methods/

**个人：** 虽然在webpack下对各种模式做了兼容，但是在开发时一定要区分你的代码执行环境，浏览器端不支持CommonJs这点需要注意

## 代码块

> 代码块-01：AMD函数定义方式

```javascript
// 声明
define(['moduel'], () => {
  'use strict';
  const name = 'jsong';

  const sayHello = function() {
    console.log(`hello ${name}`);
  };

  return { name, sayHello };
});

// 引入
require(['module'], module => {
  module.sayHello();
});
```



> 代码块-02：CMD函数定义方式

```javascript
// 声明
define(function(require, exports, module) {
  const name = 'jsong';
  const age = 11;
  const sayHello = () => {
    console.log(`hello ${name}`);
  };
  module.exports = { name, sayHello };
  console.log(module.exports);
});

// 引入
define(function(require, exports, module) {
  const m = require('./cmddefined');
  m.sayHello();
});
```



> 代码块-03：CommonJs函数定义方式

```javascript
// 声明
// 方式1
const name = 'jsong';
const age = 1;

const sayHelloName = function() {
  console.log(name);
};

module.exports = { name, age, sayHelloName };
// { name: 'jsong', age: 1, sayHelloName: [Function: sayHelloName] }
console.log(module.exports);

// 方式2
exports.name = 'jsong';
exports.age = 11;

// {name:'jsong',age:11}
console.log(module.exports);


// 引入
const commonjs = require('./common.js');
const commonjs2 = require('./common2.js');
// jsong
commonjs.sayHelloName();
// jsong
console.log(commonjs2.name);
```



> 代码块-04：ES6函数定义方式

```javascript
// 导出变量
export const name = 'jsong';
// 等价于
// const name = 'jsong';
// export { name };

export const sayHello = () => console.log(`hello ${name}`);
// 等价于
// const sayHello = () => console.log(`hello ${name}`);
// export { sayHello };

// 导出函数
export function eat() {
  console.log(`${name} eat`);
}
// 等价于
// function eat() {
//   console.log(`${name} eat`);
// }
// export { eat };

const age = 11;
// 导出对象
export const people = {
  name,
  age,
  hello: () => console.log(`hello ${name}`)
};
// 等价于
// const people = {
//   name,
//   age,
//   hello: () => console.log(`hello ${name}`)
// };
// export { people };

// 导出类
export class jsong{
    sayHello() {
        console.log(`hello ${name}`);
      }  
}
// 等价于
// class jsong {
//   sayHello() {
//     console.log(`hello ${name}`);
//   }
// }
// export { jsong };

// 引入
// 例1
import * as people from './es6.js';

// jsong
console.log(people.name);
// hello jsong
people.sayHello();
// jsong eat
people.eat();
console.log(people.people);
// hello jsong
people.people.hello();

// hello jsong
new people.jsong().sayHello();

// 例2
import { name, sayHello } from './es6.js';

// jsong
console.log(name);
// hello jsong
sayHello();
```



> 最后：无论是哪种模块化规范最终目的都是为了实现高复用低耦合的开发目标，所以主要采用一种规范，在行不通的情况下再调整其他的就好了，不用那么复杂，有那个时间多研究一下webpack它不香吗？最后祝大家编码愉快，头发茂盛。