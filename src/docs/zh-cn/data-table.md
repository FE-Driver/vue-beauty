<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData(pramas) {
                    return axios.get("static/datatable.json",pramas).then(res =>{
                        return res.data;
                    });
                },
                columns:[
                    {title:"歌名",field:'name',sort:'asc'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                ],
                longColumns:[
                    {title:"歌名",field:'name',sort:'asc'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                    {title:"操作",field:'action'},
                ],
                pageno:1,
                checkAllMsg:null,
                clickRowMsg:null,
                mydata: [],
                treeOption:{
                    isAsync:true,
                    loadChildren:function(pramas){
                        return axios.get("static/children.json",pramas).then(res =>{
                            return res.data;
                        });
                    }
                }
            }
        },
        methods:{
            checkAll:function(value){
                this.checkAllMsg = "当前全选状态是："+value
            },
            clickRow:function(obj){
                console.log(obj);
                this.clickRowMsg = "当前点击第"+obj.index+"行";
            },
            refreshTable:function(){
                this.$refs.xtable.refresh();
            },
            reloadTable:function(){
                this.$refs.xtable.reload();
            },
            go2:function(){
                this.$refs.xtable.goto(2);
            },
             edit:function(){
                 this.mydata = [
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                     {
                       "name": "无地自容",
                       "time": "05:40",
                       "singer": "黑豹乐队",
                       "album": "黑豹1"
                     },
                 ];
             }
        },
        watch: {
            mydata: function (val) {
              console.log(val);
            },
          }
    }
</script>

# Datatable 数据表格

数据表格，用于展现大量结构化数据。

## 何时使用
- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、分页、自定义操作等复杂行为时。
- datatable内部默认使用flex布局，当外部容器使用固定高度或flex布局时，表格头部和底部会自动固定，中间区域自动滚动。
- bottomGap属性已被废弃，建议使用flex布局实现相同效果。

## 代码演示

### 数据-datatable.json

````javascript
    {
        "result":[
            {
                "name": "高级动物",
                "time": "03:37",
                "singer": "窦唯",
                "album": "摇滚中国乐势力"
            },
            {
                "name": "谁伴我闯荡 - (电影《Beyond日记》插曲)",
                "time": "04:13",
                "singer": "Beyond",
                "album": "25周年精选"
            },
            .....
        ],
        "totalCount":11,
        "pageSize":10,
        "pageNo":1
    }
````

::: demo
<summary>
  #### 树状表格
  以树形结构显示的表格，需要开启`tree-table`属性，需要时还可配置`treeTableOption`。
  树状表格支持客户端自动分层和服务器异步加载两种模式，默认使用的客户端自动分层模式（不支持两种模式混用），只需在返回数据中指定每行数据的id值和pid关系，组件会自动组织层级关系并进行显示。
</summary>

