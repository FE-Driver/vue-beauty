<template lang="html">

  <div>

    <section class="markdown">
      <h1>Steps 步骤条</h1>
      <p>
        引导用户按照流程完成任务的导航条。
      </p>
      <h2>何时使用</h2>
      <p>
        当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。
      </p>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-24 code-boxes-col-2-1">

        <code-box
          title="基本用法"
          describe="简单的步骤条。"
          code='import Steps from "../../components/steps"
const Step = Steps.vStep

<Steps :current="1">
  <Step title="已完成" description="这里是多信息的描述" ></Step>
  <Step title="进行中" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
</Steps>
'
        >
          <Steps :current="1">
            <Step title="已完成" description="这里是多信息的描述" ></Step>
            <Step title="进行中" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
          </Steps>
        </code-box>

        <code-box
          title="迷你版"
          describe="迷你版的步骤条，通过设置 <Steps size='small'> 启用."
          code='import Steps from "../../components/steps"
const Step = Steps.vStep

<Steps size="small" :current="1">
  <Step title="已完成" ></Step>
  <Step title="进行中" ></Step>
  <Step title="待运行" ></Step>
  <Step title="待运行" ></Step>
</Steps>
'
        >
          <Steps size="small" :current="1">
            <Step title="已完成" ></Step>
            <Step title="进行中" ></Step>
            <Step title="待运行" ></Step>
            <Step title="待运行" ></Step>
          </Steps>
        </code-box>

        <code-box
          title="带图标的步骤条"
          describe="通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。"
          code='import Steps from "../../components/steps"
const Step = Steps.vStep

<Steps>
  <Step status="finish" title="步骤1" icon="cloud" ></Step>
  <Step status="process" title="步骤2" icon="apple" ></Step>
  <Step status="wait" title="步骤3" icon="github" ></Step>
</Steps>'
        >
          <Steps>
            <Step status="finish" title="步骤1" icon="cloud" ></Step>
            <Step status="process" title="步骤2" icon="apple" ></Step>
            <Step status="wait" title="步骤3" icon="github" ></Step>
          </Steps>
        </code-box>

        <code-box
          title="带图标的步骤条"
          describe="通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。"
          code='import Steps from "../../components/steps"
const Step = Steps.vStep

current: 1,
steps: [
  {
    title: "步骤1",
  },
  {
    title: "步骤2",
  },
  {
    title: "步骤3",
  },
  {
    title: "步骤4",
  }
],

next() {
  if (this.current < this.steps.length) {
    this.current ++
  }else{
    this.current = 1
  }
}

<div>
  <div style="margin-bottom: 24px">当前正在执行第 {{current}} 步</div>
  <Steps :current="current - 1">
    <Step :key="$index" :title="s.title" v-for="s in steps" ></Step>
  </Steps>
  <div style="margin-top: 24px">
    <button type="button" name="button" class="ant-btn" @click="next">下一步</button>
  </div>
</div>
'
        >
          <div>
            <div style="margin-bottom: 24px">当前正在执行第 {{current}} 步</div>
            <Steps :current="current - 1">
              <Step :key="$index" :title="s.title" v-for="s in steps" ></Step>
            </Steps>
            <div style="margin-top: 24px">
              <button type="button" name="button" class="ant-btn" @click="next">下一步</button>
            </div>
          </div>
        </code-box>

        <code-box
          title="竖直方向的步骤条"
          describe="简单的竖直方向的步骤条。"
          code='import Steps from "../../components/steps"
const Step = Steps.vStep

<Steps :current="1" direction="vertical">
  <Step title="已完成" description="这里是多信息的描述" ></Step>
  <Step title="进行中" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
</Steps>
'
        >
          <Steps :current="1" direction="vertical">
            <Step title="已完成" description="这里是多信息的描述" ></Step>
            <Step title="进行中" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
          </Steps>
        </code-box>

        <code-box
          title="竖直方向的步骤条"
          describe="简单的竖直方向的步骤条。"
          code='import Steps from "../../components/steps"
const Step = Steps.vStep

<Steps :current="1" direction="vertical" size="small">
  <Step title="已完成" description="这里是多信息的描述" ></Step>
  <Step title="进行中" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
</Steps>
'
        >
          <Steps :current="1" direction="vertical" size="small">
            <Step title="已完成" description="这里是多信息的描述" ></Step>
            <Step title="进行中" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
          </Steps>
        </code-box>

        <code-box
          title="步骤运行错误"
          describe="使用 Steps 的 status 属性来指定当前步骤的状态。"
          code='import Steps from "../../components/steps"
const Step = Steps.vStep

<Steps :current="1" status="error">
  <Step title="已完成" description="这里是多信息的描述" ></Step>
  <Step title="进行中" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
  <Step title="待运行" description="这里是多信息的描述" ></Step>
</Steps>
'
        >
          <Steps :current="1" status="error">
            <Step title="已完成" description="这里是多信息的描述" ></Step>
            <Step title="进行中" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
            <Step title="待运行" description="这里是多信息的描述" ></Step>
          </Steps>
        </code-box>

      </div>

    </div>

    <api-table
      :apis='apiSteps'
    >
      <h3>Steps</h3>

      <span>整体步骤条。</span>
    </api-table>

    <api-table
      :apis='apiStep'
    >
      <h3>Steps.Step</h3>

      <span>步骤条内的每一个步骤。</span>
    </api-table>

    <div class="" style="height: 400px">

    </div>

  </div>

</template>

<script>

import Steps from '../../components/steps'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'
const Step = Steps.vStep

export default {
  data: function () {
    return {
      current: 1,
      steps: [
        {
          title: "步骤1",
        },
        {
          title: "步骤2",
        },
        {
          title: "步骤3",
        },
        {
          title: "步骤4",
        }
      ],
      apiSteps: [{
          parameter: 'current',
          explain: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态',
          type: 'Number',
          default: '0'
        },{
          parameter: 'status',
          explain: '指定当前步骤的状态，可选 wait process finish error',
          type: 'String',
          default: 'process'
        },{
          parameter: 'size',
          explain: '指定大小，目前支持普通（default）和迷你（small）',
          type: 'String',
          default: 'default'
        },{
          parameter: 'direction',
          explain: '指定步骤条方向。目前支持水平和竖直（vertical）两种方向，默认水平方向）',
          type: 'String',
          default: '无'
        }
      ],
      apiStep: [{
          parameter: 'status',
          explain: '指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error',
          type: 'String',
          default: 'wait'
        },{
          parameter: 'title',
          explain: '标题',
          type: 'String',
          default: '无'
        },{
          parameter: 'description',
          explain: '步骤的详情描述，可选',
          type: 'String',
          default: '无'
        },{
          parameter: 'icon',
          explain: '步骤图标，可选',
          type: 'String',
          default: '无'
        }
      ]
    }
  },
  methods: {
    next() {
      if (this.current < this.steps.length) {
        this.current ++
      }else{
        this.current = 1
      }
    }
  },
  components: {
    Steps,
    Step,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
