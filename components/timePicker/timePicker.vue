<template lang="html">
    <span :class="wrapClasses">
        <input type="text" class="ant-time-picker-input" placeholder="请选择时间" @click="timePicker" v-model="timeValue" v-el:time-picker readonly disabled="{{disabled}}">
        <span class="ant-time-picker-icon"></span>
    </span>
    <time-picker-node v-show="selected" :selected.sync="selected" :stylus.sync="stylus" :time-value.sync="timeValue" :local-format="format" :start-time="startTime" :end-time="endTime" :disabled-m="disabledMinutes" :disabled-s="disabledSeconds" v-el:time-picker-option></time-picker-node>
</template>

<script>

    import timePickerNode from './timePickerOption'
    import {getOffset, closeByElement} from '../_util/_func'
    import cx from 'classnames'

    export default {
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
        data: function(){
            return {
                prefix: 'ant-time-picker',
                dropDown: false,
                selected: false,
                stylus: {
                    top: 0,
                    left: 0
                },
                timeValue: '',
                sizeClass: ''
            }
        },
        created (){
            document.addEventListener('click', this.backdrop);
        },
        computed: {
            sizeClass (){
                if (this.size === 'large') {
                    return 'ant-time-picker-large'
                } else if (this.size === 'small') {
                    return 'ant-time-picker-small'
                }
            },
            wrapClasses (){
                return cx({
                    [this.prefix]: 1,
                    [this.sizeClass]: !!this.size
                })
            }
        },
        ready (){
            let self = this;
            let styles = window.getComputedStyle(this.$els.timePicker);
            this.height = parseFloat(styles.getPropertyValue('height'));
            let time = null;
            this.$set('timeValue', this.value);
            window.addEventListener('resize', function () {
                clearTimeout(time);
                time = setTimeout(function () {
                    if (!self.disabled && self.selected) {
                        self.position()
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
                this.position();
                this.selected = !this.selected;
            },
            position (){
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