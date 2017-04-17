<script>
export default {
  data() {
    return {
      dataSource1: [],
      targetKeys1: [],
      dataSource2: [],
      targetKeys2: [],
      dataSource3: [],
      targetKeys3: [],
      dataSource4: [],
      targetKeys4: [],
    }
  },
  created() {
    this.mockData();
    this.getMock()
  },
  methods: {
    mockData() {
      for (let i = 0; i < 20; i++) {
        this.dataSource1.push({
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          disabled: i % 3 < 1,
        });
        if(i % 3 > 1) {
          this.targetKeys1.push(i.toString());
        }
      }
    },
    mockData2(index) {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i,
          title: `内容${i + 1}`,
          description: `内容${i + 1}的描述`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this[`dataSource${index}`] = mockData;
      this[`targetKeys${index}`] = targetKeys;
    },
    getMock() {
      for(let num = 1; num < 4; num ++) {
        this.mockData2(num+1);
      }
    },
    render(item) {
      return item.title;
    },
    render2(item) {
      return {
        label: `${item.title} - ${item.description}`,
        value: item.title
      }
    },
    handleChange1(targetKeys, direction, moveKeys) {
      this.targetKeys1 = targetKeys;
    },
    handleChange2(targetKeys, direction, moveKeys) {
      this.targetKeys2 = targetKeys;
    },
    handleChange3(targetKeys, direction, moveKeys) {
      this.targetKeys3 = targetKeys;
    },
    handleChange4(targetKeys, direction, moveKeys) {
      this.targetKeys4 = targetKeys;
    },
    filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
    }
  }
}
</script>

# Timeline 时间轴
垂直展示的时间流信息。

## 何时使用
- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；

## 代码演示

::: demo
<summary>
  #### 基本用法
  基本的时间轴。
</summary>

```html
<v-timeline>
    <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
    <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
    <v-timeline-item>技术测试 2015-09-01</v-timeline-item>
    <v-timeline-item>网络异常正在修复 2015-09-01</v-timeline-item>
</v-timeline>
```

:::

::: demo
<summary>
  #### 圆圈颜色
  圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。
</summary>

```html
<v-timeline>
    <v-timeline-item color="green">创建服务现场 2015-09-01</v-timeline-item>
    <v-timeline-item color="green">创建服务现场 2015-09-01</v-timeline-item>
    <v-timeline-item color="red">
        <p>初步排除网络异常1</p>
        <p>初步排除网络异常2</p>
        <p>初步排除网络异常3 2015-09-01</p>
    </v-timeline-item>
    <v-timeline-item>
        <p>技术测试1</p>
        <p>技术测试2</p>
        <p>技术测试3 2015-09-01</p>
    </v-timeline-item>
</v-timeline>
```

:::

::: demo
<summary>
  #### 最后一个
  通过 `pending` 标记最后一个元素为幽灵节点，表示时间轴未完成，还在记录过程中。
</summary>

```html
<v-timeline pending>
    <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
    <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
    <v-timeline-item>技术测试 2015-09-01</v-timeline-item>
    <v-timeline-item><a href="#">查看更多</a></v-timeline-item>
</v-timeline>
```

:::

::: demo
<summary>
  #### 自定义时间轴点
  可以设置为图标或其他自定义元素。
</summary>

```html
<v-timeline>
    <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
    <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
    <v-timeline-item color="red"><v-icon type="clock-circle-o" slot="dot" style="fontSize: 16px"></v-icon>技术测试 2015-09-01</v-timeline-item>
    <v-timeline-item>网络异常正在修复 2015-09-01</v-timeline-item>
</v-timeline>
```

:::

## API
### Timeline Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| pending | 指定最后一个幽灵节点是否存在 | Boolean | false |

### Timeline Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| color | 指定圆圈颜色 `blue, red, green`，或自定义的色值 | String | blue |
| slot:dot | 自定义时间轴点	 | Slot Node | - |
