<template lang="html">
    <label :class="prefixCls + '-wrapper'">
        <span :class="[prefixCls, {[prefixCls + '-checked']: currentValue && !indeterminate,  [prefixCls + '-indeterminate']: indeterminate, [prefixCls + '-disabled']: disabled}]">
            <span :class="prefixCls + '-inner'"></span>
            <input type="checkbox" :class="prefixCls + '-input'" @click="_change" :value="currentValue">
        </span>
        <span v-if="$slots && $slots.default">
            <slot></slot>
        </span>
    </label>
</template>

<script lang="babel">
    export default {
        name: 'Checkbox',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                prefixCls: 'ant-checkbox',
                currentValue: this.value
            }
        },
        methods: {
            _change () {
                if (this.disabled) return;
                this.currentValue = !this.currentValue;
                this.$emit("click", this.currentValue);
            }
        },
        watch: {
            value: function(value) {
                this.currentValue = value;
            },
            currentValue: function(value) {
                this.$emit("change", value);
                this.$emit("input", value);
            }
        }
    }
</script>
