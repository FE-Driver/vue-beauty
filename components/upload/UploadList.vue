<template>
<div :class="prefixCls + '-list'">
  <div v-for="file in items" :class="prefixCls + '-list-item'" :key="file.uid">
    <v-icon v-if="file.status === 'done'" type="check" :class="prefixCls + '-success-icon'"></v-icon>
    <v-icon v-if="file.status !== 'done'" type="loading"></v-icon>

    <a v-if="file.url" :class="prefixCls + '-item-name'" :href="file.url" target="_blank">{{file.name}}</a>
    <b v-if="!file.url" :class="prefixCls + '-item-name'">{{file.name}}</b>

    <v-icon type="cross" @click="_handleClose(file)"></v-icon>
  </div>
</div>
</template>

<script>
import { defaultProps } from '../../utils'
import vIcon from '../iconfont'

export default {
  props: defaultProps({
    prefixCls: 'ant-upload',

    items: [],
    onRemove: () => {}
  }),

  components: { vIcon },

  methods: {
    _handleClose (file) {
      this.onRemove(file)
    }
  }
}

</script>
