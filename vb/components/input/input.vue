<template>
    <input v-if="!hasbefore && !hasafter && type!='textarea'" :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="content" @input="handleInput" autocomplete="off" @blur="blur"/>
    <span v-else :class="wrapClasses">
        <span v-if="hasbefore" class="ant-input-group-addon">
            <slot name="before"></slot>
        </span>
        <textarea v-if="type ==='textarea'" type="textarea" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="content" @input="handleInput" @blur="blur">
        </textarea>
        <input v-else :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="content" @input="handleInput" autocomplete="off" @blur="blur"/>
        <span v-if="hasafter" class="ant-input-group-addon">
            <slot name="after"></slot>
        </span>
    </span>
</template>

<script lang="babel">
    import {t} from '../../locale'

    export default {
        name:'Input',
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
            disabled: {
                type: Boolean,
                default: false
            },
            onPressEnter: Function,
            autosize: [Boolean, Object]
        },
        data() {
            return {
                prefix: 'ant-input',
                hasslot: false,
                hasbefore: false,
                hasafter: false,
                content: this.value
            }
        },
        watch: {
            value(val) {
                this.content = val
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
                this.setCurrentValue(event.target.value);
            },
            setCurrentValue(value) {
                if (value === this.content) return;
                this.content = value
                this.$emit('input', value)
            },
            blur() {
                this.$emit('blur', this.content)
            }
        }
    }
</script>
