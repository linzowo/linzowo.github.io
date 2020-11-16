---
title: I-学习笔记-02：如何让你的web页面支持打印
date: 2019-09-27 09:09:22
categories:
- I-学习笔记
tags:
- CSS
- 前端
- 打印
photos: 
- http://m.qpic.cn/psb?/V11CA95048EY0H/7ZXzEP0Sri2d4rAZW2DmNABKSUpHO09uqY*EFajuOFA!/b/dLgAAAAAAAAA&bo=NQNtAgAAAAADB3s!&rf=viewer_4
excerpt: 当我们的网站需要被打印时你就需要这些设置了
---
## 项目背景

偶尔我们的网站会遇到这样的需求：``我想把它打印下来``

尤其是当我们的网站主要提供一些在线报表，文档的时候打印功能就显得尤为重要了



## 解决方案

使用``print css``，这是跨平台兼容的标准。不推荐使用浏览器插件方式实现打印。



## 两种实现方式

1. 将打印相关样式单独写入一个打印样式表方便管理,然后通过``link``的方式引入例如:

   ```html
   <link rel="stylesheet" href="print.css" media="print" />
   ```

   > 注意:需要在link标签中加入media="print"属性确保该样式表只在打印文件时生效,这样就可以在其中写正常的样式,保证其只在打印是生效

2. 通过css中的``@media print`` 选择器,对 对应元素样式设置你需要的样式,例如:

   ```css
   @media print selector {...}
   
   or
   
   @media print{selector {...}}
   ```

   > 添加了``@media print``的样式只会在打印时生效,不会影响正常展示时的样式,所以你可以在这里设置针对打印的样式.比如页面的宽度等
   >
   > 这种方式不需要单独建立css样式表,直接在需要的地方写上选择器和样式就可以了



## 特殊设置

1. ``@page``规则

   1. > @page 规则用于在打印文档时修改某些CSS属性。你不能用@page规则来修改所有的CSS属性，而是只能修改
      >
      > margin,
      >
      > orphans (当元素内部发生分页时必须在页面底部保留的最少行数),
      >
      > widow (当元素内部发生分页时必须在页面顶部保留的最少行数),
      >
      >  page breaks of the document(分页设置)。
      >
      > 对其他属性的修改是无效的。
      >
      > --- MDN: https://developer.mozilla.org/zh-CN/docs/Web/CSS/@page

   2. 代码实例如下

      ```css
      @page :pseudo-class {  size: A4 landscape;  margin:2cm;}
      ```

   3. > **这个属性不是很好使用,我在使用过程中就没成功过.等我研究透了再来写.**



## 代码详解

```css
@media print {
    /* section标签之前总是插入分页符,意思就是每个section标签都会自动分页 */
  section {page-break-before: always;}
    /* h1之后总是插入分页符,意思就是h1标签后的内容会被分到下一页 */
  h1 {page-break-after: always;}
    /* 避免在p标签中插入分页符,但是当该标签的内容长度超出一页时还是会继续分页 */
  p {page-break-inside: avoid;}
}

@media print {
    /* 当p标签内部发生分页时,页面底部至少保留3行,顶部至少保留2行 */
  p {orphans:3; widows:2;}
}
```



## 其他

1. 对于页面上有显示而不想打印的内容,可以将其display设置为none来避免打印。
2. 需要打印的内容尽量避免float,有些浏览器不会正确的打印浮动的内容。
3. 可以调用window.print()函数来打印当前页面。
4. 分页打印或换页打印：page-break-before和page-break-after 这两个CSS属性并不会修改网页在屏幕上的显示，这两个属性是用来控制文件的打印方式。每个打印属性都可以设定4种设定值：auto、always、left和?right。其中Auto是默认值，只有在有需要时，才需设定分页符号(Page-breaks)。page-break-before若设定成always，则是在遇到特定的组件时，打印机会重新开始一个新的打印页。page-break-before若设定成left，则会插入分页符号，直到指定的组件出现在一个左边的空白页上。page-break-before若设定成right，则会插入分页符号，直到指定的组件出现在一个右边的空白页上。page-break-after属性会将分页符号加在指定组件后，而非之前。