<template>
<div v-if="noTip"
  :class="className"
  :style="{left: offset + '%'}"
  @mouseup="_showTooltip"
  @mouseenter="_showTooltip"
  @mouseleave="_hideTooltip"></div>
<div v-else
     v-tooltip='tipValue'
     :class="className"
     :style="{left: offset + '%'}"
     @mouseup="_showTooltip"
     @mouseenter="_showTooltip"
     @mouseleave="_hideTooltip"></div>
</template>

<script>
import vTooltip from '../../../directive/tooltip.js'

export default {
  props: ['className', 'offset', 'tipTransitionName',
    'tipFormatter', 'value', 'dragging', 'noTip'],

  directive: { vTooltip },

  data () {
    return {
      isTooltipVisible: false
    }
  },

  computed: {
    tipValue () {
      return this.tipFormatter ? this.tipFormatter(this.value) : this.value
    }
  },

  methods: {
    _showTooltip () {
      this.isTooltipVisible = true
    },

    _hideTooltip () {
      this.isTooltipVisible = false
    }
  }
}
</script>
