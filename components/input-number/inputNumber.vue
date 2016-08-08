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
            @click="preventDefault"></span>
    </a>
    <a unselectable="unselectable"
       ref="down"
       @mouse.down="preventDefault"
       @click="_down"
       :class="prefixCls + '-handler ' + prefixCls + '-handler-down ' + downDisabledClass">
      <span unselectable="unselectable"
            :class="prefixCls + '-handler-down-inner'"
            @click="preventDefault"></span>
    </a>
  </div>
  <div :class="prefixCls + '-input-wrap'">
    <input v-el:input
           ref="input"
           autoComplete="off"
           @focus="_onFocus"
           @blur="_onBlur"
           @keydown.stop="_onKeyDown"
           @change="_onChange"
           :class="prefixCls + '-input'"
           :autoFocus="autoFocus"
           :readOnly="readOnly"
           :disabled="disabled"
           :max="max"
           :min="min"
           :name="name"
           :value="value"/>
  </div>
</div>
</template>

<script>
import { defaultProps, oneOfType } from '../../utils'
import cx from 'classnames'

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
  props: defaultProps({
    prefixCls: 'ant-input-number',
    max: oneOfType([Number, String], Infinity),
    min: oneOfType([Number, String], -Infinity),
    size: oneOfType([Number, String]),
    value: oneOfType([Number, String]),
    step: oneOfType([Number, String], 1),
    defaultValue: oneOfType([Number, String], ''),
    autoFocus: false,
    onChange: () => {},
    readOnly: false,
    disabled: false,
  }),

  data () {
    return {
      sizeClass: '',
      noop: () => {},
      preventDefault: preventDefault,
      upDisabledClass: '',
      downDisabledClass: ''
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
      return cx({
        [this.prefixCls]: 1,
        [this.sizeClass]: !!this.sizeClass,
        [`${this.prefixCls}-disabled`]: this.disabled,
        [`${this.prefixCls}-focused`]: this.focused
      })
    }
  },

  watch: {
    value (val) {
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
  compiled () {
    if (!this.defaultValu) {
      this.defaultValue = this.min
    }
    if (this.value == null) {
      this.value = this.defaultValue
    }
    this.focused = this.autoFocus
  },

  methods: {
    _setValue (value) {
      this.value = value
      this.onChange(value)
    },

    _onChange (event) {
      let val = event.target.value.trim()

      if (!val) {
        this._setValue(val)
      } else if (isValueNumber(val)) {
        val = Number(val)
        if (val < this.min) return
        if (val > this.max) return
        this._setValue(val)
      } else if (val === '-') {
        if (this.min >= 0) return
        this.value = val
      }
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

    _onBlur () {
      this.focused = false
      if (this.value === '-') {
        this._setValue('')
      }
    },

    _step (type, e) {
      if (this.disabled) return

      let value = Number(this.value)
      const stepNum = Number(this.step)

      if (isNaN(value)) return
      if (type == 'down') value = calNum(value,stepNum,'-');
      else if (type === 'up') value = calNum(value,stepNum,'+');

      if (value > this.max || value < this.min) return

      this._setValue(value, () => {
        this.$els.input.focus()
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
