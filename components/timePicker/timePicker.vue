<template lang="html">
    <span :class="wrapClasses">
        <input type="text" class="ant-time-picker-input" placeholder="请选择时间" @click="timePicker" v-model="value" v-el:time-picker readonly disabled="{{disabled}}">
        <span class="ant-time-picker-icon"></span>
    </span>
    <time-picker-node transition="fade" v-show="selected" :selected.sync="selected" :stylus.sync="stylus" :time-value.sync="value" :local-format="format" :start-time="startTime" :end-time="endTime" :disabled-m="disabledMinutes" :disabled-s="disabledSeconds" v-el:time-picker-option></time-picker-node>
</template>

<script>
    import timePickerNode from './timePickerOption'
    import {getOffset, closeByElement} from '../_util/_func'

    export default {
        name: 'v-time-picker',
        data: ()=> ({
            prefix: 'ant-time-picker',
            dropDown: false,
            selected: false,
            stylus: {
                top: 0,
                left: 0
            }
        }),
        props: {
            size: String,
            format: String,
            disabled: Boolean,
            startTime: String,
            endTime: String,
            value: String,
            disabledMinutes: Array,
            disabledSeconds: Array
        },
        created (){
            document.addEventListener('click', this.backdrop);
        },
        computed: {
            wrapClasses (){
                return [
                    this.prefix,
                    `${this.prefix}-${this.size}`
                ]
            }
        },
        ready (){
            let styles = window.getComputedStyle(this.$els.timePicker);
            this.height = parseFloat(styles.getPropertyValue('height'));

            this.$nextTick(()=>{
                this.setPosition();
            })
            let timer = null;
            window.addEventListener('resize', ()=> {
                clearTimeout(timer);
                timer = setTimeout(()=> {
                    if (!this.disabled) {
                        this.setPosition()
                    }
                }, 200)
            })
        },
        beforeDestroy (){
            document.removeEventListener('click', this.backdrop);
            window.removeEventListener('resize', this.backdrop);
            let node = this.$els.timePickerOption;
            node && document.body.removeChild(node)
        },
        methods: {
            timePicker (){
                this.selected = !this.selected;
            },
            setPosition (){
                let p = getOffset(this.$els.timePicker);
                this.stylus = {
                    top: p.top,
                    left: p.left
                }
            },
            backdrop (e){
                if (!closeByElement(e.target, [this.$els.timePicker, this.$els.timePickerOption])) {
                    this.$set('selected', false);
                }
            }
        },
        components: {
            timePickerNode
        }
    }
</script>