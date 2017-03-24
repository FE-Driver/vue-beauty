<template lang="html">
  <ul :class="menuCls">
    <template v-if="isItemGroup">
      <li v-for="(item, index) in data" :class="prefix + '-item-group'">
        <div :class="prefix + '-item-group-title'">
            <slot :data="item" name="group">
              {{item.groupName}}
            </slot>
        </div>
        <Menu :data="item.list" type="item-group-list" :mode="mode" :level="level" :id="index">
          <!-- slot不支持v-if 所以用:slot="$scopedSlots.default?'default':'hack'"来让没有使用slot的时候不会影响正常的渲染 -->
            <template scope="{data}" :slot="$scopedSlots.default?'default':'hack'">
              <slot :data="data"></slot>
            </template>
            <template scope="{data}" :slot="$scopedSlots.sub?'sub':'hack'">
              <slot :data="data" name="sub"></slot>
            </template>
            <template scope="{data}" :slot="$scopedSlots.group?'group':'hack'">
              <slot :data="data" name="group"></slot>
            </template>
        </Menu>
      </li>
    </template>
    <template v-else>
      <template v-for="(item,index) in data">
        <li v-if="!item.children && !item.groups" :class="[prefix+'-item',{[prefix+'-item-disabled']: item.disabled,[prefix+'-item-selected']: item.selected}]" :style="paddingSty" @click="select(index,item.disabled)">
          <slot :data="item">
            <i v-if="item.icon" :class="'anticon anticon-' + item.icon"></i>
            <a v-if="item.href" :href="item.href" style="display:inline" :target="item.target">{{item.name}}</a>
            <template v-else>{{item.name}}</template>
          </slot>
        </li>
        <li v-else :class="[prefix+'-submenu',prefix+'-submenu-'+mode,{[prefix+'-submenu-open']: item.expand}]" @mouseover="mouseTriggerOpen(item.disabled,index,true)" @mouseout="mouseTriggerOpen(item.disabled,index,false)">
          <div :class="[prefix+'-submenu-title',{[prefix+'-submenu-disabled']: item.disabled}]" :style="paddingSty" :title="item.name" @click="clickTriggerOpen(item.disabled,index)">
            <span>
              <slot :data="item" name="sub">
                <i v-if="item.icon" :class="'anticon anticon-' + item.icon"></i>
                <span>{{item.name}}</span>
              </slot>
            </span>
          </div>
          <Menu v-if="item.children" :data="item.children" type="sub" :mode="mode" :level="level+1" :transition="mode=='inline'?'slide-up':'fade'" v-show="item.expand" :id="index">
            <!-- slot不支持v-if 所以用:slot="$scopedSlots.default?'default':'hack'"来让没有使用slot的时候不会影响正常的渲染 -->
            <template scope="{data}" :slot="$scopedSlots.default?'default':'hack'">
              <slot :data="data"></slot>
            </template>
            <template scope="{data}" :slot="$scopedSlots.sub?'sub':'hack'">
              <slot :data="data" name="sub"></slot>
            </template>
            <template scope="{data}" :slot="$scopedSlots.group?'group':'hack'">
              <slot :data="data" name="group"></slot>
            </template>
          </Menu>
          <Menu v-else :is-item-group="true" :data="item.groups" type="sub" :mode="mode" :level="level+1" :transition="mode=='inline'?'slide-up':'fade'" v-show="item.expand" :id="index">
            <!-- slot不支持v-if 所以用:slot="$scopedSlots.default?'default':'hack'"来让没有使用slot的时候不会影响正常的渲染 -->
            <template scope="{data}" :slot="$scopedSlots.default?'default':'hack'">
              <slot :data="data"></slot>
            </template>
            <template scope="{data}" :slot="$scopedSlots.sub?'sub':'hack'">
              <slot :data="data" name="sub"></slot>
            </template>
            <template scope="{data}" :slot="$scopedSlots.group?'group':'hack'">
              <slot :data="data" name="group"></slot>
            </template>
          </Menu>
        </li>
      </template>
    </template>
  </ul>

</template>

<script lang="babel">
import emitter from '../../mixins/emitter';

  const IsAllMatch = function(obj,conditions){
    let res = true;
    for(let [key,val] of Object.entries(conditions)){
      if(obj[key] !== val){
        res = false;
        break;
      }
    }
    return res;
  }

  export default {
    name: 'Menu',
    mixins: [emitter],
    data:()=>({
      prefix: 'ant-menu',
      timer: []
    }),
    props: {
      type:  {
        type: String,
        default: 'root'
      },
      id: Number,
      isItemGroup: {
        type: Boolean,
        default: false
      },
      expand: {
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
      level: {
        type: Number,
        default: 1
      }
    },
    mounted(){
      if(this.expand) {
        for(const item of this.data){
           this.$set(item, 'expand', true);
        }
      }
      this.$on('nodeSelected',(ori,id,dataPath)=>{
        if(this.type == 'root') {
          this.setAllSelected(false);
          this.$emit('item-click',[this.data[id],...dataPath]);
          this.broadcast('Menu', 'cancelSelected', [ori]);
        }else{
          this.dispatch('Menu', 'nodeSelected', [ori,this.id,[this.data[id],...dataPath]]);
        }
      })
      this.$on('cancelSelected',ori=>{
        this.broadcast('Menu', 'cancelSelected', [ori]);
        if(this !== ori){
          this.setAllSelected(false)
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
          this.$set(this.data[i], 'expand', false);
        }
      }
    },
    methods: {
      setAllSelected(status){
        for(let i=0;i<this.data.length;i++){
          this.$set(this.data[i], 'selected', status);
        }
      },
      clickTriggerOpen(disabled,index){
        if(!disabled && this.mode == 'inline'){
          this.setOpen(index,!this.data[index].expand);
        }
      },
      mouseTriggerOpen(disabled,index,status){
        if(!disabled && this.mode != 'inline'){
          if(this.timer[index]) clearTimeout(this.timer[index]);
          this.timer[index] = setTimeout(() => this.setOpen(index,status),300);
        }
      },
      setOpen(index,status = true){
        this.$set(this.data[index], 'expand', status);
      },
      setCheck(conditions,status = true){
        let res = false;
        for(let i=0;i<this.data.length;i++){
          res = IsAllMatch(this.data[i],conditions);
          if(res){
            if(status){
              this.select(i);
              let parent = this.$parent,id = this.id;
              while(parent && parent.$options.name == 'Menu'){
                parent.setOpen(id);
                id = parent.id;
                parent = parent.$parent;
              }
            }else{
              this.$set(this.data[i], 'selected', false);
            }
            break;
          }
        }
        if(!res){
          for(let child of this.$children){
            //如果使用者自定义了选项 可能会有其他类型的子组件
            if(child.$options.name == 'Menu' && child.setCheck){
              res  = child.setCheck(conditions,status);
              if(res) break;
            }
          }
        }
        return res;
      },
      select(index,disabled){
        if(disabled) return;
        this.setAllSelected(false);
        this.$set(this.data[index], 'selected', true);
        if(this.type == 'root') {
          this.$emit('item-click',[this.data[index]]);
          this.broadcast('Menu', 'cancelSelected', [this]);
        }else{
          this.dispatch('Menu', 'nodeSelected', [this,this.id,[this.data[index]]]);
        }
      }
    }
  }
</script>
