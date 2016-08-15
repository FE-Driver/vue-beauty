<template lang="html">
    <div>
        <section class="markdown">
            <h1>tooltip指令</h1>
            <p>
                显示提示文字。
            </p>
            <h2>何时使用</h2>
            <ul>
                <p>
                    显示提示文字。
                </p>
            </ul>
            <h2>组件演示</h2>
        </section>

        <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
            <div class="ant-col-lg-12 code-boxes-col-2-1">
                <code-box
                        title="tooltip指令"
                        describe="按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 type 值则为次按钮。不同的样式可以用来区别其重要程度。主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。"
                        code=""
                >
                    <p><v-button type='success' v-tooltip='msg'>默认</v-button></p>
                    <p><v-button type='success' v-tooltip:hover.top='msg'>top</v-button></p>
                    <p><input type="text" v-tooltip:focus.top='msg1'></p>
                    <p><v-button type='success' v-tooltip:hover.left='msg'>left</v-button></p>
                    <p><a href="###" v-tooltip:hover.right='msg1'>right</a></p>
                    <p><v-button type='success' v-tooltip:hover.topLeft='msg'>topLeft</v-button></p>
                    <p><a href="###" v-tooltip:hover.topRight='msg1'>topRight</a></p>
                    <p><v-button type='success' v-tooltip:hover.bottomLeft='msg'>bottomLeft</v-button></p>
                    <p><a href="###" v-tooltip:hover.bottomRight='msg1'>bottomRight</a></p>

                </code-box>
            </div>
        </div>

        <api-table
                :apis='apis'
        ></api-table>

    </div>

</template>

<script>

    import vButton from '../../components/button'
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'
    import tooltip from '../../directive/Tooltip'

    export default {
        data: function () {
            return {
                apis: [],
                msg: '<em>hello world</em>',
                msg1: '明月几时有'
            }
        },
        components: {
            vButton,
            vButtonGroup: vButton.Group,
            codeBox,
            apiTable
        },
        directive:{
            tooltip:tooltip
        }
    }
</script>

<style lang="less">
    p{
        line-height: 3;
    }
</style>
