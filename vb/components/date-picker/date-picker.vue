<template>
    <span :class="prefix+'-picker'" :style="style">
        <span>
            <input :value="label" :placeholder="placeholder" readonly :disabled="disabled" :class="['ant-calendar-range-picker','ant-input',{['ant-input-'+size]:size}]" @click.stop="click" @mousedown="$event.preventDefault()">
            <i v-if="clearable&&label" @click.stop="clear" class="anticon anticon-cross-circle ant-calendar-picker-clear"></i>
            <span class="ant-calendar-picker-icon"></span>
        </span>
        <transition name="slide-up">
            <div class="ant-calendar-picker-container" :class="{'ant-calendar-picker-container-placement-bottomLeft':left}" v-show="show" tabindex="-1" @blur="show = false" @mousedown="$event.preventDefault()" @keyup.up="changeMonth(-1,1)" @click.stop @keyup.down="changeMonth(1,1)" @keyup.left="changeYear(-1,1)" @keyup.right="changeYear(1,1)" :style="containerStyle" ref="container">
                <div :class="[prefix,{[prefix+'-range']:range},{[prefix+'-time']:showTime || range}]">
                    <div class="ant-calendar-top" v-if="range">
                        <template v-for="(item,index) in ranges">
                            <i v-if="index"></i><a v-text="item.name" :class="item.active?'on':''" @click="selectRange(index)"></a>
                        </template>
                    </div>
                    <div class="ant-calendar-date-panel">
                        <template v-for="no in count">
                            <div :class="range?'ant-calendar-range-part ant-calendar-range-left':''">
                                <div class="ant-calendar-header">
                                    <a class="ant-calendar-prev-year-btn" :title="t('datePicker.lastYear')" @click="changeYear(-1,no)"></a>
                                    <a class="ant-calendar-prev-month-btn" :title="t('datePicker.lastMonth')" @click="changeMonth(-1,no)"></a>
                                    <span class="ant-calendar-my-select">
                                        <a class="ant-calendar-year-select" :title="t('datePicker.selectYear')" @click="showYear(no)">{{$data['now'+no].getFullYear()+t('datePicker.year')}}</a>
                                        <a class="ant-calendar-month-select" :title="t('datePicker.selectMonth')" @click="showMonth(no)">{{months[$data['now'+no].getMonth()]}}</a>
                                    </span>
                                    <a class="ant-calendar-next-month-btn" :title="t('datePicker.nextYear')" @click="changeMonth(1,no)"></a>
                                    <a class="ant-calendar-next-year-btn" :title="t('datePicker.nextMonth')" @click="changeYear(1,no)"></a>
                                </div>
                                <div class="ant-calendar-body">
                                    <table class="ant-calendar-table" cellspacing="0" role="grid">
                                        <thead>
                                            <tr>
                                                <th v-for="day in days" class="ant-calendar-column-header">
                                                    <span class="ant-calendar-column-header-inner" v-text="day"></span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <template v-if="$data['date'+no]">
                                            <tbody class="ant-calendar-tbody">
                                                <tr v-for="i in 6">
                                                    <td v-for="j in 7" :title="$data['date'+no][(i-1) * 7 + j - 1].title" :class="[prefix+'-cell',$data['date'+no][(i-1) * 7 + j - 1].status]" @click="select($data['date'+no][(i-1) * 7 + j - 1], no)">
                                                        <div v-text="$data['date'+no][(i-1) * 7 + j - 1].text" :class="prefix+'-date'" aria-selected="false" aria-disabled="false">18</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </table>
                                </div>
                                <transition name="fade">
                                    <div v-if="showTime" v-show="timeSelected" :class="prefix+'-time-picker'">
                                        <time-picker-panel prefix="ant-calendar-time-picker" v-model="timeVal[no-1]" :selected="timeSelected" :disabled-h="disabledTime[no-1].disabledHours" :disabled-m="disabledTime[no-1].disabledMinutes" local-format="HH:mm" @close="optionClose"></time-picker-panel>
                                    </div>
                                </transition>
                                <transition name="fade">
                                    <div class="ant-calendar-year-panel" v-if="$data['showYear'+no]">
                                        <span class="ant-calendar-year-panel-prev"  @click="changeYearRange(no,-1)"><a class="anticon anticon-up"></a></span>
                                        <span class="ant-calendar-year-panel-cell" v-for="(item,index) in $data['years'+no]" :class="item.status" @click="selectYear(index,no)" style="width:33.33%; display:inline-block;padding:9px 0">
                                            <a class="ant-calendar-year-panel-year">{{item.year+t('datePicker.year')}}</a>
                                        </span>
                                        <span class="ant-calendar-year-panel-next"  @click="changeYearRange(no,1)"><a class="anticon anticon-down"></a></span>
                                    </div>
                                </transition>
                                <transition name="fade">
                                    <div class="ant-calendar-month-panel" v-if="$data['showMonth'+no]">
                                        <div class="ant-calendar-month-panel-body">
                                            <table class="ant-calendar-month-panel-table">
                                                <tbody class="ant-calendar-month-panel-tbody">
                                                    <tr v-for="n in 4">
                                                        <td class="ant-calendar-month-panel-cell" v-for="m in 3" :class="$data['months'+no][3*(n-1)+m-1].status">
                                                            <a class="ant-calendar-month-panel-month" @click="selectMonth(3*(n-1)+m-1,no)">{{months[$data['months'+no][3*(n-1)+m-1].month-1].substr(0,3)}}</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </template>
                    </div>
                    <div v-if="range || showTime" :class="[prefix+'-footer',{[prefix+'-range-bottom']:range}]">
                        <component :is="range?'div':'span'" class="ant-calendar-footer-btn">
                            <a v-if="showTime" :class="[prefix+'-time-picker-btn', {[prefix+'-time-picker-btn-disabled']: !timeBtnEnable}]" role="button" @click="selectTime">{{timeSelected?t('datePicker.selectDate'):t('datePicker.selectTime')}}</a>
                            <a :class="{[prefix+'-ok-btn']: showTime}" role="button" @click="confirm">{{t('datePicker.confirm')}}</a>
                        </component>
                    </div>
                </div>
            </div>
        </transition>
    </span>
