<template lang="html">

  <div>

    <section class="markdown">
      <h1>Upload 上传</h1>
      <p>
        文件选择上传和拖拽上传控件。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
        </p>
        <ul>
          <li>当需要上传一个或一些文件时。</li>
          <li>当需要展现上传的进度时。</li>
          <li>当需要使用拖拽交互时。</li>
        </ul>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="点击上传"
          describe="经典款式，用户点击按钮弹出文件选择框。"
          code="<v-upload :name='name' :action='action' :on-change='onChange'>
  <v-button type='ghost'>
    <v-icon type='upload'></v-icon> 点击上传
  </v-button>
</v-upload>"
        >
          <v-upload :name="name" :action="action" :on-change="onChange">
            <v-button type="ghost">
              <v-icon type="upload"></v-icon> 点击上传
            </v-button>
          </v-upload>
        </code-box>

        <code-box
          title="拖拽上传1"
          describe="可以把文件拖入指定区域，完成上传，同样支持点击上传。"
          code="<v-upload :name='name' :action='action' type='drag' :on-change='onChange'>
  <p class='ant-upload-drag-icon'>
    <v-icon type='inbox'></v-icon>
  </p>
  <p class='ant-upload-text'>点击或将文件拖拽到此区域上传</p>
  <p class='ant-upload-hint'>支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>
</v-upload>"
        >
          <v-upload :name="name" :action="action" type="drag" :on-change="onChange">
            <p class="ant-upload-drag-icon">
              <v-icon type="inbox"></v-icon>
            </p>
            <p class="ant-upload-text">点击或将文件拖拽到此区域上传</p>
            <p class="ant-upload-hint">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>
          </v-upload>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="传入已上传的文件"
          describe="对已上传的文件进行编辑。"
          code="<v-upload :name='name' :action='action' :default-file-list='defaultFileList' :on-change='onChange'>
  <v-button type='ghost'>
    <v-icon type='upload'></v-icon> 点击上传
  </v-button>
</v-upload>"
        >
         <v-upload :name="name" :action="action" :default-file-list="defaultFileList" :on-change="onChange">
          <v-button type="ghost">
            <v-icon type="upload"></v-icon> 点击上传
          </v-button>
        </v-upload>
        </code-box>

        <code-box
          title="拖拽上传2"
          describe="可以把文件拖入指定区域，完成上传，同样支持点击上传。"
          code="<div style='width: 246px; height: 146px'>
  <v-upload :name='name' :action='action' type='drag' :on-change='onChange'>
    <v-icon type='plus'></v-icon>
  </v-upload>
</div>"
        >
          <div style="width: 246px; height: 146px">
            <v-upload :name="name" :action="action" type="drag" :on-change="onChange">
              <v-icon type="plus"></v-icon>
            </v-upload>
          </div>
        </code-box>

        <code-box
          title="多文件上传"
          describe="可以选择多个文件上传。"
          code="<v-upload :name='name' :action='action' :multiple='true' :on-change='onChange'>
  <v-button type='ghost'>
    <v-icon type='upload'></v-icon> 点击上传
  </v-button>
</v-upload>"
        >
          <v-upload :name="name" :action="action" :multiple="true" :on-change="onChange">
            <v-button type="ghost">
              <v-icon type="upload"></v-icon> 点击上传
            </v-button>
          </v-upload>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    ></api-table>
    <section class="markdown">
      <h3>onChange</h3>
      <p>文件状态改变的回调，返回为：</p>
      <pre>
        <code>
          {
            file: { ... },
            fileList: [ ... ],
            event: { ... }
          }
        </code>
      </pre>
      <ol>
        <li><p><code>file</code> 当前操作的文件对象。</p>
        <pre><code>{
          uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
          name: 'xx.png'   // 文件名
          status: 'done',  // 状态有：uploading done error removed
          response: '{"status":"success"}'  // 服务端响应内容
        }
        </code></pre>
        <p>如果上传控件是 multiple 时，此参数将为一个对象数组 <code>[file, ...]</code>。</p>
        </li>
        <li><p><code>fileList</code> 当前的文件列表。</p>
        </li>
        <li><code>event</code> 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。</li>
      </ol>
      <h2 id="-">显示下载链接</h2>
      <p>请使用 fileList 属性设置数组项的 url 属性进行展示控制。</p>
      <h2 id="ie-note">IE note</h2>
      <ul>
        <li><a href="https://github.com/react-component/upload#ie89-note">https://github.com/react-component/upload#ie89-note</a></li>
      </ul>
    </section>
  </div>

</template>

<script>

import vUpload from '../../components/upload'
import vIcon from '../../components/iconfont'
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'name',
          explain: '可选参数, 上传的文件',
          type: 'String',
          default: 'file'
        },{
          parameter: 'action',
          explain: '必选参数, 上传的地址',
          type: 'string',
          default: '无'
        },{
          parameter: 'data',
          explain: '可选参数, 上传所需参数',
          type: 'Object',
          default: '无'
        },{
          parameter: 'multiple',
          explain: '可选参数, 是否支持多选文件，支持 ie10+',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'accept',
          explain: '可选参数, 接受上传的文件类型, 详见 input accept Attribute',
          type: 'String',
          default: '无'
        },{
          parameter: 'onChange',
          explain: '可选参数, 上传文件改变时的状态，详见 onChange',
          type: 'Function',
          default: '无'
        }
      ],
      name: 'file',
      action: '/upload',
      onChange (info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      },
      defaultFileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
      }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png'
      }]
    }
  },
  components: {
    vUpload,
    vIcon,
    vButton,
    vButtonGroup: vButton.Group,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
