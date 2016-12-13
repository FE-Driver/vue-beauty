
## Button 按钮

按钮用于开始一个即时操作。

### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### 1.按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。
通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 type 值则为次按钮。不同的样式可以用来区别其重要程度。
主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

<div>
    <v-button type="primary">Primary</v-button>
    <v-button>default</v-button>
    <v-button type="ghost">Ghost</v-button>
    <v-button type="dashed">Dashed</v-button>
</div>

```
<v-button type="primary">Primary</v-button>
<v-button>default</v-button>
<v-button type="ghost">Ghost</v-button>
<v-button type="dashed">Dashed</v-button>
```

### 2.图标按钮

当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。

<div>
    <v-button type="primary" shape="circle" icon="search"></v-button>
    <v-button type="primary" icon="search"><span>搜索</span></v-button>
    <v-button type="ghost" shape="circle-outline" icon="search"></v-button>
    <v-button type="ghost" icon="search"><span>搜索</span></v-button>
</div>


```
<v-button type="primary" shape="circle" icon="search"></v-button>
<v-button type="primary" icon="search"><span>搜索</span></v-button>
<v-button type="ghost" shape="circle-outline" icon="search"></v-button>
<v-button type="ghost" icon="search"><span>搜索</span></v-button>
```

### 3.按钮尺寸

按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

<div>
    <v-button type="primary" size="large">Large</v-button>
    <v-button type="primary">Default</v-button>
    <v-button type="primary" size="small">Small</v-button>
</div>

```
<v-button type="primary" size="large">Large</v-button>
<v-button type="primary">Default</v-button>
<v-button type="primary" size="small">Small</v-button>
```

### 4.不可用状态

添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<div>
    <v-button type="primary">Primary</v-button>
    <v-button type="primary" :disabled="true">Primary</v-button>
</div>

```
<v-button type="primary">Primary</v-button>
<v-button type="primary" :disabled="true">Primary</v-button>
```

### 5.加载中状态

添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

<div id="app-5">
    <v-button type="primary" :loading="true">Loading</v-button>
    <v-button type="primary">Loading</v-button>
</div>

### 6.按钮组合

可以将多个 Button 放入 Button.Group 的容器中。通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。

<div>
<v-button-group size="large">
   <v-button>Large</v-button><v-button>Large</v-button>
</v-button-group>
<v-button-group>
   <v-button>Default</v-button><v-button>Default</v-button>
</v-button-group>
<v-button-group size="small">
   <v-button>Small</v-button><v-button>Small</v-button>
</v-button-group>
</div>

```
<v-button-group size="large">
   <v-button>Large</v-button><v-button>Large</v-button>
</v-button-group>
<v-button-group>
   <v-button>Default</v-button><v-button>Default</v-button>
</v-button-group>
<v-button-group size="small">
   <v-button>Small</v-button><v-button>Small</v-button>
</v-button-group>
```

### Attributes
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| type | 设置按钮类型，可选值为 primary ghost dashed 或者不设 | string | 无 |
| htmlType | 设置 button 原生的 type 值，可选值请参考 HTML 标准 | string | button |
| icon | 设置按钮的图标类型 | string | 无 |
| shape | 设置按钮形状，可选值为 circle circle-outline 或者不设 | string | 无 |
| size | 设置按钮大小，可选值为 small large 或者不设 | string | default |
| loading | 设置按钮载入状态 | boolean | false |
| onClick | click 事件的 handler | function |  |



