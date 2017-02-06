<template lang="html">
    <label class="ant-checkbox-wrapper">
        <span class="ant-checkbox" :class="{'ant-checkbox-checked': currentValue, 'ant-checkbox-disabled': disabled}">
            <span class="ant-checkbox-inner"></span>
            <input type="checkbox" class="ant-checkbox-input" @click="_change" :value="currentValue">
        </span>
        <!--<span v-if="_slotContents && _slotContents.default">-->
        <span>
            <slot></slot>
        </span>
        <!--</span>-->
    </label>
</template>

<script lang="babel">
    export default {
        name: 'vCheckbox',
        props: {
            value: {
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
