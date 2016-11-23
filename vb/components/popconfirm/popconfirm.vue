<template lang="html">
<v-popover :open-class-name="openClassName" :visible.sync="visible" :placement="placement" :skip-func="onConfirm" :skip.sync="skip">
    <template slot="trigger"><slot></slot></template>
    <template slot="content">
        <div class="ant-popover-message">
            <i class="anticon anticon-exclamation-circle"></i>
            <div class="ant-popover-message-title">{{ title }}</div>
        </div>
        <div class="ant-popover-buttons">
            <button type="button" class="ant-btn ant-btn-ghost ant-btn-sm" @click.stop="doCancel"><span>{{ cancelText }}</span></button>
            <button type="button" class="ant-btn ant-btn-primary ant-btn-sm" @click.stop="doConfirm"><span>{{ okText }}</span></button>
        </div>
    </template>
</v-popover>
</template>

<script>
import { defaultProps } from '../../utils';
import vPopover from '../popover/popover.vue';

export default {
    name: 'v-popconfirm',
    props: defaultProps({
        title: '',
        okText: '确 定',
        cancelText: '取 消',
        onConfirm: ()=>{},
        onCancel: ()=>{},
        openClassName: '',
        visible: false,
        placement: 'top',
        skip: false//跳过确认,直接执行confirm回调
    }),
    data: function () {
        return {
        }
    },
    methods: {
        doCancel: function(){
            this.onCancel();
            if(this.visible){
                this.visible = false;
            }
        },
        doConfirm: function(){
            this.onConfirm();
            if(this.visible){
                this.visible = false;
            }
        }
    },
    components: {
        vPopover
    }
}
</script>
