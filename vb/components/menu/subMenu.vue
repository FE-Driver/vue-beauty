<template lang="html">

  <li :class="subMenuCls" @mouseover="mouseTriggerOpen(true)" @mouseout="mouseTriggerOpen(false)">
    <div :class="titleCls" @click="clickTriggerOpen" :style="titleSty" :title="title">
      <span>
        <i v-if="icon" class="anticon anticon-{{icon}}"></i>
        <span>{{title}}</span>
      </span>
    </div>
    <ul :class="itemCls" :transition="mode=='inline'?'slide-up':'fade'" v-show="expand">
      <slot></slot>
    </ul>
  </li>

</template>

<script>
export default {
  name: 'v-sub-menu',
  props: {
    title: String,
    icon: String,
    expand: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data:()=>({
    level:0,
    mode: 'vertical',
    timer: null
  }),
  ready(){
    this.initProp();
    this.$on('modeChange',val=>{
      this.mode = val
      this.$broadcast('modeChange',val);
    })
    this.$on('cancelSelected',ori=>{
      this.$broadcast('cancelSelected',ori);
    })
    this.$on('expandChange',val=>{
      this.expand = val
    })
  },
  computed:{
    subMenuCls(){
      return [
        'ant-menu-submenu',
        `ant-menu-submenu-${this.mode}`,
        {'ant-menu-submenu-open': this.expand}
      ]
    },
    titleCls(){
      return [
        'ant-menu-submenu-title',
        {'ant-menu-submenu-disabled': this.disabled}
      ]
    },
    itemCls(){
      return [
        'ant-menu', 
        `ant-menu-${this.mode}`, 
        'ant-menu-sub'
      ]
    },
    titleSty(){
      return this.mode == 'inline'?{
          paddingLeft: 24 * this.level + 'px'
        }: {};
    }
  },
  methods: {
    initProp(){
      let index = 1;
      let parent = this.$parent;

      while (parent.$options.name !== 'v-menu') {
        if(parent.$options.name == 'v-sub-menu') index++;
        parent = parent.$parent;
      }
      this.expand = parent.expand;
      this.mode = parent.mode;
      this.level = index;
    },
    clickTriggerOpen(){
      if(!this.disabled && this.mode == 'inline'){
        this.setOpen(!this.expand);
      }
    },
    mouseTriggerOpen(status){
      if(!this.disabled && this.mode != 'inline'){
        if(this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.setOpen(status),300);
      }
    },
    setOpen(status){
      this.expand = status;
    }
  }
}
</script>
