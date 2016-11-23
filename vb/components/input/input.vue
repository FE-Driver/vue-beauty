<template>
    <span :class="wrapClasses">
      <span v-if="hasbefore" class="ant-input-group-addon"><slot name="before"><slot></span>
      <textarea v-if="type ==='textarea'" type="textarea" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" v-model="value" :debounce="debounce" @blur="blur"></textarea>
      <input v-else :type="type" :class="inpClasses" :placeholder="placeholder" :disabled="disabled" v-model="value" autocomplete="off" @blur="blur" :debounce="debounce"/>
      <span v-if="hasafter" class="ant-input-group-addon"><slot name="after"></slot></span>
    </span>
</template>

<script>
import { defaultProps, oneOfType } from '../../utils'

export default {
  name:'v-input',
  data:()=>({
    prefix: 'ant-input',
    hasslot:false,
    hasbefore:false,
    hasafter:false
  }),
  props: defaultProps({
    debounce: 0,
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
      return [
        `${this.prefix}-wrapper`,
        {[`${this.prefix}-group`]: this.hasslot}
      ]
    },
    inpClasses () {
      const size = {small:'sm',large:'lg'}[this.size];

      return [
        this.prefix,
        {[`${this.prefix}-${size}`]: size}
      ]
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

  },
  methods: {
    blur(){
      this.$emit('blur',this.value)
    }
  }
}

</script>
