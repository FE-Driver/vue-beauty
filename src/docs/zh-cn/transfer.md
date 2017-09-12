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
    render1(item) {
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

# Transfer 穿梭框
双栏穿梭选择框。

## 何时使用
用直观的方式在两栏中移动元素，完成选择行为。
选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。 其中，左边一栏为 source，右边一栏为 target，API 的设计也反应了这两个概念。

## 代码演示

::: demo
<summary>
  #### 基本用法
  最基本的用法，展示了 `data`、`targetKeys`、每行的渲染函数 `label` 以及事件 `change` 的用法。
</summary>

```html
<template>
  <v-transfer :data="dataSource1" :titles="['源列表','目的列表']" :target-keys="targetKeys1" @change="handleChange1" :label="render1"></v-transfer>
</template>

<script>
export default {
  data() {
    return {
      dataSource1: [],
      targetKeys1: []
    }
  },
  created() {
    this.mockData();
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
    render1(item) {
      return item.title;
    },
    handleChange1(targetKeys, direction, moveKeys) {
      this.targetKeys1 = targetKeys;
    }
  }
}
</script>
```

:::

::: demo
<summary>
  #### 带搜索框
  带搜索框的穿梭框，可以自定义搜索函数。
</summary>

```html
<template>
  <v-transfer :data="dataSource2" :target-keys="targetKeys2" @change="handleChange2" show-search :filter-option="filterOption" :label="render1"></v-transfer>
</template>

<script>
export default {
  data() {
    return {
      dataSource2: [],
      targetKeys2: []
    }
  },
  created() {
    this.getMock()
  },
  methods: {
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
    render1(item) {
      return item.title;
    },
    handleChange2(targetKeys, direction, moveKeys) {
      this.targetKeys2 = targetKeys;
    },
    filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
    }
  }
}
</script>
```

:::

::: demo
<summary>
  #### 高级用法
  穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。
</summary>

```html
<template>
  <v-transfer :data="dataSource3" :target-keys="targetKeys3" @change="handleChange3" :list-style="{width: '250px', height: '300px'}" show-search :operations="['向右', '向左']" :filter-option="filterOption" :label="render1">
    <div :style="{float: 'right', margin: '5px'}" slot="leftFooter">
        <v-button type="ghost" size="small" @click="mockData2(3)">刷新</v-button>
    </div>
    <div :style="{float: 'right', margin: '5px'}" slot="rightFooter">
        <v-button type="ghost" size="small" @click="mockData2(3)">刷新</v-button>
    </div>
  </v-transfer>
</template>

<script>
export default {
  data() {
    return {
      dataSource3: [],
      targetKeys3: []
    }
  },
  created() {
    this.getMock()
  },
  methods: {
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
    render1(item) {
      return item.title;
    },
    handleChange3(targetKeys, direction, moveKeys) {
      this.targetKeys3 = targetKeys;
    },
    filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
    }
  }
}
</script>
```

:::

::: demo
<summary>
  #### 自定义渲染行数据
  自定义渲染每一个 Transfer Item，可用于渲染复杂数据
</summary>

```html
<template>
  <v-transfer :data="dataSource4" :target-keys="targetKeys4" @change="handleChange4" :list-style="{width: '300px', height: '300px'}" :label="render2"></v-transfer>
</template>

<script>
export default {
  data() {
    return {
      dataSource4: [],
      targetKeys4: []
    }
  },
  created() {
    this.getMock()
  },
  methods: {
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
    render2(item) {
      return {
        label: `${item.title} - ${item.description}`,
        value: item.title
      }
    },
    handleChange4(targetKeys, direction, moveKeys) {
      this.targetKeys4 = targetKeys;
    }
  }
}
</script>
```

:::

## API

### Transfer Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| data | 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外。 | Object[] | [] |
| label | 每行数据渲染函数，该函数的入参为 `data` 中的项 | Function | - |
| targetKeys | 显示在右侧框数据的key集合 | String[] | [] |
| listStyle | 两个穿梭框的自定义样式 | Object | - |
| className | 两个穿梭框的自定义类 | String | - |
| titles | 标题集合,顺序从左至右 | String[] | ['', ''] |
| operations | 操作文案集合,顺序从上至下 | String[] | [] |
| showSearch | 是否显示搜索框 | Boolean | false |
| filterOption | 接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | (inputValue, option): boolean | - |
| searchPlaceholder | 搜索框的默认值	 | String | '请输入搜索内容' |
| notFoundContent | 当列表为空时显示的内容 | String | '列表为空' |
| slot:leftFooter | 左侧穿梭框底部渲染插槽 | Slot Node | - |
| slot:rightFooter | 右侧穿梭框底部渲染插槽 | Slot Node | - |

### Data Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| key	 | transfer item的唯一标识 | String | - |
| title    | 标题 | String | - |
| description | 描述	 | String | - |
| disabled | 禁掉响应	| Boolean | false |

### Transfer Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 选项在两栏之间转移时触发 | (targetKeys, direction, moveKeys) |
