<template>
<span>
  <div :class="wrapClasses" @dragover.prevent="dragover = true" @dragleave.prevent="dragover = false">
    <ajax-upload
      :action="action"
      :name="name"
      :data="data"
      :header="header"
      :multiple="multiple"
      :on-start="onStart"
      :on-progress="onProgress"
      :on-success="onSuccess"
      :on-error="onError"
      :accept="accept"
      :before-upload="beforeUpload"
      @drop="dragover = false">
      <div :class="containerClasses">
        <slot></slot>
      </div>
    </ajax-upload>
  </div>
  <upload-list :prefix-cls="prefixCls" :items="defaultFileList" :on-remove="handleManualRemove"></upload-list>
</span>
</template>

<script>
import AjaxUpload from './ajax-uploader';
import UploadList from './upload-list';
import getFileItem from './get-file-item';

// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
    return {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.filename || file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        response: file.response,
        error: file.error,
    };
}

export default {
    name: 'Upload',
    data() {
        return {
            prefixCls: 'ant-upload',
            dragover: false,
            defaultFileList: this.fileList.concat(),
        };
    },
    props: {
        drag: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: 'file',
        },
        action: {
            type: String,
            default: '',
        },
        data: {
            type: Object,
            default: () => ({}),
        },
        header: {
            type: Object,
            default: () => ({}),
        },
        accept: {
            type: String,
            default: '',
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        fileList: {
            type: Array,
            default: () => [],
        },
        beforeUpload: {
            type: Function,
            default: () => {},
        },
    },
    components: { AjaxUpload, UploadList },

    computed: {
        wrapClasses() {
            return [
                this.prefixCls,
                { [`${this.prefixCls}-drag`]: this.drag },
                { [`${this.prefixCls}-drag-hover`]: this.drag && this.dragover },
                { [`${this.prefixCls}-select`]: !this.drag },
            ];
        },
        containerClasses() {
            return { [`${this.prefixCls}-drag-container`]: this.drag };
        },
    },
    watch: {
        fileList() {
            this.defaultFileList = this.fileList.concat();
        },
    },
    methods: {
        onStart(file) {
            let targetItem;
            let nextFileList = this.defaultFileList.concat();
            if (file.length) {
                targetItem = file.map((f) => {
                    f = fileToObject(f);
                    f.status = 'uploading';
                    return f;
                });
                nextFileList = nextFileList.concat(file);
            } else {
                targetItem = fileToObject(file);
                targetItem.status = 'uploading';
                nextFileList.push(targetItem);
            }

            this.onChange({
                file: targetItem,
                fileList: nextFileList,
            });
        },

        onProgress(e, file) {
            const fileList = this.defaultFileList;
            const targetItem = getFileItem(file, fileList);

            if (targetItem) {
                this.onChange({
                    event: e,
                    file,
                    fileList: this.defaultFileList,
                });
            }
        },

        onSuccess(response, file) {
            // 服务器端需要返回标准 json 字符串
            // 否则视为失败
            try {
                if (typeof response === 'string') {
                    JSON.parse(response);
                }
            } catch (e) {
                this.onError(new Error('No response'), response, file);
                return;
            }

            const fileList = this.defaultFileList;
            const targetItem = getFileItem(file, fileList);

            // 之前已经删除
            if (targetItem) {
                targetItem.status = 'done';
                targetItem.response = response;

                this.onChange({
                    file: targetItem,
                    fileList,
                });
            }
        },

        onError(error, response, file) {
            const fileList = this.defaultFileList;
            const targetItem = getFileItem(file, fileList);
            targetItem.error = error;
            targetItem.response = response;
            targetItem.status = 'error';

            this.handleRemove(targetItem);
        },

        removeFile(file) {
            const fileList = this.defaultFileList;
            const targetItem = getFileItem(file, fileList);
            const index = fileList.indexOf(targetItem);

            if (index !== -1) {
                fileList.splice(index, 1);
                return fileList;
            }

            return null;
        },

        handleRemove(file) {
            const fileList = this.removeFile(file);

            if (fileList) {
                this.onChange({
                    file,
                    fileList,
                });
            }
        },

        handleManualRemove(file) {
            file.status = 'removed';
            this.handleRemove(file);
        },

        getFilePlainObject(fileList) {
            const arr = [];
            fileList.forEach((item) => {
                arr.push({
                    name: item.name,
                    size: item.size,
                    status: item.status,
                    type: item.type,
                    uid: item.uid,
                    response: item.response,
                });
            });
            return arr;
        },

        onChange(info) {
            // 1. 有设置外部属性时不改变 fileList
            // 2. 上传中状态（info.event）不改变 fileList
            if (info.fileList) {
                let fileList = info.fileList;
                // todo
                // 用纯对象的方式来触发vue的更新，好吧，之后看看有没有好的方式
                fileList = this.getFilePlainObject(fileList);
                this.defaultFileList = fileList;
            }
            this.$emit('change', info);
        },
    },
};
</script>