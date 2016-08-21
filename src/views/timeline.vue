<template lang="html">

  <div>

    <section class="markdown">
      <h1>Timeline 时间轴</h1>
      <p>
        垂直展示的时间流信息
      </p>
      <h2>何时使用</h2>
      <ul>
        <li><p>当有一系列信息需要从上至下按时间排列时；</p></li>
        <li><p>需要有一条时间轴进行视觉上的串联时；</p></li>
      </ul>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本用法"
          describe="基本的时间轴。。"
        >
          <v-timeline>
            <v-timeline-item></v-timeline-item>
          </v-timeline>
        </code-box>

      </div>

    </div>


    <api-table
      :content='content'
    >
      <pre>
          <code class="html">
            &lt;v-queue-anim&gt;
              &lt;div key='demo1'&gt;依次进场&lt;/div&gt;
              &lt;div key='demo2'&gt;依次进场&lt;/div&gt;
              &lt;div key='demo3'&gt;依次进场&lt;/div&gt;
              &lt;div key='demo4'&gt;依次进场&lt;/div&gt;
            &lt;/v-queue-anim&gt;</code>
        </pre>

      <h3>Timeline</h3>
    </api-table>

    <api-table
      :content='content'
    >
      <h3>Timeline.Item</h3>
    </api-table>



  </div>

</template>

<script>

import vTimeline, {vTimelineItem} from '../../components/timeline'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      content:[
        [
          'pending',
          '指定最后一个幽灵节点是否存在或内容',
          'boolean or React.Element', //todo
          'false'
        ]
      ]
    }
  },
  methods: {
  },
  components: {
    vTimeline,
    vTimelineItem,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
