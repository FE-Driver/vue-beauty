<template lang="html">

<div :class="wrapClasses" >
  <slot></slot>
</div>

</template>

<script>
import cx from 'classnames'

export default {
  data:()=>({
    prefix: 'ant-btn-group',
  }),
  props: {
    size: String
  },
  computed: {
    wrapClasses () {
      const size = {small:'sm',large:'lg'}[this.size];
      
      return cx({
        [this.prefix]: true,
        [`${this.prefix}-${size}`]: size
      })
    }
  },
}
</script>

<style lang="css">
</style>
