<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default{
        name: 'v-content',
        data(){
            return{
                prefixCls: 'ant-layout-content'
            }
        }
    }
</script>
