<template>
    <div :class="wrapClasses" style="width: 90px">
        <div :class="prefixCls + '-handler-wrap'">
            <a unselectable="unselectable"
                ref="up"
                @click="_up"
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
                @click="_down"
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
                @input="handleInput" />
        </div>
    </div>
</template>

<script lang="babel">
    import emitter from '../../mixins/emitter';

    function isValueNumber (value) {
        return !isNaN(Number(value))
    }
    //自定义运算，解决精度问题
    function calNum (num1, num2,symb) {
        var sq1,sq2,m;
        try {
            sq1 = num1.toString().split(".")[1].length;
        }
        catch (e) {
            sq1 = 0;
        }
        try {
            sq2 = num2.toString().split(".")[1].length;
        }
        catch (e) {
            sq2 = 0;
        }
        m = Math.pow(10,Math.max(sq1, sq2));
        if(symb === '+'){
            return (num1 * m + num2 * m) / m;
        }else if(symb === '-'){
            return (num1 * m - num2 * m) / m;
        }
    }

    function preventDefault (e) {
        e.preventDefault()
    }

    export default {
        name:'InputNumber',
        mixins: [emitter],
        props: {
            max: {
                type: [Number, String],
                default: Infinity
            },
            min: {
                type: [Number, String],
                default: -Infinity
            },
            size: [Number, String],
            value: [Number, String],
            step: {
                type: [Number, String],
                default: 1
            },
            defaultValue: [Number, String],
            autoFocus: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readOnly: {
                type: Boolean,
                default: false
            },
            change: Function
        },
        data () {
            return {
                prefixCls: 'ant-input-number',
                noop: () => {},
                preventDefault: preventDefault,
                upDisabledClass: '',
                downDisabledClass: '',
                currentValue: this.defaultValue,
                relValue: this.value,
            }
        },

        computed: {
            sizeClass () {
                if (this.size === 'large') {
                    return 'ant-input-number-lg'
                } else if (this.size === 'small') {
                    return 'ant-input-number-sm'
                }
            },
            wrapClasses () {
                return [
                    this.prefixCls,
                    {[this.sizeClass]: !!this.sizeClass},
                    {[`${this.prefixCls}-disabled`]: this.disabled},
                    {[`${this.prefixCls}-focused`]: this.focused}
                ]
            }
        },

        watch: {
            value(val) {
                this.relValue = val
            },
            relValue (val) {
                if (isValueNumber(val)) {
                    val = Number(val)
                    if (val >= this.max) {
                        this.upDisabledClass = `${this.prefixCls}-handler-up-disabled`
                    } else if (val <= this.min) {
                        this.downDisabledClass = `${this.prefixCls}-handler-down-disabled`
                    } else {
                        this.upDisabledClass = ''
                        this.downDisabledClass = ''
                    }
                } else {
                    this.upDisabledClass = `${this.prefixCls}-handler-up-disabled`
                    this.downDisabledClass = `${this.prefixCls}-handler-down-disabled`
                }
            }
        },
        mounted () {
            if (!this.currentValue) {
                this.currentValue = this.min
            }
            if (this.relValue == null) {
                this.relValue = this.currentValue
            }
            this.focused = this.autoFocus
        },

        methods: {
            handleInput(event) {
                this._setValue(event.target.value);
            },

            _setValue (value) {
                if (value === this.relValue) return;
                this.relValue = value
                if ( this.change ) {
                    this.change(value)
                }
                this.$emit('input', value)
                this.dispatch('FormItem', 'form.blur', [value]);
            },

            _onKeyDown (e) {
                if (e.keyCode === 38) {
                    this._up(e)
                } else if (e.keyCode === 40) {
                    this._down(e)
                }
            },

            _onFocus () {
                this.focused = true
            },

            _onBlur (event) {
                this.focused = false
                if ( !isValueNumber(event.target.value) ) {
                    event.target.value = this.relValue
                }
            },

            _step (type, e) {
                if (this.disabled) return

                let value = Number(this.relValue)
                const stepNum = Number(this.step)

                if (isNaN(value)) return
                if (type == 'down') value = calNum(value,stepNum,'-');
                else if (type === 'up') value = calNum(value,stepNum,'+');

                if (value > this.max || value < this.min) return

                this._setValue(value, () => {
                    this.$refs.input.focus()
                })
            },

            _down (e) {
                if (this.downDisabledClass) {
                    return
                }
                this._step('down', e)
            },

            _up (e) {
                if (this.upDisabledClass) {
                    return
                }
                this._step('up', e)
            }
        }
    }

</script>
