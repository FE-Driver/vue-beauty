<template>
<span>
  <div :class="wrapClasses" @dragover.prevent="dragover = true" @dragleave.prevent="dragover = false">
    <ajax-upload
      :action="action"
      :name="name"
      :data="data"
      :multiple="multiple"
      :on-start="_onStart"
      :on-progress="_onProgress"
      :on-success="_onSuccess"
      :on-error="_onError"
      :accept="accept"
      :before-upload="beforeUpload"
      @drop="dragover = false">
      <div :class="containerClasses">
        <slot></slot>
      </div>
    </ajax-upload>
  </div>
  <upload-list :prefix-cls="prefixCls" :items="defaultFileList" :on-remove="_handleManualRemove"></upload-list>
</span>
</template>

<script lang="babel">
import AjaxUpload from './ajax-uploader.vue'
import UploadList from './upload-list.vue'
import getFileItem from './get-file-item'

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
  name: 'Upload',
  data() {
    return {
      prefixCls: 'ant-upload',
      dragover: false,
      defaultFileList: this.fileList.concat()
    }
  },
  props: {
    drag: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: ()=> ({})
    },
    accept: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    fileList: {
      type: Array,
      default: ()=> []
    },
    beforeUpload: {
      type: Function,
      default: ()=> {}
    }
  },
  components: { AjaxUpload, UploadList },

  computed: {
    wrapClasses () {
      return [
        this.prefixCls,
        {[`${this.prefixCls}-drag`]: this.drag},
        {[`${this.prefixCls}-drag-hover`]: this.drag & this.dragover},
        {[`${this.prefixCls}-select`]: !this.drag}
      ]
    },

    containerClasses () {
      return {[`${this.prefixCls}-drag-container`]: this.drag}
    }
  },
  watch: {
    fileList() {
      this.defaultFileList = this.fileList.concat();
    }
  },
  methods: {
    _onStart (file) {
      let targetItem;
      let nextFileList = this.defaultFileList.concat()
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
      let fileList = this.defaultFileList
      let targetItem = getFileItem(file, fileList)

      if (targetItem) {
        this._onChange({
          event: e,
          file: file,
          fileList: this.defaultFileList
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

      let fileList = this.defaultFileList
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
      let fileList = this.defaultFileList
      let targetItem = getFileItem(file, fileList)
      targetItem.error = error
      targetItem.response = response
      targetItem.status = 'error'

      this._handleRemove(targetItem)
    },

    _removeFile (file) {
      let fileList = this.defaultFileList
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
        this.defaultFileList = fileList;
      }
      this.$emit('change', info);
    }
  }
}
</script>