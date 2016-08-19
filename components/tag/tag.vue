<template>
  <!--<button type="button" class="ant-btn ant-btn-dashed ant-btn-sm" v-if="button">-->
  <!--<span>+ 添加标签</span>-->
  <!--</button>-->
  <div class="ant-tag" :class="[wrapClasses]" transition='ant-tag-zoom' v-show='closing'>
    <span class="ant-tag-text">{{ title }}</span>
    <i class="anticon anticon-cross" v-if="closable" @click="closeTag"></i>
  </div>
</template>
<style>

</style>
<script>
  export default{
    props: {
      color: {
        type: String,
        default: 'default'
      },
      title: String,
      closable: {
        type: Boolean,
        default: false
      },
      onClose: {
        type: Function,
        default: () => {
        }
      },
      afterClose: {
        type: Function,
        default: () => {
        }
      }
    },
    data(){
      return {
        closing: true,
      }
    },
    transitions: {
      'ant-tag-zoom' : {
        beforeEnter: function (el) {},
        enter: function (el) {},
        afterEnter: function (el) {},
        enterCancelled: function (el) {},
        beforeLeave: function (el) {
          this.onClose()
        },
        leave: function (el) {
          this.$el.remove()
          this.afterClose()
        },
        afterLeave: function (el) {},
        leaveCancelled: function (el) {}
      }
    },
    computed: {
      wrapClasses () {
        return 'ant-tag-' + this.color
      }
    },
    methods: {
      closeTag(){
        var self = this
        self.closing = false
      }
    }
  }
</script>
