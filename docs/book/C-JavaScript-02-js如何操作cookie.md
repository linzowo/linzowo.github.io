---
title: 'C-JavaScript-02: js如何操作cookie'
date: 2019-07-14 10:37:36
categories:
- C-JavaScript
tags:
- JavaScript
photos:
- "http://m.qpic.cn/psb?/V11CA95048EY0H/pgu5oX.KhbdgF5EuaX7kkK3ZupXORp2k8Rrca9V0lr0!/b/dIQAAAAAAAAA&bo=IANYAgAAAAADF0s!&rf=viewer_4"
# - "http://wx4.sinaimg.cn/mw690/0064OpgJgy1g5z0dav97kj30m80go75t.jpg"
# - "https://raw.githubusercontent.com/linzowo/my_pic/master/2019-08-14_104113.png"
excerpt: js如何处理cookie的基本用法
---
### 设置cookie

```javascript
// 设置cookie
          //   获取当前时间
          var d = new Date();
          //   将当前时间转换为毫秒数方便进行计算===》通过settime得到一个新的时间（毫秒模式的）===》现在d仍然是一个非世界时的时间对象，需要转换为世界时的字符串
          d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
          // console.log(typeof d);
          // 设置需要的cookie和过期时间
          document.cookie = "show=hidden;expires=" + d.toUTCString();
```

### 接收cookie

```javascript
// 将document.cookie转换为一个数组或键值对
        function getCookie(num) {
          /**
           * @description: 获取第n个cookie的键和值组成的数组
           * @param {int} num
           * @return: 一个数组，0=>cookie_key,1=>cookie_value|超出范围就返回false
           */  
          var cookieArr = document.cookie.split(";");
          if(num>=cookieArr.length || num<0){
            return false;
          }
          var resultArr = cookieArr[num].split("=");
          return resultArr;
        }
```

### 删除cookie

```javascript
//   获取当前时间
var d = new Date();
// 将当前时间转换为毫秒数方便进行计算，并做一个减法，使这个时间过期
d.setTime(d.getTime() -1);
// 即将过期时间设置为一个已经过期的时间
document.cookie = "show=hidden;expires=" + d.toUTCString();
```

