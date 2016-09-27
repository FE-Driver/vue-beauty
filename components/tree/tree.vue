<template lang="html">
  <ul :class="prefix" role="tree-node" unselectable="true">
    <tree-node v-for="item in data" :title.sync="item.title" :expand.sync="item.expand" :checked.sync="item.checked" :selected.sync="item.selected" :disabled.sync="item.disabled" :disable-checkbox.sync="item.disableCheckbox" :checkable="checkable" :multiple="multiple" :node.sync="item.node" :key="item.key" :children-checked-status.sync='item.childrenCheckedStatus' :root-id="rootID"></tree-node>
  </ul>
</template>

<script>
import Bus from './bus.js';
import treeNode from './treeNode'
import { defaultProps } from '../../utils'

export default {
  name: 'v-tree',
  data:()=>({
    prefix: 'ant-tree',
  }),
  props: defaultProps({
    data: [],
    multiple: false,
    checkable: false,
    rootID: Number,
    onSelect(){},
    onCheck(){}
  }),
  created(){
    if(!this.rootID) this.rootID = this._uid;
    this.addkey('',this.data);

    Bus.$on(this.rootID+'_nodeCheckedToAll', (key,checked) => {
      this.$nextTick( () =>{
        this.onCheck(this.getCheckedNodes(this.data));
      })
    });
    Bus.$on(this.rootID+'_nodeSelected', (target) => {
      this.$nextTick( () =>{
        this.onSelect(this.getSelectedNodes(this.data));
      })
    });
  },
  methods:{
    addkey(parentKey,data){
      for(let i=0;i<data.length;i++){
        if(parentKey){
          data[i].key = parentKey+'-'+i;
        }else{
          data[i].key = i+'';
        }
        if(data[i].node){
          this.addkey(data[i].key,data[i].node);
        }
      }
    },
    getNodes(data,opt){
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
    getSelectedNodes(data){
      return this.getNodes(data,{selected: true});
    },
    getCheckedNodes(data){
      return this.getNodes(data,{checked: true,childrenCheckedStatus:2});
    }
  },
  components: {treeNode}
}

</script>
