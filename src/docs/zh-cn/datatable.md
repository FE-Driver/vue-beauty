<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData:function (pramas) {
                    return axios.post("truck/search",pramas);
                },
                columns:[
                    {title:"姓名",field:'name'},
                    {title:"性别",field:'sex'},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true,width:"200px"},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"}
                ],
                pageno:1,
                checkAllMsg:null,
                checkRowMsg:null,
                clickRowMsg:null
            }
        },
        methods:{
            checkAll:function(value){
                this.checkAllMsg = "当前全选状态是："+value
            },
            checkRow:function(obj){
                this.checkRowMsg = "当前操作第"+obj.index+"行；选中状态是："+obj.checked;
            },
            clickRow:function(obj){
                this.clickRowMsg = "当前点击第"+obj.index+"行";
            },
            reloadTable:function(){
                this.$refs.xtable.reload();
            },
            go2:function(){
                this.pageno = 2;
            }
        }
    }
</script>

# Datatable 数据表格

数据表格，用于展现大量结构化数据。

## 何时使用
- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、分页、自定义操作等复杂行为时。

## 代码演示

::: demo
<summary>
  #### 基本
  最基本用法，配置好data-source和columns即可。
</summary>

```html
<v-datatable :data-source='loadData' :columns='columns'>  
</v-datatable>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData:function (pramas) {
                    return axios.post("truck/search",pramas);
                },
                columns:[
                    {title:"姓名",field:'name'},
                    {title:"性别",field:'sex'},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true,width:"200px"},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"}
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
  #### 显示html
  在表头或表格中显示普通html内容。命名为th的slot表示表头作用域插槽，命名为td的slot表示单元格的作用域插槽。
</summary>

```html
<v-datatable :data-source='loadData' :columns='columns'>
    <template slot="th" scope="props">
        <strong v-html="props.title"></strong>
    </template>
    <template slot="td" scope="props">
        <span v-html="props.content"></span>
    </template>     
</v-datatable>
```
:::

::: demo
<summary>
  #### 特定列使用组件
  在表头或表格中显示普通html内容。命名为th的slot表示表头作用域插槽，命名为td的slot表示单元格的作用域插槽。
</summary>

```html
<v-datatable :data-source='loadData' :columns='columns'>
    <template slot="th" scope="props">
        <strong v-if="props.index==0">操作操作操作</strong>
        <strong v-else v-html="props.title"></strong>
    </template>
    <template slot="td" scope="props">
        <v-button-group v-if="props.cindex==0" size="small">
            <v-button type="primary" icon="cloud"></v-button>
            <v-button type="primary" icon="cloud-download"></v-button>
        </v-button-group>
        <span v-else v-html="props.content"></span>
    </template>     
</v-datatable>
```
:::

::: demo
<summary>
  #### 固定高度
  设置height属性即可。
</summary>

```html
<v-datatable :data-source='loadData' :columns='columns' :height="300">
      
</v-datatable>
```
:::

::: demo
<summary>
  #### 自适应高度
  设置bottomGap，表示表格底部距离viewport底部的间距，进而实现表格自适应高度。为了保证表格数据可见，自适应计算的最小高度是200px。
  注意：bottomGap仅对第一屏显示的table有效果；height属性和bottomGap同时使用时，height属性优先。
</summary>

```html
<v-datatable :data-source='loadData' :columns='columns' :bottom-gap="30">
    
</v-datatable>
```
:::

::: demo
<summary>
  #### 禁用分页
  不显示分页组件
</summary>

```html
<v-datatable :data-source='loadData' :columns='columns' :pagination="false">
     
</v-datatable>
```
:::

::: demo
<summary>
  #### 行选择和点击事件
  选择行的事件演示；行点击的事件演示
</summary>

```html

<v-alert v-if="checkAllMsg" :message="checkAllMsg"></v-alert>
<v-alert v-if="checkRowMsg" :message="checkRowMsg"></v-alert>
<v-alert v-if="clickRowMsg" :message="clickRowMsg"></v-alert>

