<style>
  .demo-box.demo-alert .el-alert {
    margin: 20px 0 0;
  }

  .demo-box.demo-alert .el-alert:first-child {
    margin: 0;
  }
</style>

## Card 卡片

通用卡片容器。

### 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。   

### 1.基本使用

> 包含标题、内容、操作区域。  


<v-card title="Card title">
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</v-card>

```
<v-card title="Card title">
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</v-card>
```

### 2.典型卡片


> 包含标题、内容、操作区域。  

<v-card title="Card title">
  <a href="#" slot="extra">More</a>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</v-card>

```
<v-card title="Card title">
  <a href="#" slot="extra">More</a>
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</v-card>
```

### 3.无边框

> 在灰色背景上使用无边框的卡片。

<v-card title="Card title" :bordered="false">
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</v-card>

```vue
<v-card title="Card title" :bordered="false">
  <p>Card content</p>
  <p>Card content</p>
  <p>Card content</p>
</v-card>
```



### 4.更灵活的内容展示

> 可以调整默认边距，设定宽度。

 <v-card :body-style="{ padding: 0 }" style="width:240px;">
  <div class="custom-image">
    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
  </div>
  <div class="custom-card">
    <h3>Europe Street beat</h3>
    <p>www.instagram.com</p>
  </div>
</v-card>

```
 <v-card :body-style="{ padding: 0 }" style="width:240px;">
  <div class="custom-image">
    <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
  </div>
  <div class="custom-card">
    <h3>Europe Street beat</h3>
    <p>www.instagram.com</p>
  </div>
</v-card>
```


<div class="ant-row-flex ant-row-flex-space-around">

  <v-card title="Card title" style="width:240px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </v-card>

  <v-card title="Card title" style="width:240px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </v-card>

  <v-card title="Card title" style="width:240px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </v-card>

</div>

```

### 5.栅格卡片

> 在系统概览页面常常和栅格进行配合。

<div class="ant-row-flex ant-row-flex-space-around">

  <v-card title="Card title" style="width:240px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </v-card>

  <v-card title="Card title" style="width:240px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </v-card>

  <v-card title="Card title" style="width:240px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </v-card>

</div>
```



### Attributes

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| title | 卡片标题 | string |  |
| slot::extra | 卡片右上角的操作区域 | slot node | 无 |
| bordered | 是否有边框 | boolean | true | 
| bodyStyle | 内容区域自定义样式 | Object |  | 

