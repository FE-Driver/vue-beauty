<template lang="html">
  <template v-if="hasSlot">
    <div :class="{[`${prefix}-nested-loading`]:spinning}">
      <spin-inner :size="size" :spinning="spinning" :tip="tip" :prefix="prefix"></spin-inner>
      <div :class="containerCls">
        <slot></slot>
      </div>
    </div>
  </template>
  <spin-inner v-else :size="size" :spinning="spinning" :tip="tip" :prefix="prefix"></spin-inner>
</template>

<script>
import spinInner from './spinInner'
import { defaultProps } from '../../utils'

export default {
  name: 'v-spin',
  data:()=>({
      prefix: 'ant-spin',
      hasSlot:false
  }),
  props: defaultProps({
      size: String,
      spinning: true,
      tip: String
  }),
  ready(){
    if(this._slotContents && this._slotContents.default){
      this.hasSlot = true;
    }
  },
  computed: {
    containerCls(){
      return [
        `${this.prefix}-container`,
        {[`${this.prefix}-blur`]: this.spinning}
      ]
    }
  },
  components:{spinInner}
}
</script>