<v-datatable :data-source='loadData' :columns='columns' check-type="checkbox" @checkall="checkAll" @checkrow="checkRow" @clickRow="clickRow">
      
</v-datatable>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData:function (pramas) {
                    return axios.post("truck/search",pramas);
                },
                columns:[
                    {title:"姓名",field:'name'},
                    {title:"性别",field:'sex'},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true,width:"200px"},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"}
                ],
                checkAllMsg:null,
                checkRowMsg:null,
                clickRowMsg:null
            }
        },
        methods:{
            checkAll:function(value){
                this.checkAllMsg = "当前全选状态是："+value
            },
            checkRow:function(obj){
                this.checkRowMsg = "当前操作第"+obj.index+"行；选中状态是："+obj.checked;
            },
            clickRow:function(obj){
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

<v-datatable :data-source='loadData' :columns='columns'>
    <template slot="emptytext" scope="props">
        <v-tag color="orange">我去，这是几个意思？</v-tag>
    </template>    
</v-datatable>
```
:::

::: demo
<summary>
  #### 调用API方法
  可通过在datatable实例上调用API方法实现某些特定操作，如刷新数据。
</summary>

```html

<v-datatable ref="xtable" :data-source='loadData' :columns='columns' :page-num="pageno">
      
</v-datatable>
<br>
<v-button @click="reloadTable">刷新表格</v-button>
<v-button @click="go2">跳转到第二页</v-button>

<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                loadData:function (pramas) {
                    return axios.post("truck/search",pramas);
                },
                columns:[
                    {title:"姓名",field:'name'},
                    {title:"性别",field:'sex'},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true,width:"200px"},
                    {title:"姓名",field:'name'},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"}
                ],
                pageno:1
            }
        },
        methods:{
            reloadTable:function(){
                this.$refs.xtable.reload();
            },
            go2:function(){
                this.pageno = 2;
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
| dataSource | 获取表格数据的函数，返回值必须是Promise对象,该函数默认接收一个请求参数，参数构造请见dataSource arguments | Function | - |
| columns | 表头配置，类型为对象数据，具体请见下表：Columns Object | Array | - |
| pagination | 是否启用分页 | Boolean | false |
| pageSize | 分页大小 | Number | 10 |
| pageNum | 当前页数 | Number | 1 |
| pageSizeOptions | 分页大小可选参数 | Array | [10, 20, 30, 40, 50] |
| checkType | 选择框类型 | 'checkbox'或'radio' | - |
| height | 表格高度，注意是指表格整体高度（包含表头、表格和底部分页） | Number | - |
| bottomGap | 距离viewport底部的间隙距离 | Number | - |
| responseParamsName | 接口数据的关键字段命名，目前支持total和results,分别表示总数字段和结果字段 | Object | {total:'totalCount',results: 'result'} |

### dataSource arguments
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| pageNo | 页数 | Number | — |
| pageSize | 分页大小 | Number | 10 |
| sortColumns | 排序列 | 'field order field order' | false |

### Columns Object
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| title | 列名 | String | — |
| field | 字段名（对应dataSource中的字段名） | String | - |
| sort | 是否排序 | Boolean | false |
| width | 列宽 | 合法的CSS尺寸,如120px或5% | — |
| className | 自定义类名 | String | — |

### Datatable Events
| 事件        | 说明           | 参数        | 参数说明        |
|------------|----------------|------------|------------|
| checkall    | 全选时触发 | value | 是否选中，布尔值 |
| checkrow    | 选中某一行的checkbox时触发 | object | {index:选中行的索引,checked:是否选中,row:行数据} |
| clickrow    | 点击某一行时触发 | object | {index:点击行的索引,row:行数据} |

### API Methods
| method        | 说明           | 参数        | 参数说明        |
|------------|----------------|------------|------------|
| reload    | 重新加载数据 | - | - |


