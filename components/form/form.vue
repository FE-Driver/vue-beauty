<template>
    <form :class="wrapClasses">
        <slot></slot>
    </form>
</template>

<script>
import { defaultProps } from '../../utils'
import cx from 'classnames'

export default {
  data:()=>({
    prefix: 'ant-form',
  }),
  props: defaultProps({
    direction: 'inline'
  }),
  computed: {
    wrapClasses () {
      return cx({
        [`${this.prefix}`]: true,
        [`${this.prefix}-${this.direction}`]: true
      })
    }
  }
}

</script>