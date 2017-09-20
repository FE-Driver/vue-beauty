<template>
    <span>
        <ul :class="[prefixCls, {[prefixCls + '-disabled']: disabled}]" @mouseout="recovery">
            <li :class="[prefixCls + '-star',item.valueCls ? item.valueCls : '', item.hoverCls ? item.hoverCls : '']" v-for="(item, index) in lightArr" @mouseover="allLight(index)" @click="selected">
                <div :class="prefixCls + '-star-content'" @mouseover="halfLight(index, $event)"></div>
            </li>
        </ul>
        <slot></slot>
    </span>
</template>

<script>
import emitter from '../../mixins/emitter';

export default {
    name: 'Rate',
    mixins: [emitter],
    data() {
        return {
            prefixCls: 'ant-rate',
            currentValue: this.valueHandle(this.value),
            hoverValue: 0,
        };
    },
    props: {
        count: {
            type: Number,
            default: 5,
            coerce(val) {
                return Math.round(val);
            },
        },
        value: {
            type: Number,
            default: 0,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        allowHalf: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        lightArr() {
            const arr = [];
            for (let i = 0; i < this.count; i++) {
                arr.push({});
            }
            /* 显示当前值 */
            let i = 0;
            for (; i < parseInt(this.currentValue, 10); i++) {
                arr[i].valueCls = `${this.prefixCls}-star-full`;
            }
            if (parseInt(this.currentValue, 10) !== this.currentValue) {
                arr[i].valueCls = `${this.prefixCls}-star-half`;
            }
            /* 当用户hover时，高亮 */
            let j = 0;
            for (; j < parseInt(this.hoverValue, 10); j++) {
                arr[j].hoverCls = `${this.prefixCls}-star-full`;
            }
            if (parseInt(this.hoverValue, 10) !== this.hoverValue) {
                arr[j].hoverCls = `${this.prefixCls}-star-half`;
            }
            return arr;
        },
    },
    methods: {
        recovery() {
            this.hoverValue = 0;
        },
        allLight(index) {
            if (this.disabled) return;
            this.hoverValue = index + 1;
        },
        halfLight(index, e) {
            if (this.disabled) return;
            if (this.allowHalf) {
                this.hoverValue = index + 0.5;
                e.stopPropagation();
            }
        },
        selected() {
            if (this.disabled) return;
            this.currentValue = this.hoverValue;
        },
        /* 根据allowHalf 对value进行不同的处理 */
        valueHandle(val) {
            /* 如果允许半选 整数直接返回  小数将小数部分变成.5 */
            if (val > this.count) {
                /* 强制转换 */
                this.$emit('change', this.count);
                this.$emit('input', this.count);
                this.dispatch('FormItem', 'form.change', [this.count]);
                return this.count;
            }
            if (this.allowHalf) {
                const _v = parseInt(val, 10);
                if (_v !== val) {
                    val = _v + 0.5;
                }
                return val;
            }
            /* 不允许半选直接四舍五入 */
            return Math.round(val);
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(value) {
            this.$emit('change', value);
            this.$emit('input', value);
            this.dispatch('FormItem', 'form.change', [value]);
        },
    },
};
</script>