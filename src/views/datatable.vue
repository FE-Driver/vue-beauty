<template lang="html">

    <div>
        <section class="markdown">
            <h1>Datatable</h1>

            <p>
                依赖服务端加载的数据表格
            </p>

            <h2>何时使用</h2>
            <ul>
                <p>
                    展示大量结构化数据时使用.
                </p>
            </ul>

            <v-datatable
                    :data-source='url'
                    :columns='columns'
                    :formatter='formatter'
                    :row-selection='rowSelection'
                    :bottom-gap="100"
                    :left-fix="3"
            >
            </v-datatable>

            <br>

            <v-datatable
                    :data-source='url'
                    :columns='columns'
                    :formatter='formatter'
                    :row-selection='rowSelection'
                    :height='400'
            >
            </v-datatable>

            <h2>组件演示</h2>
        </section>

        <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
            <div class="ant-col-lg-24 code-boxes-col-2-1">
                <code-box title="表格-自定义事件" describe="自定义事件">
                    <v-datatable :data-source='url' :columns='columns' :formatter='formatter' :row-selection='rowSelection'></v-datatable>
                </code-box>
            </div>
        </div>

        <api-table :apis='apis'>datatable参数</api-table>
        <api-table :apis='columnsapi'>columns参数</api-table>
        <api-table :apis='rowSelectionApi'>rowSelection参数</api-table>

    </div>


</template>

<script>
    import vDatatable from '../../components/datatable'
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default {
        data: function () {
            return {
                apis: [
                    {
                        parameter: 'data-source(必须)',
                        explain: '数据源,服务端数据接口对应的url地址',
                        type: 'string',
                        default: ''
                    },
                    {
                        parameter: 'columns(必须)',
                        explain: '列配置（请见下表）',
                        type: 'object',
                        default: ''
                    },
                    {
                        parameter: 'size',
                        explain: '表格尺寸,支持large,middle,small',
                        type: 'string',
                        default: 'middle'
                    },
                    {
                        parameter: 'pageSize',
                        explain: '分页大小',
                        type: 'number',
                        default: '10'
                    },
                    {
                        parameter: 'pageSizeOptions',
                        explain: '分页大小配置项',
                        type: 'array',
                        default: '[10,20,30,40,50]'
                    },
                    {
                        parameter: 'paramsName',
                        explain: '接口请求参数名称配置项,后续完善文档',
                        type: 'object',
                        default: ''
                    },
                    {
                        parameter: 'otherParams',
                        explain: '发送请求时需要额外附带的参数,后续完善文档',
                        type: 'object',
                        default: '{}'
                    },
                    {
                        parameter: 'formatter',
                        explain: '数据格式化函数,参数data,数据加载成功table渲染之前调用',
                        type: 'function',
                        default: ''
                    },
                    {
                        parameter: 'rowSelection',
                        explain: '行选择配置（请见下表）',
                        type: 'object',
                        default: ''
                    },
                ],
                columnsapi:[
                    {
                        parameter: 'title(必须)',
                        explain: '列名',
                        type: 'string',
                        default: ''
                    },
                    {
                        parameter: 'field(必须)',
                        explain: '对应的数据字段',
                        type: 'string',
                        default: ''
                    },
                    {
                        parameter: 'render',
                        explain: '渲染函数,可自定义某列的具体渲染逻辑,参数value, row, index',
                        type: 'function',
                        default: ''
                    },
                    {
                        parameter: 'width',
                        explain: '列的宽度,支持任意css尺寸值',
                        type: 'string',
                        default: 'auto'
                    },
                    {
                        parameter: 'className',
                        explain: '列的自定义class,多个class之间使用空格分割',
                        type: 'string',
                        default: ''
                    },
                    {
                        parameter: 'sort',
                        explain: '是否启用列排序,true表示启用排序功能,asc和desc表示启用默认排序',
                        type: 'true | "asc" | "desc"',
                        default: 'false'
                    }
                ],
                rowSelectionApi:[
                    {
                        parameter: 'type(必须)',
                        explain: '选择模式,',
                        type: 'checkbox | radio',
                        default: 'checkbox'
                    },
                    {
                        parameter: 'onSelect',
                        explain: '行选择之后的回调函数,参数index,state,item',
                        type: 'function',
                        default: ''
                    },
                    {
                        parameter: 'onSelectAll',
                        explain: '全选操作的回掉函数,参数state,items',
                        type: 'function',
                        default: ''
                    }
                ],
                url:"/truck/search",
                columns:[
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true,width:"200px"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名姓名姓名姓名姓名",field:'name',sort:true},
                    {title:"姓名姓名",field:'name',sort:true},
                    {title:"姓名姓名姓名",field:'name',sort:true},
                    {title:"姓名姓名",field:'name',sort:true},
                    {title:"姓名姓名姓名姓名姓名",field:'name',sort:true},
                    {title:"姓名姓名",field:'name',sort:true},
                    {title:"姓名姓名姓名",field:'name',sort:true},
                    {title:"姓名姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"性别",field:'sex',render:this.cellrender},
                    {title:"性别",field:'sex',render:this.cellrender},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"id",field:'id',className:"test dd"},
                    {title:"姓名",field:'name',sort:true},
                    {title:"id",field:'id',className:"test dd"}
                ],
                msg:{},
                formatter:function (data) {
                    console.log(data);
                    for (var obj of data) {
                        obj.checkbox = "<input type='checkbox' @click='clickCheck(" + obj.id + ",$event)'>";
                    }
                    return data;
                },
                rowSelection:{
                    type:"checkbox",
                    onSelect:function (index,state,item) {
                        console.log(index);
                        console.log(state);
                        console.log(item);
                    },
                    onSelectAll:function (state,items) {
                        console.log(state);
                        console.log(items);
                    }
                }
            }
        },
        components: {
            vDatatable,
            codeBox,
            apiTable
        },
        methods:{
            handleIt:function (msg) {
                console.log(msg);
                this.msg = msg;
            },
            cellrender:function (value, row, index) {
//                console.warn(row);
                return `<strong>${value}</strong>`;
            },
            clickCheck:function () {
                alert(0)
            }
        }
    }
</script>

<style lang="less">
</style>