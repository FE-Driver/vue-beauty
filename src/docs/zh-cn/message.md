<script>
    export default {
        methods: {
            openMessage() {
                this.$message.info("这是一条普通的提醒");
            },
            openTypeMessage(type) {
                this.$message[type]("这是一条类型的提醒");
            },
            openMessageCustomizeDuration() {
                this.$message.info("这是一条自定义duration的提醒", 10);
            },
            openLoadingMessage() {
                const hide = this.$message.loading("这是一条加载中的提醒");
                setTimeout(hide, 2500);
            }
        }
    }
</script>

# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

::: demo
<summary>
  #### 普通提示
  信息提醒反馈。
</summary>

```html
<template>
    <button type="button" class="ant-btn ant-btn-primary" @click="openMessage">
        <span>显示普通提醒</span>
    </button>
</template>
<script>
    export default {
        methods: {
            openMessage() {
                this.$message.info("这是一条普通的提醒");
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 其他提示类型
  包括成功、失败、警告。
</summary>

```html
<template>
    <button type="button" class="ant-btn" @click="openTypeMessage('success')">
        <span>success</span>
    </button>
    <button type="button" class="ant-btn" @click="openTypeMessage('error')">
        <span>error</span>
    </button>
    <button type="button" class="ant-btn" @click="openTypeMessage('warning')">
        <span>warning</span>
    </button>
</template>
<script>
    export default {
        methods: {
            openTypeMessage(type) {
                this.$message[type]("这是一条成功的提醒");
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 修改延时
  自定义时长 `10s`，默认时长为 `1.5s`。
</summary>

```html
<template>
    <button type="button" class="ant-btn ant-btn-primary" @click="openMessageCustomizeDuration">
        <span>显示延时提醒</span>
    </button>
</template>
<script>
    export default {
        methods: {
            openMessageCustomizeDuration() {
                this.$message.info("这是一条自定义duration的提醒", 10);
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 加载中
  进行全局 loading，异步自行移除。
</summary>

```html
<template>
    <button type="button" class="ant-btn ant-btn-primary" @click="openLoadingMessage">
        <span>显示加载中提醒</span>
    </button>
</template>
<script>
    export default {
        methods: {
            openLoadingMessage() {
                const hide = this.$message.loading("这是一条加载中的提醒", 0);
                setTimeout(hide, 2500);
            }
        }
    }
</script>
```
:::



### API

- `this.$message.success(content, duration)`
- `this.$message.error(content, duration)`
- `this.$message.info(content, duration)`
- `this.$message.warning(content, duration)`
- `this.$message.loading(content, duration)`

### Props
组件提供了四个静态方法，参数如下：

| 参数       | 说明           | 类型                       | 默认值       |
|------------|----------------|--------------------------|--------------|
| content    | 提示内容       | string | -           |
| duration   | 自动关闭的延时，单位秒 | number               | 1.5          |

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- `this.$message.config(options)`
- `this.$message.destroy()`

```js
this.$message.config({
  top: 100,
  duration: 2,
});
```

| 参数       | 说明                | 类型                       | 默认值       |
|------------|--------------------|--------------------------|-------------|
| top        | 消息距离顶部的位置 | number                      | 24px        |
| duration   | 默认自动关闭延时，单位秒 | number                 | 1.5         |
