<template lang="html">
  <label class="ant-checkbox-wrapper" >
    <span class="ant-checkbox" :class="{'ant-checkbox-checked': checked, 'ant-checkbox-disabled': disabled}" @click="_check">
      <span class="ant-checkbox-inner"></span>
      <input type="checkbox" class="ant-checkbox-input">
    </span>
    <span 
      v-if="_slotContents && _slotContents.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name:'v-checkbox',
  props: {
    checked: {
      type: Boolean,
      // twoWay: true,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    value: String
  },
  methods: {
    _check () {
      if (this.disabled) return;
      this.checked = !this.checked
      this.onChange(this)
    }
  }
}
</script>
