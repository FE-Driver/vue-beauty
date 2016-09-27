<template>
    <form :class="wrapClasses">
        <slot></slot>
    </form>
</template>

<script>
import { defaultProps } from '../../utils'

export default {
  name:'v-form',
  data:()=>({
    prefix: 'ant-form',
  }),
  props: defaultProps({
    direction: 'inline'
  }),
  computed: {
    wrapClasses () {
      return `${this.prefix} ${this.prefix}-${this.direction}`
    }
  }
}

</script>