<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'vCol',
    props: {
      span: [String, Number],
      offset: [String, Number],
      push:[String, Number],
      pull:[String, Number],
      order:[String, Number]
    },
    computed: {
      classes () {
        return [
          this.span ? `ant-col-${this.span}` : '',
          this.offset ? `ant-col-offset-${this.offset}` : '',
          this.push ? `ant-col-push-${this.push}` : '',
          this.pull ? `ant-col-pull-${this.pull}` : '',
          this.order ? `ant-col-order-${this.order}` : '',
        ]
      }
    }
  }
</script>
