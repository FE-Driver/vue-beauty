<template>
    <div :class="wrapClasses">
        <slot></slot>
        <template v-if="!hasSlot">
            <v-radio v-for="(radio,index) in data" :type="type" :class-name="radioClasses" :key="radio.value" :disabled="radio.disabled" :label="radio.value">
                <span>{{radio.text}}</span>
            </v-radio>
        </template>
    </div>
</template>

<script>
import vRadio from './radio';
import emitter from '../../mixins/emitter';

export default {
    name: 'RadioGroup',
    mixins: [emitter],
    data() {
        return {
            prefixCls: 'ant-radio-group',
            hasSlot: false,
            selectValue: '',
        };
    },
    props: {
        type: {
            type: String,
            default: 'radio',
        },
        value: {
            type: [String, Number, Boolean],
            default: '',
        },
        data: {
            type: Array, // [{value:'',text:'',disabled:true/false}]
            default() {
                return [];
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: '',
        },
    },

    components: { vRadio },

    computed: {
        wrapClasses() {
            const size = ['small', 'large'].indexOf(this.size) !== -1 ? this.size : '';
            return [
                this.prefixCls,
                { [`${this.prefixCls}-${size}`]: size },
            ];
        },
        radioClasses() {
            return this.type === 'button' ? 'ant-radio-button-wrapper' : 'ant-radio-wrapper';
        },
    },

    mounted() {
        if (this.$slots && this.$slots.default) {
            this.hasSlot = true;
        }
        this.$children.forEach((child) => {
            child.isGroup = true;
        });
    },

    created() {
        if (this.disabled) {
            for (const radio of this.data) {
                radio.disabled = true;
            }
        }
    },
    methods: {
        change(value) {
            this.$emit('input', value);
            this.$emit('change', value);
            this.dispatch('FormItem', 'form.change', [value]);
        },
    },
};
</script>
