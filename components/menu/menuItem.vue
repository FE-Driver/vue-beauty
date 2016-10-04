<template lang="html">
  <li class="ant-menu-item" :class="{'ant-menu-item-disabled': disabled}" :style="itemSty">
    <i v-if="icon" class="anticon anticon-${icon}"></i><slot></slot>
  </li>
</template>

<script>
export default {
  name:'vb-menu-item',
  data:()=>({
    level:0,
    mode: 'vertical'
  }),
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String
  },
  ready(){
    this.setLevelAndMode();
  },
  computed:{
    itemSty(){
      return this.mode == 'inline'?{
          paddingLeft: 24 * this.level + 'px'
        }: '';
    }
  },
  methods: {
    setLevelAndMode(){
      let index = 1;
      let parent = this.$parent;

      while (parent.$options.name !== 'vb-menu') {
        if(parent.$options.name == 'vb-sub-menu') index++;
        parent = parent.$parent;
      }
      this.mode = parent.mode;
      this.level = index;
    }
  }
}
</script>