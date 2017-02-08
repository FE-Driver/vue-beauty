<template>
    <span :class="wrapClasses">
      <span v-if="hasbefore" class="ant-input-group-addon">
          <slot name="before"></slot>
      </span>
      <textarea v-if="type ==='textarea'" type="textarea" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" v-model="content" :debounce="debounce" @blur="blur">
      </textarea>
      <input v-else type="text" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" v-model="content" autocomplete="off" @blur="blur" :debounce="debounce"/>
      <span v-if="hasafter" class="ant-input-group-addon">
          <slot name="after"></slot>
      </span>
    </span>
</template>

<script>
    export default {
        name:'vInput',
        props: {
            debounce: {
                type: Number,
                default: 0
            },
            type: {
                type: String,
                default: 'text'
            },
            id: [Number, String],
            value: null,
            placeholder: {
                type: String,
                default: ''
            },
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
            content(val) {
                this.$emit('input',val);
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
                    this.hasslot = true

                    if(this.$slots.before) {
                        this.hasbefore = true
                    }

                    if(this.$slots.after) {
                        this.hasafter = true
                    }
                }
            } )
        },
        methods: {
            blur() {
                this.$emit('blur', this.content)
            }
        }
    }
</script>
