<template>
<span role="button"
  tabIndex="0"
  class="ant-upload-btn"
  @click="_onClick"
  @keydown="_onKeyDown"
  @drop.prevent="_onFileDrop">
  <input ref="file"
    type="file"
    style="display: none"
    :accept="accept"
    :multiple="multiple"
    @change="_onChange">
  <slot></slot>
</span>
</template>

<script lang="babel">
import request from './request'
import uid from './uid'

export default {
  props: {
    action: String,
    name: String,
    multiple: Boolean,
    data: Object,
    onStart:  {
      type: Function,
      default: ()=> {}
    },
    onProgress:  {
      type: Function,
      default: ()=> {}
    },
    onSuccess:  {
      type: Function,
      default: ()=> {}
    },
    accept: {
      type: String,
      default: ''
    },
    onError:  {
      type: Function,
      default: ()=> {}
    },
    beforeUpload:  {
      type: Function,
      default: ()=> {}
    },
  },

  methods: {
    _onChange (e) {
      const files = e.target.files
      this._uploadFiles(files)
    },

    _onClick () {
      const el = this.$refs.file
      if (!el) return

      el.click()
      el.value = ''
    },

    _onKeyDown (e) {
      if (e.key === 'Enter') {
        this._onClick()
      }
    },

    _onFileDrop (e) {
      const files = e.dataTransfer.files
      this._uploadFiles(files)
      this.$emit('drop');
    },

    _uploadFiles (files) {
      const len = files.length
      if (len > 0) {
        for (let i = 0; i < len; i++) {
          const file = files.item(i)
          file.uid = uid()
          this._upload(file)
        }

        if (this.multiple) {
          this.onStart(Array.prototype.slice.call(files))
        } else {
          this.onStart(Array.prototype.slice.call(files)[0])
        }
      }
    },

    _upload (file) {
      if (!this.beforeUpload) {
        return this._post(file)
      }

      const before = this.beforeUpload(file)
      if (before && before.then) {
        before.then(() => {
          this._post(file)
        })
      } else if (before !== false) {
        this._post(file)
      }
    },

    _post (file) {
      let data = this.data
      if (typeof data === 'function') {
        data = data()
      }

      request({
        action: this.action,
        filename: this.name,
        file: file,
        data: data,
        onProgress: e => {
          this.onProgress(e, file)
        },
        onSuccess: ret => {
          this.onSuccess(ret, file)
        },
        onError: (err, ret) => {
          this.onError(err, ret, file)
        },
      })
    }
  }
}
</script>