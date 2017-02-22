<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default{
        name: 'v-header',
        data(){
            return{
                prefixCls: 'ant-layout-header'
            }
        }
    }
</script>
