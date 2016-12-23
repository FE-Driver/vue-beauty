<template>
    <ul class="ant-cascader-menu">
        <li v-for="item in data" :class="['ant-cascader-menu-item', {[prefix+'-item-expand']: item.children, },{[prefix+'-item-disabled']: item.disabled, }, {[prefix+'-item-active']: value == $index}]" :title="item.label" @click.stop="select($index,item.disabled)">
            {{item.label}}
        </li>
    </ul>
</template>
<script>
    export default {
        data: ()=>({
            prefix: 'ant-cascader-menu'
        }),
        props: {
            key: Number,
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
                this.value = i;
                this.$emit('change', this.key, i);
            }
        }
    }
</script>