<template lang="html">
    <div :class="prefixCls">
        <v-checkbox v-for="item in data" :true-value="item[keyField]"
                    :key="item[keyField]" :disabled="item.disabled"
                    @change="itemChange" @click="itemClick">{{item[label]}}</v-checkbox>
        <slot></slot>
    </div>
</template>

<script>
import vCheckbox from './checkbox';
import emitter from '../../mixins/emitter';

export default {
    name: 'CheckboxGroup',
    mixins: [emitter],
    components: {
        vCheckbox,
    },
    props: {
        data: Array,
        keyField: {
            type: String,
            default: 'value',
        },
        label: {
            type: String,
            default: 'label',
        },
        value: {
            type: Array,
            default: () => [],
        },
        max: {
            type: Number,
            validator(value) {
                return value > 0;
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            prefixCls: 'ant-checkbox-group',
        };
    },
    mounted() {
        if (this.disabled) {
            this.setDisabled();
        }
        this.setChecked();
        this.$on('checkbox.change', (checked, value) => {
            if (checked) {
                if (!this.innerValue.includes(value)) {
                    if (!this.max || this.max > this.innerValue.length) {
                        this.innerValue.push(value);
                    } else if (this.max === 1) {
                        this.innerValue.splice(0, 1, value);
                    }
                }
            } else {
                const i = this.innerValue.indexOf(value);
                if (i !== -1) {
                    this.innerValue.splice(i, 1);
                }
            }
        });
    },
    computed: {
        innerValue() {
            return this.value;
        },
    },
    watch: {
        value() {
            this.setChecked();
        },
        innerValue(value) {
            this.$emit('change', value);
            this.$emit('input', value);
            this.dispatch('FormItem', 'form.change', [value]);
        },
    },
    methods: {
        setDisabled() {
            for (const child of this.$children) {
                if (child.$options.name === 'Checkbox') {
                    child.innerDisabled = true;
                }
            }
        },
        setChecked() {
            for (const child of this.$children) {
                if (child.$options.name === 'Checkbox') {
                    if (this.innerValue.includes(child.trueValue)) {
                        child.innerValue = child.trueValue;
                    } else {
                        child.innerValue = child.falseValue;
                    }
                }
            }
        },
        itemClick() {
            this.$emit('item-click');
        },
        itemChange(value) {
            this.$emit('item-change', value);
        },
    },
};
</script>
