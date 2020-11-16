---
title: front-matter使用详解
date: 2019-06-13 11:33:26
categories: 
   - z-hexo
tags:
- hexo
- blog
photos: 
   - "http://m.qpic.cn/psb?/V11CA95048EY0H/zMJbL7jKUZ2BJstddrQBoBbaFyzZDOlSbXYCy*h4yhM!/b/dFQBAAAAAAAA&bo=QAHwAAAAAAADF4M!&rf=viewer_4"
   - "http://wx4.sinaimg.cn/mw690/0064OpgJgy1g5yervi8s6j308w06o0tx.jpg"
   # - "https://raw.githubusercontent.com/linzowo/my_pic/master/LJIZlzHgQ7WPSh5KVTCB_Typewriter.png"
excerpt: 在hexo模版渲染过程中，很多模版的激活都需要使用front-matter，来设置激活，所以对于front-matter中的标签理解就显得尤为重要了，我这里总结了一些基础的，标签语意，供大家参考。
---

# front-matter使用详解

---

## front-matter包含的内容

| 参数         | 描述                                                 | 默认值       |
| :----------- | :--------------------------------------------------- | :----------- |
| `layout`     | 布局                                                 |              |
| `title`      | 标题                                                 |              |
| `date`       | 建立日期                                             | 文件建立日期 |
| `updated`    | 更新日期                                             | 文件更新日期 |
| `comments`   | 开启文章的评论功能                                   | true         |
| `tags`       | 标签（不适用于分页）                                 |              |
| `categories` | 分类（不适用于分页）                                 |              |
| `permalink`  | 覆盖文章网址                                         |              |
| `keywords`   | 仅用于 meta 标签和 Open Graph 的关键词（不推荐使用） |              |



---

## 什么是front-matter

1. ```markdown
   ---
   title: tags
   date: 2019-08-13 09:39:50
   type: tags
   layout: tag
   ---
   ```

2. 就是.md文件最上面的这部分内容



---

## 标签详解（只讲解官方文档中说的模糊的）

1. **layout**：
   
   - 作用：指定要使用的模版样式
   - 例如我上面的例子中使用的` tag`模版
   - 如果不指定这个将会使用`根目录/_config.yml`中的默认配置`default_layout: post`
   
2. **tags**：

   - 作用：给文章添加标签，使其能在标签页中显示

   - 如何使用：

   - ```markdown
     tags:
     - PS3
     - Games
     ```
   -  如上所示一篇文章可以设置多个标签

3. **categories**：

   - 整体内容基本与 `tags` 一致

   - 区别在于在进行分类管理的时候此标签下的内容是`有严格的顺序和层次`的，tags没有

   - ```markdown
     categories:
     - Diary
     
     因为hexo的分类具有层次关系，同一文章不能同时存在两个同级分类中，所以下面这种方式
     
     categories:
     - Diary
     - Life
     会使分类Life成为Diary的子分类，而不是并列分类。因此，有必要为您的文章选择尽可能准确的分类。
     ```

4. **permalink**：

   - 直白的说就是静态文件的存放地址
   - 如果不指定这个将会使用`根目录/_config.yml`中的默认配置`permalink: :year/:month/:day/:title/`
   - 如果指定的文件夹不存在就会创建一个
   - 你如何设置最后在页面中使用的连接地址就会是什么样的，例如上面这种方式最终生成的文章的连接地址就是`xxx.github.io/2019/08/11/：title/`

5. **keywords**

   - 用于SEO优化
   - 你这篇文章包含哪些关键词
   - 人家百度这些关键词的时候可能就会显示你的页面



---

## 拓展：当前的主题中没有分类页和标签页怎么办

`这个问题困扰了我一段时间，网上也没有比较好的答案所以现在写出来，给大家。`

1. **tags创建步骤**

   > ​	根据你的配置创建文件夹，在我的配置中`（根目录/_config.yml）`设置的标签根目录为`tag_dir: tags`，所以我新建额是tags目录，你可以根据你的情况处理。

   1. 创建tags文件夹，在命令行中输入：

      ~~~bash
      
      hexo new page "tags"
      ~~~

   2. 找到新建的文件夹`\source\tags`下的index.md文件

   3. 修改其`front-matter`为如下格式

      ~~~markdown
      ---
      title: tags
      date: 2019-08-13 09:39:50
      type: tags	// 帮助脚本识别这是一个用来创建tags的文档
      layout: tag // 我的tags模版标签叫tag你可以根据你的模版名称输入对应的名称
      ---
      ~~~

   4. 生成静态文件

      ~~~bash
      hexo g
      ~~~

   5. 通过主题设置`/themes/你的主题名称/_config.yml`中的配置，在页面指定一个连接指向`tags`文件夹，就可以在页面中看到标签页了

      ~~~
      menu:
        # Project:
        #   path: /categories/Projects
        #   card: project-card
        # Stuffs:
        #   path: /tags/Stuffs
        #   card: article-card
        Home: /
        tags: /tags
      ~~~

      

![blog-tags](http://wx2.sinaimg.cn/mw1024/0064OpgJgy1g5xvux3klsj30uf0chwes.jpg)

2. **categories创建步骤**

   与tags步骤一致我就不再赘述。