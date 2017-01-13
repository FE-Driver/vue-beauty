<template lang="html">

  <div>

    <section class="markdown">
      <h1>QueueAnim 进出场动画</h1>
      <p>
        通过简单的配置对一组元素添加串行的进场动画效果。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>从内容A到内容B的转变过程时能有效的吸引用户注意力，突出视觉中心，提高整体视觉效果。</li>
        <li>小的信息元素排布或块状较多的情况下，根据一定的路径层次依次进场，区分维度层级，来凸显量级，使页面转场更加流畅和舒适，提高整体视觉效果和产品的质感。</li>
        <li>特别适合首页和需要视觉展示效果的宣传页，以及单页应用的切换页面动效。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="默认"
          describe="最简单的进场例子。"
        >
          <v-queue-anim :delay="1000">
            <div key="a">依次进场</div>
            <div key="b">依次进场</div>
            <div key="c">依次进场</div>
            <div key="d">依次进场</div>
            <div key="e">依次进场</div>
            <div key="f">依次进场</div>
          </v-queue-anim>
        </code-box>

        <code-box
          title="进场和离场"
          describe="通过把属性设置一个数组来分别表示进出场的效果，type、animConfig、delay、duration、interval、ease 等属性均支持配置为数组。"
        >
          <v-queue-anim class="demo-content" key="demo"
            :show="show"
            :type="['right', 'left']"
            :ease="['easeOutQuart', 'easeInOutQuart']">
            <div class="demo-kp" key="a">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="demo-listBox" key="b">
              <div class="demo-list">
                <div class="title"></div>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </v-queue-anim>
          <p class="buttons">
            <v-button type="primary" @click="_handleClick">切换</v-button>
          </p>
          <template slot="js">
            export default{
              data:function(){
                return {
                  show :false
                }
              },
              methods:{
                _handleClick :function(){
                  this.show = !this.show;
                }
              }
            }
          </template>
        </code-box>

        <code-box
          title="表单动画进出场"
          describe="表单组合的进场与出场动画。"
        >
          <v-queue-anim class="ant-form-horizontal" type="bottom"
            :leave-reverse="true"
            :show="show">
            <v-form direction="horizontal">
              <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol" key="name">
                <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
              </v-form-item>
              <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" key="password">
                <v-input type="password" placeholder="请输入密码" size="large"></v-input>
              </v-form-item>
              <v-form-item label="您的性别" :label-col="labelCol" :wrapper-col="wrapperCol" key="sex">
                <v-radio-group
                  default-value='female'
                  :radios="[{value: 'male', name: '男的'},{value: 'female', name: '女的'}]">
                </v-radio-group>
              </v-form-item>
              <v-form-item label="备注" :label-col="labelCol" :wrapper-col="wrapperCol" key="remark">
                <v-input type='textarea' placeholder="随便写"></v-input>
              </v-form-item>
              <v-form-item :wrapper-col="{span:16,offset:6}" style="margin-top:24px" key="btn">
                <v-button type='primary' html-type="submit">确定</v-button>
              </v-form-item>
            </v-form>
          </v-queue-anim>
          <p class="buttons">
            <v-button type="primary" @click="_handleClick">切换</v-button>
          </p>
          <template slot="js">
            export default{
              data:function(){
                return {
                  show :false,
                  labelCol : { span: 6 },
                  wrapperCol: { span: 14 }
                }
              },
              methods:{
                _handleClick :function(){
                  this.show = !this.show;
                }
              }
            }
          </template>
        </code-box>

        <code-box
          title="一个复杂些的例子"
          describe="模拟一个完整的页面。"
        >
          <v-queue-anim
            :show="show"
            :type="['right', 'left']">
            <div class="demo-header" key="header">
              <div class="logo">
                <img width="30" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                <span>logo</span>
              </div>
              <v-queue-anim>
                <ul>
                  <li key="0"></li>
                  <li key="1"></li>
                  <li key="2"></li>
                  <li key="3"></li>
                  <li key="4"></li>
                </ul>
              </v-queue-anim>
            </div>
            <v-queue-anim class="demo-content" key="content" :delay="300">
              <div class="demo-title" key="title">我是标题</div>
              <v-queue-anim class="demo-kp" key="b">
                <v-queue-anim>
                  <ul>
                    <li key="0"></li>
                    <li key="1"></li>
                    <li key="2"></li>
                  </ul>
                </v-queue-anim>
              </v-queue-anim>
              <div class="demo-title" key="title2">我是标题</div>
              <div class="demo-listBox">
                <v-queue-anim class="demo-list"
                  :delay="500">
                  <div class="title" key="title3"></div>
                  <v-queue-anim type="bottom" key="li">
                    <ul>
                      <li key="0"></li>
                      <li key="1"></li>
                      <li key="2"></li>
                      <li key="3"></li>
                      <li key="4"></li>
                    </ul>
                  </v-queue-anim>
                </v-queue-anim>
              </div>
            </v-queue-anim>
            <v-queue-anim type="bottom"
              :delay="1000" key="footerBox">
              <div class="demo-footer" key="footer"></div>
            </v-queue-anim>
          </v-queue-anim>
          <p class="buttons">
            <v-button type="primary" @click="_handleClick">切换</v-button>
          </p>
          <template slot="js">
            export default{
              data:function(){
                return {
                  show :false
                }
              },
              methods:{
                _handleClick :function(){
                  this.show = !this.show;
                }
              }
            }
          </template>
        </code-box>
      </v-col>
      <v-Col span="12">

        <code-box
          title="进场和离场"
          describe="同时支持进场和离场动画。"
        >
          <v-queue-anim :show="show" class="demo-content">
            <div class="demo-kp" key="a">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="demo-listBox" key="b">
              <div class="demo-list">
                <div class="title"></div>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </v-queue-anim>
          <p class="buttons">
            <v-button type="primary" @click="_handleClick">切换</v-button>
          </p>
          <template slot="js">
            export default{
              data:function(){
                return {
                  show :false
                }
              },
              methods:{
                _handleClick :function(){
                  this.show = !this.show;
                }
              }
            }
          </template>
        </code-box>

        <code-box
          title="自定义动画进出场"
          describe="通过 animConfig 来自定义动画进出场。"
        >
          <v-queue-anim class="demo-content"
            :show="show"
            :anim-config="[{ opacity: [1, 0], translateY: [0, 50] },{ opacity: [1, 0], translateY: [0, -50] }]">
            <div class="demo-kp" key="a">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="demo-listBox" key="b">
              <div class="demo-list">
                <div class="title"></div>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </v-queue-anim>
          <p class="buttons">
            <v-button type="primary" @click="_handleClick">切换</v-button>
          </p>
          <template slot="js">
            export default{
              data:function(){
                return {
                  show :false;
                }
              },
              methods:{
                _handleClick :function(){
                  this.show = !this.show;
                }
              }
            }
          </template>
        </code-box>

        <code-box
          title="添加与删除"
          describe="场景里有增加或删除条目时也会触发动画。"
        >
          <div class="demo-content">
              <div class="demo-listBox" key="b">
                <div class="demo-list">
                  <div class="title"></div>
                  <v-queue-anim :type="['right', 'left']" :watch-value="items" :show="show">
                    <ul>
                      <li v-for="item in items" :key="Date.now()"></li>
                    </ul>
                  </v-queue-anim>
                </div>
              </div>
          </div>
          <p class="buttons">
            <v-button type="primary" @click="_handleClick">切换</v-button>
            <v-button @click="_handleAdd" style="margin-left: 10px">添加</v-button>
            <v-button @click="_handleRemove" style="margin-left: 10px">删除</v-button>
          </p>
          <template slot="js">
            export default{
              data:function(){
                return {
                  show :false,
                  items: ['1', '2', '3'],
                }
              },
              methods:{
                _handleClick :function(){
                  this.show = !this.show;
                },
                _handleAdd () {
                  const len = this.items.length + 1;
                  this.items.push(`${len}`);
                },
                _handleRemove () {
                  this.items.pop();
                }
              }
            }
          </template>
        </code-box>

      </v-col>
    </v-row>
    <section class="markdown">
        <h3>API</h3>
        <p>元素依次进场</p>
        <pre>
          <code class="html">&lt;v-queue-anim&gt;
              &lt;div key='demo1'&gt;依次进场&lt;/div&gt;
              &lt;div key='demo2'&gt;依次进场&lt;/div&gt;
              &lt;div key='demo3'&gt;依次进场&lt;/div&gt;
              &lt;div key='demo4'&gt;依次进场&lt;/div&gt;
            &lt;/v-queue-anim&gt;</code>
        </pre>
        <blockquote>
          <p>每个子标签必须带 key，如果未设置 key 将不执行动画。</p>
        </blockquote>
     </section>
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
      content:[
        [
          'show',
          '控制queueAnim组件的显示隐藏',
          'bool',
          'true'
        ],
        [
          'type',
          '动画内置参数 left right top bottom scale scaleBig scaleX scaleY',
          'string / array',
          'right'
        ],
        [
          'animConfig',
          '配置动画参数 如 {opacity:[1, 0],translateY:[0, -30]} 具体参考 velocity 的写法',
          'object / array',
          'null'
        ],
        [
          'delay',
          '整个动画的延时,以毫秒为单位',
          'number / array',
          '0'
        ],
        [
          'duration',
          '每个动画的时间,以毫秒为单位',
          'number / array',
          '500'
        ],
        [
          'interval',
          '每个动画的间隔时间,以毫秒为单位',
          'number / array',
          '100'
        ],
        [
          'leaveReverse',
          '出场时是否倒放,从最后一个 dom 开始往上播放',
          'boolean',
          'false'
        ],
        [
          'ease',
          '动画的缓动函数,<a href="http://velocityjs.org/#easing" target="_blank">查看详细</a>',
          'string / array',
          'easeOutQuart'
        ],
        [
          'animatingClassName',
          '进出场动画进行中的类名',
          'array',
          "['queue-anim-entering', 'queue-anim-leaving']"
        ]
      ],
      items: ['1', '2', '3'],
      show: true,
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  },
  components: {
    codeBox,
    apiTable
  },
  methods: {
    _handleClick () {
      this.show = !this.show
    },

    _handleAdd () {
      const len = this.items.length + 1
      this.items.push(`${len}`)
    },

    _handleRemove () {
      this.items.pop()
    }
  }
}
</script>

