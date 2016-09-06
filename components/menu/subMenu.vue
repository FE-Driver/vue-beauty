<template lang="html">

  <li :class="subMenuCls" @mouseover="mouseTriggerOpen(true)" @mouseout="mouseTriggerOpen(false)">
    <div class="ant-menu-submenu-title" @click="clickTriggerOpen" :style="titleSty">
      <span>
        <i v-if="icon" class="anticon anticon-{{icon}}"></i>
        <span>{{title}}</span>
      </span>
    </div>
    <ul :class="itemCls">
      <slot></slot>
    </ul>
  </li>

</template>

<script>
export default {
  props: {
    title: String,
    icon: String
  },
  data:()=>({
    open: false,
    level:0,
    mode: 'vertical',
    timer: null
  }),
  watch: {
    'level' : function(val, oldVal){
      const childVal = ++val;
    }
  },
  ready(){
    this.$on('modeChage',(mode)=>{
      this.mode = mode;

      this.$broadcast('modeChage',mode);
    })

    this.$on('setLevel',(level)=>{
      this.level = level;

      this.$broadcast('setLevel',++level);
    })
  },
  computed:{
    subMenuCls(){
      return [
        'ant-menu-submenu',
        `ant-menu-submenu-${this.mode}`,
        {'ant-menu-submenu-open': this.open}
      ]
    },
    itemCls(){
      return [
        'ant-menu', 
        `ant-menu-${this.mode}`, 
        'ant-menu-sub',
        {['ant-menu-hidden']:!this.open}
      ]
    },
    titleSty(){
      return this.mode == 'inline'?{
          paddingLeft: 24 * this.level + 'px'
        }: '';
    }
  },
  methods: {
    clickTriggerOpen(){
      if(this.mode == 'inline'){
        this.setOpen(!this.open);
      }
    },
    mouseTriggerOpen(status){
      if(this.mode != 'inline'){
        if(this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.setOpen(status),300);
      }
    },
    setOpen(status){
      this.open = status;
    }
  }
}
</script>
