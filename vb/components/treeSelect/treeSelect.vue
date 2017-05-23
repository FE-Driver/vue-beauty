<template>
    <span style="display:inline-block;position:relative">
        <base-select :value.sync="value" :popup-container="popupContainer" :open.sync="open" :position="position" :multiple="multiple" :allow-clear="allowClear" :on-clear="clear" v-ref:select>
            <v-tree :data-source="data" :on-select="select" :on-check="check" :multiple="multiple" :checkable="treeCheckable" v-ref:tree></v-tree>
        </base-select>
    </span>
</template>
<script>
    import baseSelect from '../base/select'
    import vTree from '../tree'
    import { defaultProps } from '../../utils'
    export default {
        name: 'v-tree-select',
        props: defaultProps({
            data: [],
            open: false,
            popupContainer: ()=> document.body,
            position: 'absolute',
            value: [],
            multiple: false,
            treeCheckable: false,
            allowClear: false,
            onSelect(){}
        }),
        ready(){
            document.addEventListener('click',()=>this.open = false)
            if(this.multiple){
                this.setValueByCheck(this.data);
                this.treeCheckable = true;
            }else{
                this.setValueBySelect(this.data);
            }
        },
        methods:{
            setValueBySelect(data){
                let res = false;
                for(let item of data){
                    if(item.selected){
                        let arr = [{text:item.title,uid:item.key}];
                        this.value = arr;
                        res = true;
                        break;
                    }else if(item.node){
                        if(this.setValueBySelect(item.node)){
                            res = true;
                            break;
                        }
                    }
                }
                return res;
            },
            setValueByCheck(data){
                for(let item of data){
                    if(item.checked && item.childrenCheckedStatus == 2){
                        this.value.push({text:item.title,uid:item.key});
                    }else if(item.node){
                        this.setValueByCheck(item.node);
                    }
                }
            },
            select(data){
                if(this.multiple) return;

                let val = []
                if(data[0]){
                    val.push({text:data[0].title,uid:data[0].key})
                }
                this.value = val;
                this.onSelect(data[0]);
                this.$refs.select.openDropdown();
            },
            check(data){
                if(!this.multiple) return;
                let temp = [];
                for(let i=0;i<data.length;i++){
                    temp.push(data[i].key);
                }
                let val = [], res= [];
                for(let i=0;i<data.length;i++){
                    //判断被选中的节点里面是否有我的父节点
                    if(temp.some((key)=> key!==data[i].key && data[i].key.startsWith(key))) continue;
                    val.push({text:data[i].title,uid:data[i].key});
                    res.push(data[i])
                }
                this.value = val;
                this.onSelect(res);
            },
            clear(value){
                let uids = [];
                for(let item of value){
                    uids.push(item.uid);
                }
                this.resetTreeData(uids,this.data);
            },
            resetTreeData(uids,data){
                for(let i=0;i<data.length;i++){
                    let index = uids.indexOf(data[i].key);
                    if(index !== -1){
                        if(this.multiple){
                            this.setCheck(data[i].key);
                        }else{
                            data[i].selected = false;
                        }
                        uids.splice(index,1);
                    }
                    if(data[i].node){
                        this.resetTreeData(uids,data[i].node);
                    }
                }
            },
            setCheck(key){
                let route = key.split('.');
                let node = this.$refs.tree;
                for(var i=1;i<route.length-1;i++){
                    node = node.$children[route[i]];
                }
                let item = node.dataSource[route[i]];
                node.setCheck(item.disabled,route[i]);
            }
        },
        components:{baseSelect,vTree}
    }
</script>