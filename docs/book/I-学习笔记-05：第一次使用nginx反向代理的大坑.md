---
title: I-学习笔记-05：第一次使用nginx反向代理的大坑
date: 2020-02-16 13:03:42
categories:
- I-学习笔记
tags:
- 反向代理
- nginx
- web-dev-server
- 前端
photos:
excerpt: 第一次使用nginx进行反向代理，搞了很久才明白到底错在哪里，希望大家看完不会再犯一样的错。
---
# 第一次使用nginx反向代理的大坑

## 项目需求：

通过webpack-dev-server中间件代理访问配置在nginx上的反向代理服务端口，从而实现跨域请求资源。



## 最终实现

**webpack配置**

```js
devServer: {
    host: 'localhost',
    port: 8000,
    proxy: {  // 代理配置
      '/v1':{
        target: "http://localhost:8001", // 代理服务器地址，nginx会监听此接口下的请求，并代理请求真正的网址
        pathRewrite: {'^/v1' : ''}
      }
    }
  }
```

**nginx配置**

```nginx
resolver 8.8.8.8; #配置域名进行访问的时候，需要配置此项目，否则会报502错误
server {
   listen       8001; #代理服务器端口
   server_name  localhost; #域名
   location / { #路由规则 代理所有请求到https://u.y.qq.com/cgi-bin/musicu.fcg
       proxy_pass  https://u.y.qq.com/cgi-bin/musicu.fcg?$query_string;
   	}
 }
```



## 实现过程中的各种坑

为了自己以后不在这种地方犯迷糊，也希望能给大家一些帮助，所以总结一下我遇到的各种坑

### 1. 如何保证webpack代理到正确的路径

首先我们要清除webpack-dev-server的转发机制，就以我上面代码中的设置

~~~js
host: 'localhost',
port: 8000,
proxy: {  // 代理配置
      '/v1':{
        target: "http://localhost:8001", 
      }
~~~

这个代理的结果就是

**访问`http://localhost:8000/v1` → 代理监听到这个请求 → 转发到`http://localhost:8001/v1`**

可以看到这层代理只是更改了域名`http://localhost:8000`部分后面的路径完全照搬，所以在nginx的代理规则中我们一定要清楚的认识到从webpack-dev-server转发过来地url是怎么样的。

**另外一定要注意的是,这个监听的是以`/v1`开头的所有url,不管你是`/v1aa`还是`/v1/aa`,只要是以`/v1`开始就行,**

**不要使用正则,例如`/v1/*`,这个匹配的是以 `/v1/*xxx`而不是`/v1/xxx`都是血泪教训,**

**另外我还不清楚这个配置能否使用正则,知道的朋友可以告诉我一下.**



**如果要取消后面的部分路径怎么办呢**

~~~js
    proxy: {  // 代理配置
      '/v1':{
        target: "http://localhost:8001", 
        pathRewrite: {'^/v1' : ''}
      }
~~~

通过`pathRewrite: {'^/v1' : ''}`路径重写方法，将路径中的部分内容重写为想要的内容，具体使用方法请自行百度。

### 2. 如何保证nginx正确转发

现在我们知道了，向nginx服务器发起的请求地址为`http://localhost:8001/v1`,现在就可以在nginx配置中着手处理请求了。

~~~nginx
resolver 8.8.8.8; #配置域名进行访问的时候，需要配置此项目，否则会报502错误
server {
   listen       8001; #因为请求的是8001端口，所以我们监听这个端口
   server_name  localhost; #域名的作用同端口
   location / { #路由规则 代理所有请求到https://u.y.qq.com/cgi-bin/musicu.fcg
       proxy_pass  https://u.y.qq.com/cgi-bin/musicu.fcg?$query_string;
   	}
 }
~~~



整个匹配机制的关键就在于

~~~nginx
location / { 
       proxy_pass  https://u.y.qq.com/cgi-bin/musicu.fcg?$query_string;	
}
~~~

这个部分中的`location`的意思就是url中除去域名的部分，以`http://localhost:8001/v1`为例

`location`就是`/v1`

而`location / `中的`/`就是匹配的关键，具体见下

> =    开头表示精确匹配
>
> ^~    开头表示url以某个常规字符串开头，理解为匹配url路径即可，nginx不对url做编码，因此请求为/static/20%/aa,可以被规则 ^$ /static/ /aa 匹配到
>
> ~    区分大小写的正则匹配
>
> ~*    不区分大小写的正则匹配
>
> !~ !~*   区分大小写不匹配及不区分大小写不匹配的正则
>
> /    通用匹配，任何请求都会匹配到

同时这个匹配机制是由顺序的,顺序为

> 多个location配置的情况下匹配顺序
>
> 为首先匹配 = 
>
> 其次匹配 ^~ 
>
> 其次是按文件中的顺序的正则匹配，
>
> 最后是交给 / 通用匹配。 
>
> 当匹配成功的时候，停止匹配，按当前匹配规则处理请求。

因为我的当前项目暂时没有其他转发需求,所以我配置的所有请求都转发到同一个地址.

### 3. nginx一些内置参数的含义

> ```
> $args ： #这个变量等于请求行中的参数，同$query_string
> $content_length ： 请求头中的Content-length字段。
> $content_type ： 请求头中的Content-Type字段。
> $document_root ： 当前请求在root指令中指定的值。
> $host ： 请求主机头字段，否则为服务器名称。
> $http_user_agent ： 客户端agent信息
> $http_cookie ： 客户端cookie信息
> $limit_rate ： 这个变量可以限制连接速率。
> $status  请求状态
> $body_bytes_sent 发送字节
> $request_method ： 客户端请求的动作，通常为GET或POST。
> $remote_addr ： 客户端的IP地址。
> $remote_port ： 客户端的端口。
> $remote_user ： 已经经过Auth Basic Module验证的用户名。
> $request_filename ： 当前请求的文件路径，由root或alias指令与URI请求生成。
> $scheme ： HTTP方法（如http，https）。
> $server_protocol ： 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。
> $server_addr ： 服务器地址，在完成一次系统调用后可以确定这个值。
> $server_name ： 服务器名称。
> $server_port ： 请求到达服务器的端口号。
> $request_uri ： 包含请求参数的原始URI，不包含主机名，如：”/foo/bar.php?arg=baz”。
> $uri ： 不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。
> $document_uri ： 与$uri相同。
> ```

其中`$args`和`$query_string`的内容是一样的,都是url中的参数字符串.假设一个url为`http://localhost:8000/v1/?a=1&b=2&c=3`则

`$args`的值为`a=1&b=2&c=3`

**这里需要注意这个部分是不带`?`的所以在转发拼接参数的时候一定要带上`?`**

例如:`proxy_pass  https://u.y.qq.com/cgi-bin/musicu.fcg?$query_string;`



> 最后：希望以后我不在为这个问题苦恼大家也一样.最后祝大家编码愉快，头发茂盛。