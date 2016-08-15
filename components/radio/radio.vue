<template>
<label :class="wrapClasses">
  <span :class="radioClasses">
    <span :class="prefixCls + '-inner'"></span>
    <input
      type="radio"
      :disabled="disabled"
      :value="value"
      :checked="!!checked"
      :class="prefixCls + '-input'"
      @change="_handleChange">
  </span>
  <slot>Radio</slot>
</label>
</template>

<script>
import { defaultProps, oneOfType } from '../../utils'
import cx from 'classnames'

export default {
  props: defaultProps({
    prefixCls: 'ant-radio',
    type:'radio', // or button
    checked: Boolean,
    defaultChecked: false,
    value: oneOfType([String, Number, Boolean]),
    onChange: () => {},

    disabled: Boolean,

    style: {},
    className: ''
  }),

  computed: {
    wrapClasses () {
      return cx({
        [this.className]: !!this.className,
        [`${this.className}-checked`]: this.checked,
        [`${this.className}-disabled`]: this.disabled
      })
    },

    radioClasses () {
      return cx({
        [this.prefixCls]: true,
        [`${this.prefixCls}-checked`]: this.checked,
        [`${this.prefixCls}-checked-${this.checked ? 1 : 0}`]: !!this.checked,
        [`${this.prefixCls}-disabled`]: this.disabled
      })
    }
  },

  compiled () {
    if (this.checked == null) {
      this.checked = this.defaultChecked
    }
    if(this.type === 'button'){
      this.prefixCls = 'ant-radio-button'
    }
  },

  methods: {
    _handleChange (e) {
      this.checked = e.target.checked
      this.onChange(e)
    }
  }
}

</script>