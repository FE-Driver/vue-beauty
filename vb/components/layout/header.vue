<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default{
        name: 'vHeader',
        data(){
            return{
                prefixCls: 'ant-layout-header'
            }
        }
    }
</script>
