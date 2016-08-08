<template lang="html">
  <section class="markdown api-container">
    <h2>API</h2>
    <slot></slot>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="api in apis">
          <td>{{api.parameter}}</td>
          <td>{{api.explain}}</td>
          <td>{{api.type}}</td>
          <td>{{api.default}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props:{
    apis: Array
  },
}
</script>

<style lang="less">

.markdown>table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin-bottom: 24px;

    th {
        white-space: nowrap;
        color: #5c6b77;
        font-weight: 600;
        background: #f7f7f7;
    }

    td,th{
      border: 1px solid #e9e9e9;
      padding: 8px 16px;
      text-align: left;
    }
}

.markdown.api-container table {
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 13px;
}

</style>
