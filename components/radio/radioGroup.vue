<template>
<div :class="wrapClasses">
  <v-radio v-for="radio in radios" :type="type" :class-name="radioClasses" :disabled="radio.disabled" :value="radio.value" :on-change="_onRadioChange.bind(radio, $index)" :checked="value == radio.value"><span>{{radio.name}}</span></v-radio>
</div>
</template>

<script>
import { defaultProps, oneOfType } from '../../utils'
import vRadio from './radio.vue'

export default {
  name: 'v-radio-group',
  props: defaultProps({
    prefixCls: 'ant-radio-group',
    type: 'radio', // or button
    value: oneOfType([String, Number, Boolean]),
    defaultValue: oneOfType([String, Number, Boolean]),
    radios: [],
    disabled:false,
    size: String,
    onChange: () => {}
  }),

  components: { vRadio },

  computed: {
    wrapClasses () {
        let size = ['small','large'].indexOf(this.size) !== -1?this.size:'';
 
        return [
          this.prefixCls,
          {[`${this.prefixCls}-${size}`]: size}
        ]
    },
    radioClasses () {
        return this.type === 'button'?'ant-radio-button-wrapper':'ant-radio-wrapper';
    }
  },

  created () {
    if (this.value == null) {
      this.value = this.defaultValue
    }
    if(this.disabled){
        for(let radio of this.radios){
            if(radio.hasOwnProperty('disabled') && radio.disabled === false) continue;
            radio.disabled = true
        }
    }
    
  },

  methods: {
    _onRadioChange (index, e) {
      e.target.name = this.radios[index].name
      this.value = e.target.value
      this.onChange(e)
    }
  }
}

</script>
