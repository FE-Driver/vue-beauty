<template lang="html">
  <div>
    <section class="markdown">
      <h1>Progress 进度条</h1>
      <p>
        进度条，展示操作的当前进度。
      </p>
      <h2>何时使用</h2>
      <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
      <ul>
        <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li>
        <li>当需要显示一个操作完成的百分比时。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">
        <code-box title="进度条" describe="有normal、exception、active、success四个样式的进度条,默认为normal值,当进度为100时自动设置为success">
          <v-progress-line :percent="30" description="普通的进度条"></v-progress-line>
          <v-progress-line :percent="50" status="active"></v-progress-line>
          <v-progress-line :percent="70" status="exception"></v-progress-line>
          <v-progress-line :percent="100"></v-progress-line>
          <v-progress-line :percent="50" :show-info="false"></v-progress-line>
        </code-box>

        <code-box title="小型进度条" describe="通过设置strokeWidth,可以更灵活地使用进度条">
          <v-progress-line :percent="30"  :stroke-width="5"></v-progress-line>
          <v-progress-line :percent="50"  :stroke-width="5" status="active"></v-progress-line>
          <v-progress-line :percent="70"  :stroke-width="5" status="exception"></v-progress-line>
          <v-progress-line :percent="100" :stroke-width="5"></v-progress-line>
        </code-box>

        <code-box title="动态展示" describe="通过动态的改变进度,可以让进度条更有趣">
          <v-progress-line :percent="percentLine"></v-progress-line>
          <v-button-group>
            <v-button type="ghost" @click="_declineLine">
              <v-icon type="minus"></v-icon>
            </v-button>
            <v-button type="ghost" @click="_increaseLine">
              <v-icon type="plus"></v-icon>
            </v-button>
          </v-button-group>
        </code-box>

      </div>
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box title="进度圈" describe="有normal、exception、success三个样式的进度条,默认为normal值,当进度为100时自动设置为success">
          <v-progress-circle :percent="30"></v-progress-circle>
          <v-progress-circle :percent="70" status="exception"></v-progress-circle>
          <v-progress-circle :percent="100"></v-progress-circle>
        </code-box>

        <code-box title="小型进度圈" describe="通过设置width,可以更灵活地使用进度圈">
          <v-progress-circle :percent="30"  :width="80"></v-progress-circle>
          <v-progress-circle :percent="70"  :width="80" status="exception"></v-progress-circle>
          <v-progress-circle :percent="100" :width="80"></v-progress-circle>
        </code-box>

        <code-box title="进度圈动态展示" describe="通过动态的改变进度,可以让进度圈更有趣">
          <v-progress-circle :percent="percentCircle"></v-progress-circle>
          <v-button-group>
            <v-button type="ghost" @click="_declineCircle">
              <v-icon type="minus"></v-icon>
            </v-button>
            <v-button type="ghost" @click="_increaseCircle">
              <v-icon type="plus"></v-icon>
            </v-button>
          </v-button-group>
        </code-box>

      </div>
    </div>

    <api-table
      title="Progress Bar API"
      :apis='progressBarApis'
    ></api-table>

    <api-table
      title="Progress Circle API"
      :apis='progressCircleApis'
    ></api-table>
  </div>
</template>

<script>
import { vProgressLine, vProgressCircle } from '../../components/progress'
import vButton from '../../components/button/button.vue'
import vButtonGroup from '../../components/button/buttonGroup.vue'
import vIcon from '../../components/iconfont'

import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data () {
    return {
      percentLine: 10,
      percentCircle: 10,
      progressBarApis: [{
        parameter: 'percent',
        explain: '百分比',
        type: 'Number',
        default: 0
      }, {
        parameter: 'status',
        explain: '状态，有normal、exception、active、success四个状态值',
        type: 'String',
        default: 'normal'
      }, {
        parameter: 'strokeWidth',
        explain: '进度条线的宽度，单位是px',
        type: 'Number',
        default: 1
      }, {
        parameter: 'showInfo',
        explain: '是否显示进度数值和状态图标',
        type: 'Boolean',
        default: true
      }],
      progressCircleApis: [{
        parameter: 'percent',
        explain: '百分比',
        type: 'Number',
        default: 0
      }, {
        parameter: 'status',
        explain: '状态，有normal、exception、success三个状态值',
        type: 'String',
        default: 'normal'
      }, {
        parameter: 'strokeWidth',
        explain: '进度圈线的宽度，单位是进度圈画布宽度的百分比',
        type: 'Number',
        default: 1
      }, {
        parameter: 'width',
        explain: '必填，进度圈画布宽度，单位px。这里没有提供height属性设置，Line型高度就是strokeWidth，Circle型高度等于width',
        type: 'Number',
        default: 'null'
      }]
    }
  },

  components: {
    vProgressLine,
    vProgressCircle,
    vButtonGroup,
    vButton,
    vIcon,
    codeBox,
    apiTable
  },

  methods: {
    _declineLine () {
      let percent = this.percentLine - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percentLine = percent
    },

    _increaseLine () {
      let percent = this.percentLine + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percentLine = percent
    },

    _declineCircle () {
      let percent = this.percentCircle - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percentCircle = percent
    },

    _increaseCircle () {
      let percent = this.percentCircle + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percentCircle = percent
    }
  }

}

</script>
