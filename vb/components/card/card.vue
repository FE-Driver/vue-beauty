<template lang="html">

  <div class="ant-card" :class="{'ant-card-bordered': bordered}">
    <div class="ant-card-head" v-if="title"><h3 class="ant-card-head-title">{{title}}</h3></div>
    <template v-if="extra">
      <div class="ant-card-extra">
        <slot name="extra"></slot>
      </div>
    </template>
    <div class="ant-card-body" :style="bodyStyle"><slot></slot></div>
  </div>

</template>

<script>
export default {
  name: 'v-card',
  data:()=>({
      prefix: 'ant-card',
      extra: false,
  }),
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true
    },
    bodyStyle: Object,
  },
  ready(){
    if(this._slotContents && this._slotContents.extra){
      this.extra = true;
    }
  },
}
</script>
