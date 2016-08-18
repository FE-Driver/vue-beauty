<template>
<li :class="wrapperCls">
    <span :class="switcherCls" @click="setExpand"></span>
    <span :class="checkboxCls" @click="setCheck">
        <span class="ant-tree-checkbox-inner"></span>
    </span>
    <a :title="title">
        <span class="ant-tree-title" v-html="title"></span>
    </a>
    <slot></slot>
</li>
</template>
<script>
    import cx from 'classnames'
    import { defaultProps,oneOfType } from '../../utils'

    export default{
        data:()=>({
            prefix: 'ant-tree',
            isLeaf: false,
            childrenCheckedStatus: 2
        }),
        props: defaultProps({
            title: oneOfType([Object, String], '---'),
            expand: false,
            checked: false,
            disabled: false,
            disableCheckbox: false,
            key: String
        }),
        computed:{
            wrapperCls(){
                return cx({
                    [`${this.prefix}-treenode-disabled`]: this.disabled
                })
            },
            switcherCls(){
                return cx({
                    [`${this.prefix}-switcher`]: true,
                    [`${this.prefix}-switcher-disabled`]: this.disabled,
                    [`${this.prefix}-noline_close`]: !this.expand && !this.isLeaf,
                    [`${this.prefix}-noline_open`]: this.expand && !this.isLeaf,
                })
            },
            checkboxCls(){
                return cx({
                    [`${this.prefix}-checkbox`]: true,
                    [`${this.prefix}-checkbox-disabled`]: this.disabled || this.disableCheckbox,
                    [`${this.prefix}-checkbox-checked`]: this.checked && this.childrenCheckedStatus == 2,
                    [`${this.prefix}-checkbox-indeterminate`]: this.checked && this.childrenCheckedStatus == 1
                })
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
                this.$broadcast('parentCheck',this.checked);
            }else{
                this.childrenCheckedStatus = this.getChildrenCheckedStatus();
                if(this.childrenCheckedStatus !== 0) this.checked = true;
            }
        },
        methods:{
            setExpand(){
                if(this.disabled) return;
                this.expand = !this.expand;
                this.$broadcast('parentExpand',this.expand);
            },
            setCheck(){
                if(this.disabled || this.disableCheckbox) return;
                this.checked = !this.checked;
                this.$broadcast('parentCheck',this.checked);
                this.childrenCheckedStatus = this.checked? 2 : 0;
                this.$dispatch('childCheck',this);
            },
            getChildrenCheckedStatus(){
                return this.$children[0].childrenCheckedStatus;
            }
        },
        events: {
            parentNodeCheck(check){
                this.checked = check;
                this.childrenCheckedStatus = this.checked? 2 : 0;
                this.$broadcast('parentCheck',this.checked);
            },
            childCheck(target){
                if(this === target) return;
                this.childrenCheckedStatus = this.getChildrenCheckedStatus();
                this.checked = this.childrenCheckedStatus == 0 ? false:true;
                return true;
            }
        }

    }
</script>
