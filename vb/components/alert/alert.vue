<template>
    <div :class="[prefixCls, prefixCls + '-' + type, description ? prefixCls + '-with-description' : '', !showIcon ? prefixCls + '-no-icon' : '']"
         transition="bounce">
        <i :class="[prefixCls + '-icon', 'anticon', 'anticon-'+iconClass]"
           v-if="showIcon"></i>
        <span :class="prefixCls + '-message'">{{ message }}</span>
        <span :class="prefixCls + '-description'">{{ description }}</span>
        <a :class="prefixCls + '-close-icon'"
           v-if="closable "
           @click="handleClose ">
            {{closeText}}
            <i class="anticon anticon-cross " v-if="!closeText "></i>
        </a>
    </div>
</template>

<script lang="babel">

    /**
     * Alert 警告提示
     * @param type 必选参数，指定警告提示的样式，有四种选择 success、info、warning、error
     * @param closable 可选参数，默认不显示关闭按钮
     * @param closeText 可选参数，自定义关闭按钮
     * @param message 必选参数，警告提示内容
     * @param description 可选参数，警告提示的辅助性文字介绍
     * @param onClose 可选参数，关闭时触发的回调函数
     * @param showIcon 可选参数，是否显示辅助图标
     */

    export default {
        name: 'Alert',
        props: {
            type: {
                type: String,
                require: true,
                default: 'info'
            },
            closable: {
                type: Boolean,
                default: false
            },
            closeText: {
                type: String,
                require: false
            },
            message: {
                type: String,
                require: true
            },
            description: {
                type: String,
                require: false
            },
            showIcon: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: 'ant-alert',
            }
        },
        computed: {
            iconClass(){
                var iconClass = ''
                switch (this.type) {
                    case 'success':
                        iconClass = 'check-circle'
                        break
                    case 'info':
                        iconClass = 'info-circle'
                        break
                    case 'warning':
                        iconClass = 'exclamation-circle'
                        break
                    case 'error':
                        iconClass = 'cross-circle'
                        break
                }
                if (this.description) {
                    iconClass += '-o'
                }
                return iconClass
            },
        },
        methods: {
            handleClose (e) {
                this.$el.remove()
                this.$emit("close");
            },
        }
    }

</script>