```html
<v-data-table :data='loadData' :columns='columns' tree-table></v-data-table>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData(pramas) {
                    return axios.get("static/datatable.json",pramas).then(res =>{
                        return res.data;
                    });
                },
                columns:[
                    {title:"歌名",field:'name'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                ]
            }
        },
        methods:{
            
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 异步树状表格
  异步加载的树状，除了打开`tree-table`开关，还需要配置`treeOption`。其中的`isAsync`必须设置为`true`，还必须配置`loadChildren`函数（返回值为promise）。
</summary>

```html
<v-data-table :data='loadData' :columns='columns' tree-table :tree-option='treeOption'></v-data-table>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData(pramas) {
                    return axios.get("static/datatable.json",pramas).then(res =>{
                        return res.data;
                    });
                },
                columns:[
                    {title:"歌名",field:'name'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                ],
                treeOption:{
                    isAsync:true,
                    loadChildren:function(pramas){
                        return axios.get("static/children.json",pramas).then(res =>{
                            return res.data;
                        });
                    }
                }
        },
        methods:{
            
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 基本
  最基本用法，配置好data和columns即可。
</summary>

```html
<div style='height:300px;overflow: hidden;'>
    <v-data-table :data='loadData' :columns='columns'></v-data-table>
</div>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData(pramas) {
                    return axios.get("static/datatable.json",pramas).then(res =>{
                        return res.data;
                    });
                },
                columns:[
                    {title:"歌名",field:'name'},
                    {title:"时长",field:'time'},
                    {title:"歌手",field:'singer'},
                    {title:"专辑",field:'album'},
                ]
            }
        },
        methods:{
            
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 边框和斑马线
  边框表格和斑马线效果
</summary>

```html
<v-data-table :data='loadData' :columns='columns' stripe bordered></v-data-table>
```
:::

::: demo
<summary>
  #### 显示html
  在表头或表格中显示普通html内容。命名为th的slot表示表头作用域插槽，命名为td的slot表示单元格的作用域插槽。
</summary>

```html
<v-data-table :data='loadData' :columns='columns' bordered>
    <template slot="th" slot-scope="props">
        <strong v-html="props.title"></strong>
    </template>
    <template slot="td" slot-scope="props">
        <span v-html="props.content"></span>
    </template>     
</v-data-table>
```
:::

::: demo
<summary>
  #### 特定列使用组件
  在表头或表格中显示普通html内容。命名为th的slot表示表头作用域插槽，命名为td的slot表示单元格的作用域插槽。
</summary>

```html
<v-data-table :data='loadData' :columns='columns' size="small" bordered>
    <template slot="th" slot-scope="props">
        <strong v-if="props.column.field=='album'">操作</strong>
        <strong v-else v-html="props.title"></strong>
    </template>
    <template slot="td" slot-scope="props">
        <div v-if="props.column.field=='album'">
            <v-icon type="play-circle"></v-icon>
            <v-icon type="download"></v-icon>
            <v-icon type="link"></v-icon>
            <v-icon type="heart-o"></v-icon>
            <v-icon type="share-alt"></v-icon>
        </div>
        <span v-else v-html="props.content"></span>
    </template>     
</v-data-table>
```
:::

::: demo
<summary>
  #### 固定高度
  设置height属性即可。
</summary>

```html
<v-data-table :data='loadData' :columns='columns' :height="300" bordered>
      
</v-data-table>
```
:::

::: demo
<summary>
  #### 固定列
  设置`fixedLeft`，表示左侧固定几列。设置`fixedRight`，表示右侧固定几列。
</summary>

```html
<v-data-table :data='loadData' :columns='longColumns' :fixed-left="1" :fixed-right="1">
    <template slot="td" slot-scope="props">
        <div v-if="props.column.field=='action'">
            <v-icon type="play-circle"></v-icon>
            <v-icon type="download"></v-icon>
            <v-icon type="link"></v-icon>
            <v-icon type="heart-o"></v-icon>
            <v-icon type="share-alt"></v-icon>
        </div>
        <span v-else v-html="props.content"></span>
    </template>    
</v-data-table>
```
:::

::: demo
<summary>
  #### 自适应高度
  设置bottomGap，表示表格底部距离viewport底部的间距，进而实现表格自适应高度。为了保证表格数据可见，自适应计算的最小高度是200px。
  注意：bottomGap仅对第一屏显示的table有效果；height属性和bottomGap同时使用时，height属性优先。
</summary>

```html
<v-data-table :data='loadData' :columns='columns' :bottom-gap="30">
    
</v-data-table>
```
:::

::: demo
<summary>
  #### 禁用分页
  不显示分页组件
</summary>

```html
<v-data-table :data='loadData' :columns='columns' :pagination="false">
     
</v-data-table>
```
:::

::: demo
<summary>
  #### 行选择和点击事件
  选择行的事件演示；行点击的事件演示
</summary>

```html

<v-alert v-if="checkAllMsg" :message="checkAllMsg"></v-alert>
<v-alert v-if="clickRowMsg" :message="clickRowMsg"></v-alert>

<v-data-table :data='loadData' :columns='columns' check-type="checkbox" @checkall="checkAll" @clickrow="clickRow" :current-data.sync='mydata'>
      
</v-data-table>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData(pramas) {
                    return axios.get("static/datatable.json",pramas).then(res =>{
                        return res.data;
                    });
                },
                checkAllMsg:null,
                checkRowMsg:null,
            }
        },
        methods:{
            checkAll:function(value){
                this.checkAllMsg = "当前全选状态是："+value
            },
            clickRow:function(obj){
                console.log(obj);
                this.clickRowMsg = "当前点击第"+obj.index+"行";
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 无数据时提示文案
  无数据时显示的提示文案，可根据需要定制，使用名为emptytext的slot。
</summary>

```html

<v-data-table :data='loadData' :columns='columns'>
    <template slot="emptytext" slot-scope="props">
        <v-tag color="orange">我去，这是几个意思？</v-tag>
    </template>    
</v-data-table>
```
:::

::: demo
<summary>
  #### 调用API方法
  可通过在datatable实例上调用API方法实现某些特定操作，如刷新数据。
</summary>

```html

<v-data-table ref="xtable" :data='loadData' :columns='columns' :page-num="pageno" :current-data.sync='mydata'>
      
</v-data-table>
<br>
<v-button @click="refreshTable">刷新表格</v-button>
<v-button @click="reloadTable">重载表格</v-button>
<v-button @click="go2">跳转到第二页</v-button>
<v-button @click="edit">修改当前数据</v-button>
<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData(pramas) {
                    return axios.get("static/datatable.json",pramas).then(res =>{
                        return res.data;
                    });
                },
                mydata: [],
                pageno:1
            }
        },
        methods:{
            refreshTable:function(){
                this.$refs.xtable.refresh();
            },
            reloadTable:function(){
                this.$refs.xtable.reload();
            },
            go2:function(){
                this.$refs.xtable.goto(2);
            },
            edit:function(){
                this.mydata = [
                    {
                      "name": "无地自容",
                      "time": "05:40",
                      "singer": "黑豹乐队",
                      "album": "黑豹1"
                    },
                    {
                      "name": "无地自容",
                      "time": "05:40",
                      "singer": "黑豹乐队",
                      "album": "黑豹1"
                    },
                    ......
                ];
            }
        }
    }
</script>

```
:::


## API

### Datatable Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| data | 获取表格数据的函数，初始化必需参数，返回值必须是Promise对象,该函数默认接收一个请求参数，参数构造请见data arguments | Function | - |
| currentData.sync | 表格当前数据,业务开发中也可以直接修改currentData,从而重新渲染表格（仅推荐用于客户端排序、数据过滤等场景） | Array | [] |
| bordered | 是否展示外边框和列边框 | Boolean | false |
| stripe | 是否显示间隔斑马纹 | Boolean | false |
| size | 尺寸，`large`、`small` | String | large |
| columns | 表头配置，类型为对象数据，具体请见下表：Columns Object | Array | - |
| pagination | 是否启用分页 | Boolean | false |
| pageSize | 分页大小 | Number | 10 |
| pageNum | 当前页数 | Number | 1 |
| pageSizeOptions | 分页大小可选参数 | Array | [10, 20, 30, 40, 50] |
| checkType | 选择框类型 | 'checkbox'或'radio' | - |
| height | 表格高度，注意是指表格整体高度（包含表头、表格和底部分页） | Number | - |
| bottomGap | 距离viewport底部的间隙距离 | Number | - |
| responseParamsName | 接口数据的关键字段命名，目前支持total和results,分别表示总数字段和结果字段 | Object | {total:'totalCount',results: 'result'} |
| rowClickChecked | 点击表格行是否选中checkbox | Boolean | false |
| fixedLeft | 左侧固定列数 | Number | 0 |
| fixedRight | 右侧固定列数 | Number | 0 |
| treeTable | 是否启用树状表格 | Boolean | false |
| treeOption | 树状表格配置 | Object | {idKey: "id",pidKey: "pid",indent: 4,position: 0,sortKey: null, order: "asc",isAsync: false,loadChildren: null} |

### currentData与checked状态说明
currentData返回当前表格数据，需要使用sync修饰符保持双向同步，在翻页、点击checkbox、点击全选按钮时会更新，其中包含每行的checked状态，具体对应字段为`vb_dt_checked`,获取方法为`currentData[index]['vb_dt_checked']`。

### data arguments
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| pageNo | 页数 | Number | - |
| pageSize | 分页大小 | Number | 10 |
| sortColumns | 排序列 | 'field order field order' | false |

### Columns Object
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| title | 列名 | String | - |
| field | 字段名（对应data中的字段名） | String | - |
| sort | 是否排序 | Boolean | false |
| width | 列宽 | 合法的CSS尺寸,如120px或5% | - |
| className | 自定义类名 | String | - |


### treeOption
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| idKey | 数据项中的id主键名 | String | 'id' |
| pidKey | 数据项中的pid主键名 | String | 'pid' |
| indent | 子节点显示缩进距离(12px为1单位) | Number | 4 |
| position | 折叠按钮显示列(以0开头，checkbox列不算) | Number | 0 |
| sortKey | 数据排序字段（在客户端分层模式下，您可能需要对数据显示做排序） | String | '' |
| order | 排序方式，配合sortKey使用 | 'asc'或'desc' | 'asc' |
| isAsync | 是否异步加载子节点 | Boolean | false |
| loadChildren | 加载子节点的函数，返回值必须是promise，该函数默认接收一个请求参数，参数构造请见loadChildren arguments | Function | null |

### loadChildren arguments
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| parentid | parent id值 | Number | - |
| sortColumns | 排序列 | 'field order field order' | false |

### th Slot Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| cindex | 当前列索引 | Number | - |
| column | 当前列对象 | Object | - |
| title | 当前列标题 | String | - |

### td Slot Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| index | 当前行索引 | Number | - |
| cindex | 当前列索引 | Number | - |
| column | 当前列对象 | Object | - |
| content | 当前单元格内容 | String | - |
| item | 当前行内容对象 | Object | - |

### emptytext Slot
暂无参数

### footerinfo Slot Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| total | 数据总条数 | Number | - |
| pageNumber | 当前页数 | Number | - |


### Datatable Events
| 事件        | 说明           | 参数        | 参数说明        |
|------------|----------------|------------|------------|
| checkall    | 全选时触发 | value | 是否选中，布尔值 |
| clickrow    | 点击某一行时触发 | object | {index:选中行的索引,checked:是否选中,row:行数据} |
| dataloaded    | 数据加载完成后触发（初始化和翻页都会触发） | Array | 加载成功的数据 |

### Datatable Methods
| method        | 说明           | 参数        | 参数说明        | 返回值        |
|------------|----------------|------------|------------|------------|
| refresh    | 刷新表格数据（使用datatable的当前参数） | - | - | - |
| reload    | 重新加载数据（重置到第一页） | - | - | - |
| goto    | 跳转页数 | pageNumber:number | 页数 | - |
| getCheckedData  | 获取被选中的数据集合 | - | - | - |
| setChecked  | 设置选中状态 | index:number,status:boolean | 索引，状态 | - |
| fixHeaderWidth  | 该方法用于修正表头宽度，用于特定情况下表头宽度不正确的情况（数据变化后组件默认会自动重新计算） | - | - | - |


