<template lang="html">
    <label :class="wrapperCls" @click="click">
        <span :class="checkboxCls">
            <input type="checkbox" :class="prefixCls + '-input'"  v-model="innerValue" :true-value="trueValue" :false-value="falseValue" :disabled="innerDisabled">
            <span :class="prefixCls + '-inner'"></span>
        </span><span v-if="$slots && $slots.default">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import emitter from '../../mixins/emitter';

export default {
    name: 'Checkbox',
    mixins: [emitter],
    props: {
        value: {
            default: false,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        trueValue: {
            default: true,
        },
        falseValue: {
            default: false,
        },
    },
    data() {
        return {
            prefixCls: 'ant-checkbox',
            parentIsGroup: false,
            innerValue: this.value,
            innerDisabled: this.disabled,
        };
    },
    mounted() {
        if (this.$parent.$options.name === 'CheckboxGroup') {
            this.parentIsGroup = true;
        }
    },
    computed: {
        wrapperCls() {
            return [
                `${this.prefixCls}-wrapper`,
                {
                    [`${this.prefixCls}-group-item`]: this.parentIsGroup,
                },
            ];
        },
        checkboxCls() {
            return [
                this.prefixCls,
                {
                    [`${this.prefixCls}-checked`]: !this.indeterminate && (this.innerValue === this.trueValue),
                    [`${this.prefixCls}-indeterminate`]: this.indeterminate,
                    [`${this.prefixCls}-disabled`]: this.innerDisabled,
                },
            ];
        },
    },
    watch: {
        disabled(value) {
            this.innerDisabled = value;
        },
        value(value) {
            this.innerValue = value;
        },
        innerDisabled(value) {
            this.$emit('update:disbled', value);
        },
        innerValue(value) {
            this.$emit('change', value);
            this.$emit('input', value);
            this.dispatch('CheckboxGroup', 'checkbox.change', [this.trueValue === value, this.trueValue]);
        },
    },
    methods: {
        click(e) {
            if (e.target.tagName !== 'INPUT') return;
            this.$nextTick(() => {
                if (
                    this.innerValue === this.trueValue &&
                    this.$parent &&
                    this.$parent.$options.name === 'CheckboxGroup' &&
                    this.$parent.max &&
                    this.$parent.max !== 1 &&
                    this.$parent.max <= this.$parent.innerValue.length
                ) {
                    return this.innerValue = this.falseValue;
                }
                this.$emit('click', this.innerValue);
            });
        },
    },
};
</script>
