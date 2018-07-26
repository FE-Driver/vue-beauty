<template>
    <span v-if="hasbefore || hasafter" :class="wrapClasses" :id="id">
        <span v-if="hasbefore" class="ant-input-group-addon">
            <slot name="before"></slot>
        </span>
        <input :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled"
               :value="innerValue" @input="handleInput" autocomplete="off"
               @keyup="keyUp"
               @keydown="keyDown"
               v-bind="$attrs"
               ref="input"
               @blur="blur" @focus="$emit('focus', $event)">
        <span v-if="hasafter" class="ant-input-group-addon">
            <slot name="after"></slot>
        </span>
    </span>
    <textarea v-else-if="type ==='textarea'" :id="id" :class="inpClasses" :placeholder="placeholder"
              :disabled="disabled" :value="innerValue" @input="handleInput"
              @keyup="keyUp"
              @keydown="keyDown"
              v-bind="$attrs"
              @blur="blur" @focus="$emit('focus', $event)" ref="textarea" :rows="autosize && autosize.minRows ?autosize.minRows:2" :style="{maxHeight: autosize && autosize.maxRows ? `${autosize.maxRows*18+10}px`:'auto'}">
    </textarea>
    <input v-else :id="id" :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled"
           :value="innerValue" @input="handleInput" autocomplete="off"
           @keyup="keyUp"
           @keydown="keyDown"
           v-bind="$attrs"
           ref="input"
           @blur="blur" @focus="$emit('focus', $event)">
</template>

<script lang="babel">
    import autosize from 'autosize';
    import emitter from '../../mixins/emitter';
    import { t } from '../../locale';

    export default {
        name: 'Input',
        mixins: [emitter],
        props: {
            type: {
                type: String,
                default: 'text',
            },
            placeholder: {
                type: String,
                default: () => t('common.placeholder2'),
            },
            id: [Number, String],
            value: null,
            size: {
                type: String,
                default: 'default',
            },
            debounce: {
                type: Number,
                default: 0,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            autosize: {
                type: [Boolean, Object],
                default: false,
            },
        },
        data() {
            return {
                debounceTimer: null,
                prefix: 'ant-input',
                hasslot: false,
                hasbefore: false,
                hasafter: false,
                innerValue: this.value,
            };
        },
        watch: {
            value(val) {
                this.innerValue = val;
            },
            innerValue(val) {
                this.$emit('input', val);
                this.dispatch('FormItem', 'form.change', [val]);
            },
        },
        computed: {
            wrapClasses() {
                return [
                    `${this.prefix}-wrapper`,
                    { [`${this.prefix}-group`]: this.hasslot },
                ];
            },
            inpClasses() {
                const size = { small: 'sm', large: 'lg' }[this.size];

                return [
                    this.prefix,
                    { [`${this.prefix}-disabled`]: this.disabled },
                    { [`${this.prefix}-${size}`]: size },
                ];
            },
        },
        mounted() {
            if (this.autosize && this.type === 'textarea') {
                autosize(this.$refs.textarea);
            }
            this.$nextTick(() => {
                if (this.$slots) {
                    if (this.$slots.before) {
                        this.hasslot = true;
                        this.hasbefore = true;
                    }

                    if (this.$slots.after) {
                        this.hasslot = true;
                        this.hasafter = true;
                    }
                }
            });
        },
        methods: {
            setFocus() {
                (this.$refs.input || this.$refs.textarea).focus();
            },
            setBlur() {
                (this.$refs.input || this.$refs.textarea).blur();
            },
            selectText() {
                (this.$refs.input || this.$refs.textarea).select();
            },
            handleInput(event) {
                if (this.debounceTimer) clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(() => {
                    this.setCurrentValue(event.target.value);
                }, this.debounce);
            },
            setCurrentValue(value) {
                if (value === this.innerValue) return;
                this.innerValue = value;
            },
            blur() {
                this.$emit('blur', this.innerValue);
                this.dispatch('FormItem', 'form.blur', [this.innerValue]);
            },
            keyUp() {
                this.$emit('keyup', this.innerValue);
                this.dispatch('FormItem', 'form.keyup', [this.innerValue]);
            },
            keyDown() {
                this.$emit('keydown', this.innerValue);
                this.dispatch('FormItem', 'form.keydown', [this.innerValue]);
            },
        },
    };
</script>
