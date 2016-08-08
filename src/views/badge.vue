<template lang="html">

  <div>

    <section class="markdown">
      <h1>Badge 徽标数</h1>
      <p>
        图标右上角的圆形徽标数字。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基础"
          describe="简单的徽章展示。"
          code='<v-badge :count="30"><a href="#" class="head-example"></a></v-badge>'
        >
          <v-badge :count="5">
            <a class="head-example"></a>
          </v-badge>
        </code-box>

        <code-box
          title="讨嫌的小红点"
          describe="没有具体的数字。"
          code='<v-badge :count="30"><a href="#" class="head-example"></a></v-badge>'
        >
          <v-badge dot>
            <i class="anticon anticon-notification"></i>
          </v-badge>
          <v-badge dot>
            <a >一个链接</a>
          </v-badge>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="大数字"
          describe="超过 overflowCount 的会显示为 {overflowCount}+。"
          code='<v-badge :count="11" :overflow-count="10">
  <a class="head-example"></a>
</v-badge>
<v-badge :count="1000" :overflow-count="999">
  <a class="head-example"></a>
</v-badge>'
        >
          <v-badge :count="11" :overflow-count="10">
            <a class="head-example"></a>
          </v-badge>

          <v-badge :count="1000" :overflow-count="999">
            <a class="head-example"></a>
          </v-badge>
        </code-box>

        <code-box
          title="动态"
          describe="展示动态变化的效果。"
          code='<v-badge :count="num">
  <a class="head-example"></a>
</v-badge>
<v-badge dot :show="show">
  <a class="head-example"></a>
</v-badge>
<div style="margin-top: 10px;">
  <div class="ant-btn-group">
    <button type="button" class="ant-btn ant-btn-ghost" @click="num--"><i class="anticon anticon-minus" ></i></button>
    <button type="button" class="ant-btn ant-btn-ghost" @click="num++"><i class="anticon anticon-plus"></i></button>
  </div>
  <button type="button" class="ant-btn ant-btn-ghost" style="margin-left: 8px;" @click="show = !show"><span>切换红点显隐</span></button>
</div>'
        >
          <v-badge :count="num">
            <a class="head-example"></a>
          </v-badge>
          <v-badge dot :show="show">
            <a class="head-example"></a>
          </v-badge>
          <div style="margin-top: 10px;">
            <div class="ant-btn-group">
              <button type="button" class="ant-btn ant-btn-ghost" @click="reduce"><i class="anticon anticon-minus" ></i></button>
              <button type="button" class="ant-btn ant-btn-ghost" @click="num++"><i class="anticon anticon-plus"></i></button>
            </div>
            <button type="button" class="ant-btn ant-btn-ghost" style="margin-left: 8px;" @click="show = !show"><span>切换红点显隐</span></button>
          </div>
        </code-box>

      </div>

      <div class="ant-col-lg-24 code-boxes-col-2-1">

        <code-box
          title="独立使用"
          describe="不包裹任何元素即是独立使用"
          :code="code"
        >
          <v-badge :count="25"></v-badge>
          <v-badge :count="4" :styles="{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }"></v-badge>
          <v-badge :count="109" :styles="{ backgroundColor: '#87d068' }"></v-badge>
        </code-box>

      </div>
    </div>

    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vBadge from '../../components/badge'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      onClose: function() {
          console.log(this);
      },
      show: true,
      num: 5,
      apis: [{
          parameter: 'count',
          explain: '展示的数字，大于 overflowCount 时显示为 {{overflowCount}}+，为 0 时隐藏',
          type: 'Number',
          default: ''
        },{
          parameter: 'overflowCount',
          explain: '展示封顶的数字值',
          type: 'Number',
          default: '99'
        },{
          parameter: 'dot',
          explain: '不展示数字，只有一个小红点',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'show',
          explain: '是否显示',
          type: 'boolean',
          default: 'false'
        }
      ]
    }
  },
  computed: {
    code: function () {
      var str = ["<v-badge :count=\"25\"></v-badge>",
                  "<v-badge :count=\"4\" :styles=\"{ backgroundColor: \'#fff\', color: \'#999\', borderColor: \'#d9d9d9\' }\"></v-badge>",
                  "<v-badge :count=\"109\" :styles=\"{ backgroundColor: \'#87d068\' }\"></v-badge>"].join("");
      return str
    }
  },
  methods: {
    reduce(){
      if (this.num < 0) {
        this.num = 0
      }else{
        this.num --
      }
    }
  },
  components: {
    vBadge,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">

.head-example{
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: #eee;
  display: inline-block;
}

.anticon-notification {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
}

.ant-badge {
    margin-right: 16px;
}

</style>
