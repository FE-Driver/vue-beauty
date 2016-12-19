<template lang="html">

  <div>

    <section class="markdown">
      <h1>MultiSelect 选择器</h1>
      <p>
        类似 Select2 的选择器。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>
        <li>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="基础"
          describe="最简单的用法">
          <v-multiselect :selected="selected" :options="options" @update="updateSelected"></v-multiselect>
        </code-box>

        <code-box
          title="三种大小"
          describe="三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px">
          <v-multiselect size="large" :options="options"></v-multiselect><br>
          <v-multiselect :options="options"></v-multiselect><br>
          <v-multiselect size="small" :options="options"></v-multiselect>
        </code-box>

      </v-Col>

      <v-Col span="12">

        <code-box
          title="更复杂的用法"
          describe="该组件在vue-multiselect的基础上进行了少量的改动，除了列在下面的api，其它api均可在vue-multiselect官网查询">
          <v-multiselect  
            :options="source" 
            :selected="multiValue"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
            :clear-on-select="false"
            :limit="2"
            @update="updateMultiValue"
            placeholder="Pick some"
            label="name"
            key="name">
          </v-multiselect>
        </code-box>

      </v-Col>
    </v-Row>

    <api-table
      :content='content'
    ></api-table>
    其它Api请参考：<a href="http://monterail.github.io/vue-multiselect/" target="_blank">vue-multiselect</a>

  </div>

</template>

<script>

import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      onClose: function() {
          console.log(this);
      },
      content: [
        [
          'position',
          '下拉框的定位方式（absolute,fixed）',
          'String',
          'absolute'   
        ],
        [
          'size',
          '选择框大小，可选 large small',
          'String',
          'default'   
        ],
        [
          'popupContainer',
          '下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
          'Function',
          '() => document.body'   
        ]
      ],
      selected: null,
      options: ['list', 'of', 'options'],
      multiValue: null,
      source: [
        {
          "name": "Vue.js",
          "language": "JavaScript"
        },
        {
          "name": "Rails",
          "language": "Ruby"
        },
        {
          "name": "Sinatra",
          "language": "Ruby"
        },
        {
          "name": "Laravel",
          "language": "PHP"
        },
        {
          "name": "Phoenix",
          "language": "Elixir"
        }
      ]
    }
  },
  methods: {
    updateSelected (newSelected) {
      this.selected = newSelected
    },
    updateMultiValue (value) {
      this.multiValue = value
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>