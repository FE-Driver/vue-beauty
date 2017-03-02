<template>
  <span>
    <template v-if="typeof this.href === 'string'">
      <span class="ant-breadcrumb-link">
        <a :href="href"><slot></slot></a>
      </span>
    </template>
    <template v-else>
      <span class="ant-breadcrumb-link">
        <slot></slot>
      </span>
    </template>
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
  mounted: function() {
    this.separator = this.$parent.separator;
  }
}
</script>