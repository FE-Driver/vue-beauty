<template lang="html">
    <span :class="wrapClasses">
        <input type="text" class="ant-time-picker-input" placeholder="请选择时间" @click="timePicker" v-model="value" v-el:time-picker readonly disabled="{{disabled}}">
        <span class="ant-time-picker-icon"></span>
    </span>
    <time-picker-node transition="fade" v-show="selected" :selected.sync="selected" :style="style" :time-value.sync="value" :local-format="format" :start-time="startTime" :end-time="endTime" :disabled-m="disabledMinutes" :disabled-s="disabledSeconds" v-el:time-picker-option></time-picker-node>
</template>

<script>
    import timePickerNode from './timePickerOption'
    import {getOffset, closeByElement} from '../_util/_func'

    export default {
        name: 'v-time-picker',
        data: ()=> ({
            prefix: 'ant-time-picker',
            style: {},
            dropDown: false,
            selected: false
        }),
        props: {
            position: {
                type: String,
                default: 'absolute'
            },
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
            this.$els.timePickerOption.style.position = this.position;
            document.body.appendChild(this.$els.timePickerOption);

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
                if(!this.$el){
                    return
                }
                let p = getOffset(this.$els.timePicker);

                this.$set('style',{
                    top: p.top + 'px',
                    left: p.left + 'px'
                })
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