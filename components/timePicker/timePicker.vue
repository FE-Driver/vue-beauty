<template lang="html">
    <span class="ant-time-picker">
        <input type="text" class="ant-time-picker-input" placeholder="请选择时间" @click="timePicker" v-model="time" v-el:time-picker>
        <span class="ant-time-picker-icon"></span>
    </span>
    <time-picker-node v-show="selected" :selected.sync="selected" :stylus.sync="stylus" v-el:time-picker-option></time-picker-node>
</template>

<script>

    import timePickerNode from './timePickerOption'
    import {getOffset, closeByElement} from '../_util/_func'

    export default {
        data: function(){
            return {
                prefix: 'ant-time-picker',
                dropDown: false,
                selected: false,
                stylus: {
                    top: 0,
                    left: 0
                },
                time: ''
            }
        },
        created (){
            document.addEventListener('click', this.backdrop)
        },
        ready (){
            let self = this;
            let styles = window.getComputedStyle(this.$els.timePicker);
            this.height = parseFloat(styles.getPropertyValue('height'));
            let time = null;
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
        events: {
            'select-event' (obj){
                this.$set('time', obj.value);
            }
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