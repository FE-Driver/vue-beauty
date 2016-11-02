<template>
<i :class="iconClasses">
  <slot></slot>
</i>
</template>

<script>

export default {
  name:'v-icon',
  data:()=>({
    prefix: 'anticon'
  }),
  props: {
    type: {
      type: String,
      require: true
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClasses () {
      return [
        this.prefix,
        `${this.prefix}-${this.type}`,
        {[`${this.prefix}-spin`]: this.spin}
      ]
    }
  }
}

</script>
