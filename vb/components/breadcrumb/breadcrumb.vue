<template>
  <div class="ant-breadcrumb">
    <slot></slot>
  </div>
</template>
<script lang="babel">
export default {
    name: 'Breadcrumb',
    props: {
        separator: {
            type: String,
            default: '/',
        },
    },
};
</script>
