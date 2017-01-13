<template lang="html">
  <span :class="wrapClasses" @click="_toggle">
    <span :class="prefix + '-inner'">
      <slot v-if="value" name="checkedChildren"></slot>
      <slot v-if="!value" name="unCheckedChildren"></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'vSwitch',
  data:()=>({
    prefix: 'ant-switch',
  }),
  props:{
    size: {
      type: String
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapClasses () {
      let size = ['small'].indexOf(this.size) !== -1?this.size:'';

      return [
        this.prefix,
        {[`${this.prefix}-checked`]: this.value},
        {[`${this.prefix}-disabled`]: this.disabled},
        {[`${this.prefix}-${size}`]: size}
      ]
    }
  },
  methods: {
    _toggle () {
      if (this.disabled) return;
      this.$emit('input', !this.value)
    }
  }
}

</script>