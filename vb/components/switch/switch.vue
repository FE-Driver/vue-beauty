<template lang="html">
  <span :class="wrapClasses" @click="_toggle">
    <span :class="prefix + '-inner'">
      <slot v-if="isChecked" name="checkedChildren"></slot>
      <slot v-if="!isChecked" name="unCheckedChildren"></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'v-switch',
  data:()=>({
    prefix: 'ant-switch',
  }),
  props:{
    size: {
      type: String
    },
    checked: {
      default: false
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    isChecked() {
      return this.checked === this.trueValue;
    },
    wrapClasses() {
      let size = ['small'].indexOf(this.size) !== -1?this.size:'';

      return [
        this.prefix,
        {[`${this.prefix}-checked`]: this.isChecked},
        {[`${this.prefix}-disabled`]: this.disabled},
        {[`${this.prefix}-${size}`]: size}
      ]
    }
  },
  methods: {
    _toggle() {
      if (this.disabled) return;
      this.checked = this.isChecked?this.falseValue:this.trueValue;
      this.onChange(this.checked)
    }
  }
}

</script>
