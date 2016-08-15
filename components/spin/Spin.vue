<template lang="html">
  <template v-if="hasSlot">
    <div :class="{[`${prefix}-nested-loading`]:spinning}">
      <spin-inner :size="size" :spinning="spinning" :tip="tip" :prefix="prefix"></spin-inner>
      <div class="{{prefix}}-container">
        <slot></slot>
      </div>
    </div>
  </template>
  <spin-inner v-else :size="size" :spinning="spinning" :tip="tip" :prefix="prefix"></spin-inner>
</template>

<script>
import spinInner from './spinInner'
import { defaultProps } from '../../utils'
import cx from 'classnames'

export default {
  data:()=>({
      prefix: 'ant-spin',
  }),
  props: defaultProps({
      size: String,
      spinning: true,
      tip: String,
      hasSlot:false
  }),
  components:{spinInner}
}
</script>
