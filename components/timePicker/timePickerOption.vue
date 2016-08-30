<template lang="html">
    <div v-el:opts>
        <div :class="wrapClasses" :style.sync="styles">
            <div class="ant-time-picker-panel-inner">
                <div class="ant-time-picker-panel-input-wrap">
                    <input class="ant-time-picker-panel-input" placeholder="请选择时间" v-el:time-picker-panel v-model="timeValue">
                    <a class="ant-time-picker-panel-clear-btn" role="button" title="清除" @click="clearTime"></a>
                </div>
                <div class="ant-time-picker-panel-combobox">
                    <div class="ant-time-picker-panel-select">
                        <ul @mouseover="createSelection($els.timePickerPanel, 0, 2)">
                            <li v-for="($index) in 24" @click="timePicker('H', $event)" v-if="showLi($index, 'H')" :class="selectedCls(H, $index, 'H')">{{$index<10?0:''}}{{$index}}</li>
                        </ul>
                    </div>
                    <div class="ant-time-picker-panel-select">
                        <ul @mouseover="createSelection($els.timePickerPanel, 3, 5)">
                            <li v-for="($index) in 60" @click="timePicker('M', $event)" v-if="showLi($index, 'M')" :class="selectedCls(M, $index, 'M')">{{$index<10?0:''}}{{$index}}</li>
                        </ul>
                    </div>
                    <div class="ant-time-picker-panel-select" v-if="hasSeconds">
                        <ul @mouseover="createSelection($els.timePickerPanel, 6, 8)">
                            <li v-for="($index) in 60" @click="timePicker('S', $event)" v-if="showLi($index, 'S')" :class="selectedCls(S, $index, 'S')">{{$index<10?0:''}}{{$index}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cx from 'classnames'

    export default {
        props: {
            stylus: {
                type: Object,
                twoWay: true
            },
            selected: Boolean,
            localFormat: String,
            startTime: String,
            endTime: String,
            value: String,
            timeValue: String,
            disabledM: Array,
            disabledS: Array
        },
        data: function(){
            return {
                prefix: 'ant-time-picker-panel',
                H: '00',
                M: '00',
                S: '00',
                hasSeconds: true,
                startH: 0,
                startM: 0,
                startS: 0,
                endH: 23,
                endM: 59,
                endS: 59
            }
        },
        created (){

        },
        ready (){
            !this.localFormat && this.$set('localFormat', 'HH:mm:ss');
            !this.startTime && this.$set('startTime', '00:00');
            !this.endTime && this.$set('endTime', '23:59');
            this.timeRange();
        },
        computed: {
            styles (){
                return [
                    {
                        top: this.stylus.top + 'px' || 0,
                        left: this.stylus.left + 'px' || 0,
                        width: this.stylus.width + 'px'
                    }
                ]
            },
            wrapClasses (){
                return cx({
                    [this.prefix]: 1,
                    [`${this.prefix}-placement-bottomLeft`]: 1,
                    [`${this.prefix}-narrow`]: !this.hasSeconds
                })
            }
        },
        watch: {
            selected (Boolean){
                if(Boolean){
                    if(!this.timeValue){
                        let curDate = new Date();
                        this.$set('H', this.dealTime(curDate.getHours()));
                        this.$set('M', this.dealTime(curDate.getMinutes()));
                        this.$set('S', this.dealTime(curDate.getSeconds()));
                    }else{
                        let tArr = this.timeValue.split(':');
                        tArr[0] && this.$set('H', tArr[0]);
                        tArr[1] && this.$set('M', tArr[1]);
                        tArr[2] && this.$set('S', tArr[2]);
                    }
                    this.$nextTick(function(){
                        document.body.appendChild(this.$els.opts);
                        let t = document.getElementsByClassName(this.prefix+'-select-option-selected');
                        for(let i in t){
                            this.setScrollTop(t[i]);
                        }
                    });
                    if(this.localFormat==='HH:mm'){
                        this.$set('hasSeconds', false);
                    }
                    this.createSelection(this.$els.timePickerPanel);
                }
            }
        },
        methods: {
            timePicker (type, e){
                this.setScrollTop(e.target);
                this.$set(type, e.target.textContent);
                if(this.hasSeconds){
                    this.$set('timeValue', this.H+':'+this.M+':'+this.S);
                }else{
                    this.$set('timeValue', this.H+':'+this.M);
                }
            },
            setScrollTop (elem){
                let top = elem.offsetTop;
                elem.parentElement && (elem.parentElement.parentElement.scrollTop = top);
            },
            selectedCls (Num, curNum, type){
                let cls = '';
                if(curNum < this['start'+type] || curNum > this['end'+type]){
                    cls += this.prefix+'-select-option-disabled '
                }
                if(curNum*1 === Num*1){
                    cls += this.prefix+'-select-option-selected ';
                }
                return cls;
            },
            showLi (curNum, type){
                let hasNum = -1;
                let show = true;
                console.log('curNum'+curNum)
                hasNum = this['disabled'+type]?this['disabled'+type].indexOf(curNum):-1;
                if(hasNum>-1){
                    show = false;
                }
                return show;
            },
            clearTime (){
                this.$set('timeValue', '');
                this.$set('selected', false);
            },
            dealTime (num){
                let t = num;
                if(num<10){
                    t = '0'+t;
                }
                return t;
            },
            createSelection (field, start, end){
                if (field.createTextRange) {
                    var selRange = field.createTextRange();
                    selRange.collapse(true);
                    selRange.moveStart('character', start);
                    selRange.moveEnd('character', end);
                    selRange.select();
                    field.focus();
                } else if (field.setSelectionRange) {
                    field.focus();
                    field.setSelectionRange(start, end);
                } else if (typeof field.selectionStart !== 'undefined') {
                    field.selectionStart = start;
                    field.selectionEnd = end;
                    field.focus();
                }
            },
            timeRange (){
                let sTime = this.startTime;
                let eTime = this.endTime;
                if(sTime<eTime){
                    let sArr = sTime.split(':');
                    let eArr = eTime.split(':');
                    let type = 'H';
                    for(let i=0;i<3;i++){
                        i == 1 && (type = 'M');
                        i == 2 && (type = 'S');
                        sArr[i] && this.$set('start'+type, sArr[i]);
                    }
                }
            }
        }
    }
</script>