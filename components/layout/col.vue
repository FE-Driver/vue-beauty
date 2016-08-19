<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      span: String,
      offset: String
    },
    computed: {
      classes () {
        return [
          this.span ? `ant-col-${this.span}` : '',
          this.offset ? `ant-col-offset-${this.offset}` : ''
        ]
      }
    }
  }
</script>
