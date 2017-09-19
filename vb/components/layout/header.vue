<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script>
export default{
    name: 'Header',
    data() {
        return {
            prefixCls: 'ant-layout-header',
        };
    },
};
</script>
