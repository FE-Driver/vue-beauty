<script>
  export default {
    data: ()=> ({
      value: ['cq','lp','sgt'],
      options: [{
          value: 'sc',
          label: '四川',
          children: [{
              value: 'cd',
              label: '成都',
              children: [{
                  value: 'jyq',
                  label: '九眼桥'
              }, {
                  value: 'cxl',
                  label: '春熙路'
              }],
          }, {
              value: 'nc',
              label: '南充',
              children: [{
                  value: 'nbx',
                  label: '南部县'
              }]
          }],
      }, {
          value: 'cq',
          label: '重庆',
          children: [{
              value: 'lp',
              label: '梁平',
              children: [{
                  value: 'sgt',
                  label: '双桂堂'
              }],
          }],
      }],
      options2: []
    }),
    watch: {
      'value'(val){
        console.log(val)
      }
    },
    mounted(){
      let opt = JSON.parse(JSON.stringify(this.options))
      opt[0].disabled = true;
      this.options2 = opt;
    },
    methods: {
      onchange(val) {
        console.log(val)
      }
    }
  }
</script>


# Cascader 级联选择

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

::: demo
<summary>
  #### 基本
  省市区级联。
</summary>

```html
<template>
  <v-cascader :data="options" @change="onchange"></v-cascader>
</template>

<script>
  export default {
    data: ()=> ({
      options: [{
          value: 'sc',
          label: '四川',
          children: [{
              value: 'cd',
              label: '成都',
              children: [{
                  value: 'jyq',
                  label: '九眼桥'
              }, {
                  value: 'cxl',
                  label: '春熙路'
              }],
          }, {
              value: 'nc',
              label: '南充',
              children: [{
                  value: 'nbx',
                  label: '南部县'
              }]
          }],
      }, {
          value: 'cq',
          label: '重庆',
          children: [{
              value: 'lp',
              label: '梁平',
              children: [{
                  value: 'sgt',
                  label: '双桂堂'
              }],
          }],
      }]
    }),
    methods: {
      onchange(val) {
        console.log(val)
      }
    }
  };
</script>
```
:::

::: demo
<summary>
  #### 大小
  不同大小的级联选择器。
</summary>

```html
<template>
  <v-cascader size="large" :data="options"></v-cascader>
  <v-cascader :data="options"></v-cascader>
  <v-cascader size="small" :data="options"></v-cascader>
</template>

<script>
  export default {
    data: ()=> ({
      options: [{
          value: 'sc',
          label: '四川',
          children: [{
              value: 'cd',
              label: '成都',
              children: [{
                  value: 'jyq',
                  label: '九眼桥'
              }, {
                  value: 'cxl',
                  label: '春熙路'
              }],
          }, {
              value: 'nc',
              label: '南充',
              children: [{
                  value: 'nbx',
                  label: '南部县'
              }]
          }],
      }, {
          value: 'cq',
          label: '重庆',
          children: [{
              value: 'lp',
              label: '梁平',
              children: [{
                  value: 'sgt',
                  label: '双桂堂'
              }],
          }],
      }]
    })
  };
</script>
```
:::

::: demo
<summary>
  #### 默认值
  默认值通过数组的方式指定。不同大小的级联选择器。
</summary>

```html
<template>
  <v-cascader v-model="value" :data="options"></v-cascader>
</template>

<script>
  export default {
    data: ()=> ({
      value: ['cq','lp','sgt'],
      options: [{
          value: 'sc',
          label: '四川',
          children: [{
              value: 'cd',
              label: '成都',
              children: [{
                  value: 'jyq',
                  label: '九眼桥'
              }, {
                  value: 'cxl',
                  label: '春熙路'
              }],
          }, {
              value: 'nc',
              label: '南充',
              children: [{
                  value: 'nbx',
                  label: '南部县'
              }]
          }],
      }, {
          value: 'cq',
          label: '重庆',
          children: [{
              value: 'lp',
              label: '梁平',
              children: [{
                  value: 'sgt',
                  label: '双桂堂'
              }],
          }],
      }]
    }),
    watch: {
      value(val){
        console.log(val)
      }
    }
  };
</script>
```
:::

::: demo
<summary>
  #### 禁用选项
  通过指定`options`里的`disabled`字段。
</summary>

```html
<template>
  <v-cascader :data="options2"></v-cascader>
</template>

<script>
  export default {
    data: ()=> ({
      options2: [{
        value: 'sc',
        label: '四川',
        disabled: 'true',
        children: [{
          value: 'cd',
          label: '成都',
          children: [{
            value: 'jyq',
            label: '九眼桥'
          },{
            value: 'cxl',
            label: '春熙路'
          }],
        },{
          value: 'nc',
          label: '南充',
          children: [{
            value: 'nbx',
            label: '南部县'
          }]
        }],
        }, {
        value: 'cq',
        label: '重庆',
        children: [{
          value: 'lp',
          label: '梁平',
          children: [{
            value: 'sgt',
            label: '双桂堂'
          }],
        }],
      }]
    })
  };
</script>
```
:::

::: demo
<summary>
  #### 禁用
  禁用整个控件
</summary>

```html
  <v-cascader disabled></v-cascader>
```
:::
## API
### Cascader Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| value    | 指定选中项 | array | - |
| data | 可选项数据源	 | array | - |
| placeholder | 输入框占位文本 | string | 请选择 |
| size    | 输入框大小，可选 large default small | string | default |
| disabled | 禁用	 | boolean | false |
| allowClear | 是否支持清除	 | boolean | true |
| position | 下拉框的定位方式（absolute,fixed） | string | absolute |
| popupContainer | 下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | function | () => document.body |

### Cascader Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change | value改变时触发 | value |