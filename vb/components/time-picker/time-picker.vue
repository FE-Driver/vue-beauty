<template lang="html">
    <span :class="wrapClasses" v-clickoutside="closeDropdown">
        <input type="text" class="ant-time-picker-input" :placeholder="placeholder" @click="toggleDropdown" v-model="defaultValue" ref="timePicker" readonly :disabled="disabled">
        <span class="ant-time-picker-icon"></span>
        <transition name="fade">
            <time-picker-option v-show="selected" :selected="selected" :hide-disabled="hideDisabledOptions" :style="style" v-model="defaultValue" :local-format="format" :disabled-h="disabledHours" :disabled-m="disabledMinutes" :disabled-s="disabledSeconds" ref="timePickerOption" @close="optionClose" @click.native.stop></time-picker-option>
        </transition>
        <div class="ant-time-picker-panel-addon" v-if="$scopedSlots.addon" ref="addon">
            <slot name="addon" :panel="$refs.timePickerOption"></slot>
        </div>
    </span>
</template>

<script lang="babel">
    import { t } from '../../locale';
    import emitter from '../../mixins/emitter';
    import timePickerOption from './time-picker-option';
    import { getOffset } from '../../utils/fn';
    import clickoutside from '../../directives/clickoutside';

    export default {
        directives: { clickoutside },
        name: 'TimePicker',
        mixins: [emitter],
        data() {
            return {
                prefix: 'ant-time-picker',
                style: {},
                dropDown: false,
                container: null,
                defaultValue: this.value,
                selected: false
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ()=>t('timePicker.placeholder')
            },
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
            value: {
                type: String,
                default: ''
            },
            hideDisabledOptions: {
                type: Boolean,
                default: false
            },
            disabledHours: Function,
            disabledMinutes: Function,
            disabledSeconds: Function
        },
        computed: {
            wrapClasses (){
                return [
                    this.prefix,
                    `${this.prefix}-${this.size}`
                ]
            }
        },
        mounted (){
            this.container = this.popupContainer();
            this.$refs.timePickerOption.$el.style.position = this.position;
            this.container.appendChild(this.$refs.timePickerOption.$el);

            this.$nextTick(()=>{
                this.setPosition();
            })
            let timer = null;
            window.addEventListener('resize', ()=> {
                clearTimeout(timer);
                timer = setTimeout(()=> {
                    if (!this.disabled) {
                        this.setPosition();
                    }
                }, 200)
            })

            if(this.$refs.addon){
                this.$refs.timePickerOption.$el.children[0].appendChild(this.$refs.addon);
            }
        },
        beforeDestroy (){
            this.container.removeChild(this.$refs.timePickerOption.$el);
        },
        watch: {
            defaultValue(val){
                this.$emit('input',val)
                this.dispatch('FormItem', 'form.change', [val]);
            }
        },
        methods: {
            optionClose (){
                this.selected = false;
            },
            toggleDropdown (){
                this.selected = !this.selected;
                if(this.selected){
                    this.$nextTick(()=>{
                        this.setPosition();
                    })
                }
            },
            setPosition (){
                if(!this.$el){
                    return
                }
                let p = getOffset(this.$refs.timePicker, this.container);

                this.style = {
                    top: p.top + 'px',
                    left: p.left + 'px'
                }
            },
            closeDropdown() {
                this.selected = false;
            },
        },
        components: {
            timePickerOption,
        },
    }
</script>
