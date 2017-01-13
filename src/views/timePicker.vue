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
            title="选择时分"
            describe="TimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。"
            >
                <v-time-picker format="HH:mm"></v-time-picker>
            </code-box>
        </v-Col>

        <v-Col span="12">
            <code-box
            title="受控组件"
            describe="value 和 onChange 需要配合使用。"
            >
                <v-time-picker :value.sync="value"></v-time-picker>
                <template slot="js">
                export default {
                    data: function() {
                        return {
                            value: '08:30:00'
                        }
                    }
                }
                </template>
            </code-box>

            <code-box
            title="禁用"
            describe="禁用时间选择。"
            >
                <v-time-picker :disabled="true"></v-time-picker>
            </code-box>

            <code-box
            title="禁止选项"
            describe="可以使用 disabledHours disabledMinutes disabledSeconds 组合禁止用户选择某个时间，配合 hideDisabledOptions 可以直接把不可选择的项隐藏。"
            >
                <v-time-picker :disabled-hours="disabledHours" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></v-time-picker>
                <v-time-picker :disabled-hours="disabledHours" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds" :hide-disabled-options="true"></v-time-picker>
                <template slot="js">
                export default {
                    methods: {
                        range (start, end){
                            const result = [];
                            for (let i = start; i < end; i++) {
                                result.push(i);
                            }
                            return result;
                        },
                        disabledHours (h){
                            const hours = this.range(0, 60);
                            hours.splice(20, 4);
                            return hours.includes(h);
                        },
                        disabledMinutes (m){
                            return this.range(0, 31).includes(m);
                        },
                        disabledSeconds (s){
                            return this.range(30, 60).includes(s);
                        }
                    }
                }
                </template>
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
                    'popupContainer',
                    '下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
                    'Function',
                    '() => document.body'   
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
                        'disabledHours',
                        '禁止选择部分小时选项',
                        'function(hour)',
                        '无'
                    ],
                    [
                        'disabledMinutes',
                        '禁止选择部分分钟选项',
                        'function(minite)',
                        '无'
                    ],
                    [
                        'disabledSeconds',
                        '禁止选择部分秒选项',
                        'function(second)',
                        '无'
                    ],
                    [
                        'hideDisabledOptions',
                        '隐藏禁止选择的选项',
                        'boolean',
                        'false'
                    ]
                ],
                value: '08:30:00'
            }
        },
        methods: {
            range (start, end){
                const result = [];
                for (let i = start; i < end; i++) {
                    result.push(i);
                }
                return result;
            },
            disabledHours (h){
                const hours = this.range(0, 60);
                hours.splice(20, 4);
                return hours.includes(h);
            },
            disabledMinutes (m){
                return this.range(0, 31).includes(m);
            },
            disabledSeconds (s){
                return this.range(30, 60).includes(s);
            }
        },
        components: {
            codeBox,
            apiTable
        }
    }
</script>