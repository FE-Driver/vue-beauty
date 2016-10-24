<template lang="html">
  <li :class="itemCls" :style="itemSty" @click="select">
    <i v-if="icon" class="anticon anticon-{{icon}}"></i>
    <a :href="'#!'+link" style="display:inline" v-if="link"><slot></slot></a>
    <slot v-else></slot>
  </li>
</template>

<script>
export default {
  name:'v-menu-item',
  data:()=>({
    level:0,
    mode: 'vertical'
  }),
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    icon: String,
    link: String
  },
  ready(){
    this.setLevelAndMode();
    this.$on('modeChange',val=>{
      this.mode = val
    })
    this.$on('cancelSelected',ori=>{
      if(this === ori) return;
      this.selected = false;
    })
  },
  computed:{
    itemCls(){
      return [
        'ant-menu-item',
        {
          'ant-menu-item-disabled': this.disabled,
          'ant-menu-item-selected': this.selected
        }
      ]
    },
    itemSty(){
      return this.mode == 'inline'?{
          paddingLeft: 24 * this.level + 'px'
        }:{}; 
    }
  },
  methods: {
    setLevelAndMode(){
      let index = 1;
      let parent = this.$parent;

      while (parent.$options.name !== 'v-menu') {
        if(parent.$options.name == 'v-sub-menu') index++;
        parent = parent.$parent;
      }
      this.mode = parent.mode;
      this.level = index;
    },
    select(){
      if(this.selected) return;
      this.selected = true;
      this.$dispatch('nodeSelected',this);
    }
  }
}
</script>