<template>
  <div data-show="true" :class="wrapClasses" v-if="show">
    <span class="ant-tag-text"><slot></slot></span>
    <i class="anticon anticon-cross" v-if="closable" @click="remove"></i>
  </div>
</template>
<style>

</style>
<script>
  export default{
    props: {
      color: {
        type: String
      },
      closable: {
        type: Boolean,
        default: false
      },
      onClose: {
        type: Function,
        default: () => {}
      },
      afterClose: {
        type: Function,
        default: () => {}
      }
    },
    data(){
      return {
        prefix: 'ant-tag',
        show: true
      }
    },
    computed: {
      wrapClasses () {
        return [
          this.prefix,
          {[`${this.prefix}-${this.color}`]: this.color}
        ]
      }
    },
    methods: {
      remove(){
        this.show = false;
      }
    }
  }
</script>
