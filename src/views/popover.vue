<template lang="html">
    <section class="markdown">
        <h1>Popover 气泡卡片</h1>
        <p>
            点击/鼠标移入元素，弹出气泡式的卡片浮层。
        </p>
        <h2>何时使用</h2>
        <ul>
            <p>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p>
            <p>和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p>
        </ul>
        <h2>组件演示</h2>
    </section>


    <v-row :gutter="16">
        <v-col span="12">
            <code-box title="基本用法" describe="使用slot指定弹出内容和触发目标">
                <v-popover placement="top" title="简单标题">
                    <div slot="content">
                        我是普通文本内容
                    </div>
                    <button class="ant-btn ant-btn-primary" slot="trigger">点击弹出卡片</button>
                </v-popover>
            </code-box>
        </v-col>

        <v-col span="12">
            <code-box title="快速设置简单的内容" describe="使用content属性设置简单内容">
                <v-popover placement="top" title="简单标题" content="我的优先级更高">
                    <div slot="content">
                        我会被忽略
                    </div>
                    <button class="ant-btn ant-btn-primary" slot="trigger">点击弹出卡片</button>
                </v-popover>
            </code-box>
        </v-col>
    </v-row>

    <v-row :gutter="16">
        <v-col span="12">
            <code-box title="触发行为" describe="点击、聚集、鼠标移入。">
                <v-popover placement="left" title="简单标题" content="点击">
                    <button class="ant-btn ant-btn-primary" slot="trigger">click</button>
                </v-popover>

                <span style="display:inline-block;width:80px;">
                    <v-popover placement="top" title="简单标题" trigger="focus" content="focus">
                        <input class="ant-input ant-input-lg" slot="trigger" placeholder="focus">
                    </v-popover>
                </span>

                <v-popover placement="right" title="简单标题" content="hover" trigger="hover">
                    <button class="ant-btn ant-btn-primary" slot="trigger">hover</button>
                </v-popover>
            </code-box>
        </v-col>



        <v-col span="12">
            <code-box title="从卡片内关闭" describe="使用visible控制显示。">
                <v-popover placement="top" title="标题" :visible="outer_control_visible" :on-visible-change="outerVisibleChange">
                    <div slot="content">
                        <a href="javascript:;" @click="clickClose">关闭</a>
                    </div>
                    <button class="ant-btn ant-btn-primary" slot="trigger">click</button>
                </v-popover>
                <template slot="js">
                    export default{
                        data :function{
                            outer_control_visible :true
                        },
                        method:{
                            clickClose: function(){
                                this.outer_control_visible = false;
                            },
                            outerVisibleChange: function (val) {
                                this.outer_control_visible = val;
                            }
                        }
                    }
                </template>
            </code-box>
        </v-col>
    </v-row>
    <v-row :gutter="16">
        <v-col span="12">
            <code-box title="临时禁用卡片弹出" describe="使用disabled禁用卡片弹出。">
                <v-popover placement="top" title="标题" content="看见我了吗" :disabled="popover_is_disabled">
                    <button class="ant-btn ant-btn-primary" slot="trigger">点击弹出</button>
                </v-popover>
                &nbsp;&nbsp;&nbsp;&nbsp;
                是否禁用卡片弹出
                <v-switch :on-change="to_disabled" :checked="default_is_disabled">
                    <span slot="checkedChildren">是</span>
                    <span slot="unCheckedChildren">否</span>
                </v-switch>
                <template slot="js">
                    export default{
                        data :function{
                            default_is_disabled :false,
                            popover_is_disabled: false
                        },
                        method:{
                            to_disabled: function (val) {
                                this.popover_is_disabled = val;
                            }
                        }
                    }
                </template>
            </code-box>
        </v-col>
        <v-col span="12">
            <code-box title="卡片显示/隐藏的回调" describe="onVisibleChange">
                <v-popover placement="top" title="标题" content="看见我了吗" :on-visible-change="visibleChange">
                    <button class="ant-btn ant-btn-primary" slot="trigger">点击弹出</button>
                </v-popover>
                <template slot="js">
                    export default{
                        method:{
                            visibleChange: function (val) {
                                this.$message.info(val ? '卡片显示了' : '卡片隐藏了');
                            }
                        }
                    }
                </template>
            </code-box>
        </v-col>
    </v-row>

    <v-row :gutter="8">
        <v-col span="12">
            <code-box title="滚动区域内" describe="滚动区域内的卡片">
                <div style="height:100px;background:#D7E6F3;overflow:auto;">
                    <div style="width:1000px;">
                        按钮在右下角
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <v-popover placement="top" title="标题" content="滚动区域内的定位">
                            <button class="ant-btn ant-btn-primary" slot="trigger" style="float:right;">点击弹出</button>
                        </v-popover>
                    </div>
                </div>
            </code-box>
        </v-col>
    </v-row>
    <api-table :apis="apis"></api-table>
</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export  default {
    data() {
        return {
            apis: [{
                parameter: 'slot::trigger',
                explain: '触发目标(必选)',
                type: 'slot node',
                default: '无'
            },{
                parameter: 'slot::content',
                explain: '卡片内容(可选,与content属性互斥)',
                type: 'slot node',
                default: '无'
            },{
                parameter: 'trigger',
                explain: '触发行为，可选 hover/focus/click,默认click',
                type: 'string',
                default: 'click'
            },{
                parameter: 'placement',
                explain: '气泡框位置，可选 top/left/right/bottom/topLeft/topRight/bottomLeft/bottomRight',
                type: 'string',
                default: 'bottom'
            },{
                parameter: 'title',
                explain: '卡片标题',
                type: 'string',
                default: '无'
            },{
                parameter: 'content',
                explain: '卡片内容',
                type: 'string',
                default: '无'
            },{
                parameter: 'visible',
                explain: '用于手动控制浮层显隐',
                type: 'boolean',
                default: 'false'
            },{
                parameter: 'onVisibleChange',
                explain: '显示或隐藏发生改变的回调',
                type: 'function(boolean:改变后卡片的可见性)',
                default: '无'
            },{
                parameter: 'openClassName',
                explain: '气泡框展现时触发器添加的类名，可用于打开浮层时高亮触发器',
                type: 'string',
                default: '无'
            },{
                parameter: 'disabled',
                explain: '临时禁用气泡卡片弹出',
                type: 'boolean',
                default: 'false'
            }],

            outer_control_visible: true,//从浮层内关闭,
            default_is_disabled: false,
            popover_is_disabled: false
        }
    },
    components: {
        codeBox,
        apiTable
    },
    methods: {
        clickClose: function(){
            this.outer_control_visible = false;
        },
        to_disabled: function (val) {
            this.popover_is_disabled = val;
        },
        outerVisibleChange: function (val) {
            this.outer_control_visible = val;
        },
        visibleChange: function (val) {
            this.$message.info(val ? '卡片显示了' : '卡片隐藏了');
        }
    }
}
</script>