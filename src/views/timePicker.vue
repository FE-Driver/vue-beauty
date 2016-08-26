<template lang="html">
    <div>
        <section class="markdown">
            <h1>TimePicker 时间选择框</h1>
            <p>
                输入或选择时间的控件。
            </p>
            <h2>何时使用</h2>
            <ul>
                <p>
                  当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。
                </p>
            </ul>
            <h2>组件演示</h2>
        </section>
        <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
            <div class="ant-col-lg-12 code-boxes-col-2-1">
                <code-box
                    title="基本"
                    describe="最简单的用法。"
                >
                    <v-time-picker></v-time-picker>
                </code-box>
            </div>
        </div>
    </div>
</template>

<script>

    import vTimePicker from '../../components/timePicker'
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default {
        data: function(){
            return {

            }
        },
        components: {
            vTimePicker,
            codeBox,
            apiTable
        }
    }
</script>
