<template>
    <input v-if="!hasbefore && !hasafter && type != 'textarea'" :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="innerValue" @input="handleInput" autocomplete="off" @blur="blur"/>
    <textarea v-else-if="type ==='textarea'" type="textarea" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="innerValue" @input="handleInput" @blur="blur">
    </textarea>
    <span v-else :class="wrapClasses">
        <span v-if="hasbefore" class="ant-input-group-addon">
            <slot name="before"></slot>
        </span>
        <input :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="innerValue" @input="handleInput" autocomplete="off" @blur="blur"/>
        <span v-if="hasafter" class="ant-input-group-addon">
            <slot name="after"></slot>
        </span>
    </span>
</template>

<script lang="babel">
    import emitter from '../../mixins/emitter';
    import {t} from '../../locale'

    export default {
        name:'Input',
        mixins: [emitter],
        props: {
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ()=>t('input.placeholder')
            },
            id: [Number, String],
            value: null,
            defaultValue: null,
            size: {
                type: String,
                default: 'default'
            },
            debounce: {
                type: Number,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            },
            onPressEnter: Function,
            autosize: [Boolean, Object]
        },
        data() {
            return {
                debounceTimer: null,
                prefix: 'ant-input',
                hasslot: false,
                hasbefore: false,
                hasafter: false,
                innerValue: this.value
            }
        },
        watch: {
            value(val) {
                this.innerValue = val
            }
        },
        computed: {
            wrapClasses () {
                return [
                    `${this.prefix}-wrapper`,
                    {[`${this.prefix}-group`]: this.hasslot}
                ]
            },
            inpClasses () {
                const size = {small:'sm',large:'lg'}[this.size];

                return [
                    this.prefix,
                    {[`${this.prefix}-${size}`]: size}
                ]
            }
        },
        mounted () {
            this.$nextTick( ()=>{
                if(this.$slots) {
                    if(this.$slots.before) {
                        this.hasslot = true
                        this.hasbefore = true
                    }

                    if(this.$slots.after) {
                        this.hasslot = true
                        this.hasafter = true
                    }
                }
            } )
        },
        methods: {
            handleInput(event) {
                if(this.debounceTimer) clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(()=>{
                    this.setCurrentValue(event.target.value);
                }, this.debounce);
            },
            setCurrentValue(value) {
                if (value === this.innerValue) return;
                this.innerValue = value
                this.$emit('input', value)
                this.dispatch('FormItem', 'form.change', [value]);
            },
            blur() {
                this.$emit('blur', this.innerValue)
                this.dispatch('FormItem', 'form.blur', [this.innerValue]);
            }
        }
    }
</script>
