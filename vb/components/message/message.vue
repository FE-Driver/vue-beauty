<template>
    <div class="ant-message" :style="{ top: top + 'px' }">
        <span>
          <notice
            v-for="notice in notices"
            :content="notice.content"
            :duration="notice.duration"
            :selfKey="notice.selfKey"
            :key="notice.selfKey"
            :type="notice.type"
            :on-close="notice.onClose"
            @close="close"
          ></notice>
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
    },
    data() {
        return {
            notices: [],
        };
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
        destroy() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
    },
};
</script>
