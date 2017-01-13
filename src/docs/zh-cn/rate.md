<script>
  export default {
    data: function() {
      return {
        star: 3
      };
    },
    methods: {
      _change(val) {
        console.log('selected:' + val);
        this.star = val;
      }
    }
  }
</script>


## Rate 评分

评分组件。

### 何时使用

对评价进行展示。
对事物进行快速的评级操作。

### 最简单的用法。

<v-rate :on-change="_change"></v-rate>

```
<v-rate :on-change="_change"></v-rate>
```

### 支持选中半星。

<v-rate allow-half :default-value='2.5'></v-rate>

```
<v-rate allow-half :default-value='2.5'></v-rate>
```

### 给评分组件加上文案展示。
<v-rate :default-value='star' :on-change="_change">
  <span class='ant-rate-text'>{{ star }}星</span>
</v-rate>

```
<v-rate :default-value='star' :on-change="_change">
  <span class='ant-rate-text'>{{ star }}星</span>
</v-rate>
```

### 只读，无法进行鼠标交互。
<v-rate disabled :default-value='2'></v-brate>
```
<v-rate disabled :default-value='2'></v-brate>
```


### Attributes
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| count    | star 总数 | Number | 5 |
| value | 当前数，受控值 | Number | - |
| defaultValue | 默认值 | Number | 0 |
| onChange | 回调 | Function(value: Number) | - |
| allowHalf | 是否允许半选   | Boolean | false |
| disabled | 只读，无法进行交互 | Boolean | false |


