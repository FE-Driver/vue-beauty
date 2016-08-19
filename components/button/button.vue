<template lang="html">
  <button :type="htmlType" :class="['ant-btn', type, size, shape, {'ant-btn-loading': loading}, {'ant-btn-clicked': clicked}]" disabled="{{disabled}}" @click="_click">
    <i class="anticon anticon-loading" v-if="loading"></i>
    <i class="anticon anticon-{{icon}}" v-if="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  data:()=>({
    clicked: false,
    clickTimer: null
  }),
  props: {
    type: {
      type: String,
      coerce: function (val) {
        return `ant-btn-${val}`
      }
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    icon: String,
    shape: {
      type: String,
      coerce: function (val) {
        return `ant-btn-${val}`
      }
    },
    size: {
      type: String,
      coerce: function (val) {
        let sizeClass
        switch(val)
        {
          case 'large':
            sizeClass = 'ant-btn-lg'
            break;
          case 'small':
            sizeClass = 'ant-btn-sm'
            break;
          default:
            sizeClass = ''
        }
        return sizeClass
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    _click(){
      this.clicked = true;

      if(this.clickTimer) clearTimeout(this.clickTimer);

      this.clickTimer = setTimeout(()=>this.clicked = false,500);
    }
  }
}
</script>
