<template>
<div :class="className">
  <span
    v-for="item in marksArr"
    :class="item.className"
    :style="item.style"
    :key="item.point">
   {{marks[item.point]}}
  </span>
</div>
</template>

<script>
import { cx } from '../../../utils'

export default {
  props: ['className', 'marks', 'included', 'upperBound', 'lowerBound', 'max', 'min'],

  computed: {
    marksKeys () {
      return Object.keys(this.marks)
    },
    marksArr () {
      return this.marksKeys.map(parseFloat).map(point => {
        let res = {}
        res.point = point
        res.isActived = (!this.included && point === this.upperBound) ||
            (this.included && point <= this.upperBound && point >= this.lowerBound)
        res.className = cx({
          [`${this.className} + '-text'`]: true,
          [`${this.className} + '-text-active'`]: res.isActived,
        })
        res.style = {width: this.markWidth + '%', left: (point - this.min) / this.range * 100 - this.markWidth / 2 + '%'}
      })
    },
    markWidth () {
      return (100 / (this.marksKeys.length - 1)) * 0.9
    }
  }
}

</script>
