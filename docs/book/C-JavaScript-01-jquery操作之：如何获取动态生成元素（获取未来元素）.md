---
title: 'C-JavaScript-01: jquery操作之：如何获取动态生成元素（获取未来元素）'
date: 2019-07-11 10:18:42
categories: 
- C-JavaScript
tags:
- 前端
- jQuery
photos:
- "http://m.qpic.cn/psb?/V11CA95048EY0H/PfctonD0Kz6Zgx18cvKAlnzEcnqeAXsjjveWLnCWdFU!/b/dL8AAAAAAAAA&bo=5ALjAgAAAAADJwU!&rf=viewer_4"
# - "http://wx2.sinaimg.cn/mw690/0064OpgJgy1g5z043c0u5j30hs0dc79y.jpg"
# - "https://raw.githubusercontent.com/linzowo/my_pic/master/2019-08-14_102837.png"
excerpt: 在开发中经常会遇到动态生成元素后 需要获取这些元素 在使用jQuery时默认的选择器无法获取到 所以我查阅了相关资料 找到了目前来说我觉得最合适的一种方式
---

## what

------

1. ### 动态生成元素？

   1. html代码中没有的元素
   2. 通过js生成的元素
   3. 通过模板字符串生成的元素
   4. 反正就是页面加载后才生成的元素



## why

------

1. 传统的方**直接使用$(选择器)**无法获取到该元素
2. 为新增元素绑定事件
3. 获取新增元素列表进行遍历操作



## how

------

1. ### 绑定事件的几种方式

   1. 自 jQuery 版本 1.7 起，on() 方法是 bind()、live() 和 delegate() 方法的新的替代品

2. ### on方法为子元素绑定事件

   1. ``$('选择器').on('事件名称','子元素选择器',callback)``

   2. example：

      ```html
      <body>
        <div id="father"></div>
      </body>
      <script src="jquery.js"></script>
      <script>
        // 动态生成子元素
        var children = $('<div id="children"></div>')
        // 将子元素加入父元素
        $('#father').append(children);
        // 为子元素注册事件
        $('#father').on('click','#children',function(){
          // 输出子元素中的内容
          console.log($(this).val());
        });
      </script>
      ```

   3. 通过上面的例子可以看到要使用on（）方法获取子元素，必须要绑定一个方法

      > 有的教程说使用**delegate() 方法**获取元素，事件不是必须的但是官方文档上写了，事件也是必须存在的所以我不考虑这种方式。

3. ### 如何获取元素列表进行遍历

   1. 很简单

   2. 直接在on（）方法的回调函数中获取

   3. example：

      ```html
      <body>
        <div class="father"></div>
      </body>
      <script src="jquery.js"></script>
      <script>
        for(var i = 0 ;i < 10; i++){
          // 动态生成子元素
          var children = $('<div class="children">你好啊</div>')
          // 将子元素加入父元素
          children.appendTo($('.father'));
        }
        // 为子元素注册事件
        $('.father').on('click','.children',function(){
          // 输出所有子元素
          console.log($('.father .children'));
        });
      </script>
      ```

      



