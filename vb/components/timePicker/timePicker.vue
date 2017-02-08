<template lang="html">
    <span :class="wrapClasses">
        <input type="text" class="ant-time-picker-input" placeholder="请选择时间" @click="timePicker" v-model="value" v-el:time-picker readonly disabled="{{disabled}}">
        <span class="ant-time-picker-icon"></span>
        <time-picker-node transition="fade" v-show="selected" :selected.sync="selected" :hide-disabled="hideDisabledOptions" :style="style" :time-value.sync="value" :local-format="format" :disabled-h="disabledHours" :disabled-m="disabledMinutes" :disabled-s="disabledSeconds" v-el:time-picker-option></time-picker-node>
    </span>
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
            container: null,
            selected: false
        }),
        props: {
            popupContainer: {
                type: Function,
                default: ()=> document.body
            },
            position: {
                type: String,
                default: 'absolute'
            },
            size: String,
            format: String,
            disabled: Boolean,
            value: String,
            hideDisabledOptions: {
                type: Boolean,
                default: false
            },
            disabledHours: Function,
            disabledMinutes: Function,
            disabledSeconds: Function
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
            this.container = this.popupContainer()
            this.$els.timePickerOption.style.position = this.position;
            this.container.appendChild(this.$els.timePickerOption);

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
            this.container.removeChild(this.$els.timePickerOption);
            document.removeEventListener('click', this.backdrop);
            window.removeEventListener('resize', this.backdrop);
        },
        methods: {
            timePicker (){
                this.selected = !this.selected;
            },
            setPosition (){
                if(!this.$el){
                    return
                }
                let p = getOffset(this.$els.timePicker, this.container);

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