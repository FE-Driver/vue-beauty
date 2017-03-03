<template lang="html">
  <span :class="wrapClasses" @click="_toggle">
    <span :class="prefix + '-inner'">
      <slot v-if="defaultValue" name="checkedChildren"></slot>
      <slot v-if="!defaultValue" name="unCheckedChildren"></slot>
    </span>
  </span>
</template>

<script lang="babel">
import emitter from '../../mixins/emitter';
export default {
  name: 'Switch',
  mixins: [emitter],
  data() {
    return {
      prefix: 'ant-switch',
      defaultValue: this.value
    }
  },
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
    },
    trueValue:{
      type: String
    },
    falseValue:{
      type: String
    }
  },
  computed: {
    wrapClasses () {
      let size = ['small'].indexOf(this.size) !== -1?this.size:'';

      return [
        this.prefix,
        {[`${this.prefix}-checked`]: this.defaultValue},
        {[`${this.prefix}-disabled`]: this.disabled},
        {[`${this.prefix}-${size}`]: size}
      ]
    }
  },
  watch: {
    value(val) {
      this.defaultValue = val;
    }
  },
  methods: {
    _toggle () {
      if (this.disabled) return;

      this.defaultValue = !this.defaultValue;
      this.$emit('input', this.defaultValue);
      this.$emit('change',this.defaultValue);
      this.dispatch('FormItem', 'form.change', [this.defaultValue]);
    }
  }
}

</script>