<script>
  import {t} from '../../../vb/locale'
  export default {
    data: ()=> ({
      test: t('test.test'),
      checked: true
    }),
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

## Alert 警告

用于页面中展示重要的提示信息。

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。
::: demo
<summary>
  #### 设置边界父容器
  指定父容器ID后，affix元素会在父容器内浮动，即给浮动元素指定了边界
</summary>

```html
<v-switch v-model="checked"></v-switch>

<script>
  export default {
    methods: {
      callback(num) {
        this.$notify.open({
          content: `现在的数字是${num}`,
          icon: 'smile-o',
          placement: 'top-center',
        });
      },
    },
  };
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::
## i18n
<div>{{test}}</div>


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
