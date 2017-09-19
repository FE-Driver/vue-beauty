<template>
    <div :class="[prefixCls, `${prefixCls}-${placement}`]" :style="wrapStyles">
        <span>
            <notice v-for="notice in notices" :message="notice.message" :description="notice.description" :duration="notice.duration" :type="notice.type" :selfKey="notice.selfKey" :key="notice.selfKey" :on-close="notice.onClose" @close="close"></notice>
        </span>
    </div>
</template>

<script>
import notice from './notice';

export default {
    components: {
        notice,
    },
    props: {
        top: {
            type: Number,
        },
        bottom: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        placement: {
            type: String,
            validator(value) {
                return ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].includes(value);
            },
        },
    },
    data() {
        return {
            prefixCls: 'ant-notification',
            notices: [],
        };
    },
    computed: {
        wrapStyles() {
            switch (this.placement) {
                case 'topLeft':
                    return {
                        left: 0,
                        top: `${this.top}px`,
                        bottom: 'auto',
                    };
                case 'bottomLeft':
                    return {
                        left: 0,
                        top: 'auto',
                        bottom: `${this.bottom}px`,
                    };
                case 'bottomRight':
                    return {
                        right: 0,
                        top: 'auto',
                        bottom: `${this.bottom}px`,
                    };
                default:
                    return {
                        right: 0,
                        top: `${this.top}px`,
                        bottom: 'auto',
                    };
            }
        },
    },
    methods: {
        add(not) {
            if (!this.notices.filter(v => v.selfKey === not.selfKey).length) {
                this.notices.push(not);
            }
        },
        close(key) {
            for (let i = 0; i < this.notices.length; i++) {
                if (this.notices[i].selfKey === key) {
                    this.notices.splice(i, 1);
                    break;
                }
            }
        },
    },
};
</script>
