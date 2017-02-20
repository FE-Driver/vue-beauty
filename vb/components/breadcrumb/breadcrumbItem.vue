<template>
  <span>
    <template v-if="typeof this.href === 'string'">
      <span class="ant-breadcrumb-link">
        <a :href="href"><i :class="'anticon anticon-' + icon" v-if="icon"></i><slot></slot></a>
      </span>
    </template>
    <template v-else>
      <span class="ant-breadcrumb-link">
        <i :class="'anticon anticon-' + icon" v-if="icon"></i><slot></slot>
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
    href: String,
    icon: String
  },
  mounted: function() {
    this.separator = this.$parent.separator;
  }
}
</script>