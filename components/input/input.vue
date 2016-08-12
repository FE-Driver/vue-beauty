<template>
    <span :class="wrapClasses">
      <input v-if="type ==='text'" type="text" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="value"/>
      <textarea v-if="type ==='textarea'" type="textarea" :class="inpClasses" :placeholder="placeholder" :value="value"></textarea>
    </span>
</template>

<script>
import { defaultProps, oneOfType } from '../../utils'
import cx from 'classnames'

export default {
  data:()=>({
    prefix: 'ant-input',
  }),
  props: defaultProps({
    type: 'text',
    id: oneOfType([Number, String]),
    value: null,
    placeholder:'',
    defaultValue: null,
    size: 'default',
    disabled: false,
    onPressEnter () {},
    autosize: oneOfType([Boolean, Object], false)
  }),
  computed: {
    wrapClasses () {
      return cx({
        [`${this.prefix}-wrapper`]: true
      })
    },
    inpClasses () {
      const size = {small:'sm',large:'lg'}[this.size];

      return cx({
        [this.prefix]: true,
        [`${this.prefix}-${size}`]: size
      })
    }
  }
}

</script>
