<template lang="html">
  <section class="markdown api-container">
    <h2>{{ title }}</h2>
    <slot></slot>
    <table>
      <thead>
        <tr>
          <th v-for="text in head" v-html="text"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in content">
          <td v-for="text in item" v-html="text" track-by="$index"></td>
        </tr>
        <tr v-for="api in apis">
          <td v-for="text in api" v-html="text" track-by="$index"></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props:{
    type: {
      type: String,
      default: 'props'
    },
    head: Array,
    content: Array,
    apis: Array,
    title: {
      type: String,
      default: "API"
    }
  },
  ready(){
    if(!this.head){
      switch(this.type){
        case 'props': this.$set('head',['参数','说明','类型','默认值']);break;
        case 'events': this.$set('head',['事件名','说明','参数']);break;
        case 'methods': this.$set('head',['方法名','说明','参数','返回值']);break;
      }
    }
  }
}
</script>

<style lang="less" scoped>

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
