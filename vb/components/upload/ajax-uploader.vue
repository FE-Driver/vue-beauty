<template>
  <span role="button" tabIndex="0" class="ant-upload-btn" @click="onClick" @keydown="onKeyDown" @drop.prevent="onFileDrop">
    <input ref="file" type="file" style="display: none" :accept="accept" :multiple="multiple" @change="onChange">
    <slot></slot>
  </span>
</template>

<script>
import request from './request';
import uid from './uid';

export default {
    props: {
        action: String,
        name: String,
        multiple: Boolean,
        data: Object,
        header: {
            type: Object,
            default: () => ({}),
        },
        onStart: {
            type: Function,
            default: () => {},
        },
        onProgress: {
            type: Function,
            default: () => {},
        },
        onSuccess: {
            type: Function,
            default: () => {},
        },
        accept: {
            type: String,
            default: '',
        },
        onError: {
            type: Function,
            default: () => {},
        },
        beforeUpload: {
            type: Function,
            default: () => {},
        },
    },

    methods: {
        onChange(e) {
            const files = e.target.files;
            this.uploadFiles(files);
        },
        onClick() {
            const el = this.$refs.file;
            if (!el) return;

            el.click();
            el.value = '';
        },
        onKeyDown(e) {
            if (e.key === 'Enter') {
                this.onClick();
            }
        },
        onFileDrop(e) {
            const files = e.dataTransfer.files;
            this.uploadFiles(files);
            this.$emit('drop');
        },
        uploadFiles(files) {
            const len = files.length;
            if (len > 0) {
                for (let i = 0; i < len; i++) {
                    const file = files.item(i);
                    file.uid = uid();
                    this.upload(file);
                }

                if (this.multiple) {
                    this.onStart(Array.prototype.slice.call(files));
                } else {
                    this.onStart(Array.prototype.slice.call(files)[0]);
                }
            }
        },
        upload(file) {
            let data = this.data;
            if (typeof data === 'function') {
                data = data();
            }
            const reqOpt = {
                action: this.action,
                filename: this.name,
                file,
                data,
                header: this.header,
                onProgress: (e) => {
                    this.onProgress(e, file);
                },
                onSuccess: (ret) => {
                    this.onSuccess(ret, file);
                },
                onError: (err, ret) => {
                    this.onError(err, ret, file);
                },
            };
            if (!this.beforeUpload) {
                return request(reqOpt);
            }

            const before = this.beforeUpload(file, reqOpt);
            if (before && before.then) {
                before.then(() => {
                    request(reqOpt);
                });
            } else if (before !== false) {
                request(reqOpt);
            }
        },
    },
};
</script>