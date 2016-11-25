<template>
<div
  :class="sliderClasses"
  @touchstart="_onTouchStart"
  @mousedown="_onMouseDown">
  <handle
    :class-name="prefixCls + '-handle'"
    :no-tip="isNoTip"
    :tip-transition-name="tipTransitionName"
    :tip-formatter="tipFormatter"
    :offset="upperOffset"
    :value="upperBound"
    :dragging="handle === 'upperBound'"></handle>
  <handle
    v-if="range"
    :class-name="prefixCls + '-handle'"
    :no-tip="isNoTip"
    :tip-transition-name="tipTransitionName"
    :tip-formatter="tipFormatter"
    :offset="lowerOffset"
    :value="lowerBound"
    :dragging="handle === 'lowerBound'"></handle>
  <track
    :class="prefixCls + '-track'"
    :included="included"
    :offset="lowerOffset"
    :length="upperOffset - lowerOffset"></track>
  <dots
    :prefix-cls="prefixCls"
    :marks="marks"
    :dots="dots"
    :step="step"
    :included="included"
    :lower-bound="lowerBound"
    :upper-bound="upperBound"
    :max="max"
    :min="min"></dots>
  <marks
    :class="prefixCls + '-mark'"
    :marks="marks"
    :included="included"
    :lower-bound="lowerBound"
    :upper-bound="upperBound"
    :max="max"
    :min="min"></marks>
  <slot></slot>
</div>
</template>

<script>
import { defaultProps, oneOfType, addEventListener } from '../../../utils'
import Track from './track.vue'
import Handle from './handle.vue'
import Dots from './dots.vue'
import Marks from './marks.vue'


const isNotTouchEvent = function (e) {
  return e.touches.length > 1 ||
    (e.type.toLowerCase() === 'touchend' && e.touches.length > 0)
}

const getTouchPosition = function (e) {
  return e.touches[0].pageX
}

const getMousePosition = function (e) {
  return e.pageX
}

const pauseEvent = function (e) {
  e.stopPropagation()
  e.preventDefault()
}

