<template lang="html">

<div class="ant-btn-group" :class="{'ant-btn-group-'+s: size}">
  <slot></slot>
</div>

</template>

<script>
export default {
  props: {
    size: String
  },
  computed: {
    s: function () {
      if (this.size === 'large') {
        return lg
      }else if (this.size === 'small') {
        return sm
      }
    }
  },
}
</script>

<style lang="css">
</style>
