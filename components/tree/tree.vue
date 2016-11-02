<template>
  <ul :class="treeCls">
    <li v-for="item in dataSource" :class="[{[prefix+'-treenode-disabled']: item.disabled}]">
      <span :class="[prefix+'-switcher',{[prefix+'-switcher-disabled']: item.disabled,[prefix+'-noline_close']: !item.expand && !item.isLeaf,[prefix+'-noline_open']: item.expand && !item.isLeaf,[prefix+'-switcher-noop']: item.isLeaf}]" @click="setExpand(item.disabled,$index)"></span>
      <span v-if="checkable" :class="[prefix+'-checkbox',{[prefix+'-checkbox-disabled']: item.disabled || item.disableCheckbox,[prefix+'-checkbox-checked']: item.checked && item.childrenCheckedStatus == 2, [prefix+'-checkbox-indeterminate']: item.checked && item.childrenCheckedStatus == 1}]" @click="setCheck(item.disabled||item.disableCheckbox,$index,item.key)">
          <span :class="prefix+'-checkbox-inner'"></span>
      </span>
      <a :title="item.title" :class="[{[prefix+'-node-selected']: item.selected}]" @click="setSelect(item.disabled,$index)">
          <span :class="prefix+'-title'" v-html="item.title"></span>
      </a>
      <v-tree v-if="!item.isLeaf" :data-source.sync="item.node" :parent-key="item.key" :multiple="multiple" :checkable="checkable" :class="{[prefix+'-child-tree-open']: item.expand}"></v-tree>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'v-tree',
    data:()=>({
      prefix: 'ant-tree'
    }),
    props: {
      parentKey: String,
      dataSource: {
        type: Array,
        default: ()=>[]
      },
      multiple: {
        type: Boolean,
        default: false
      },
      checkable: {
        type: Boolean,
        default: false
      },
      onSelect: Function,
      onCheck: Function
    },
    computed: {
      treeCls(){
        if(!this.parentKey){
          return this.prefix
        }else{
          return `${this.prefix}-child-tree`
        }
      }
    },
    created(){
      this.preHandle();
    },
    ready(){
      this.$on('nodeSelected',(ori,selected)=>{
        if(this.parentKey) return true;
        if(!this.multiple && selected){
          if(this !== ori){
            for(let i=0;i<this.dataSource.length;i++){
              this.$set(`dataSource[${i}].selected`,false);
            }
          }
          this.$broadcast('cancelSelected',ori);
        }
        if(this.onSelect){
          this.$nextTick( () =>{
            this.onSelect(this.getSelectedNodes());
          })
        }
      })
      this.$on('cancelSelected',ori=>{
        this.$broadcast('cancelSelected',ori);
        if(this !== ori){
          for(let i=0;i<this.dataSource.length;i++){
            this.$set(`dataSource[${i}].selected`,false);
          }
        }
      })
      this.$on('parentChecked',(status,key)=>{
        if(this.parentKey == key || this.parentKey.startsWith(key+'.')){
          for(let i=0;i<this.dataSource.length;i++){
            this.$set(`dataSource[${i}].checked`,status);
            this.$set(`dataSource[${i}].childrenCheckedStatus`,status?2:0);
          }
          this.$broadcast('parentChecked',status,key);
        }
      })
      this.$on('childChecked',(ori,key)=>{
        if(!this.parentKey && this.onCheck){
          this.$nextTick( () =>{
            this.onCheck(this.getCheckedNodes());
          })
        }
        if(this === ori) return;
        for(let [i,item] of this.dataSource.entries()){
          if(item.key == key){
            let temp = this.getChildrenCheckedStatus(item.node);
            if(temp != item.childrenCheckedStatus){
              this.$set(`dataSource[${i}].checked`,temp?true:false);
              this.$set(`dataSource[${i}].childrenCheckedStatus`,temp);
              if(this.parentKey) this.$dispatch('childChecked',this,this.parentKey);
            }
          }
        }
      })
    },
    methods: {
      preHandle(){
        for(let [i,item] of this.dataSource.entries()){
          if(this.parentKey){
            item.key = this.parentKey+'.'+i;
          }else{
            item.key = i+'';
          }
          if(!item.node || !item.node.length){
            this.$set(`dataSource[${i}].isLeaf`,true);
            this.$set(`dataSource[${i}].childrenCheckedStatus`,2);
            continue;
          }
          if(item.checked){
            this.$set(`dataSource[${i}].childrenCheckedStatus`,2);
            this.$broadcast('parentChecked',true,item.key);
          }else{
            this.$set(`dataSource[${i}].childrenCheckedStatus`,this.getChildrenCheckedStatus(item.node));
            if(item.childrenCheckedStatus !== 0) this.$set(`dataSource[${i}].checked`,true);
          }
        }
      },
      setExpand(disabled,index){
        if(!disabled){
          this.$set(`dataSource[${index}].expand`,!this.dataSource[index].expand);
        }
      },
      setSelect(disabled,index){
        if(!disabled){
          const selected = !this.dataSource[index].selected;
          if(this.multiple || !selected){
            this.$set(`dataSource[${index}].selected`,selected);
          }else{
            for(let i=0;i<this.dataSource.length;i++){
              if(i == index){
                this.$set(`dataSource[${i}].selected`,true);
              }else{
                this.$set(`dataSource[${i}].selected`,false);
              }
            }
          }
          this.$dispatch('nodeSelected',this,selected);
        }
      },
      setCheck(disabled,index,key){
        if(disabled) return;
        const checked = !this.dataSource[index].checked;
        this.$set(`dataSource[${index}].checked`,checked);
        this.$set(`dataSource[${index}].childrenCheckedStatus`,checked? 2 : 0);
        this.$dispatch('childChecked',this,this.parentKey);
        this.$broadcast('parentChecked',checked,key);
      },
      getNodes(data,opt){
        data = data || this.dataSource
        let res = [];
        for(let node of data){
          let tmp = true;
          for (let [key, value] of Object.entries(opt)) {
            if(node[key] != value){
              tmp = false;
              break;
            }
          }
          if(tmp){
            res.push(node);
          }
          if(node.node && node.node.length){
            res = res.concat(this.getNodes(node.node,opt));
          }
        }
        return res;
      },
      getSelectedNodes(){
        return this.getNodes(this.dataSource,{selected: true});
      },
      getCheckedNodes(){
        return this.getNodes(this.dataSource,{checked: true,childrenCheckedStatus:2});
      },
      getChildrenCheckedStatus(children){
          let checkNum = 0,child_childrenAllChecked = true;
          for(let child of children){
              if(child.checked){
                  checkNum++;
              }
              if(child.childrenCheckedStatus !== 2){
                  child_childrenAllChecked = false;
              }
          }
          //全选
          if(checkNum == children.length){
              return child_childrenAllChecked?2:1;
          //部分选择
          }else if(checkNum>0){
              return 1;
          }else{
              return 0;
          }
      }
    }
  }
</script>