<template>
<li :class="wrapperCls">
    <span :class="switcherCls" @click="setExpand"></span>
    <span v-if="checkable" :class="checkboxCls" @click="setCheck">
        <span class="ant-tree-checkbox-inner"></span>
    </span>
    <a :title="title" :class="titleCls" @click="setSelect">
        <span class="ant-tree-title" v-html="title"></span>
    </a>
    <ul v-if="node && node.length" :class="nodeCls" data-expanded="true">
        <tree-node v-for="item in node" :title.sync="item.title" :expand.sync="item.expand" :checked.sync="item.checked" :selected.sync="item.selected" :disabled.sync="item.disabled" :disable-checkbox.sync="item.disableCheckbox" :checkable="checkable" :multiple="multiple" :node="item.node" :key="item.key" :children-checked-status.sync='item.childrenCheckedStatus' @childchecked="childChecked" :root-id="rootID"></tree-node>
    </ul>
</li>
</template>
<script>
    import Bus from './bus.js';
    import { defaultProps,oneOfType } from '../../utils'

    export default{
        name: 'treeNode',
        data:()=>({
            prefix: 'ant-tree',
            isLeaf: false
        }),
        props: defaultProps({
            title: oneOfType([Object, String], '---'),
            checkable: false,
            expand: false,
            checked: false,
            disabled: false,
            selected: false,
            multiple: false,
            disableCheckbox: false,
            key: String,
            rootID: Number,
            node:[],
            childrenCheckedStatus: 0
        }),
        created(){
            if(!this.rootID) this.rootID = this._uid;

            Bus.$on(this.rootID+'_nodeSelected', (target,selected) => {
                if(target === this) return;
                if(!this.multiple && selected && this.selected) this.selected = false;
            });
            Bus.$on(this.rootID+'_nodeCheckedToAll', (key,checked) => {
                //本身就忽略
                if(this.key === key) return;
                //如果是自己的父级以上
                if(this.key.startsWith(key+'-')){
                    this.checked = checked;
                    this.childrenCheckedStatus = checked? 2 : 0; 
                }

            });
        },
        computed:{
            wrapperCls(){
                return {
                    [`${this.prefix}-treenode-disabled`]: this.disabled
                }
            },
            switcherCls(){
                return [
                    `${this.prefix}-switcher`,
                    {
                        [`${this.prefix}-switcher-disabled`]: this.disabled,
                        [`${this.prefix}-noline_close`]: !this.expand && !this.isLeaf,
                        [`${this.prefix}-noline_open`]: this.expand && !this.isLeaf,
                        [`${this.prefix}-switcher-noop`]: this.isLeaf
                    }
                ]
            },
            checkboxCls(){
                return [
                    `${this.prefix}-checkbox`,
                    {
                        [`${this.prefix}-checkbox-disabled`]: this.disabled || this.disableCheckbox,
                        [`${this.prefix}-checkbox-checked`]: this.checked && this.childrenCheckedStatus == 2,
                        [`${this.prefix}-checkbox-indeterminate`]: this.checked && this.childrenCheckedStatus == 1
                    }
                ]
            },
            titleCls(){
                return [
                    {[`${this.prefix}-node-selected`]:this.selected}
                ]
            },
            nodeCls(){
                return [
                    `${this.prefix}-child-tree`,
                    {[`${this.prefix}-child-tree-open`]:this.expand}
                ]
            }
        },
        ready(){
            //看是不是叶子节点
            if(!this.$children.length){ 
                this.isLeaf = true;
                this.childrenCheckedStatus = 2;
                return;
            }
            //选中 则把子组件都选中
            if(this.checked){
                this.childrenCheckedStatus = 2;
                Bus.$emit(this.rootID+'_nodeCheckedToAll', this.key,this.checked);
            }else{
                this.childrenCheckedStatus = this.getChildrenCheckedStatus();
                if(this.childrenCheckedStatus !== 0) this.checked = true;
            }
        },
        methods:{
            setExpand(){
                if(this.disabled) return;
                this.expand = !this.expand;
            },
            setCheck(){
                if(this.disabled || this.disableCheckbox) return;
                this.checked = !this.checked;
                this.childrenCheckedStatus = this.checked? 2 : 0; 
                Bus.$emit(this.rootID+'_nodeCheckedToAll', this.key,this.checked);
                this.$emit('childchecked');
            },
             //接收来自子节点的checked消息
            childChecked(){
                this.childrenCheckedStatus = this.getChildrenCheckedStatus();
                this.checked = this.childrenCheckedStatus == 0 ? false:true;
                this.$emit('childchecked');
            },
            setSelect(){
                if(this.disabled) return;
                this.selected = !this.selected;
                Bus.$emit(this.rootID+'_nodeSelected', this,this.selected);
            },
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
        }
    }
</script>
