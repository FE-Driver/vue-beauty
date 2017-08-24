<template>
    <div :class="wrapClasses" style="width: 90px">
        <div :class="prefixCls + '-handler-wrap'">
            <a unselectable="unselectable"
                ref="up"
                @click="up"
                @mouse.down="preventDefault"
                :class="prefixCls + '-handler ' + prefixCls + '-handler-up ' + upDisabledClass">
                <span unselectable="unselectable"
                    :class="prefixCls + '-handler-up-inner'"
                    @click="preventDefault">
                </span>
            </a>
            <a unselectable="unselectable"
                ref="down"
                @mouse.down="preventDefault"
                @click="down"
                :class="prefixCls + '-handler ' + prefixCls + '-handler-down ' + downDisabledClass">
                <span unselectable="unselectable"
                    :class="prefixCls + '-handler-down-inner'"
                    @click="preventDefault">
                </span>
            </a>
        </div>
        <div :class="prefixCls + '-input-wrap'">
            <input
                ref="input"
                autoComplete="off"
                @focus="_onFocus"
                @blur="_onBlur"
                @keydown.stop="_onKeyDown"
                :class="prefixCls + '-input'"
                :autoFocus="autoFocus"
                :readOnly="readOnly"
                :disabled="disabled"
                :max="max"
                :min="min"
                :value="relValue"
                @input="handleInput">
        </div>
    </div>
</template>

<script lang="babel">
    import emitter from '../../mixins/emitter';

    function isValueNumber(value) {
        return !isNaN(Number(value));
    }
    // 自定义运算，解决精度问题
    function calNum(num1, num2, symb) {
        let sq1;
        let sq2;
        try {
            sq1 = num1.toString().split('.')[1].length;
        } catch (e) {
            sq1 = 0;
        }
        try {
            sq2 = num2.toString().split('.')[1].length;
        } catch (e) {
            sq2 = 0;
        }
        const m = 10 ** Math.max(sq1, sq2);
        if (symb === '+') {
            return (num1 * m + num2 * m) / m;
        } else if (symb === '-') {
            return (num1 * m - num2 * m) / m;
        }
    }

    function preventDefault(e) {
        e.preventDefault();
    }

    export default {
        name: 'InputNumber',
        mixins: [emitter],
        props: {
            max: {
                type: Number,
                default: Infinity,
            },
            min: {
                type: Number,
                default: -Infinity,
            },
            size: String,
            value: [Number, String],
            step: {
                type: Number,
                default: 1,
            },
            autoFocus: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            readOnly: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                prefixCls: 'ant-input-number',
                noop: () => {},
                preventDefault,
                upDisabledClass: '',
                downDisabledClass: '',
                currentValue: this.value,
                relValue: this.value,
                keyCode: null,
            };
        },

        computed: {
            sizeClass() {
                if (this.size === 'large') {
                    return 'ant-input-number-lg';
                } else if (this.size === 'small') {
                    return 'ant-input-number-sm';
                }
            },
            wrapClasses() {
                return [
                    this.prefixCls,
                    { [this.sizeClass]: !!this.sizeClass },
                    { [`${this.prefixCls}-disabled`]: this.disabled },
                    { [`${this.prefixCls}-focused`]: this.focused },
                ];
            },
        },

        watch: {
            value(val) {
                this.relValue = val;
            },
            relValue(val) {
                if (isValueNumber(val)) {
                    val = Number(val);
                    if (val >= this.max) {
                        this.upDisabledClass = `${this.prefixCls}-handler-up-disabled`;
                    } else if (val <= this.min) {
                        this.downDisabledClass = `${this.prefixCls}-handler-down-disabled`;
                    } else {
                        this.upDisabledClass = '';
                        this.downDisabledClass = '';
                    }
                } else {
                    this.upDisabledClass = `${this.prefixCls}-handler-up-disabled`;
                    this.downDisabledClass = `${this.prefixCls}-handler-down-disabled`;
                }
            },
        },
        mounted() {
            if (!this.currentValue) {
                this.currentValue = this.min;
            }
            if (this.relValue == null) {
                this.relValue = this.currentValue;
            }
            this.focused = this.autoFocus;
        },

        methods: {
            handleInput(event) {
                const e = event;
                if (isValueNumber(e.target.value)) {
                    this.currentValue = e.target.value * 1;
                } else {
                    e.target.value = this.relValue;
                }
                const curValue = event.target.value === '' ? event.target.value : (event.target.value * 1);
                this.setValue(curValue);
            },
            setValue(value) {
                if (value === this.relValue) return;
                this.relValue = value;
                this.$emit('input', value);
                this.$emit('change', value);
                this.dispatch('FormItem', 'form.change', [value]);
            },
            _onKeyDown(e) {
                this.keyCode = e.keyCode;
                if (e.keyCode === 38) {
                    this.up(e);
                } else if (e.keyCode === 40) {
                    this.down(e);
                }
            },
            _onFocus() {
                this.focused = true;
            },
            _onBlur(e) {
                if (e.target.value !== '') {
                    if (e.target.value > this.max) {
                        e.target.value = this.max;
                        this.$emit('input', this.max);
                        this.$emit('change', this.max);
                        this.dispatch('FormItem', 'form.change', [this.max]);
                    } else if (e.target.value < this.min) {
                        e.target.value = this.min;
                        this.$emit('input', this.min);
                        this.$emit('change', this.min);
                        this.dispatch('FormItem', 'form.change', [this.min]);
                    }
                }

                this.currentValue = e.target.value * 1;
                this.focused = false;
                this.dispatch('FormItem', 'form.blur', [this.currentValue * 1]);
            },
            makeStep(type) {
                if (this.disabled) return;

                let value = Number(this.relValue);
                const stepNum = Number(this.step);

                if (isNaN(value)) return;
                if (type === 'down') value = calNum(value, stepNum, '-');
                else if (type === 'up') value = calNum(value, stepNum, '+');

                if (value > this.max || value < this.min) return;

                this.setValue(value, () => {
                    this.$refs.input.focus();
                });
            },
            down(e) {
                if (this.downDisabledClass) return;
                this.makeStep('down', e);
            },
            up(e) {
                if (this.upDisabledClass) {
                    return;
                }
                this.makeStep('up', e);
            },
        },
    };
</script>
