<template>
    <div class="{{prefix}}-box">
        <v-input type="text" :value.sync="value" :readonly="readonly" @click="show = !show" :readonly="readonly" :size="size" :placeholder="placeholder">
            <v-icon slot="after" type="calendar"></v-icon>
        </v-input>
        <div class="{{prefix}}-picker-container" transition="slide-up" :style="style" v-show="show" v-el:container>
            <div class="{{prefix}}">
                <!--<div class="{{prefix}}-input-wrap"></div>-->
                <div class="{{prefix}}-date-panel">
                    <div class="{{prefix}}-header">
                        <table class="{{prefix}}-table">
                            <thead>
                                <tr>
                                    <th>
                                        <span class="{{prefix}}-prev-year-btn" @click="yearClick(-1)">&lt;</span>
                                        <span class="{{prefix}}-year-select">{{now.getFullYear()}}</span>
                                        <span class="{{prefix}}-next-year-btn" @click="yearClick(1)">&gt;</span>
                                    </th>
                                    <th>
                                        <span class="{{prefix}}-prev-month-btn" @click="monthClick(-1)">&lt;</span>
                                        <span class="{{prefix}}-month-select">{{months[now.getMonth()]}}</span>
                                        <span class="{{prefix}}-next-month-btn" @click="monthClick(1)">&gt;</span>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div class="{{prefix}}-calendar-body">
                        <table class="{{prefix}}-table">
                            <thead>
                                <tr class="{{prefix}}-column-header">
                                    <th v-for="day in days">{{day}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="i in 6">
                                    <td v-for="j in 7"
                                        :class="[date[i * 7 + j] && date[i * 7 + j].status, date[i * 7 + j] && date[i * 7 + j].istoday, date[i * 7 + j] && date[i * 7 + j].disabled, cellClass]"
                                        :date="date[i * 7 + j] && date[i * 7 + j].date"
                                        @click="pickDate(i * 7 + j)">
                                        <div class="{{prefix}}-date">
                                            {{date[i * 7 + j] && date[i * 7 + j].text}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="babel">
    import {getOffset} from '../_util/_func'
    import vInput from '../input'
    import vIcon from '../iconfont'

    export default {
        name: 'v-datepicker',
        data: ()=>({
            show: false,
            style: {},
            days: ['一', '二', '三', '四', '五', '六', '日'],
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
            date: [],
            now: new Date(),
            prefix: 'ant-calendar',
            cellClass:'ant-calendar-cell'
        }),
        props: {
            readonly: { type: Boolean, default: false }, //暂时无效
            value: { type: String, default: '' },
            format: { type: String, default: 'YYYY-MM-DD' },
            name: { type: String, default: '' }, //暂时无用
            size: {type: String, default: 'default'},
            placeholder: {type: String, default: '请选择日期'},
            disabledDateFn: {type: Function},
            position: {type:String, default:'absolute'},
            lang: { type: String, default: 'zh' }
        },
        watch: {
            now () {
                this.update();
            },
            show () {
                this.update();
            }
        },
        init(){

        },
        ready () {
            this.now = this.parse(this.value) || new Date();
            this.$els.container.style.position = this.position;
            document.body.appendChild(this.$els.container);
            this.$nextTick(()=>{
                this.setPosition();
            })

            window.addEventListener('resize',()=> {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(()=> {
                    this.setPosition();
                }, 200)
            })
            document.addEventListener('click', this.leave, false);
        },
        beforeDestroy () {
            document.removeEventListener('click', this.leave, false);
        },
        methods: {
            setPosition(){
                if(!this.$el){
                    return
                }
                let p = getOffset(this.$el);

                this.$set('style',{
                    top: p.bottom + 'px',
                    left: p.left + 'px'
                })
            },
            close () {
                this.show = false;
            },
            update () {
                var self = this;
                var arr = [];
                var time = new Date(this.now);
                time.setMonth(time.getMonth(), 1);           // the first day
                var curFirstDay = time.getDay();
                curFirstDay === 0 && (curFirstDay = 7);
                time.setDate(0);                             // the last day

                //插入上月补全的日期
                var lastDayCount = time.getDate();
                for (let i = curFirstDay-1; i > 0; i--) {
                    const ttime = new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1);
                    arr.push({
                        text: lastDayCount - i + 1,
                        time: ttime,
                        status: 'ant-calendar-last-month-cell',
                        istoday:'',
                        disabled: self.disabledDateFn&&self.disabledDateFn(ttime) ? "ant-calendar-disabled-cell" : ""
                    });
                }

                //插入本月日期
                time.setMonth(time.getMonth() + 2, 0);       // the last day of this month
                var curDayCount = time.getDate();
                time.setDate(1);                             // fix bug when month change
                var value = this.value || this.stringify(new Date());
                for (let i = 0; i < curDayCount; i++) {
                    let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1);
                    let today = new Date();
                    let status = '';
                    let istoday = '';
                    this.stringify(tmpTime) === this.stringify(today) && (istoday = 'ant-calendar-today');
                    this.stringify(tmpTime) === value && (status = 'ant-calendar-selected-day');
                    arr.push({
                        text: i + 1,
                        time: tmpTime,
                        status: status,
                        istoday:istoday,
                        disabled: self.disabledDateFn&&self.disabledDateFn(tmpTime) ? "ant-calendar-disabled-cell" : ""
                    });
                }

                // 如果显示有空缺，补全下月日期
                var j = 1;
                while (arr.length < 42) {
                    const ttime = new Date(time.getFullYear(), time.getMonth() + 1, j);
                    arr.push({
                        text: j,
                        time: new Date(time.getFullYear(), time.getMonth() + 1, j),
                        status: 'ant-calendar-next-month-btn-day',
                        istoday:'',
                        disabled: self.disabledDateFn&&self.disabledDateFn(ttime) ? "ant-calendar-disabled-cell" : ""
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
                //禁用日期不可选择
                if(this.date[index].disabled){
                    return;
                }
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
        components: {
            vInput,
            vIcon
        }
    };
</script>