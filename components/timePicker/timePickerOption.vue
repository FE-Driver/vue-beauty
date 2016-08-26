<template lang="html">
    <div v-el:opts>
        <div class="ant-time-picker-panel ant-time-picker-panel-placement-bottomLeft" :style.sync="styles">
            <div class="ant-time-picker-panel-inner">
                <div class="ant-time-picker-panel-input-wrap">
                    <input class="ant-time-picker-panel-input" placeholder="请选择时间" v-model="time" autofocus>
                    <a class="ant-time-picker-panel-clear-btn" role="button" title="清除" @click="clearTime"></a>
                </div>
                <div class="ant-time-picker-panel-combobox">
                    <div class="ant-time-picker-panel-select">
                        <ul>
                            <li v-for="($index) in 24" @click="timePicker('H', $event)" :class="selectedCls(H, $index)">{{$index<10?0:''}}{{$index}}</li>
                        </ul>
                    </div>
                    <div class="ant-time-picker-panel-select">
                        <ul>
                            <li v-for="($index) in 60" @click="timePicker('M', $event)" :class="selectedCls(M, $index)">{{$index<10?0:''}}{{$index}}</li>
                        </ul>
                    </div>
                    <div class="ant-time-picker-panel-select">
                        <ul>
                            <li v-for="($index) in 60" @click="timePicker('S', $event)" :class="selectedCls(S, $index)">{{$index<10?0:''}}{{$index}}</li>
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
            selected: Boolean
        },
        data: function(){
            return {
                prefix: 'ant-time-picker-panel',
                H: '00',
                M: '00',
                S: '00',
                time: ''
            }
        },
        created (){

        },
        ready (){

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
            }
        },
        watch: {
            selected: function(Boolean){
                if(Boolean){
                    let curDate = new Date();
                    this.$set('H', this.dealTime(curDate.getHours()));
                    this.$set('M', this.dealTime(curDate.getMinutes()));
                    this.$set('S', this.dealTime(curDate.getSeconds()));
                    this.$nextTick(function(){
                        document.body.appendChild(this.$els.opts);
                        let t = document.getElementsByClassName(this.prefix+'-select-option-selected');
                        for(let i in t){
                            this.setScrollTop(t[i]);
                        }
                    });
                }
            },
            time: function(val){
                this.$dispatch('select-event', {value: val})
            }
        },
        methods: {
            timePicker (type, e){
                this.setScrollTop(e.target);
                this.$set(type, e.target.textContent);
                this.$set('time', this.H+':'+this.M+':'+this.S);
            },
            setScrollTop (elem){
                let top = elem.offsetTop;
                elem.parentElement && (elem.parentElement.parentElement.scrollTop = top);
            },
            selectedCls (Num, curNum){
                if(curNum*1===Num*1){
                    return this.prefix+'-select-option-selected'
                }
            },
            clearTime (){
                this.$set('time', '');
                this.$set('selected', false);
            },
            dealTime (num){
                let t = num;
                if(num<10){
                    t = '0'+t;
                }
                return t;
            }
        }
    }
</script>