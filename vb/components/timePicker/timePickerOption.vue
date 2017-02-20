<template lang="html">
    <div :class="wrapClasses">
        <div :class="[prefix+'-inner',{[prefix+'-2-columns']: !hasSeconds}]">
            <div :class="prefix+'-input-wrap'">
                <input :class="prefix+'-input'" placeholder="请选择时间" ref="timePickerPanel" v-model="defaultValue">
                <a :class="prefix+'-clear-btn'" role="button" title="清除" @click="clearTime"></a>
            </div>
            <div :class="prefix+'-combobox'">
                <div :class="prefix+'-select'">
                    <ul @mouseover="createSelection($refs.timePickerPanel, 0, 2)">
                        <template v-for="index in 24">
                            <li v-if="showLi(index, 'H')" @click="timePicker('H', $event)" :class="selectedCls(H, index, 'H')" v-text="(index<10?'0':'')+index"></li>
                        </template>
                    </ul>
                </div>
                <div :class="prefix+'-select'">
                    <ul @mouseover="createSelection($refs.timePickerPanel, 3, 5)">
                        <template v-for="index in 60">
                            <li v-if="showLi(index, 'M')" @click="timePicker('M', $event)" :class="selectedCls(M, index, 'M')" v-text="(index<10?'0':'')+index"></li>
                        </template>
                    </ul>
                </div>
                <div :class="prefix+'-select'" v-if="hasSeconds">
                    <ul @mouseover="createSelection($refs.timePickerPanel, 6, 8)">
                        <template v-for="index in 60">
                            <li v-if="showLi(index, 'S')" @click="timePicker('S', $event)" :class="selectedCls(S, index, 'S')" v-text="(index<10?'0':'')+index"></li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="babel">
    export default {
        data() {
            return {
                H: '00',
                M: '00',
                S: '00',
                defaultValue: this.value,
                hasSeconds: true
            }
        },
        props: {
            prefix: {
                type: String,
                default: 'ant-time-picker-panel'
            },
            selected: Boolean,
            localFormat: {
                type: String,
                default: 'HH:mm:ss'
            },
            value: {
                type: String,
                default: ''
            },
            hideDisabled: {
                type: Boolean,
                default: false
            },
            disabledH: Function,
            disabledM: Function,
            disabledS: Function
        },
        computed: {
            wrapClasses (){
                return [
                    `${this.prefix}${this.prefix.includes('-panel')?'':'-panel'}`,
                    `${this.prefix}-placement-bottomLeft`,
                    {[`${this.prefix}-narrow`]: !this.hasSeconds}
                ]
            }
        },
        watch: {
            selected (Boolean){
                if(Boolean){
                    if(!this.defaultValue){
                        let curDate = new Date();
                        this.H = this.dealTime(curDate.getHours());
                        this.M = this.dealTime(curDate.getMinutes());
                        this.S = this.dealTime(curDate.getSeconds());
                    }else{
                        let tArr = this.defaultValue.split(':');
                        if(tArr[0]) this.H = tArr[0];
                        if(tArr[1]) this.M = tArr[1];
                        if(tArr[2]) this.S = tArr[2];
                    }
                    this.$nextTick(function(){
                        let t = document.getElementsByClassName(this.prefix+'-select-option-selected');
                        for(let i in t){
                            this.setScrollTop(t[i]);
                        }
                    });
                    if(this.localFormat==='HH:mm'){
                        this.hasSeconds = false;
                    }
                    this.createSelection(this.$refs.timePickerPanel);
                }
            },
            defaultValue (val){
                this.$emit('input',val)
            }
        },
        methods: {
            timePicker (type, e){
                if(e.target.classList.contains(this.prefix+'-select-option-disabled')) return;
                this.setScrollTop(e.target);
                this[type] = e.target.textContent;
                if(this.hasSeconds){
                    this.defaultValue = this.H+':'+this.M+':'+this.S;
                }else{
                    this.defaultValue = this.H+':'+this.M;
                }
            },
            setScrollTop (elem){
                let top = elem.offsetTop;
                elem.parentElement && (elem.parentElement.parentElement.scrollTop = top);
            },
            selectedCls (Num, curNum, type){
                return {
                    [`${this.prefix}-select-option-selected`]: curNum*1 === Num*1,
                    [`${this.prefix}-select-option-disabled`]: this['disabled'+type] && this['disabled'+type](curNum*1)
                }
            },
            close(){
                this.$emit('close');
            },
            showLi (curNum, type){
                let show = true;
                if(this.hideDisabled && this['disabled'+type] && this['disabled'+type](curNum*1)) show = false;
                return show;
            },
            clearTime (){
                this.defaultValue = '';
                this.close();
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
            }
        }
    }
</script>