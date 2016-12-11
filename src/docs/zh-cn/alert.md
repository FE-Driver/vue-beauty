<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
<style>
  .demo-box.demo-alert .el-alert {
    margin: 20px 0 0;
  }

  .demo-box.demo-alert .el-alert:first-child {
    margin: 0;
  }
</style>

## Alert 警告提示

警告提示，展现需要关注的信息。

#### 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

#### 1.基本使用

<v-alert type="success" message="成功提示的文案"></v-alert>

```
<v-alert type="success" message="成功提示的文案"></v-alert>
```

#### 2.四种样式
<v-alert type="success" message="成功提示的文案"></v-alert>
<v-alert type="info" message="消息提示的文案"></v-alert>
<v-alert type="warning" message="警告提示的文案"></v-alert>
<v-alert type="error" message="错误提示的文案"></v-alert>

```js
<v-alert type="success" message="成功提示的文案"></v-alert>
<v-alert type="info" message="消息提示的文案"></v-alert>
<v-alert type="warning" message="警告提示的文案"></v-alert>
<v-alert type="error" message="错误提示的文案"></v-alert>
```

#### 3.可关闭的警告提示
<v-alert type="error" message="错误提示的文案"
description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
closable></v-alert>

```js
<v-alert type="error" message="错误提示的文案"
description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
closable></v-alert>
```

#### 4.可口的图标让信息类型更加醒目。
<v-alert type="success" message="成功提示的文案" show-icon></v-alert>
```
<v-alert type="success" message="成功提示的文案" show-icon></v-alert>
```

<v-alert type="info" message="消息提示的文案" show-icon></v-alert>
```
<v-alert type="info" message="消息提示的文案" show-icon></v-alert>
```

<v-alert type="warning" message="警告提示的文案" show-icon></v-alert>
```
<v-alert type="warning" message="警告提示的文案" show-icon></v-alert>
```

<v-alert type="error" message="错误提示的文案" show-icon></v-alert>
```
<v-alert type="error" message="错误提示的文案" show-icon></v-alert>
```

<v-alert type="success" message="成功提示的文案" show-icon 
    description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"></v-alert>
```
<v-alert type="success" message="成功提示的文案" show-icon 
    description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"></v-alert>
```

<v-alert type="info" message="消息提示的文案" show-icon 
    description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"></v-alert>
```
<v-alert type="info" message="消息提示的文案" show-icon 
    description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"></v-alert>
```

<v-alert type="warning" message="警告提示的文案" show-icon 
    description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"></v-alert>
```

<v-alert type="warning" message="警告提示的文案" show-icon description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"></v-alert>
```

<v-alert type="error" message="错误提示的文案" show-icon description="错误错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"></v-alert>
```
<v-alert type="error" message="错误提示的文案" show-icon 
    description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示示的辅助性文字介绍"></v-alert>
```
         





### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| close-text | 关闭按钮自定义文本 | string | — | — |
| show-icon | 是否显示图标 | boolean | — | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |
