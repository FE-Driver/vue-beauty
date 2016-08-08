<template lang="html">

  <div :class="wrapClasses" :style="{'width': tailWidth}">
    <div class="ant-steps-tail" v-if="!stepLast"><i></i></div>
    <div class="ant-steps-head">
      <div class="ant-steps-head-inner">
        <span v-if="!icon && status !== 'finish'" class="ant-steps-icon">{{stepNumber}}</span>
        <span v-else :class="'ant-steps-icon anticon anticon-' + iconName"></span>
      </div>
    </div>

    <div class="ant-steps-main" :style="{'maxWidth': maxDescriptionWidth}">
      <div class="ant-steps-title">{{title}}</div>
      <div v-if="description" class="ant-steps-description">{{description}}</div>
    </div>

  </div>

</template>

<script>

import cx from 'classnames'

export default {
  props: {
    status: String,
    title: String,
    description: String,
    icon: String,
  },
  data: function () {
    return {
      stepLast: Boolean,
      stepNumber: 1,
      iconPrefix: '',
      maxDescriptionWidth: '',
      tailWidth: String,
      rootStatus: false
    }
  },
  computed: {
    iconName () {
      return this.icon ? this.icon : 'check'
    },
    wrapClasses () {
      return cx({
        ['ant-steps-item']: 1,
        ['ant-steps-item-last']: this.stepLast,
        [`ant-steps-status-${this.status}`]: 1,
        [`ant-steps-next-${this.rootStatus}`]: this.rootStatus,
        ['ant-steps-custom']: this.icon
      })
    }
  }
}
</script>
