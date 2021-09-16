---
title: Vue2 + TS 中使用mixin方式
date: 2021-09-16 10:37:02
categories:
- "I-学习笔记"
tags:
- "前端"
- "vue2"
- "TypeScript"
excerpt: vue2 TS 踩坑
---



## mixin文件

~~~typescript
// 表格相关的mixin
import { Component, Vue } from 'vue-property-decorator'

// 必须声明是什么类型的 不然无法进行混入 原则上@Component只能混入@Component
@Component
export default class TableMixin extends Vue {
  // 要混入的方法必须是public的 不能是static的 不然无法找到
  formatterCellval(row, column, cellValue, index): string | number {
    if (!cellValue) {
      return '-'
    }
    return cellValue
  }
}

~~~



## 引入并混入

~~~typescript
import { Component, Vue } from 'vue-property-decorator'
import TableMixin from '@/mixins/table'

// 在这里进行混入
@Component({
  mixins: [TableMixin]
})
export default class Area extends Vue {
    // 你的代码内容
}
~~~



## 注意事项

1. 属性可以混入（包括私有）
2. 函数可以混入（只能是public的）
3. 同名属性无法混入，会报错
4. 混入文件必须为ts文件