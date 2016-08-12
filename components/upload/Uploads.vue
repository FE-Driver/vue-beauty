<template>
<div :class="wrapClasses">
  <ajax-upload
    :action="action"
    :name="name"
    :data="data"
    :multiple="multiple"
    :on-start="_onStart"
    :on-progress="_onProgress"
    :on-success="_onSuccess"
    :on-error="_onError"
    :before-upload="beforeUpload">
    <div :class="containerClasses">
      <slot></slot>
    </div>
  </ajax-upload>
</div>
<upload-list :items="fileList" :on-remove="_handleManualRemove" ></upload-list>
</template>

<script>
import { defaultProps } from '../../utils'
import cx from 'classnames'
import AjaxUpload from './ajaxUploader.vue'
import UploadList from './uploadList.vue'
import getFileItem from './getFileItem'

// Fix IE file.status problem
// via coping a new Object
function fileToObject (file) {
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    response: file.response,
    error: file.error
  }
}

export default {
  props: defaultProps({
    prefixCls: 'ant-upload',

    type: 'select',
    name: '',
    forceAjax: false,
    multipart: false,
    action: '',
    data: {},
    accept: '',
    multiple: false,
    fileList: Array,
    defaultFileList: Array,
    beforeUpload: () => {},
    onChange: () => {}
  }),

  components: { AjaxUpload, UploadList },

  computed: {
    isDrag () {
      return this.type === 'drag'
    },

    wrapClasses () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-drag`]: this.isDrag,
        [`${this.prefixCls}-select`]: !this.isDrag
      })
    },

    containerClasses () {
      return cx({
        [`${this.prefixCls}-drag-container`]: this.isDrag
      })
    }
  },

  beforeCompile () {
    this.$set('fileList', this.fileList || this.defaultFileList || [])
  },

  methods: {
    _onStart (file) {
      let targetItem;
      let nextFileList = this.fileList.concat()
      if (file.length > 0) {
        targetItem = file.map(function(f) {
          f = fileToObject(f);
          f.status = 'uploading';
          return f
        })
        nextFileList = nextFileList.concat(file)
      } else {
        targetItem = fileToObject(file)
        targetItem.status = 'uploading'
        nextFileList.push(targetItem)
      }

      this._onChange({
        file: targetItem,
        fileList: nextFileList
      })
    },

    _onProgress (e, file) {
      let fileList = this.fileList
      let targetItem = getFileItem(file, fileList)

      if (targetItem) {
        this._onChange({
          event: e,
          file: file,
          fileList: this.fileList
        })
      }
    },

    _onSuccess (response, file) {
      // 服务器端需要返回标准 json 字符串
      // 否则视为失败
      try {
        if (typeof response === 'string') {
          JSON.parse(response)
        }
      } catch (e) {
        this._onError(new Error('No response'), response, file)
        return
      }

      let fileList = this.fileList
      let targetItem = getFileItem(file, fileList)

      // 之前已经删除
      if (targetItem) {
        targetItem.status = 'done'
        targetItem.response = response

        this._onChange({
          file: targetItem,
          fileList: fileList
        })
      }
    },

    _onError (error, response, file) {
      let fileList = this.fileList
      let targetItem = getFileItem(file, fileList)
      targetItem.error = error
      targetItem.response = response
      targetItem.status = 'error'

      this._handleRemove(targetItem)
    },

    _removeFile (file) {
      let fileList = this.fileList
      let targetItem = getFileItem(file, fileList)
      let index = fileList.indexOf(targetItem)

      if (index !== -1) {
        fileList.splice(index, 1)
        return fileList
      }

      return null
    },

    _handleRemove (file) {
      let fileList = this._removeFile(file)

      if (fileList) {
        this._onChange({
          file: file,
          fileList: fileList
        })
      }
    },

    _handleManualRemove (file) {
      file.status = 'removed'
      this._handleRemove(file)
    },

    _getFilePlainObject (fileList) {
      let arr = []
      fileList.forEach(item => {
        arr.push({
          name: item.name,
          size: item.size,
          status: item.status,
          type: item.type,
          uid: item.uid,
          response: item.response
        })
      })
      return arr
    },

    _onChange (info) {
      // 1. 有设置外部属性时不改变 fileList
      // 2. 上传中状态（info.event）不改变 fileList
      if (info.fileList) {
        let fileList = info.fileList
        // todo
        // 用纯对象的方式来触发vue的更新，好吧，之后看看有没有好的方式
        fileList = this._getFilePlainObject(fileList)
        this.$set('fileList', fileList)
      }
      this.onChange(info)
    },
  }
}

</script>
