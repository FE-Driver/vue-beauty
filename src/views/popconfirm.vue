<template lang="html">
    TODO
</template>

<script>
import vPopconfirm from '../../components/popconfirm';
import vSwitch from '../../components/switch';
import message from '../../components/message';

export  default {
    name: 'popconfirm-doc',
    data() {
        return {
            is_skip: false
        }
    },
    methods: {
        confirm: function(){
            message.info('点击了确定');
        },
        cancel: function(){
            message.info('点击了取消');
        },
        skip_func: function(){
            this.is_skip = true;
        }
    },
    components: {
        vPopconfirm,
        vSwitch,
        message
    }
}
</script>
