<template>
    <ul class="ant-cascader-menu">
        <li v-for="(item,index) in data" :class="['ant-cascader-menu-item', {[prefix+'-item-expand']: item.children, },{[prefix+'-item-disabled']: item.disabled, }, {[prefix+'-item-active']: value == index}]" :title="item.label" @click.stop="select(index,item.disabled)">
            {{item.label}}
        </li>
    </ul>
</template>
<script lang="babel">
    export default {
        data: ()=>({
            prefix: 'ant-cascader-menu'
        }),
        props: {
            _key: Number,
            value: {
                type: Number,
                default: -1
            },
            data: {
                type: Array,
                default: ()=> []
            }
        },
        methods: {
            select(i,disabled){
                if(disabled) return;
                this.$emit('input', i);
                this.$emit('change', this._key, i);
            }
        }
    }
</script>