</template>

<script lang="babel">
    import Locale from '../../mixins/locale'
    import {getOffset} from '../../utils/fn'
    import emitter from '../../mixins/emitter';
    import timePickerPanel from '../time-picker/time-picker-option.vue'
    const _t = Locale.methods.t

    export default {
        name: 'DatePicker',
        components: {timePickerPanel},
        mixins: [ Locale, emitter],
        props: {
            placeholder: {
                type: String, 
                default: ()=> _t('datePicker.placeholder')
            },
            //是否显示范围
            range: {
                type: Boolean,
                default: false
            },
            //显示宽度
            style: {
                type: Object,
                default: ()=>({width:'100px'})
            },
            size: String,
            //输入的时间
            value: [String,Array],
            position: {
                type:String, 
                default:'absolute'
            },
            popupContainer: {
                type: Function,
                default: ()=> document.body
            },
            showTime: {
                type: Boolean, 
                default: false
            },
            //选择最大范围限制,以天为单位（只有range为true的时候才起作用）
            maxRange: Number,
            //是否可以清除
            clearable: {
                type: Boolean,
                default: false
            },
            //显示格式
            format: {
                type: String,
                default: 'yyyy-MM-dd'
            },
            //禁用
            disabled: {
                type: Boolean,
                default: false
            },
            disabledDate: Function,
            disabledTime: {
                type: Array,
                default: ()=>[{},{}]
            }
        },
        data() {
            return {
                prefix: 'ant-calendar',
                container: null,
                timeSelected: false,
                timeBtnEnable: false,
                containerStyle: {},
                show: false,
                showYear1: false,
                showYear2: false,
                showMonth1: false,
                showMonth2: false,
                left: false,
                ranges: [], //选择范围
                days: this.t('datePicker.days').split(','),
                months: this.t('datePicker.months').split(','),
                years1: [],
                years2: [],
                months1: [],
                months2: [],
                date1: null,
                date2: null,
                time1: this.parse(this.startTime, false) || this.parse(this.value, false),
                time2: this.parse(this.endTime, true),
                now1: this.parse(new Date(), false),
                now2: this.parse(new Date(), true),
                timeVal: ['00:00','00:00'],
                count: this.range ? 2 : 1, //日历数量
                startTime: this.range && this.value ? this.value[0] : '',
                endTime: this.range && this.value ? this.value[1] : ''
            };
        },
        computed: {
            label() {
                let val = '';
                if (this.range) {
                    let startTime = '',endTime = '';
                    if (this.startTime && this.endTime) {
                        startTime = this.stringify(this.parse(this.startTime, false));
                        endTime = this.stringify(this.parse(this.endTime, false));

                        if(this.showTime){
                            startTime = startTime + ' ' + this.timeVal[0];
                            endTime = endTime + ' ' + this.timeVal[1];
                        }
                        val = startTime + ' ~ ' + endTime;
                    }
                } else {
                    if(this.value){
                        val = this.stringify(this.parse(this.value, false));

                        if(this.showTime){
                            val = val + ' ' + this.timeVal[0];
                        }
                    }
                }
                return val;
            }
        },
        mounted(){
            this.container = this.popupContainer()
            this.$refs.container.style.position = this.position;
            this.container.appendChild(this.$refs.container);
            this.$nextTick(()=>{
                this.setPosition();
            })

            window.addEventListener('resize',this.resize);
            window.addEventListener('click',this.closeDropdown);
            if(!this.style.minWidth){
                if(this.showTime){
                    if(this.range){
                        this.$set(this.style, 'minWidth', '255px')
                    }else{
                        this.$set(this.style, 'minWidth', '140px')
                    }
                }else if(this.range){
                    this.$set(this.style, 'minWidth', '180px')
                }
            }
            if(this.showTime){
                let temp = ['00:00','00:00'];
                if(this.range){
                    if(this.startTime){
                        let start = this.startTime.split(' ')[1];
                        if(start) temp[0] = start;
                    }
                    if(this.endTime){
                        let end = this.endTime.split(' ')[1];
                        if(end) temp[1] = end;
                    }
                }else{
                    if(this.value){
                        let time = this.value.split(' ')[1];
                        if(time) temp[0] = time;
                    }
                }
            }
        },
        beforeDestroy(){
            this.container.removeChild(this.$refs.container);
            window.removeEventListener('click',this.closeDropdown);
            window.removeEventListener('resize',this.resize);
        },
        watch: {
            resize(){
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(()=> {
                    this.setPosition();
                }, 200)
            },
            show(val) {
                this.hidePanel();
            },
            now1() {
                this.updateAll();
            },
            now2() {
                this.updateAll();
            },
            label(val) {
                this.timeBtnEnable = val?true:false;
                
                if(this.range){
                    let time = val.split(' ~ ');
                    this.$emit('input',[time[0],time[1]]);
                    this.$emit('change',time[0],time[1] || '');
                    this.dispatch('FormItem', 'form.change', [time[0],time[1] || '']);
                }else{
                    this.$emit('change',val);
                    this.dispatch('FormItem', 'form.change', [val]);
                }
            }
        },
        methods: {
            optionClose(){
                this.timeSelected = false;
            },
            selectTime(){
                if(!this.timeBtnEnable) return;
                this.timeSelected = !this.timeSelected;
            },
            setPosition(){
                if(!this.$el){
                    return
                }
                let p = getOffset(this.$el, this.container);

                this.containerStyle = {
                    top: p.bottom + 4 + 'px',
                    left: p.left + 'px'
                }
            },
            //转换输入的时间
            parse(time, isLast) {
                if (time) {
                    var tmpTime = new Date(time);
                    if (isLast === undefined) {
                        return tmpTime;
                    } else if (isLast) {
                        return new Date(tmpTime.getFullYear(), tmpTime.getMonth(), tmpTime.getDate(), 23, 59, 59, 999);
                    } else {
                        return new Date(tmpTime.getFullYear(), tmpTime.getMonth(), tmpTime.getDate());
                    }
                }
                return null;
            },
            //初始化时间范围
            initRanges() {
                var time = new Date(),
                    ranges = [];
                ranges.push({
                    name: '今天',
                    start: this.parse(time, false),
                    end: this.parse(time, true),
                    active: true
                });
                time.setDate(time.getDate() - 1);
                ranges.push({
                    name: '昨天',
                    start: this.parse(time, false),
                    end: this.parse(time, true)
                });
                time = new Date();
                time.setDate(time.getDate() - 6);
                ranges.push({
                    name: '最近7天',
                    start: this.parse(time, false),
                    end: this.parse(new Date(), true)
                });
                time = new Date();
                time.setMonth(time.getMonth() + 1, 0);
                ranges.push({
                    name: '本月',
                    start: new Date(time.getFullYear(), time.getMonth(), 1),
                    end: this.parse(time, true)
                });
                time = new Date();
                time.setMonth(time.getMonth(), 0);
                ranges.push({
                    name: '上个月',
                    start: new Date(time.getFullYear(), time.getMonth(), 1),
                    end: this.parse(time, true)
                });
                time = new Date();
                time.setDate(time.getDate() - 29);
                ranges.push({
                    name: '最近一个月',
                    start: this.parse(time, false),
                    end: this.parse(new Date(), true)
                });
                time = new Date();
                time.setDate(time.getDate() - 365);
                ranges.push({
                    name: '最近一年',
                    start: this.parse(time, false),
                    end: this.parse(new Date(), true)
                });
                this.ranges = ranges;
            },
            //更新所有的日历
            updateAll() {
                this.update(new Date(this.now1), 1);
                this.range && this.update(new Date(this.now2), 2);
            },
            //点击时间输入框的时候触发
            click() {
                this.time1 = this.parse(this.startTime) || this.parse(this.value);
                this.now1 = this.parse(this.startTime) || this.parse(this.value) || new Date();
                if (this.range) {
                    this.initRanges();
                    this.time2 = this.parse(this.endTime);
                    this.now2 = this.parse(this.endTime) || new Date();
                }
                var rect = this.$el.getBoundingClientRect(),
                    right = document.documentElement.clientWidth - rect.left;
                (right < (this.range ? 441 : 214) && right < rect.left) ? (this.left = true) : (this.left = false);
                this.show = !this.show;

                if(this.show){
                    this.$nextTick(()=>{
                        this.setPosition();
                    })
                }
            },
            //选择时间
            select(item, no) {
                this.hidePanel();

                if (item.status.indexOf('ant-calendar-disabled-cell') !== -1) {
                    return;
                }
                this['now' + no] = new Date(item.time);
                this['time' + no] = new Date(item.time);

                if(this.range){
                    this[no === 1 ? 'startTime' : 'endTime'] = this.getOutTime(item.time);
                }else{
                    this.$emit('input',this.getOutTime(item.time))

                    if(!this.showTime) this.closeDropdown();
                }
            },
            //确认
            confirm() {
                this.closeDropdown();
                this.$emit('confirm');
            },
            closeDropdown() {
                this.show = false;
            },
            //选择范围
            selectRange(index) {
                let item = this.ranges[index];

                for(let i=0;i<this.ranges.length;i++){
                    this.$set(this.ranges[i], 'active', false);
                }
                this.$set(this.ranges[index], 'active', true);
                this.now1 = new Date(item.start);
                this.now2 = new Date(item.end);
                this.time1 = new Date(item.start);
                this.time2 = new Date(item.end);
                this.startTime = this.getOutTime(item.start);
                this.endTime = this.getOutTime(item.end);
                this.hidePanel();
            },
            //根据输出类型，获取输出的时间
            getOutTime(time) {
                var type = this.value ? typeof(this.value) : typeof(this.startTime);
                if (type === 'number') {
                    return time.getTime();
                } else if (type === 'object') {
                    return new Date(time);
                } else {
                    return this.stringify(time);
                }
            },
            //更新时间
            update(time, no) {
                var i, tmpTime, curFirstDay, lastDay, curDay, day, arr = [];
                time.setDate(0); //切换到上个月最后一天
                curFirstDay = time.getDay(); //星期几
                lastDay = time.getDate(); //上个月的最后一天
                for (i = curFirstDay; i > 0; i--) {
                    day = lastDay - i + 1;
                    tmpTime = new Date(time.getFullYear(), time.getMonth(), day);
                    tmpTime = this.parse(tmpTime, no === 2);
                    arr.push({
                        status: this.getTimeStatus(tmpTime, no) || 'ant-calendar-last-month-cell',
                        title: this.stringify(tmpTime),
                        text: day,
                        time: tmpTime
                    });
                }
                time.setMonth(time.getMonth() + 2, 0); //切换到当前月的最后一天
                curDay = time.getDate(); //当前月的最后一天
                time.setDate(1);
                for (i = 1; i <= curDay; i++) {
                    tmpTime = new Date(time.getFullYear(), time.getMonth(), i);
                    tmpTime = this.parse(tmpTime, no === 2);
                    arr.push({
                        status: this.getTimeStatus(tmpTime, no),
                        title: this.stringify(tmpTime),
                        text: i,
                        time: tmpTime
                    });
                }
                //下个月的前几天
                for (i = 1; arr.length < 42; i++) {
                    tmpTime = new Date(time.getFullYear(), time.getMonth() + 1, i);
                    tmpTime = this.parse(tmpTime, no === 2);
                    arr.push({
                        status: this.getTimeStatus(tmpTime, no) || 'ant-calendar-next-month-btn-day',
                        title: this.stringify(tmpTime),
                        text: i,
                        time: tmpTime
                    });
                }
                this['date' + no] = arr;
            },
            //获取时间状态
            getTimeStatus(time, no, format) {
                var status = '',
                    curTime = new Date(),
                    selTime = this['time' + no],
                    tmpTimeVal = this.stringify(time, format || 'yyyy-MM-dd'), //需要查询状态的时间字符串值
                    curTimeVal = this.stringify(curTime, format || 'yyyy-MM-dd'), //当前时间字符串值
                    selTimeVal = this.stringify(selTime, format || 'yyyy-MM-dd'); //选中时间字符串值
                if (tmpTimeVal === selTimeVal) {
                    status = this.prefix+'-selected-day';
                } else if (tmpTimeVal === curTimeVal) {
                    status = this.prefix+'-today';
                }
                if (this.time1 && this.time2 && time >= this.time1 && time <= this.time2) {
                    status += ` ${this.prefix}-inrange`;
                }
                if (no == 1 && this.time2) {
                    var minTime = new Date(this.time2);
                    if (this.maxRange) {
                        minTime.setDate(minTime.getDate() - this.maxRange);
                        if (format === 'yyyy') {
                            minTime = new Date(minTime.getFullYear(), 0, 1);
                        }
                        if (format === 'yyyy-MM') {
                            minTime = new Date(minTime.getFullYear(), 0, 1);
                        }
                        if (time < minTime || time > this.time2) {
                            status += ` ${this.prefix}-disabled-cell`;
                        }
                    } else if (time > this.time2) {
                        status += ` ${this.prefix}-disabled-cell`;
                    }
                    if (time > this.time2) {
                        status += ` ${this.prefix}-disabled-cell`;
                    }
                }
                if (no == 2 && this.time1) {
                    var maxTime = new Date(this.time1);
                    if (this.maxRange) {
                        maxTime.setDate(maxTime.getDate() + this.maxRange);
                        if (format === 'yyyy') {
                            maxTime = new Date(maxTime.getFullYear(), 11, 1);
                        }
                        if (format === 'yyyy-MM') {
                            maxTime = new Date(maxTime.getFullYear(), maxTime.getMonth() + 1, 1);
                        }
                        if (time > maxTime || time < this.time1) {
                            status += ` ${this.prefix}-disabled-cell`;
                        }
                    } else if (time < this.time1) {
                        status += ` ${this.prefix}-disabled-cell`;
                    }
                }
                if(this.disabledDate && this.disabledDate(time)){
                    status += ` ${this.prefix}-disabled-cell`;
                }
                return status;
            },
            //将Date转化为指定格式的String
            stringify(time, format) {
                if (!time) {
                    return '';
                }
                format = format || this.format;
                var year = time.getFullYear(), //年份
                    month = time.getMonth() + 1, //月份
                    day = time.getDate(), //日
                    hours24 = time.getHours(), //小时
                    hours = hours24 % 12 === 0 ? 12 : hours24 % 12,
                    minutes = time.getMinutes(), //分
                    seconds = time.getSeconds(), //秒
                    milliseconds = time.getMilliseconds(); //毫秒
                var map = {
                    yyyy: year,
                    MM: ('0' + month).slice(-2),
                    M: month,
                    dd: ('0' + day).slice(-2),
                    d: day,
                    HH: ('0' + hours24).slice(-2),
                    H: hours24,
                    hh: ('0' + hours).slice(-2),
                    h: hours,
                    mm: ('0' + minutes).slice(-2),
                    m: minutes,
                    ss: ('0' + seconds).slice(-2),
                    s: seconds,
                    S: milliseconds
                };
                return format.replace(/y+|M+|d+|H+|h+|m+|s+|S+/g, function(str) {
                    return map[str];
                });
            },
            //显示年份选择器
            showYear(no) {
                var name = 'showYear' + no;
                this.hidePanel(name);
                this[name] = !this[name];
                var time = new Date(this['now' + no] || new Date()),
                    selectedYear = time.getFullYear(),
                    num = Math.floor(selectedYear % 10), //获取当前时间个位数
                    arr = [];
                time.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
                time.setFullYear(selectedYear - num);
                while (arr.length < 12) {
                    no === 2 && time.setMonth(time.getMonth() + 1, 0);
                    arr.push({
                        year: time.getFullYear(),
                        status:  time.getFullYear() == selectedYear?'ant-calendar-year-panel-selected-cell':''
                    });
                    time.setDate(1);
                    time.setFullYear(time.getFullYear() + 1);
                }
                this['years' + no] = arr;
            },
            //显示月份选择器
            showMonth(no) {
                var name = 'showMonth' + no;
                this.hidePanel(name);
                this[name] = !this[name];
                var time = new Date(this['now' + no] || new Date()),
                    selectedMonth = time.getMonth(),
                    arr = [];
                while (arr.length < 12) {
                    time.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
                    time.setMonth(arr.length);
                    no === 2 && time.setMonth(time.getMonth() + 1, 0);
                    arr.push({
                        month: arr.length + 1,
                        status: arr.length == selectedMonth?'ant-calendar-month-panel-selected-cell':''
                    });
                }
                this['months' + no] = arr;
            },
            //切换年份选择器
            changeYearRange(no, flag) {
                var arr = this['years' + no],
                    time = new Date(this['time' + no] || new Date());
                for (var i in arr) {
                    var item = arr[i],
                        year = item.year + 12 * flag;
                    time.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
                    time.setFullYear(year);
                    no === 2 && time.setMonth(time.getMonth() + 1, 0);
                    item.year = year;
                    item.status = year == new Date(this['now' + no] || new Date()).getFullYear()?'ant-calendar-year-panel-selected-cell':''
                }
            },
            //改变年份
            changeYear(flag, no) {
                var now = this['now' + no];
                now.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
                now.setFullYear(now.getFullYear() + flag);
                no === 2 && now.setMonth(now.getMonth() + 1, 0);
                this['now' + no] = new Date(now);
                this.hidePanel();
            },
            //改变月份
            changeMonth(flag, no) {
                var now = this['now' + no];
                now.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
                now.setMonth(now.getMonth() + flag);
                no === 2 && now.setMonth(now.getMonth() + 1, 0);
                this['now' + no] = new Date(now);
                this.hidePanel();
            },
            //选择年份
            selectYear(index, no) {
                if (this['years'+no][index].status.indexOf('ant-calendar-disabled-cell') !== -1) {
                    return;
                }
                for(var i=0;i<this['years'+no].length;i++){
                    if(this['years'+no][i].status == 'ant-calendar-year-panel-selected-cell'){
                        this.$set(this['years'+no][i], 'status', '');
                    }
                }
                this.$set(this['years'+no][index], 'status', 'ant-calendar-year-panel-selected-cell');
                var now = this['now' + no];
                now.setFullYear(this['years'+no][index].year);
                this['now' + no] = new Date(now);
                this.hidePanel();
            },
            //选择月份
            selectMonth(index, no) {
                if (this['months'+no][index].status.indexOf('ant-calendar-disabled-cell') !== -1) {
                    return;
                }
                for(var i=0;i<this['months'+no].length;i++){
                    if(this['months'+no][i].status == 'ant-calendar-month-panel-selected-cell'){
                        this.$set(this['years'+no][i], 'status', '');
                    }
                }
                this.$set(this['months'+no][index], 'status', 'ant-calendar-month-panel-selected-cell');
                var now = this['now' + no];
                now.setMonth(this['months'+no][index].month - 1);
                this['now' + no] = new Date(now);
                this.hidePanel();
            },
            //隐藏所有面板
            hidePanel(name) {
                ['showYear1', 'showYear2', 'showMonth1', 'showMonth2'].map(function(item) {
                    if (item !== name) {
                        this[item] = false;
                    }
                }.bind(this));
            },
            //清除时间
            clear() {
                this.time1 = this.time2 = this.startTime = this.endTime = null;
                if(!this.range) this.$emit('input','');
                this.timeVal = ["00:00","00:00"];
                this.timeSelected = false;
                this.now1 = new Date();
                this.now2 = new Date();
            }
        }
    }
</script>
<style scoped lang="less">
    .ant-calendar{
        .ant-calendar-year-panel,.ant-calendar-month-panel{
            top: 34px;
        }
        .ant-calendar-month-panel-table{
            height:208px;
        }
    }
    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker{
        top: 34px;
    }
    .ant-calendar-top {
        color: #616161;
        padding: 8px;
        border-bottom: 1px solid #f3f3f3;

        a{
            display: inline-block;
            vertical-align: middle;
            height: 16px;
            cursor: pointer;

            &:hover {
                color: #77BDFB;
            }
            &.on{
                font-weight: bold;
                color: #1284e7;
            }
        }
        i{
            content: '|';
            display: inline-block;
            width: 1px;
            margin: 0 10px;
            height: 16px;
            background: #616161;
            vertical-align: middle;
        }
    }
    .ant-calendar-year-panel-prev,.ant-calendar-year-panel-next {
        display: block;
        height: 20px;
        text-align: center;

        a{
            color: #666
        }
        &:hover {
            background-color: #eaf8fe;
            cursor: pointer;
        }
    }
</style>