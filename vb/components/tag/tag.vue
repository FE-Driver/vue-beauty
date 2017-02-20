<template>
  <transition name="fade">
    <div v-if="show" :class="wrapClasses" :style="wrapStyle">
      <span class="ant-tag-text"><slot></slot></span>
      <i class="anticon anticon-cross" v-if="closable" @click="remove"></i>
    </div>
  </transition>
</template>

<style>

</style>

<script lang="babel">
  export default{
    name: 'Tag',
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
      wrapClasses() {
        return [
          this.prefix,
          {[`${this.prefix}-has-color`]: this.color},
          {[`${this.prefix}-${this.color}`]: this.color}
        ]
      },
      wrapStyle() {
        return this.color && this.color.startsWith('#')?{
          backgroundColor: this.color
        }:{}
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
