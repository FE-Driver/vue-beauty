<template>
  <span>
    <component :is="href?'a':'span'" class="ant-breadcrumb-link" :href="href">
      <slot></slot>
    </component>
    <span class="ant-breadcrumb-separator">{{ separator }}</span>
  </span>
</template>
<script lang="babel">
export default {
  name: 'BreadcrumbItem',
  data: () => ({
    separator: '',
  }),
  props: {
    href: String
  },
  mounted() {
    this.separator = this.$parent.separator;
  }
}
</script>