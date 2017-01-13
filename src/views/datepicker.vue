<template lang="html">

  <div>

    <section class="markdown">
      <h1>DatePicker 日期选择框</h1>
      <p>
        输入或选择日期的控件。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="基础"
          describe="最简单的用法，在浮层中可以选择或者输入日期">
          <v-datepicker :clearable="true"></v-datepicker><br><br>
          <v-datepicker :range="true" :clearable="true" @confirm="confirm"></v-datepicker>
          <template slot="js">
          export default {
            methods: {
              confirm(){
                console.log('confirm')
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="三种大小"
          describe="三种大小的输入框，若不设置，则为 default。">
          <v-datepicker size="small"></v-datepicker><br><br>
          <v-datepicker></v-datepicker><br><br>
          <v-datepicker :range="true" size="large"></v-datepicker>
        </code-box>

        <code-box
          title="禁用"
          describe="选择框的不可用状态。">
          <v-datepicker :disabled="true"></v-datepicker>
        </code-box>

      </v-Col>

      <v-Col span="12">

        <code-box
          title="日期格式"
          describe="使用 format 属性，可以自定义日期显示格式。">
          <v-datepicker time='2015-12-06' format="yyyy/MM/dd" @change='change'></v-datepicker><br><br>
          <v-datepicker :range="true" start-time='2015-12-06' end-time='2016-12-06' format="yyyy/MM/dd" @change="rangeChange"></v-datepicker>
          <template slot="js">
          export default {
            methods: {
              change(time){
                console.log(time)
              },
              rangeChange(startTime,endTime){
                console.log(startTime,endTime)
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="日期时间选择"
          describe="增加选择时间功能">
          <v-datepicker :clearable="true" :show-time="true" time='2015-12-06 23:12'></v-datepicker><br><br>
          <v-datepicker :range="true" :show-time="true" start-time='2015-12-06 23:12' end-time='2016-12-06 23:12' :clearable="true"></v-datepicker>
        </code-box>

        <code-box
          title="不可选用日期和时间"
          describe="可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。">
          <v-datepicker :show-time="true" :disabled-date="disabledDate" :disabled-time="disabledTime()"></v-datepicker><br><br>
          <v-datepicker :range="true" :show-time="true" :disabled-date="disabledDate" :disabled-time="disabledRangeTime()"></v-datepicker>
          <template slot="js">
          export default {
            methods: {
              range (start, end){
                  const result = [];
                  for (let i = start; i < end; i++) {
                      result.push(i);
                  }
                  return result;
              },
              disabledDate(current){
                return current && current.valueOf() < Date.now();
              },
              disabledTime(){
                return [{
                  disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
                  disabledMinutes: (m) => this.range(30, 60).includes(m)
                }]
              },
              disabledRangeTime(){
                return [{ 
                  disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
                  disabledMinutes: (m) => this.range(30, 60).includes(m)
                },{
                  disabledHours: (h) => this.range(0, 60).splice(20, 4).includes(h),
                  disabledMinutes: (m) => this.range(0, 31).includes(m)
                }]
              }
            }
          }
          </template>
        </code-box>

      </v-Col>
    </v-Row>

    <api-table
      :content='content'
    ></api-table>

    <api-table
      type="events"
      title=""
      :content='eventsApi'
    ></api-table>

  </div>

</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      content: [
        [
          'style',
          '自定义输入框样式',
          'object',
          '-'
        ],
        [
          'size',
          '输入框大小，large 高度为 32px，small 为 22px，默认是 28px',
          'string',
          '-'
        ],
        [
          'placeholder',
          '占位提示符',
          'string',
          '请选择日期'
        ],
        [
          'position',
          '下拉框的定位方式(absolute、fixed)',
          'string',
          'absolute'
        ],
        [
          'popupContainer',
          '下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
          'Function',
          '() => document.body'   
        ],
        [
          'range',
          '能否进行范围选择',
          'boolean',
          'false'
        ],
        [
          'showTime',
          '增加时间选择功能',
          'boolean',
          'false'
        ],
        [
          'time',
          '默认日期',
          'string',
          '-'
        ],
        [
          'startTime',
          '开始时间',
          'string',
          '-'
        ],
        [
          'endTime',
          '结束时间',
          'string',
          '-'
        ],
        [
          'maxRange',
          '选择最大范围限制,以天为单位（只有range为true的时候才起作用）',
          'number string',
          'false'
        ],
        [
          'clearable',
          '是否显示清除按钮',
          'boolean',
          'false'
        ],
        [
          'format',
          '展示的日期格式',
          'string',
          'yyyy-MM-dd'
        ],
        [
          'disabled',
          '禁用',
          'boolean',
          'false'
        ]
      ],
      eventsApi: [
        [
          'change',
          '时间发生变化的时候触发',
          'function(time) or function(startTime, endTime)'
        ],
        [
          'confirm',
          '点击确定按钮时触发',
          '-'
        ]
      ]
    }
  },
  methods: {
    range (start, end){
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    },
    confirm(){
      console.log('confirm')
    },
    change(time){
      console.log(time)
    },
    rangeChange(startTime,endTime){
      console.log(startTime,endTime)
    },
    disabledDate(current){
      return current && current.valueOf() < Date.now();
    },
    disabledTime(){
      return [{
        disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
        disabledMinutes: (m) => this.range(30, 60).includes(m)
      }]
    },
    disabledRangeTime(){
      return [{ 
        disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
        disabledMinutes: (m) => this.range(30, 60).includes(m)
      },{
        disabledHours: (h) => this.range(0, 60).splice(20, 4).includes(h),
        disabledMinutes: (m) => this.range(0, 31).includes(m)
      }]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>