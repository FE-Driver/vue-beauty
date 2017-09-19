<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>
<script>
export default{
    name: 'Content',
    data() {
        return {
            prefixCls: 'ant-layout-content',
        };
    },
};
</script>
