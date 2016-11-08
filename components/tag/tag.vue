<template>
  <div v-if="show" :class="wrapClasses" transition="fade">
    <span class="ant-tag-text"><slot></slot></span>
    <i class="anticon anticon-cross" v-if="closable" @click="remove"></i>
  </div>
</template>
<style>

</style>
<script>
  export default{
    name: 'v-tag',
    props: {
      color: {
        type: String
      },
      closable: {
        type: Boolean,
        default: false
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
        this.$emit('close');
      }
    }
  }
</script>
