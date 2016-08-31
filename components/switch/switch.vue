<template lang="html">
  <span :class="wrapClasses" @click="_toggle">
    <span :class="prefix + '-inner'">
      <slot v-if="checked" name="checkedChildren"></slot>
      <slot v-if="!checked" name="unCheckedChildren"></slot>
    </span>
  </span>
</template>

<script>
export default {
  data:()=>({
    prefix: 'ant-switch',
  }),
  props:{
    size: {
      type: String
    },
    checked: {
      type: Boolean,
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
    wrapClasses () {
      let size = ['small'].indexOf(this.size) !== -1?this.size:'';

      return [
        this.prefix,
        {[`${this.prefix}-checked`]: this.checked},
        {[`${this.prefix}-disabled`]: this.disabled},
        {[`${this.prefix}-${size}`]: size}
      ]
    }
  },
  methods: {
    _toggle () {
      if (this.disabled) return;
      this.checked = !this.checked
      this.onChange(this.checked)
    }
  }
}

</script>
