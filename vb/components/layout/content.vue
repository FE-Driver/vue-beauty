<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default{
        name: 'vContent',
        data(){
            return{
                prefixCls: 'ant-layout-content'
            }
        }
    }
</script>