<style scoped>
.code-box-demo .demo-header {
  width: 100%;
  background: #ebedee;
  height: 30px;
}
.code-box-demo .demo-header ul {
  float: right;
  margin-right: 5px;
}
.code-box-demo .demo-header ul li {
  width: 50px;
  height: 30px;
  float: left;
  background: #e4e4e4;
  margin-left: 5px;
}
.code-box-demo .demo-header ul li:before {
  margin: 10px auto;
  width: 20px;
  height: 10px;
  background: #ebeded;
}
.code-box-demo .demo-header .logo {
  float: left;
  margin: 0px auto 0 10px;
  line-height: 32px;
}
.code-box-demo .demo-header .logo img{
  margin:auto
}
.code-box-demo .demo-header .logo span {
  display: block;
  float: right;
}
.code-box-demo .demo-content {
  width: 80%;
  margin: 10px auto;
}
.code-box-demo .demo-content .demo-title {
  text-align:left;
  background: #a4a4a4;
  width: 40%;
  height: 20px;
  line-height: 20px;
  color: #ebeded;
  text-indent:10px
}
.code-box-demo .demo-content .demo-listBox {
  margin-top: 10px;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title {
  height: 30px;
  background: #cacaca;
  overflow: hidden;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title:before,.code-box-demo .demo-content .demo-listBox .demo-list .title:after{
  width: 30%;
  height: 5px;
  background: #ebeded;
  float:left;
  margin:12px 35px 0;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title:after{
  width:15%;
  float:right;
  margin:12px 10px 0;

}
.code-box-demo .demo-content .demo-listBox .demo-list ul li {
  height: 25px;
  background: #ebeded;
  border-bottom: 1px solid #cacaca;
  overflow: hidden;
  padding: 5px 15px;
}
.code-box-demo .demo-content .demo-listBox .demo-list ul li:before {
  width: 10px;
  height: 5px;
  background: #cacaca;
  float: left;
  margin-top:4px
}
.code-box-demo .demo-content .demo-listBox .demo-list ul li:after {
  width: 50%;
  height: 5px;
  background: #cacaca;
  float: left;
  margin-left: 10px;
  margin-top: 4px;
}
.code-box-demo .demo-content .demo-kp {
  margin: 10px auto;
}
.code-box-demo .demo-content .demo-kp ul li {
  display: inline-block;
  width: 30%;
  height: 40px;
  background: #cacaca;
  color: #ebeded;
  text-align: left;
  padding: 10px;
  margin-right: calc(2%);
}
.code-box-demo .demo-content .demo-kp ul li:last-child {
  margin-right: 0%;
}
.code-box-demo .demo-content .demo-kp ul li:after {
  width: 60%;
  height: 5px;
  background: #ebeded;
  float: left;
  margin-top: 7px;
}
.code-box-demo .demo-content .demo-kp ul li:before {
  background: #ebeded;
  float: left;
  width: 15px;
  height: 15px;
  margin:2px 10% 0 0;

}
.code-box-demo .demo-footer {
  margin-top: 10px;
  background: #cacaca;
  height: 40px;
  float: left;
  width: 100%;
  display: table;
}
.code-box-demo .demo-footer:before {
  width: 60%;
  height: 5px;
  background: #ededed;
  margin: 10px auto 0;
}
.code-box-demo .demo-footer:after {
  width: 30%;
  height: 5px;
  background: #ededed;
  margin: 5px auto;
}
.code-box-demo .demo-header ul li:before,
.code-box-demo .demo-content .demo-kp ul li:before,
.code-box-demo .demo-content .demo-kp ul li:after,
.code-box-demo .demo-content .demo-listBox .demo-list .title:before,
.code-box-demo .demo-content .demo-listBox .demo-list .title:after,
.code-box-demo .demo-content .demo-listBox .demo-list ul li:before,
.code-box-demo .demo-content .demo-listBox .demo-list ul li:after,
.code-box-demo .demo-footer:before,
.code-box-demo .demo-footer:after {
  display: block;
  content: "";
}
.code-box-demo .buttons {
  text-align: center;
  padding-top: 20px;
  clear: both;
}
.demo-list ul li {
    height: 25px;
    background: #ebeded;
    border-bottom: 1px solid #cacaca;
    overflow: hidden;
    padding: 5px 15px;
}
.code-box-demo .ant-form-horizontal{
  max-width: 540px
}
</style>