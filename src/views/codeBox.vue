<template lang="html">

  <div>

    <section class="markdown">
      <h1>CodeBox 代码示例</h1>
      <p>
        用于展示组件代码。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          组件说明文档的代码展示。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col>

        <code-box
          title="基本"
          describe="基本用法"
        >
          <code-box
            title="基本"
            describe="button基本用法"
          >
            <v-button>Default</v-button>
          </code-box>
        </code-box>

        <code-box
          title="code"
          describe="自定义示例代码"
        >
          <code-box
            title="基本"
            describe="button基本用法"
            code="自定义<v-button>Default</v-button>自定义"
          >
            <v-button>Default</v-button>
          </code-box>
        </code-box>

        <code-box
          title="code"
          describe="js和css"
        >
          <code-box
            title="基本"
            describe="button基本用法"
          >
            <template slot="css">
              #components-form-demo-normal-login .login-form {
                max-width: 300px;
              }
              #components-form-demo-normal-login .login-form-forgot {
                float: right;
              }
            </template>
            <v-button>Default</v-button>
            <v-button>Default</v-button>
            <div>
              <div>
                123123
              </div>
              <div>
                <div>
                  343fcdfc
                </div>
              </div>
            </div>
            <template slot="js">
            export default {
              data: function () {
                return {
                  content: [
                    aaa: {
                      aaa:{
                        asdasd
                      }
                    }
                    [
                      'title',
                      '标题',
                      'string',
                      '无'
                    ]
                  ]
                }
              }
            }
            </template>
          </code-box>
        </code-box>

      </v-col>
    </v-row>


    <api-table
      :content='content'
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
          'title',
          '标题',
          'string',
          '无'
        ],
        [
          'describe',
          '对该组件的描述',
          'string',
          '无'
        ],
        [
          'code',
          '组件的HTML示例代码，如果没有将直接使用slot::default的内容',
          'string',
          '无'
        ],
        [
          'slot:default',
          '组件的插槽，用于演示',
          'slot node',
          '无'
        ],
        [
          'slot:js',
          '组件的JS示例代码',
          'slot node',
          '无'
        ],
        [
          'slot:css',
          '组件的CSS示例代码',
          'slot node',
          '无'
        ]
      ]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>