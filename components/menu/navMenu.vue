<template lang="html">
  <ul :class="menuCls">
    <template v-if="isItemGroup">
      <li v-for="item in data" class="{{prefix}}-item-group">
        <div class="{{prefix}}-item-group-title">
            {{item.groupName}}
        </div>
        <v-nav-menu :data="item.list" type="item-group-list" :mode="mode" :a-tag="aTag" :level="level"></v-nav-menu>
      </li>
    </template>
    <template v-else>
      <template v-for="item in data">
        <li v-if="!item.children && !item.groups" :class="[prefix+'-item',{[prefix+'-item-disabled']: item.disabled,[prefix+'-item-selected']: item.selected}]" :style="paddingSty" v-link="item.link" @click="select($index)">
          <i v-if="item.icon" class="anticon anticon-{{item.icon}}"></i>
          <a v-if="aTag" :href="'#!'+item.link" style="display:inline">{{item.name}}</a>
          <template v-else>{{item.name}}</template>
        </li>
        <li v-else :class="[prefix+'-submenu',prefix+'-submenu-'+mode,{[prefix+'-submenu-open']: item.open}]" @mouseover="mouseTriggerOpen(item.disabled,$index,true)" @mouseout="mouseTriggerOpen(item.disabled,$index,false)">
          <div :class="[prefix+'-submenu-title',{[prefix+'-submenu-disabled']: item.disabled}]" :style="paddingSty" :title="item.name" @click="clickTriggerOpen(item.disabled,$index)">
            <span>
              <i v-if="item.icon" class="anticon anticon-{{item.icon}}"></i>
              <span>{{item.name}}</span>
            </span>
          </div>
          <v-nav-menu v-if="item.children" :data="item.children" type="sub" :mode="mode" :a-tag="aTag" :level="level+1" :class="{[prefix+'-hidden']: !item.open}"></v-nav-menu>
          <v-nav-menu v-else :is-item-group="true" :data="item.groups" type="sub" :mode="mode" :a-tag="aTag" :level="level+1" :class="{[prefix+'-hidden']: !item.open}"></v-nav-menu>
        </li>
      </template>
    </template>
  </ul>

</template>

<script>
  export default {
    name: 'v-nav-menu',
    data:()=>({
      prefix: 'ant-menu',
      timer: []
    }),
    props: {
      type:  {
        type: String,
        default: 'root'
      },
      isItemGroup: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: ()=>[]
      },
      mode: {
        type: String,
        default: 'vertical'
      },
      theme: {
        type: String,
        default: 'light'
      },
      aTag: {
        type: Boolean,
        default: false
      },
      level: {
        type: Number,
        default: 1
      }
    },
    ready(){
      this.$on('nodeSelected',ori=>{
        if(this.type !== 'root') return true;
        this.$broadcast('cancelSelected',ori);
      })
      this.$on('cancelSelected',ori=>{
        this.$broadcast('cancelSelected',ori);
        if(this !== ori){
          for(let i=0;i<this.data.length;i++){
            this.$set(`data[${i}].selected`,false);
          }
        }
      })
    },
    computed: {
      menuCls(){
        if(this.type == 'root' || this.type == 'sub'){
          return [
            this.prefix,
            `${this.prefix}-${this.type}`,
            `${this.prefix}-${this.mode}`,
            {
              [`${this.prefix}-${this.theme}`]: this.type == 'root'
            }
          ]
        }else if(this.type == 'item-group-list'){
          return `${this.prefix}-item-group-list`
        }
      },
      paddingSty(){
        return this.mode == 'inline'?{
            paddingLeft: 24 * this.level + 'px'
          }:{}; 
      }
    },
    watch: {
      mode(){
        for(let i=0;i<this.data.length;i++){
          this.$set(`data[${i}].open`,false);
        }
      }
    },
    methods: {
      clickTriggerOpen(disabled,index){
        if(!disabled && this.mode == 'inline'){
          this.setOpen(index,!this.data[index].open);
        }
      },
      mouseTriggerOpen(disabled,index,status){
        if(!disabled && this.mode != 'inline'){
          if(this.timer[index]) clearTimeout(this.timer[index]);
          this.timer[index] = setTimeout(() => this.setOpen(index,status),300);
        }
      },
      setOpen(index,status){
        this.$set(`data[${index}].open`,status);
      },
      select(index){
        for(let i=0;i<this.data.length;i++){
          if(i == index){
            this.$set(`data[${i}].selected`,true);
          }else{
            this.$set(`data[${i}].selected`,false);
          }
        }
        this.$dispatch('nodeSelected',this);
      }
    }
  }
</script>
