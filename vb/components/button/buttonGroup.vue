<template lang="html">

    <div :class="wrapClasses">
        <slot></slot>
    </div>

</template>

<script>
export default {
  name: 'vButtonGroup',
  data:()=>({
    prefix: 'ant-btn-group',
  }),
  props: {
    size: String
  },
  computed: {
    wrapClasses () {
      const size = {small:'sm',large:'lg'}[this.size];
      
      return[
        this.prefix,
        {[`${this.prefix}-${size}`]: size}
      ]
    }
  },
}
</script>