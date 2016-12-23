<template lang="html">

  <div>

    <section class="markdown">
      <h1>Select 选择器</h1>
      <p>
        一个简单的select选择器
      </p>
      <h2>何时使用</h2>
      <p>
        弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
      </p>
      <h2>组件演示</h2>
    </section>
    <v-Row :gutter="16">
      <v-Col span="12">
        <code-box
          title="简单"
          describe="最简单的用法。"
        >
          <v-Select placeholder="请选择人员" style="width: 120px;" :options="options" value=""></v-Select>
          <v-Select placement="top" style="width: 120px;" :options="options" :value.sync="value"></v-Select>
          <v-Select disabled style="width: 120px;" value=""></v-Select>
        </code-box>
        <code-box
          title="带搜索框"
          describe="展开后可对选项进行搜索。"
        >
          <v-Select search style="width: 120px;" :options="options" value=""></v-Select><br><br>
          <v-Select search multiple style="width: 100%" :options="options" :value="[]"></v-Select>
        </code-box>
      </v-Col>
      <v-Col span="12">
        <code-box
          title="三种大小"
          describe="三种大小的选择框，当 size 分别为 lg 和 sm 时，输入框高度为 32px 和 22px ，默认高度为 28px"
        >
          <v-Select size="lg" style="width: 200px;" :options="options" :value.sync="value"></v-Select>
          <v-Select style="width: 200px;" :options="options" :value.sync="value"></v-Select>
          <v-Select size="sm" style="width: 200px;" :options="options" :value.sync="value"></v-Select>
        </code-box>

        <code-box
          title="多选"
          describe="多选，从已有条目中选择（scroll the menu）"
        >
          <v-Select style="width: 100%;" multiple :options="options" :value="['3']"></v-Select>
        </code-box>

        <code-box
          title="分组"
          describe="用嵌套的数据结构进行选项分组。"
        >
          <v-Select style="width: 200px" :options="groupOpt" :value="'lp'"></v-Select>
          <v-Select style="width: 200px" multiple :options="groupOpt" :value="['lp']"></v-Select>
        </code-box>
      </v-Col>
    </v-Row>


    <api-table :apis='apis'></api-table>
  </div>

</template>

<script>
  import codeBox from '../components/codeBox'
  import apiTable from '../components/apiTable'

  export default {
    data: function () {
      return {
        apis: [
        ],
        options: [{value: '1', text: 'lady'}, {value: '2', text: '小强', disabled: true}, {value: '3', text: '小明'}],
        groupOpt: [
          {
            label: '重庆',
            data: [
              {
                value: 'lp',
                text: '梁平'
              },
              {
                value: 'wz',
                text: '万州',
                disabled: true
              }
            ]
          },
          {
            label: '四川',
            data: [{
              value: 'cd',
              text: '成都'
            },{
              value: 'dz',
              text: '达州'
            }]
          }
        ],
        value: '3',
        people: ''
      }
    },
    components: {
      codeBox,
      apiTable
    },
    events: {
      'select-change': function (obj) {
        console.log(obj.text)
      }
    },
    methods: {}
  }
</script>