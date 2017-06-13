<script>
export default {
    data: ()=> ({
        value: 1
    }),
    methods: {
        pageSizeChange(current, size) {
            console.log(current, size);
        },
        showTotal(total) {
            return `全部 ${total} 条`;
        },
        showTotal2(total,pages) {
            return `1-${pages} 全部 ${total} 条`;
        },
        loadPage(i) {
          	console.log('cb' + i);
        }
    }
}
</script>

# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用
- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 组件演示
::: demo
<summary>
  #### 基本
  基础分页。
</summary>

```html
<template>
  <v-pagination v-model="value" @change="loadPage"
      :total="50">
  </v-pagination>
</template>
<script>
export default {
    methods: {
        loadPage(i) {
            console.log('cb' + i);
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 更多
  更多分页。
</summary>

```html
<template>
  <v-pagination :total="500"></v-pagination>
</template>
```

:::

::: demo
<summary>
  #### 改变
  改变每页显示条目数。
</summary>

```html
<template>
  <v-pagination show-size-changer @sizechange="pageSizeChange" :total="50"></v-pagination>
</template>
<script>
export default {
    methods: {
        pageSizeChange(current, size) {
            console.log(current, size);
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 跳转
  快速跳转到某一页。
</summary>

```html
<template>
  <v-pagination show-quick-jumper :total="500"></v-pagination>
</template>
```

:::

::: demo
<summary>
  #### 迷你
  迷你版本。
</summary>

```html
<template>
  <v-pagination
      size="small"
      :total="50">
  </v-pagination>
  <br>
  <v-pagination
      :value="value"
      :total="100"
      :default-page-size="5"
      :page-size="10"
      @change="loadPage"
      show-size-changer
      @sizechange="pageSizeChange"
      show-quick-jumper
      size="small"
      :simple="false">
  </v-pagination>
  <br>
  <v-pagination
      :value="value"
      :total="50"
      :default-page-size="5"
      :page-size="10"
      @change="loadPage"
      size="small"
      :simple="false"
      :show-total="showTotal">
  </v-pagination>
</template>
```

:::

::: demo
<summary>
  #### 简洁
  简单的翻页。
</summary>

```html
<template>
  <v-pagination simple></v-pagination>
  <v-pagination simple :total="500"></v-pagination>
</template>
```

:::

::: demo
<summary>
  #### 受控
  受控制的页码。
</summary>

```html
<template>
  <v-pagination :value="3" :total="50"></v-pagination>
</template>
```

:::

::: demo
<summary>
  #### 总数
  通过设置 `showTotal` 展示总共有多少数据。
</summary>

```html
<template>
  <v-pagination :show-total="showTotal" :total="50"></v-pagination>
  <br>
  <v-pagination :show-total="showTotal2" :total="50"></v-pagination>
</template>
<script>
export default {
    methods: {
        showTotal(total) {
            return `全部 ${total} 条`;
        },
        showTotal2(total, pages) {
            return `1-${pages} 全部 ${total} 条`;
        }
    }
}
</script>
```

:::

## API

### Pagination Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| value    | 当前页数 | Number | 1 |
| total | 数据总数 | Number | 0 |
| pageSize    | 每页条数 | Number | 10 |
| showSizeChanger | 是否可以改变 pageSize | Boolean | false |
| pageSizeOptions | 指定每页可以显示多少条 | Array | [10, 20, 30, 40] |
| showQuickJumper | 是否可以快速跳转至某页 | Boolean | false |
| size | 当为「small」时，是小尺寸分页 | String | 无 |
| simple | 当添加该属性时，显示为简单分页 | Object | 无 |
| showTotal    | 用于显示总共有多少条数据 | Function(total, totalPages) | 无 |

### Pagination Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 页码改变的回调，参数是改变后的页码 | page |
| sizechange    | pageSize 变化的回调 | current, size |
