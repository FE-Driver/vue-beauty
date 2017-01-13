<template>
  <button :type="htmlType" :class="btnClassObj" :disabled="disabled" @click="handleClick">
    <i class="anticon anticon-spin anticon-loading" v-if="loading"></i>
    <i v-bind:class="'anticon anticon-' +icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'vButton',
  data:()=>({
    clicked: false,
    clickTimer: null
  }),
  props: {
    type: String,
    htmlType: {
      type: String,
      default: 'button'
    },
    icon: String,
    shape: String,
    size: String,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    btnClassObj() {
      let {type, size, shape, loading, clicked} = this
      let btnClass = {}
      let tmpSize = "";
      if(size == "small"){
        tmpSize = "sm";
      } else if(size == "large"){
        tmpSize = "lg";
      }
      btnClass['ant-btn'] = true
      btnClass['ant-btn-' + type] = type
      btnClass['ant-btn-' + tmpSize] = size
      btnClass['ant-btn-' + shape] = shape
      btnClass['ant-btn-loading'] = loading
      btnClass['ant-btn-' + clicked] = clicked

      return btnClass
    }
    
  },
  methods:{
    handleClick(evt){
      this.clicked = true;
      if(this.clickTimer) clearTimeout(this.clickTimer);
      this.clickTimer = setTimeout(()=>this.clicked = false,500);
      this.$emit('click', evt);
    }
  }
}
</script>