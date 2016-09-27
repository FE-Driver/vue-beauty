<style scoped>
    .datetime-picker {
        position: relative;
        display: inline-block;
        font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei";
        -webkit-font-smoothing: antialiased;
        color: #333;
    }
    .datetime-picker * {
        box-sizing: border-box;
    }
    .datetime-picker input {
        width: 100%;
        padding: 5px 10px;
        height: 30px;
        outline: 0 none;
        border: 1px solid #ccc;
        font-size: 13px;
    }
    .datetime-picker .picker-wrap {
        position: absolute;
        z-index: 1000;
        width: 238px;
        height: 280px;
        margin-top: 2px;
        background-color: #fff;
        box-shadow: 0 0 6px #ccc;
    }
    .datetime-picker table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        text-align: center;
        font-size: 13px;
    }
    .datetime-picker tr {
        height: 34px;
        border: 0 none;
    }
    .datetime-picker th, .datetime-picker td {
        user-select: none;
        width: 34px;
        height: 34px;
        padding: 0;
        border: 0 none;
        line-height: 34px;
        text-align: center;
    }
    .datetime-picker td {
        cursor: pointer;
    }
    .datetime-picker td:hover {
        background-color: #f0f0f0;
    }
    .datetime-picker td.date-pass, .datetime-picker td.date-future {
        color: #aaa;
    }
    .datetime-picker td.date-active {
        background-color: #ececec;
        color: #3bb4f2;
    }
    .datetime-picker .date-head {
        background-color: #3bb4f2;
        text-align: center;
        color: #fff;
        font-size: 14px;
    }
    .datetime-picker .date-days {
        color: #3bb4f2;
        font-size: 14px;
    }
    .datetime-picker .show-year {
        display: inline-block;
        min-width: 62px;
        vertical-align: middle;
    }
    .datetime-picker .show-month {
        display: inline-block;
        min-width: 28px;
        vertical-align: middle;
    }
    .datetime-picker .btn-prev,
    .datetime-picker .btn-next {
        cursor: pointer;
        display: inline-block;
        padding: 0 10px;
        vertical-align: middle;
    }
    .datetime-picker .btn-prev:hover,
    .datetime-picker .btn-next:hover {
        background: rgba(16, 160, 234, 0.5);
    }
</style>

<template>
    <div class="datetime-picker">
        <v-input type="text" :value.sync="value" :readonly="readonly" @click="show = !show" :readonly="readonly" :size="size"></v-input>
        <div class="picker-wrap" v-show="show">
            <table class="date-picker">
                <thead>
                <tr class="date-head">
                    <th colspan="4">
                        <span class="btn-prev" @click="yearClick(-1)">&lt;</span>
                        <span class="show-year">{{now.getFullYear()}}</span>
                        <span class="btn-next" @click="yearClick(1)">&gt;</span>
                    </th>
                    <th colspan="3">
                        <span class="btn-prev" @click="monthClick(-1)">&lt;</span>
                        <span class="show-month">{{months[now.getMonth()]}}</span>
                        <span class="btn-next" @click="monthClick(1)">&gt;</span>
                    </th>
                </tr>
                <tr class="date-days">
                    <th v-for="day in days">{{day}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="i in 6">
                    <td v-for="j in 7"
                        :class="date[i * 7 + j] && date[i * 7 + j].status"
                        :date="date[i * 7 + j] && date[i * 7 + j].date"
                        @click="pickDate(i * 7 + j)">{{date[i * 7 + j] && date[i * 7 + j].text}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="babel">
    import vInput from '../input'

    export default {
        name: 'v-datepicker',
        props: {
            readonly: { type: Boolean, default: false }, //暂时无效
            value: { type: String, default: '' },
            format: { type: String, default: 'YYYY-MM-DD' },
            name: { type: String, default: '' },
            size: {type: String, default: 'default'},
            lang: { type: String, default: 'zh' }
        },
        data () {
            return {
                show: false,
                days: ['一', '二', '三', '四', '五', '六', '日'],
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
                date: [],
                now: new Date()
            };
        },
        watch: {
            now () {
                this.update();
            },
            show () {
                this.update();
            }
        },
        methods: {
            close () {
                this.show = false;
            },
            update () {
                var arr = [];
                var time = new Date(this.now);
                time.setMonth(time.getMonth(), 1);           // the first day
                var curFirstDay = time.getDay();
                curFirstDay === 0 && (curFirstDay = 7);
                time.setDate(0);                             // the last day
                //插入上月补全的日期
                var lastDayCount = time.getDate();
                for (let i = curFirstDay-1; i > 0; i--) {
                    arr.push({
                        text: lastDayCount - i + 1,
                        time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
                        status: 'date-pass'
                    });
                }

                time.setMonth(time.getMonth() + 2, 0);       // the last day of this month
                var curDayCount = time.getDate();
                time.setDate(1);                             // fix bug when month change
                var value = this.value || this.stringify(new Date());
                for (let i = 0; i < curDayCount; i++) {
                    let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1);
                    let status = '';
                    this.stringify(tmpTime) === value && (status = 'date-active');
                    arr.push({
                        text: i + 1,
                        time: tmpTime,
                        status: status
                    });
                }

                var j = 1;
                while (arr.length < 42) {
                    arr.push({
                        text: j,
                        time: new Date(time.getFullYear(), time.getMonth() + 1, j),
                        status: 'date-future'
                    });
                    j++;
                }
                this.date = arr;
            },
            yearClick (flag) {
                this.now.setFullYear(this.now.getFullYear() + flag);
                this.now = new Date(this.now);
            },
            monthClick (flag) {
                this.now.setMonth(this.now.getMonth() + flag);
                this.now = new Date(this.now);
            },
            pickDate (index) {
                this.show = false;
                this.now = new Date(this.date[index].time);
                this.value = this.stringify();
            },
            parse (str) {
                var time = new Date(str);
                return isNaN(time.getTime()) ? null : time;
            },
            stringify (time = this.now, format = this.format) {
                var year = time.getFullYear();
                var month = time.getMonth() + 1;
                var date = time.getDate();
                var monthName = this.months[time.getMonth()];
                var map = {
                    YYYY: year,
                    MMM: monthName,
                    MM: ('0' + month).slice(-2),
                    M: month,
                    DD: ('0' + date).slice(-2),
                    D: date
                };
                return format.replace(/Y+|M+|D+/g, function (str) {
                    return map[str];
                });
            },
            leave (e) {
                if (!this.$el.contains(e.target)) {
                    this.close();
                }
            }
        },
        ready () {
            this.now = this.parse(this.value) || new Date();
            document.addEventListener('click', this.leave, false);
        },
        beforeDestroy () {
            document.removeEventListener('click', this.leave, false);
        },
        components: {
            vInput
        }
    };
</script>