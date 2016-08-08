<template lang="html">

  <button type="button" :class="['ant-btn', type, size, shape, {'ant-btn-loading': loading}]" disabled="{{disabled}}">
    <i class="anticon anticon-loading" v-if="loading"></i>
    <i class="anticon anticon-{{icon}}" v-if="icon"></i>
    <slot></slot>
  </button>

</template>
type
<script>
export default {
  props: {
    type: {
      type: String,
      coerce: function (val) {
        return `ant-btn-${val}`
      }
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
  data: function () {
    return {
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
