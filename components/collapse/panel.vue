<template lang="html">

  <div class="ant-collapse-item" :class="{'ant-collapse-item-active': open}">
    <div class="ant-collapse-header" @click="handleOpen"><i class="arrow"></i>{{header}}</div>
    <div class="ant-collapse-content" :class="[open ? 'ant-collapse-content-active': 'ant-collapse-content-inactive']" :style="{height: h}">
      <div class="ant-collapse-content-box">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    key: String,
    header: String,
  },
  data(){
    return{
      open: false
    }
  },
  ready(){
    let keyArray = this.$parent.activeKey
    if (keyArray){
      for (let key of keyArray) {
        if (this.key == key) {
          this.open = true
        }
      }
    }else{
      if (this.$parent.defaultActiveKey && this.$parent.defaultActiveKey == this.key) {
        this.open = true
      }
    }
  },
  computed: {
    h: function () {
      let h
      if (this.open) {
        h=this.$el.children[1].children[0].clientHeight+'px'
      }else{
        h= '0'
      }
      return h
    },
  },
  methods: {
    handleOpen() {
      this.open = !this.open
      if (this.open) {
        this.$dispatch('child-open', this.key)
      }
    }
  }
}
</script>
