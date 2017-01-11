<template lang="html">
    <div>
        <section class="markdown">
            <h1>tooltip指令</h1>
            <p>
                显示简单的提示文字或HTML内容。
            </p>
            <h2>何时使用</h2>
            <ul>
                <p>
                    需要给用户提示一些辅助信息时。
                </p>
            </ul>
            <h2>组件演示</h2>
        </section>

        <v-Row :gutter="16">
            <v-Col span="12">
                <code-box
                        title="tooltip"
                        describe="tooltip指令使用很简单,v-tooltip='msg'即可.">
                    <v-button type='success' v-tooltip='msg'>默认</v-button>
                    <template slot="js">
                        export default{
                            data :function(){
                                return {
                                    msg: '<em>hello world</em>',
                                }
                            }
                        }
                    </template>
                </code-box>
            </v-col>
            <v-Col span="12">
                <code-box
                        title="tooltip-触发事件"
                        describe="如果需要指定触发事件,使用v-tooltip:hover='msg'或者v-tooltip:focus='msg'">
                    <v-button type='success' v-tooltip:hover.top='msg'>hover触发</v-button>
                    <input type="text" v-tooltip:focus.top='msg1' placeholder="focus触发">
                    <template slot="js">
                        export default{
                            data :function(){
                                return {
                                    msg: '<em>hello world</em>',
                                    msg1: '明月几时有'
                                }
                            }
                        }
                    </template>
                </code-box>
            </v-col>
            <v-Col>
                <code-box
                        title="tooltip-显示位置"
                        describe="可以使用修饰符指定显示位置,如v-tooltip:hover.right='msg1',支持8种位置">
                    <v-button type='success' v-tooltip:hover.left='msg'>left</v-button>
                    <a href="###" v-tooltip:hover.right='msg1'>right</a>
                    <v-button type='success' v-tooltip:hover.top='msg'>top</v-button>
                    <a href="###" v-tooltip:hover.bottom='msg1'>bottom</a>
                    <v-button type='success' v-tooltip:hover.topLeft='msg'>topLeft</v-button>
                    <a href="###" v-tooltip:hover.topRight='msg1'>topRight</a>
                    <v-button type='success' v-tooltip:hover.bottomLeft='msg'>bottomLeft</v-button>
                    <a href="###" v-tooltip:hover.bottomRight='msg1'>bottomRight</a>

                    <template slot="js">
                        export default{
                            data :function(){
                                return {
                                    msg: '<em>hello world</em>',
                                    msg1: '明月几时有'
                                }
                            }
                        }
                    </template>
                </code-box>
            </v-col>
        </v-row>

        <api-table
                :apis='apis'
        ></api-table>

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
                        parameter: ':事件',
                        explain: '显示或关闭tip的触发事件,支持hover或focus',
                        type: 'String',
                        default: 'hover'
                    },
                    {
                        parameter: '.位置',
                        explain: '显示tip的位置,支持8种:left,right,top,bottom,topleft,topright,bottomleft,bottomright',
                        type: 'String',
                        default: 'top'
                    }
                ],
                msg: '<em>hello world</em>',
                msg1: '明月几时有'
            }
        },
        components: {
            codeBox,
            apiTable
        }
    }
</script>

<style lang="less">
    p{
        line-height: 3;
    }
</style>