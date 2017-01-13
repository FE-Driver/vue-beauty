<template lang="html">

    <div>
        <section class="markdown">
            <h1>Datatable 表格</h1>

            <p>
                展示行列数据。
            </p>

            <h2>何时使用</h2>
            <ul>
                <li>当有大量结构化的数据需要展现时；</li>
                <li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>
            </ul>
            <h2>组件演示</h2>
        </section>
        <v-Row :gutter="16">
            <v-Col>
                <code-box
                    title="基本"
                    describe="基本用法"
                >
                    <v-datatable
                        :data-source='url'
                        :columns='columns'
                        :formatter='formatter'
                        :row-selection='rowSelection'
                        :bottom-gap="100"
                        :left-fix="3"
                        http-type="get"
                    >
                    </v-datatable>
                    <template slot="js">
                    export default {
                        data() {
                            return {
                                url:"static/static/datatable.json",
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
                        methods:{
                            cellrender:function (value, row, index) {
                                return `<strong>${value}</strong>`;
                            },
                            clickCheck:function () {
                                alert(0)
                            }
                        }
                    }
                    </template>
                </code-box>

                <code-box
                    title="基本"
                    describe="基本用法"
                >
                    <v-datatable
                        :data-source='url'
                        :columns='columns'
                        :formatter='formatter'
                        :row-selection='rowSelection'
                        :height='400'
                        http-type="get"
                    >
                    </v-datatable>
                    <template slot="js">
                    export default {
                        data() {
                            return {
                                url:"static/static/datatable.json",
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
                        methods:{
                            cellrender:function (value, row, index) {
                                return `<strong>${value}</strong>`;
                            },
                            clickCheck:function () {
                                alert(0)
                            }
                        }
                    }
                    </template>
                </code-box>

                <code-box title="表格-自定义事件" describe="自定义事件">
                    <v-datatable :data-source='url' :columns='columns' :formatter='formatter' :row-selection='rowSelection' http-type="get"></v-datatable>
                    <template slot="js">
                    export default {
                        data() {
                            return {
                                url:"static/static/datatable.json",
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
                        }，
                        methods:{
                            cellrender:function (value, row, index) {
                                return `<strong>${value}</strong>`;
                            },
                            clickCheck:function () {
                                alert(0)
                            }
                        }
                    }
                    </template>
                </code-box>
            </v-col>
        </v-row>

        <api-table :apis='apis'><h3>datatable参数</h3></api-table>
        <api-table title="" :apis='columnsapi'><h3>columns参数</h3></api-table>
        <api-table title="" :apis='rowSelectionApi'><h3>rowSelection参数</h3></api-table>

    </div>

</template>

<script>
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
                    {
                        parameter: 'ghost',
                        explain: '如果需要在datatable内使用外部组件，可以在这里自定义，然后在columns.component引用，每个自定义组件会接受3个prop（index，item，value），index是该组件所在行的序号，item是该组件所在行对应的数据，value是该组件所在行field字段对应的数据',
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
                        parameter: 'component',
                        explain: '使用ghost里定义的组件',
                        type: 'String',
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
                url:"static/static/datatable.json",
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
            codeBox,
            apiTable
        },
        methods:{
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