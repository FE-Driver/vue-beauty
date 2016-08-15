<template>
<i :class="iconClasses">
  <slot></slot>
</i>
</template>

<script>
import { defaultProps } from '../../utils'
import cx from 'classnames'

export default {
  props: defaultProps({
    className: '',
    type: {
      type: String,
      require: true
    }
  }),

  computed: {
    iconClasses () {
      return cx({
        [this.className]: !!this.className,
        [`anticon`]: 1,
        [`anticon-${this.type}`]: this.type
      })
    }
  }
}

</script>
