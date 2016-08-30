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
                <code-box
                        title="三种大小"
                        describe="三种大小的输入框，大的用在表单中，中的为默认。"
                        >
                    <v-time-picker size="large"></v-time-picker>
                    <v-time-picker></v-time-picker>
                    <v-time-picker size="small"></v-time-picker>
                </code-box>
                <code-box
                        title="禁用"
                        describe="禁用时间选择。"
                        >
                    <v-time-picker disabled></v-time-picker>
                </code-box>
                <code-box
                        title="只显示部分选项"
                        describe="通过 hideDisabledOptions 将不可选的选项隐藏。"
                        >
                    <v-time-picker :disabled-minutes="minutes" :disabled-seconds="seconds"></v-time-picker>
                </code-box>
            </div>
            <div class="ant-col-lg-12 code-boxes-col-2-1">
                <code-box
                        title="受控组件"
                        describe="value 和 onChange 需要配合使用。"
                        >
                    <v-time-picker :value.sync="value"></v-time-picker>
                </code-box>
                <code-box
                        title="不展示秒"
                        describe="不展示秒，也不允许选择。"
                        >
                    <v-time-picker format="HH:mm"></v-time-picker>
                </code-box>
                <code-box
                        title="禁止选项"
                        describe="限制选择 20:30 到 23:30 这个时间段。"
                        >
                    <v-time-picker start-time="20:30" end-time="23:30"></v-time-picker>
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
                minutes: [],
                seconds: [],
                value: '08:30:00'
            }
        },
        created (){
            this.$set('minutes', this.disabledMinutes());
            this.$set('seconds', this.disabledSeconds());
        },
        methods: {
            newArray (start, end){
                const result = [];
                for (let i = start; i < end; i++) {
                    result.push(i);
                }
                return result;
            },
            disabledMinutes (){
                return this.newArray(0, 60).filter(value => value % 10 !== 0);
            },
            disabledSeconds (){
                return this.newArray(0, 60).filter(value => value % 30 !== 0);
            }
        },
        components: {
            vTimePicker,
            codeBox,
            apiTable
        }
    }
</script>
