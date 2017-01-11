<template lang="html">

    <div>

        <section class="markdown">
            <h1>Tree 树形控件</h1>
            <h2>何时使用</h2>
            <ul>
                <p>
                    文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
                </p>
            </ul>
            <h2>组件演示</h2>
        </section>

        <v-Row :gutter="16">
            <v-Col span="12">

                <code-box
                        title="基本"
                        describe="最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"
                >
                    <v-tree :data-source.sync="treeData" :checkable="true" :multiple="true" :on-select="selectFn"
                            :on-check="checkFn"></v-tree>
                    <template slot="js">
                        export default {
                            data: function () {
                                return {
                                    treeData: [{
                                        title: 'parent 1',
                                        selected: true,
                                        node: [{
                                            title: 'parent 1-0',
                                            expand: true,
                                            disabled: true,
                                            node: [{
                                                title: 'leaf',
                                                disableCheckbox: true
                                            }, {
                                                title: 'leaf',
                                            }]
                                        }, {
                                            title: 'parent 1-1',
                                            checked: true,
                                            node: [{
                                                title: "<span style='color:#08c'>sss</span>",
                                            }]
                                        }]
                                    }]
                                }
                            },
                            methods: {
                                selectFn(data){
                                    console.log(data)
                                },
                                checkFn(data){
                                    console.log(data)
                                }
                            }
                        }
                    </template>
                </code-box>

            </v-Col>
        </v-Row>


        <api-table :content='content'>
            <h3>Tree props</h3>
        </api-table>

        <api-table type="methods" :content='methodContent'>
            <h3>Tree methods</h3>
        </api-table>

        <api-table :apis='apiTreeNode'>
            <h3>TreeNode props</h3>
        </api-table>
    </div>

</template>

<script lang="babel">
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default {
        data: function () {
            return {
                content: [
                    [
                        'dataSource',
                        '可嵌套的节点属性的数组，生成tree的数据',
                        'array',
                        '无'
                    ],
                    [
                        'multiple',
                        '是否支持多选',
                        'bool',
                        'false'
                    ],
                    [
                        'checkable',
                        '是否支持选中',
                        'bool',
                        'false'
                    ],
                    [
                        'onCheck',
                        '点击复选框触发',
                        'function(nodeArray)',
                        '-'
                    ],
                    [
                        'onSelect',
                        '点击树节点触发',
                        'function(nodeArray)',
                        '-'
                    ]
                ],
                methodContent: [
                    [
                        'getCheckedNodes',
                        '获取被勾选的节点',
                        '无',
                        '节点数组'
                    ],
                    [
                        'getSelectedNodes',
                        '获取被选中的节点',
                        '无',
                        '节点数组'
                    ]
                ],
                apiTreeNode: [{
                    parameter: 'disabled',
                    explain: '禁掉响应',
                    type: 'bool',
                    default: 'false'
                },
                    {
                        parameter: 'disableCheckbox',
                        explain: '禁掉 checkbox',
                        type: 'bool',
                        default: 'false'
                    },
                    {
                        parameter: 'title',
                        explain: '标题',
                        type: 'String/element string',
                        default: "'---'"
                    },
                    {
                        parameter: 'expand',
                        explain: '是否展开直子节点',
                        type: 'bool',
                        default: 'false'
                    },
                    {
                        parameter: 'selected',
                        explain: '是否选中子节点',
                        type: 'bool',
                        default: 'false'
                    },
                    {
                        parameter: 'checked',
                        explain: '是否勾选(如果勾选，子节点也会全部勾选)',
                        type: 'bool',
                        default: 'false'
                    },
                    {
                        parameter: 'node',
                        explain: '子节点属性数组',
                        type: 'Array',
                        default: '无'
                    }
                ],
                treeData: [
                    {
                        title: 'parent 1',
                        //key: '0',
                        selected: true,
                        //expand: true,
                        node: [
                            {
                                title: 'parent 1-0',
                                //key: '0-0',
                                expand: true,
                                disabled: true,
                                node: [
                                    {
                                        title: 'leaf',
                                        //key: '0-0-0',
                                        disableCheckbox: true
                                    },
                                    {
                                        title: 'leaf',
                                        //key: '0-0-1'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-1',
                                //key: '0-1',
                                checked: true,
                                node: [
                                    {
                                        title: "<span style='color:#08c'>sss</span>",
                                        //key: '0-1-0'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            selectFn(data){
                console.log(data)
            },
            checkFn(data){
                console.log(data)
            }
        },
        components: {
            codeBox,
            apiTable
        }
    }

</script>