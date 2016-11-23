<template lang="html">
    <section class="markdown">
        <h1>TimePicker 时间选择框</h1>
        <p>
            当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。
        </p>
        <h2>组件演示</h2>
    </section>
    <v-Row :gutter="16">
        <v-Col span="12">
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
            describe="通过 disabledMinutes和disabledSeconds 将不可选的选项隐藏。"
            >
                <v-time-picker :disabled-minutes="minutes" :disabled-seconds="seconds"></v-time-picker>
            </code-box>
        </v-Col>

        <v-Col span="12">
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
        </v-Col>
    </v-Row>

    <api-table
    :content='content'
  ></api-table>
</template>

<script>
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default {
        data: function(){
            return {
                content: [
                    [
                        'value',
                        '默认时间',
                        'string',
                        '无'
                    ],
                    [
                        'format',
                        '展示的时间格式',
                        'string',
                        'HH:mm:ss'
                    ],
                    [
                        'position',
                        '下拉框的定位方式(absolute、fixed)',
                        'string',
                        'absolute'
                    ],
                    [
                        'startTime',
                        '限制时间段开始时间',
                        'String',
                        '00:00'
                    ],
                    [
                        'endTime',
                        '限制时间段结束时间',
                        'String',
                        '23:59'
                    ],
                    [
                        'size',
                        '控件大小（large、small）',
                        'String',
                        '无'
                    ],
                    [
                        'disabled',
                        '禁用全部操作',
                        'boolean',
                        'false'
                    ],
                    [
                        'disabledMinutes',
                        '禁止选择部分分钟选项',
                        'array',
                        '无'
                    ],
                    [
                        'disabledSeconds',
                        '禁止选择部分秒选项',
                        'array',
                        '无'
                    ]
                ],
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
            codeBox,
            apiTable
        }
    }
</script>