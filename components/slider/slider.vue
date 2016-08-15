<template>
<slider
  :prefix-cls="prefixCls"
  :tip-transition-name="tipTransitionName"
  :min="min"
  :max="max"
  :step="step"
  :marks="marks"
  :default-value="defaultValue"
  :value="value"
  :range="range"
  :included="included"
  :disabled="disabled"
  :on-change="onChange"
  :tip-formatter="tipFormatter"></slider>
</template>

<script>
import Slider from '../base/slider'
import { defaultProps, oneOfType } from '../../utils'

export default {
  props: defaultProps({
    prefixCls: 'ant-slider',
    tipTransitionName: 'zoom-down',
    min: 0,
    max: 100,
    step: 1,
    range: false,
    marks: {
      type: Object,
      default () {return {}}
    },
    defaultValue: oneOfType([Number, Array], 0),
    value: oneOfType([Number, Array]),
    included: true,
    disabled: false,
    onChange () {},
    tipFormatter: function (value) {return value}
  }),

  components: { Slider }
}

</script>
