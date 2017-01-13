<template lang="html">

    <div>

        <section class="markdown">
            <h1>Slider 滑动输入条</h1>
            <p>
                滑动型输入器，展示当前值和可选范围。
            </p>
            <h2>何时使用</h2>
            <ul>
                <p>
                    当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。
                </p>
            </ul>
            <h2>组件演示</h2>
        </section>

        <v-Row :gutter="16">
            <v-Col span="12">

                <code-box
                        title="基本"
                        describe="基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。"
                >
                    <v-slider :default-value="30"></v-slider>
                    <v-slider :range="true" :default-value="[20, 50]"></v-slider>
                    <v-slider :range="true" :default-value="[20, 50]" :disabled="true"></v-slider>
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
                apis: [{
                    parameter: 'min',
                    explain: '最小值',
                    type: 'Number',
                    default: '0'
                }, {
                    parameter: 'max',
                    explain: '最大值',
                    type: 'Number',
                    default: '100'
                }, {
                    parameter: 'range',
                    explain: '双滑块模式',
                    type: 'Boolean',
                    default: 'false'
                }, {
                    parameter: 'step',
                    explain: '步长，取值必须大于 0，并且可被 (max - min) 整除',
                    type: 'Number',
                    default: '1'
                }, {
                    parameter: 'value',
                    explain: '当前取值',
                    type: 'Number',
                    default: ''
                }, {
                    parameter: 'defaultValue',
                    explain: '初始取值',
                    type: 'Number',
                    default: '0'
                }, {
                    parameter: 'marks',
                    explain: '分段标记，标记每一个 step，如果 step 属性没有定义，则 marks 属性会被忽略',
                    type: 'Array',
                    default: '[]'
                }, {
                    parameter: 'included',
                    explain: '分段式滑块，值为 true 时表示值为包含关系，false 表示并列',
                    type: 'Boolean',
                    default: 'true'
                }, {
                    parameter: 'index',
                    explain: '为具备 step 或者 marks 的 slider 提供滑块操作的当前位置',
                    type: 'Number',
                    default: ''
                }, {
                    parameter: 'defaultIndex',
                    explain: '为具备 step 或者 marks 的 slider 提供滑块操作的初始位置',
                    type: 'Number',
                    default: '0'
                }, {
                    parameter: 'disabled',
                    explain: '值为 true 时，滑块为 disable 禁用状态',
                    type: 'Boolean',
                    default: 'false'
                }
                ],
                marks : {
                    0: '0°C',
                    26: '26°C',
                    37: '37°C',
                    100: '100°C'
                }
            }
        },
        components: {
            codeBox,
            apiTable
        }
    }
</script>