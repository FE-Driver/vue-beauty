<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default{
        name: 'vFooter',
        data(){
            return{
                prefixCls: 'ant-layout-footer'
            }
        }
    }
</script>
