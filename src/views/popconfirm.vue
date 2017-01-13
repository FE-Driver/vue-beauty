<template lang="html">
    <section class="markdown">
        <h1>Popconfirm 气泡确认框</h1>
        <p>
            点击元素，弹出气泡式的确认框。
        </p>
        <h2>何时使用</h2>
        <ul>
            <p>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。</p>
            <p>更轻量的询问。</p>
        </ul>
        <h2>组件演示</h2>
    </section>

    <v-row :gutter="16">
        <v-col span="12">
            <code-box title="基本用法" describe="使用slot指定弹出内容和触发目标">
                <v-popconfirm  title="确定删除吗?" :on-confirm="confirm" :on-cancel="cancel">
                    <a href="javascript:;">删除</a>
                </v-popconfirm>
                <template slot="js">
                    export default{
                        methods: {
                            confirm: function(){
                                this.$message.info('点击了确定');
                            },
                            cancel: function(){
                                this.$message.info('点击了取消');
                            }
                        }
                    }
                </template>
            </code-box>
        </v-col>

        <v-col span="12">
            <code-box title="国际化" describe="自定义按钮文字">
                <v-popconfirm  title="Do you want to do something?" ok-text="Ok" cancel-text="Cancel" >
                    <a href="javascript:;">Delete</a>
                </v-popconfirm>
            </code-box>
        </v-col>
    </v-row>

    <v-row :gutter="16">
        <v-col span="12">
            <code-box title="跳过询问" describe="跳过询问立刻执行confirm回调">
                <v-popconfirm  title="确定删除吗?" :on-confirm="confirm" :on-cancel="cancel" :skip="is_skip">
                    <a href="javascript:;">删除</a>
                </v-popconfirm>
                &nbsp;&nbsp;&nbsp;&nbsp;
                是否跳过询问
                <v-switch :on-change="to_skip_confirm" :checked="default_is_skip">
                    <span slot="checkedChildren">是</span>
                    <span slot="unCheckedChildren">否</span>
                </v-switch>
                <template slot="js">
                    export default{
                        data:function(){
                            return {
                                is_skip: false,
                                default_is_skip: false
                            }
                        },
                        methods: {
                            confirm: function(){
                                this.$message.info('点击了确定');
                            },
                            cancel: function(){
                                this.$message.info('点击了取消');
                            },
                            to_skip_confirm: function (val) {
                                this.is_skip = val;
                            }
                        }
                    }
                </template>
            </code-box>
        </v-col>
    </v-row>

    <api-table :apis="apis"></api-table>
</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export  default {
    name: 'popconfirm-doc',
    data() {
        return {
            apis: [{
                parameter: 'placement',
                explain: '气泡框位置，可选 top/left/right/bottom/topLeft/topRight/bottomLeft/bottomRight',
                type: 'string',
                default: 'top'
            },{
                parameter: 'title',
                explain: '询问内容',
                type: 'string',
                default: '无'
            },{
                parameter: 'on-confirm',
                explain: '确定回调',
                type: 'function',
                default: '无'
            },{
                parameter: 'on-cancel',
                explain: '取消回调',
                type: 'function',
                default: '无'
            },{
                parameter: 'openClassName',
                explain: '气泡框展现时触发器添加的类名，可用于打开浮层时高亮触发器',
                type: 'string',
                default: '无'
            },{
                parameter: 'skip',
                explain: '是否跳过询问,直接执行confirm回调',
                type: 'boolean',
                default: 'false'
            }],
            is_skip: false,
            default_is_skip: false
        }
    },
    methods: {
        confirm: function(){
            this.$message.info('点击了确定');
        },
        cancel: function(){
            this.$message.info('点击了取消');
        },
        to_skip_confirm: function (val) {
            this.is_skip = val;
        }
    },
    components: {
        codeBox,
        apiTable
    }
}
</script>