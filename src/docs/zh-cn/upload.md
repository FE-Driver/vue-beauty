<script>
  export default {
    data: ()=> ({
      name: 'file',
      action: '/upload',
      header:{
        appkey: 'FDF8F7DSFSD8FSA987A8SF',
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
    }),
    methods: {
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      }
    }
  }
</script>


# Upload 上传

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

::: demo
<summary>
  #### 点击上传
  经典款式，用户点击按钮弹出文件选择框。
</summary>

```html
<template>
  <v-upload :name="name" :action="action" @change="onChange">
    <v-button type="ghost">
      <v-icon type="upload"></v-icon>点击上传
    </v-button>
  </v-upload>
</template>

<script>
  export default {
    data: ()=> ({
      name: 'file',
      action: '/upload'
    }),
    methods: {
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 点击上传
  设置头信息。
</summary>

```html
<template>
  <v-upload :name="name" :action="action" :header='header' @change="onChange">
    <v-button type="ghost">
      <v-icon type="upload"></v-icon>点击上传
    </v-button>
  </v-upload>
</template>

<script>
  export default {
    data: ()=> ({
      name: 'file',
      action: '/upload',
      header: {
        appkey: 'FDF8F7DSFSD8FSA987A8SF',
      },
    }),
    methods: {
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 传入已上传的文件
  对已上传的文件进行编辑。
</summary>

```html
<template>
  <v-upload :name="name" :action="action" :file-list="defaultFileList" @change="onChange">
    <v-button type="ghost">
        <v-icon type="upload"></v-icon>上传
      </v-button>
  </v-upload>
</template>

<script>
  export default {
    data: ()=> ({
      name: 'file',
      action: '/upload',
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
    }),
    methods: {
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 拖拽上传1
  可以把文件拖入指定区域，完成上传，同样支持点击上传。
</summary>

```html
<template>
  <v-upload :name="name" :action="action" drag @change="onChange">
    <p class="ant-upload-drag-icon">
        <v-icon type="inbox"></v-icon>
    </p>
    <p class="ant-upload-text">点击或将文件拖拽到此区域上传</p>
    <p class="ant-upload-hint">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>
  </v-upload>
</template>

<script>
  export default {
    data: ()=> ({
      name: 'file',
      action: '/upload'
    }),
    methods: {
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 拖拽上传2
  可以把文件拖入指定区域，完成上传，同样支持点击上传。
</summary>

```html
<template>
  <div style="width: 246px; height: 146px">
      <v-upload :name="name" :action="action" drag @change="onChange">
          <v-icon type="plus"></v-icon>
      </v-upload>
  </div>
</template>

<script>
  export default {
    data: ()=> ({
      name: 'file',
      action: '/upload'
    }),
    methods: {
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 多文件上传
  可以选择多个文件上传。
</summary>

```html
<template>
  <v-upload :name="name" :action="action" multiple @change="onChange">
    <v-button type="ghost">
      <v-icon type="upload"></v-icon>点击上传
    </v-button>
  </v-upload>
</template>

<script>
  export default {
    data: ()=> ({
      name: 'file',
      action: '/upload'
    }),
    methods: {
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          console.log(info.file.name + ' 上传成功.')
        } else if (info.file.status === 'error') {
          console.log(info.file.name + ' 上传失败.')
        }
      }
    }
  }
</script>
```
:::

## API

### Upload Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| name    | 可选参数, 上传的文件 | string | file |
| action | 必选参数, 上传的地址 | string | - |
| fileList    | 默认已经上传的文件列表 | object[] | [] |
| data | 可选参数, 上传所需参数 | object | {} |
| header | 可选参数, 设置request头信息 | object | {} |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。注意：该方法不支持老 IE | (file, reqOptions) => boolean | Promise | - |
| multiple | 可选参数, 是否支持多选文件 | boolean | false |
| accept | 可选参数, 接受上传的文件类型, 详见 input accept Attribute | string | - |

### Upload Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 可选参数, 上传文件改变时的状态，详见 onChange | fileInfo |

### onChange
文件状态改变的回调，返回为：
```
{
  file: { ... },
  fileList: [ ... ],
  event: { ... }
}
```
1.file 当前操作的文件对象。
```
{
  uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
  name: 'xx.png'   // 文件名
  status: 'done',  // 状态有：uploading done error removed
  response: '{"status":"success"}'  // 服务端响应内容
}
```
如果上传控件是 multiple 时，此参数将为一个对象数组 [file, ...]。
2.fileList 当前的文件列表。
3.event 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

## 显示下载链接
请使用 fileList 属性设置数组项的 url 属性进行展示控制。
