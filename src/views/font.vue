<template lang="html">

  <div>
    <section class="markdown">
      <h1>Iconfont</h1>
      <p>
        有含义的矢量图形，每一个图标打倒一个敌人。
      </p>
      <h2>图标的命名规范</h2>
      <p>
        我们为每个图标赋予了语义化的命名。<br/>
        命名规则如下:
      </p>
      <ul>
        <li>
          实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；
        </li>
        <li>
          命名顺序：[icon名]-[描线与否]-[方向]。
        </li>
      </ul>

      <h2>实现原理</h2>

      <pre><code class="lang-html">&lt;v-icon type="iconname"&gt;&lt;/v-icon&gt;</code></pre>

      <p>所有的 Icon 标签最终会渲染为</p>

      <pre><code class="lang-html">&lt;i class="anticon anticon-iconname"&gt;&lt;/i&gt;</code></pre>
      <p style="color:#ff7800">* 点击下面的图标即可复制标签</p>


      <h2>图标列表</h2>
      <h3>一. 方向性图标</h3>

      <!-- <li class="icon-item" v-for="icon in icons1Obj" :item="icon" :inddex="$index" _v-a8c514bc> -->
      <!-- v-on:click="clickfunc($event)"  index="{{$index}}"  -->

      <ul class="anticons-list">
        <li class="icon-item" v-for="icon in icons1Obj" :class="{copied: Copied}" :data-clipboard-text="_getCopyCode(icon.name)">
          <span class="anticon anticon-{{icon.name}}"></span>
          <span class="anticon-class">{{icon.name}}</span>
        </li>
      </ul>

      <h3>二. 提示建议性图标</h3>

      <ul class="anticons-list">
        <li class="icon-item" v-for="icon in icons2Obj" :class="{copied: Copied}" :data-clipboard-text="_getCopyCode(icon.name)">
          <span class="anticon anticon-{{icon.name}}"></span>
          <span class="anticon-class">{{icon.name}}</span>
        </li>
      </ul>

      <h3>三. 网站通用图标</h3>

      <ul class="anticons-list">
        <li class="icon-item" v-for="icon in icons3Obj" :class="{copied: Copied}" :data-clipboard-text="_getCopyCode(icon.name)">
          <span class="anticon anticon-{{icon.name}}"></span>
          <span class="anticon-class">{{icon.name}}</span>
        </li>
      </ul>

    </section>
  </div>

</template>
<script>

  import vIcon from '../../components/iconfont'
  import codeBox from '../components/codeBox'
  import apiTable from '../components/apiTable'

  import Clipboard from 'Clipboard'

  export default {
    data: function () {
      return {
        icons1: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt', 'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'caret-circle-right', 'caret-circle-left', 'caret-circle-o-right', 'caret-circle-o-left', 'circle-right', 'circle-left', 'circle-o-right', 'circle-o-left', 'double-right', 'double-left', 'verticle-right', 'verticle-left', 'forward', 'backward', 'rollback', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'play-circle', 'play-circle-o', 'circle-up', 'circle-down', 'circle-o-up', 'circle-o-down', 'caret-circle-o-up', 'caret-circle-o-down', 'caret-circle-up', 'caret-circle-down'],
        icons2: ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'cross', 'cross-circle-o', 'cross-circle', 'check', 'check-circle-o', 'check-circle', 'clock-circle-o', 'clock-circle'],
        icons3: ['lock', 'unlock', 'android', 'apple', 'area-chart', 'bar-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'delete', 'desktop', 'download-line', 'edit', 'ellipsis', 'file', 'file-text', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'meh', 'inbox', 'laptop', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'pie-chart', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'smile', 'tablet', 'tag', 'tags', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'ie', 'chrome', 'home', 'loading', 'smile-circle', 'meh-circle', 'frown-circle', 'tags-o', 'tag-o', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'aliwangwang', 'aliwangwang-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customerservice', 'qrcode'],
        icons1Obj:[],
        icons2Obj:[],
        icons3Obj:[],
        Copied:false,
        type:String

      }
    },

    components: {
      vIcon,
      codeBox,
      apiTable
    },

    computed: {
      icons1Obj () {
        return this.icons1.map(name => {
            return {name, justCopied: false}
          })
      },
      icons2Obj () {
        return this.icons2.map(name => {
            return {name, justCopied: false}
          })
      },

      icons3Obj () {
        return this.icons3.map(name => {
            return {name, justCopied: false}
          })
      }
    },

    ready () {

      const clipboard = new Clipboard('.anticons-list li')
      var that = this
      clipboard.on('success', (e) => {
        var target= e.trigger

        target.className='icon-item copied'

        setTimeout(() => {
          target.className='icon-item'
        }, 1000)

    })
    },

    methods: {
      _getCopyCode: function(type) {
        return '<v-icon type="'+type+'"></v-icon>'
      },
      clickfunc: function(event){
        console.log(this);
        console.log(event);

      }
    }

  }

</script>
<style lang="less" scoped>

  .markdown > ul li {
    list-style: circle;
    margin-left: 20px;
  }

  .markdown pre {
    background: #F7F7F7;
    border-radius: 6px;
  }

  .markdown pre {
    margin: 1.2em 0;
    padding: 1em;
  }

  .markdown code {
    margin: 0 3px;
  }

  ul.anticons-list {
    margin: 20px 0;
    list-style: none;
    width: 120%;
    overflow: hidden;
  }
  ul.anticons-list li {
    float: left;
    margin: 5px 5px 5px 0;
    width: 155px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    height: 110px; color: #5C6B77;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    position: relative; padding-top: 10px;
  }
  ul.anticons-list li:hover {
    background-color: #4BB8FF;
    color: #fff;
    border-radius: 4px;
  }
  ul.anticons-list li.copied:hover {
    color: rgba(255,255,255,0.2);
  }
  ul.anticons-list li:after {
    position: absolute;
    top: 10px;
    left: 0;
    height: 100%;
    width: 100%;
    content: "Copied!";
    text-align: center;
    line-height: 110px;
    color: #fff;
    -webkit-transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    opacity: 0;
  }
  ul.anticons-list li.copied:after {
    opacity: 1;
    top: 0;
  }
  .anticon {
    font-size: 26px;
    margin: 12px 0 16px;
  }
  .anticon-class {
    display: block;
    text-align: center;
    word-wrap: break-word;
  }

</style>


