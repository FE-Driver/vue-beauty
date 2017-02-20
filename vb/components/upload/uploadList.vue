<template>
<div :class="prefixCls + '-list'">
  <div v-for="file in items" :class="prefixCls + '-list-item'" :key="file.uid">
    <div :class="prefixCls + '-list-item-info'">
      <i v-if="file.status === 'done'" class="anticon anticon-paper-clip"></i>
      <i v-else class="anticon anticon-spin anticon-loading"></i>
      <a v-if="file.url" :class="prefixCls + '-list-item-name'" :href="file.url" target="_blank" rel="noopener noreferrer">{{file.name}}</a>
      <b v-else :class="prefixCls + '-list-item-name'">{{file.name}}</b>
      <i class="anticon anticon-cross" @click="_handleClose(file)"></i>
    </div>
  </div>
</div>
</template>

<script lang="babel">
export default {
  props: {
    prefixCls: {
      type: String,
      default: 'ant-upload'
    },
    items: {
      type: Array,
      default: ()=> []
    },
    onRemove: {
      type: Function,
      default: ()=> {}
    }
  },
  methods: {
    _handleClose (file) {
      this.onRemove(file)
    }
  }
}
</script>