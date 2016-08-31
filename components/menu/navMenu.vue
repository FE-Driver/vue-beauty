<template lang="html">
  <ul class="ant-menu aside-container" v-for="item of data">
    <nav-item class="item" :item="item">
    </nav-item>
  </ul>
</template>

<script>
  import navItem from './navItem.vue'
  import { defaultProps } from '../../utils'

  export default {
    name: 'navMenu',
    components: {navItem},
    props: defaultProps({
      mode: 'vertical',
      data: {
        type: Array,
        required: true
      },
      onClick(){}
    }),

    data(){
      return {

      }
    }
  }
</script>

<!--<style lang="less">-->

<!--</style>-->
