<template lang="html">

  <div>

    <section class="markdown">
      <h1>Select选择器</h1>
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
          title="简单"
          describe="最简单的用法。"
        >
          <v-Select placeholder="请选择人员" style="width: 120px;" :options="options" value="" @change="change"></v-Select>
          <v-Select placement="top" style="width: 120px;" :options="options" :value.sync="value"></v-Select>
          <v-Select :disabled="true" style="width: 120px;" value=""></v-Select>
          <template slot="js">
          export default {
            data: function() {
              return {
                options: [{value: '1', text: 'lady'}, {value: '2', text: '小强', disabled: true}, {value: '3', text: '小明'}],
                value: '3'
              }
            },
            methods:{
              change(val){
                console.log(val)
              }
            }
          }
          </template>
        </code-box>
        <code-box
          title="带搜索框"
          describe="展开后可对选项进行搜索。"
        >
          <v-Select :search="true" style="width: 120px;" :options="options" value=""></v-Select><br><br>
          <v-Select :search="true" :multiple="true" style="width: 100%" :options="options" :value="[]"></v-Select>
          <template slot="js">
          export default {
            data: function() {
              return {
                options: [{value: '1', text: 'lady'}, {value: '2', text: '小强', disabled: true}, {value: '3', text: '小明'}]
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="分组"
          describe="用嵌套的数据结构进行选项分组。"
        >
          <v-Select style="width: 200px" :options="groupOpt" :value="'lp'"></v-Select>
          <v-Select style="width: 200px" :multiple="true" :options="groupOpt" :value="['lp']"></v-Select>
          <template slot="js">
          export default {
            data: function() {
              return {
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
                ]
              }
            }
          }
          </template>
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
          <template slot="js">
          export default {
            data: function() {
              return {
                options: [{value: '1', text: 'lady'}, {value: '2', text: '小强', disabled: true}, {value: '3', text: '小明'}],
                value: '3'
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="多选"
          describe="多选，从已有条目中选择（scroll the menu）"
        >
          <v-Select style="width: 100%;" :multiple="true" :options="options" :value="['3']"></v-Select>
          <template slot="js">
          export default {
            data: function() {
              return {
                options: [{value: '1', text: 'lady'}, {value: '2', text: '小强', disabled: true}, {value: '3', text: '小明'}]
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="远程搜索"
          describe="从服务器搜索数据，输入关键字进行查找"
        >
          <v-Select style="width: 200px" :search="true" :loading="loading" :remote-method="remoteMethod" :options="remoteOption"></v-Select><br><br>
          <v-Select style="width: 100%" :search="true" :multiple="true" :loading="loading2" :remote-method="remoteMethod2" :options="remoteOption"></v-Select>
          <template slot="js">
          export default {
            data: function() {
              return {
                list: [],
                states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"],
                loading: false,
                loading2: false,
                remoteOption: []
              }
            },
            ready(){
              this.list = this.states.map(item => {
                return { value: item, text: item };
              });
            },
            methods:{
              remoteMethod(query) {
                if (query !== '') {
                  this.loading = true;
                  setTimeout(() => {
                    this.loading = false;
                    this.remoteOption = this.list.filter(item => {
                      return item.text.toLowerCase()
                        .indexOf(query.toLowerCase()) > -1;
                    });
                  }, 200);
                } else {
                  this.remoteOption = [];
                }
              },
              remoteMethod2(query) {
                if (query !== '') {
                  this.loading2 = true;
                  setTimeout(() => {
                    this.loading2 = false;
                    this.remoteOption = this.list.filter(item => {
                      return item.text.toLowerCase()
                        .indexOf(query.toLowerCase()) > -1;
                    });
                  }, 200);
                } else {
                  this.remoteOption = [];
                }
              }
            }
          }
          </template>
        </code-box>
      </v-Col>
    </v-Row>


    <api-table :content='content'></api-table>
    <api-table
      title=""
      type="events"
      :content='eventContent'
    >
      <h3>Select Events</h3>
    </api-table>
    <api-table
      title=""
      :content='optionCont'
    >
      <h3>Options Attributes</h3>
    </api-table>
  </div>

</template>

<script>
  import codeBox from '../components/codeBox'
  import apiTable from '../components/apiTable'

  export default {
    data: function () {
      return {
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
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],
        list: [],
        loading: false,
        loading2: false,
        remoteOption: [],
        content: [
          [
            'key',
            '选项的value',
            'String',
            'value'
          ],
          [
            'label',
            '选项显示的文本',
            'String',
            'text'
          ],
          [
            'groupLabel',
            '分组的title',
            'String',
            'label'
          ],
          [
            'multiple',
            '是否支持多选',
            'Boolean',
            'false'
          ],
          [
            'notFoundContent',
            '当下拉列表为空时显示的内容',
            'String',
            '没有找到'
          ],
          [
            'placement',
            '下拉框出现的位置(top、bottom)',
            'String',
            'bottom'
          ],
          [
            'search',
            '是否可以搜索',
            'Boolean',
            'false'
          ],
          [
            'maxHeight',
            '下拉框的最大高度',
            'Number',
            '300'
          ],
          [
            'disabled',
            '控件是否禁用',
            'Boolean',
            'false'
          ],
          [
            'allowClear',
            '支持清除, 单选模式有效',
            'Boolean',
            'true'
          ],
          [
            'value',
            '指定默认选中的条目',
            'String/Array',
            '-'
          ],
          [
            'placeholder',
            '选择框默认文字',
            'String',
            '请选择'
          ],
          [
            'options',
            '下拉框的数据',
            'Array',
            '[]'
          ],
          [
            'size',
            '选择框大小，可选 lg sm',
            'String',
            '-'
          ],
          [
            'loading',
            '呈现加载样式（一般用于从远程获取数据）',
            'Boolean',
            'false'
          ],
          [
            'loadingText',
            '加载时显示的文字',
            'String',
            '加载中...'
          ],
          [
            'remoteMethod',
            '远程搜索方法',
            'Function',
            '-'
          ],
          [
            'position',
            '下拉框的定位方式（absolute,fixed）',
            'String',
            'absolute'
          ],
          [
            'popupContainer',
            '下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
            'Function',
            '() => document.body'
          ]
        ],
        optionCont: [
          [
            'label',
            '组名(有这个字段代表这是个分组数据，只支持一级,该字段可通过select的groupLabel属性修改)',
            'String',
            '-'
          ],
          [
            'data',
            '分组的数据',
            'Array',
            '-'
          ],
          [
            'value',
            '选项的值(该字段可通过select的key属性修改)',
            'String/Number/Object',
            '-'
          ],
          [
            'text',
            '选项的标签(该字段可通过select的label属性修改)',
            'String',
            '-'
          ],
          [
            'disabled',
            '是否禁用',
            'Boolean',
            'false'
          ]
        ],
        eventContent: [
          ['change',
          '选择的值发生变化的时候触发',
          'value']
        ]
      }
    },
    ready(){
      this.list = this.states.map(item => {
        return { value: item, text: item };
      });
    },
    methods:{
      change(val){
        console.log(val)
      },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.remoteOption = this.list.filter(item => {
              return item.text.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.remoteOption = [];
        }
      },
      remoteMethod2(query) {
        if (query !== '') {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
            this.remoteOption = this.list.filter(item => {
              return item.text.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.remoteOption = [];
        }
      }
    },
    components: {
      codeBox,
      apiTable
    }
  }
</script>