export default {
  props: defaultProps({
    prefixCls: 'vc-slider',
    className: '',
    tipTransitionName: '',
    min: 0,
    max: 100,
    step: 1,
    value: oneOfType([Number, Array]),
    defaultValue: oneOfType([Number, Array], 0),
    marks: {},
    included: true,
    disabled: false,
    dots: false,
    range: false,
    tipTransitionName: String,
    tipFormatter: function (value) {return value},
    onBeforeChange () {},
    onChange () {},
    onAfterChange () {}
  }),

  data () {
    return {
      handle: null,
      recent: null,
      lowerBound: null,
      upperBound: null
    }
  },

  components: { Track, Handle, Dots, Marks },

  compiled () {
    const {range, min, max} = this.$data
    const initialValue = range ? [min, min] : min
    const defaultValue = this.defaultValue != null ? this.defaultValue : initialValue
    const value = this.value != null ? this.value : defaultValue

    let upperBound
    let lowerBound
    if (this.range) {
      lowerBound = this._trimAlignValue(value[0])
      upperBound = this._trimAlignValue(value[1])
    } else {
      upperBound = this._trimAlignValue(value)
    }

    let recent;
    if (this.range && upperBound === lowerBound) {
      if (lowerBound === max) {
        recent = 'lowerBound'
      }
      if (upperBound === min) {
        recent = 'upperBound'
      }
    } else {
      recent = 'upperBound'
    }

    this.recent = recent,
    this.upperBound = upperBound,
    this.lowerBound = (lowerBound || min)
  },

  computed: {
    sliderClasses () {
      return [
        this.prefixCls,
        {[this.prefixCls + '-disabled']: this.disabled},
        {[this.className]: !!this.className}
      ]
    },

    isNoTip () {
      return (this.step === null) && !this.tipFormatter
    },

    upperOffset () {
      return this._calcOffset(this.upperBound)
    },

    lowerOffset () {
      return this._calcOffset(this.lowerBound)
    }
  },

  methods: {
    _onChange (handle, value) {
      const isNotControlled = this.value == null
      if (isNotControlled) {
        this.$set(handle, value)
      }

      const data = {
        upperBound: this.upperBound,
        lowerBound: this.lowerBound
      }
      data[handle] = value
      const changedValue = this.range ? [data.lowerBound, data.upperBound] : data.upperBound
      this.onChange(changedValue)
    },

    _onTouchStart (e) {
      if (this.disabled) {
        return
      }
      if (isNotTouchEvent(e)) {
        return
      }

      const position = getTouchPosition(e)
      this._onStart(position)
      this._addDocumentEvents('touch')
      pauseEvent(e)
    },

    _onTouchMove (e) {
      if (isNotTouchEvent(e)) {
        this._end('touch')
        return
      }

      const position = getTouchPosition(e)
      this._onMove(e, position)
    },

    _onMouseDown (e) {
      if (this.disabled) {
        return
      }
      const position = getMousePosition(e)
      this._onStart(position)
      this._addDocumentEvents('mouse')
      pauseEvent(e)
    },

    _onMouseMove (e) {
      const position = getMousePosition(e)
      this._onMove(e, position)
    },

    _onStart (position) {
      this.onBeforeChange(this._getValue())

      const value = this._calcValueByPos(position)
      this.startValue = value
      this.startPosition = position

      const {upperBound, lowerBound} = this

      let valueNeedChanging = 'upperBound'
      if (this.range) {
        const isLowerBoundCloser = Math.abs(upperBound - value) > Math.abs(lowerBound - value)
        if (isLowerBoundCloser) {
          valueNeedChanging = 'lowerBound'
        }

        const isAtTheSamePoint = (upperBound === lowerBound)
        if (isAtTheSamePoint) {
          valueNeedChanging = this.recent
        }

        if (isAtTheSamePoint && (value !== upperBound)) {
          valueNeedChanging = value < upperBound ? 'lowerBound' : 'upperBound'
        }
      }

      this.handle = valueNeedChanging
      this.recent = valueNeedChanging

      const oldValue = this[valueNeedChanging]
      if (value === oldValue) return

      this._onChange(valueNeedChanging, value)
    },

    _onMove (e, position) {
      pauseEvent(e)
      const diffPosition = position - this.startPosition
      const diffValue = diffPosition / this._getSliderLength() * (this.max - this.min)

      const value = this._trimAlignValue(this.startValue + diffValue)
      const oldValue = this[this.handle]
      if (value === oldValue) return

      this._onChange(this.handle, value)
    },

    _addDocumentEvents (type) {
      if (type === 'touch') {
        // just work for chrome iOS Safari and Android Browser
        this.onTouchMoveListener = addEventListener(document, 'touchmove', this._onTouchMove.bind(this));
        this.onTouchUpListener = addEventListener(document, 'touchend', this._end.bind(this, 'touch'));
      } else if (type === 'mouse') {
        this.onMouseMoveListener = addEventListener(document, 'mousemove', this._onMouseMove.bind(this));
        this.onMouseUpListener = addEventListener(document, 'mouseup', this._end.bind(this, 'mouse'));
      }
    },

    _removeEvents (type) {
      if (type === 'touch') {
        this.onTouchMoveListener.remove();
        this.onTouchUpListener.remove();
      } else if (type === 'mouse') {
        this.onMouseMoveListener.remove();
        this.onMouseUpListener.remove();
      }
    },

    _end (type) {
      this._removeEvents(type);
      this.onAfterChange(this._getValue())
      this.handle = null
    },

    _getValue () {
      const {lowerBound, upperBound} = this
      return this.range ? [lowerBound, upperBound] : upperBound
    },

    _getSliderLength () {
      const slider = this.$el
      if (!slider) {
        return 0
      }

      return slider.clientWidth
    },

    _getSliderStart () {
      const slider = this.$el
      const rect = slider.getBoundingClientRect()

      return rect.left
    },

    _getPrecision () {
      const stepString = this.step.toString()
      let precision = 0
      if (stepString.indexOf('.') >= 0) {
        precision = stepString.length - stepString.indexOf('.') - 1
      }
      return precision
    },

    _trimAlignValue (v) {
      const {handle, lowerBound, upperBound, marks, step, min, max} = this

      let val = v
      if (val <= min) {
        val = min
      }
      if (val >= max) {
        val = max
      }
      if (handle === 'upperBound' && val <= lowerBound) {
        val = lowerBound
      }
      if (handle === 'lowerBound' && val >= upperBound) {
        val = upperBound
      }

      const points = Object.keys(marks).map(parseFloat)
      if (step !== null) {
        const closestStep = Math.round(val / step) * step
        points.push(closestStep)
      }

      const diffs = points.map((point) => Math.abs(val - point))
      const closestPoint = points[diffs.indexOf(Math.min.apply(Math, diffs))]

      return step !== null ? parseFloat(closestPoint.toFixed(this._getPrecision())) : closestPoint
    },

    _calcOffset (value) {
      const {min, max} = this
      const ratio = (value - min) / (max - min)
      return ratio * 100
    },

    _calcValue (offset) {
      const {min, max} = this
      const ratio = offset / this._getSliderLength()
      return ratio * (max - min) + min
    },

    _calcValueByPos (position) {
      const pixelOffset = position - this._getSliderStart()
      const nextValue = this._trimAlignValue(this._calcValue(pixelOffset))
      return nextValue
    }
  }
}

</script>
