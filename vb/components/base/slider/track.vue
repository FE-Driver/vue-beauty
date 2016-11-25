<template>
<div :class="className" :style="wrapStyle"></div>
</template>

<script>

export default {
  props: ['offset', 'length', 'included', 'className'],
  computed: {
    wrapStyle () {
      return {
        left: this.offset + '%',
        width: this.length + '%',
        visibility: this.included ? 'visible' : 'hidden'
      }
    }
  }
}

</script>
