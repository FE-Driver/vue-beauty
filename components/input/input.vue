<template>
    <span :class="[wrapClasses,{'ant-input-group':hasslot}]">
      <span v-if="hasbefore" class="ant-input-group-addon"><slot name="before"><slot></span>
      <textarea v-if="type ==='textarea'" type="textarea" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="value"></textarea>
      <input v-else :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" :value="value"/>
      <span v-if="hasafter" class="ant-input-group-addon"><slot name="after"></slot></span>
    </span>
</template>

<script>
import { defaultProps, oneOfType } from '../../utils'
import cx from 'classnames'

export default {
  data:()=>({
    prefix: 'ant-input',
    hasslot:false,
    hasbefore:false,
    hasafter:false
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
  },
  ready(){
      if(this._slotContents){

          this.hasslot=true

          if(this._slotContents.before){

              this.hasbefore=true

          }

          if(this._slotContents.after){

              this.hasafter=true

          }
      }

  }

}

</script>
