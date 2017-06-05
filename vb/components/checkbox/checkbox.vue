<template lang="html">
  <label class="ant-checkbox-wrapper" >
    <span class="ant-checkbox" :class="{'ant-checkbox-checked': checked === trueValue, 'ant-checkbox-disabled': disabled}">
      <span class="ant-checkbox-inner"></span>
      <input type="checkbox" class="ant-checkbox-input" v-model="checked" :disabled="disabled"  :true-value="trueValue" :false-value="falseValue">
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
    value: [ String,Number ],
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  watch: {
    checked(){
      this.onChange(this)
    }
  }
}
</script>
