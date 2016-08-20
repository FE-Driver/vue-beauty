<template lang="html">
  <ul :class="wrapperCls" role="tree-node" unselectable="true">
    <tree-node v-for="item in data" :title.sync="item.title" :expand.sync="item.expand" :checked.sync="item.checked" :selected.sync="item.selected" :disabled.sync="item.disabled" :disable-checkbox.sync="item.disableCheckbox" :key="item.key" :checkable="checkable" :multiple="multiple">
      <tree v-if="item.node && item.node.length" :data.sync="item.node" :root="false" :expand.sync="item.expand" :checkable="checkable" :multiple="multiple"></tree>
    </tree-node>
  </ul>
</template>

<script>
import treeNode from './treeNode'
import { defaultProps } from '../../utils'

export default {
  name: 'tree',
  data:()=>({
    prefix: 'ant-tree',
    childrenCheckedStatus: 2
  }),
  props: defaultProps({
    data: [],
    multiple: false,
    checkable: false,
    expand: false,
    root: true
  }),
  ready(){
    if(!this.root){
      this.prefix = 'ant-tree-child-tree';
    }
    this.childrenCheckedStatus = this.getChildrenCheckedStatus();
  },
  components: {treeNode},
  computed: {
    wrapperCls () {
      return [
        this.prefix,
        {[`${this.prefix}-open`]: this.expand}
      ]
    }
  },
  methods: {
    getChildrenCheckedStatus(){
        let checkNum = 0,child_childrenAllChecked = true;
        for(let child of this.$children){
            if(child.checked){
                checkNum++;
            }
            if(child.childrenCheckedStatus !== 2){
                child_childrenAllChecked = false;
            }
        }
        //全选
        if(checkNum == this.$children.length){
            return child_childrenAllChecked?2:1;
        //部分选择
        }else if(checkNum>0){
            return 1;
        }else{
            return 0;
        }
    }
  },
  events: {
    parentExpand(expand){
      this.expand = expand;
    },
    parentCheck(check){
      this.$broadcast('parentNodeCheck',check);
      this.childrenCheckedStatus = this.checked? 2 : 0;
    },
    childCheck(){
      this.childrenCheckedStatus = this.getChildrenCheckedStatus();
      return true;
    }
  }
}

</script>
