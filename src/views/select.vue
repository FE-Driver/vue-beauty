<template lang="html">

  <div>

    <section class="markdown">
      <h1>Select 选择器</h1>
      <p>
        类似 Select2 的选择器。。
      </p>
      <h2>何时使用</h2>
      <p>
        弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
      </p>
      <h2>组件演示</h2>
    </section>
    <v-Row>
      <v-Col span="12">
        <code-box
          title="简单"
          describe="最简单的用法。"
          code='<v-Select placeholder="请选择人员" style="width: 120px;" :options="options" :value.sync="value"></v-Select>
<v-Select disabled style="width: 120px;" value="1">lady</v-Select>'
        >
          <v-Select placeholder="请选择人员" style="width: 120px;" :options="options" :value.sync="value"></v-Select>
          <v-Select disabled style="width: 120px;" value="1">lady</v-Select>
        </code-box>
        <code-box
          title="带搜索框"
          describe="展开后可对选项进行搜索。"
          code='<X-Select placeholder="请选择人员" notfound="无法找到" type="search" style="width: 120px;" :options="options" :value.sync="people"></X-Select>'
        >
          <v-Select placeholder="请选择人员" notfound="无法找到" type="search" style="width: 120px;" :options="options"
                    :value.sync="people"></v-Select>
        </code-box>
      </v-Col>
      <v-Col span="12">
        <code-box
          title="三种大小"
          describe="三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px"
          code='<v-Select class="select-demo" size="lg" style="width: 150px;" :options="options" :value.sync="value"></v-Select>
<v-Select class="select-demo" style="width: 150px;" :options="options" :value.sync="value"></v-Select>
<v-Select class="select-demo" size="sm" style="width: 150px;" :options="options" :value.sync="value"></v-Select>'
        >
          <v-Select class="select-demo" size="lg" style="width: 150px;" :options="options" :value.sync="value"></v-Select>
          <v-Select class="select-demo" style="width: 150px;" :options="options" :value.sync="value"></v-Select>
          <v-Select class="select-demo" size="sm" style="width: 150px;" :options="options" :value.sync="value"></v-Select>
        </code-box>
      </v-Col>
    </v-Row>


    <api-table :apis='apis'></api-table>
  </div>

</template>

<script>

  import {vRow, vCol} from '../../components/layout'
  import vSelect from '../../components/select'
  import vButton from '../../components/button'
  import codeBox from '../components/codeBox'
  import apiTable from '../components/apiTable'

  export default {
    data: function () {
      return {
        apis: [
        ],
        options: [{value: '1', text: 'lady'}, {value: '2', text: '小强', disabled: true}, {value: '3', text: '小明'}],
        value: '3',
        people: '-1'
      }
    },
    components: {
      vSelect,
      vButton,
      codeBox,
      apiTable,
      vRow,
      vCol
    },
    events: {
      'select-change': function (obj) {
        console.log(obj.text)
      }
    },
    methods: {}
  }
</script>

<style lang="less">
  .select-demo {
    margin: 0 8px 10px 0;
  }
</style>
