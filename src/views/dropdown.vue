<template lang="html">

  <div>

    <section class="markdown">
      <h1>Dropdown 下拉菜单</h1>
      <p>
        向下弹出的列表。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">
        <code-box title="基本" describe="最简单的下拉菜单。">
          <v-dropdown :options="options">
            <a href="javascript:void(0)">Hover me <v-icon type="down"></v-icon></a>
          </v-dropdown>
          <template slot="js">
            export default {
              data: function () {
                return {
                  options2: [
                    {content: '1st item'},
                    {content: '2nd item'},
                    {content: '3rd item'}
                  ]
                }
              }
            }
          </template>
        </code-box>
        <code-box title="触发方式" describe="默认是移入触发菜单，可以点击触发。">
          <v-dropdown :options="options1" trigger="click">
            <a href="javascript:void(0)">Click me <v-icon type="down"></v-icon></a>
          </v-dropdown>
          <template slot="js">
            export default {
              data: function () {
                return {
                  options2: [
                    {content: '1st item'},
                    {content: '2nd item'},
                    {content: '3rd item'}
                  ]
                }
              }
            }
          </template>
        </code-box>
        <code-box title="带下拉框的按钮" describe="可使用按钮触发下拉菜单。">
          <v-dropdown :options="options">
            <v-button>default <v-icon type="down"></v-icon></v-button>
          </v-dropdown>
          <template slot="js">
            export default {
              data: function () {
                return {
                  options2: [
                    {content: '1st item'},
                    {content: '2nd item'},
                    {content: '3rd item',divided: true}
                  ]
                }
              }
            }
          </template>
        </code-box>
      </v-Col>

      <v-Col span="12">
        <code-box title="其他元素" describe="分割线和不可用菜单项。">
          <v-dropdown :options="options2">
            <a href="javascript:void(0)">Hover me <v-icon type="down"></v-icon></a>
          </v-dropdown>
          <template slot="js">
            export default {
              data: function () {
                return {
                  options2: [
                    {content: '1st item'},
                    {content: '2nd item'},
                    {content: '3rd item (disabled)', disabled: true, divided: true}
                  ]
                }
              }
            }
          </template>
        </code-box>
        <code-box title="触发事件" describe="点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。">
          <v-dropdown :options="options2" @itemclick="onClick">
            <a href="javascript:void(0)">Hover me <v-icon type="down"></v-icon></a>
          </v-dropdown>
          <template slot="js">
            export default {
              data: function () {
                return {
                  options2: [
                    {content: '1st item'},
                    {content: '2nd item'},
                    {content: '3rd item (disabled)', disabled: true, divided: true}
                  ]
                }
              },
              methods: {
                onClick(data){
                  alert(data.content + ' clicked!')
                }
              }
            }
          </template>
        </code-box>

        <code-box title="多级菜单" describe="传入的菜单里有多个层级。" >
          <v-dropdown :options="options3">
            <a href="javascript:void(0)">Hover me <v-icon type="down"></v-icon></a>
          </v-dropdown>
          <template slot="js">
            export default {
              data: function () {
                return {
                  options3: [
                    {content: '1st item'},
                    {content: '2nd item'},
                    {
                      content: 'sub',
                      children: [
                        {content: '3rd item'},
                        {
                          content: 'sub-2',
                          children: [
                            {content: '4th item'}
                          ]
                        }
                      ]
                    }
                  ],
                }
              }
            }
          </template>
        </code-box>
      </v-Col>
    </v-row>

    <api-table :content='api'>
      <h3>Dropdown</h3>
    </api-table>

    <api-table title="" :content='optionsApi'>
      <h3>Options Attributes</h3>
    </api-table>

    <api-table title="" type="events" :content='eventsApi'>
      <h3>Dropdown Events</h3>
    </api-table>
  </div>

</template>

<script>
  import codeBox from '../components/codeBox'
  import apiTable from '../components/apiTable'

  export default{
    data: function(){
      return {
        options: [
          {content: '1st item'},
          {content: '2nd item'},
          {content: '3rd item'}
        ],
        options1: [
          {content: '1st item'},
          {content: '2nd item'},
          {content: '3rd item', divided: true}
        ],
        options2: [
          {content: '1st item'},
          {content: '2nd item'},
          {content: '3rd item (disabled)', disabled: true, divided: true}
        ],
        options3: [
          {content: '1st item'},
          {content: '2nd item'},
          {
            content: 'sub',
            children: [
              {content: '3rd item'},
              {
                content: 'sub-2',
                children: [
                  {content: '4th item'}
                ]
              }
            ]
          }
        ],
        api: [
          [
            'options',
            '可选项数据源',
            'Array',
            '-'
          ],
          [
            'trigger',
            '触发方式（hover,click）',
            'String',
            'hover'
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
		optionsApi: [
          [
            'content',
            '可选项数据源',
            'String',
            '-'
          ],
          [
            'disabled',
            '是否禁用',
            'Boolean',
            'false'
          ],
          [
            'divided',
            '是否显示分割线',
            'Boolean',
            'false'
          ]
        ],
        eventsApi: [
          [
            'itemclick',
            '点击菜单项时触发',
            'function(data)'
          ]
        ]
      }
    },
    methods: {
      onClick(data){
        alert(data.content + ' clicked!')
      }
    },
    components: {
      codeBox,
      apiTable
    }
  }
</script>