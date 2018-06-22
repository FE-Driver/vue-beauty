<template>
	<div :class="prefixCls + '-operation'">
        <v-button type="primary" size="small" :disabled="!rightActive" @click="moveToLeft">
            <v-icon type="left"></v-icon>{{operations[0]}}
        </v-button>
        <v-button style="margin-bottom: 15px;" type="primary" size="small" :disabled="!leftActive" @click="moveToRight">
            {{operations[1]}}
            <v-icon type="right"></v-icon>
        </v-button>
        <v-button type="primary" size="small" :disabled="!rightActive" @click="moveTop">
            {{operations[4]}}
            <v-icon type="caret-up"></v-icon>
        </v-button>
        <v-button type="primary" size="small" :disabled="!verticalActive" @click="moveUp">
            {{operations[2]}}
            <v-icon type="up"></v-icon>
        </v-button>
        <v-button type="primary" size="small" :disabled="!verticalActive" @click="moveDown">
            {{operations[3]}}
            <v-icon type="down"></v-icon>
        </v-button>
        <v-button type="primary" size="small" :disabled="!rightActive" @click="moveBottom">
            {{operations[5]}}
            <v-icon type="caret-down"></v-icon>
        </v-button>
	</div>
</template>
<script>
import vButton from '../button';
import vIcon from '../icon';

function noop() { }
export default {
    components: {
        vButton,
        vIcon,
    },
    props: {
        prefixCls: String,
        operations: {
            type: Array,
            default: () => [],
        },
        leftActive: {
            type: Boolean,
            default: false,
        },
        rightActive: {
            type: Boolean,
            default: false,
        },
        verticalActive: {
            type: Boolean,
            default: false,
        },
        moveToLeft: {
            type: Function,
            default: noop,
        },
        moveToRight: {
            type: Function,
            default: noop,
        },
        moveUp: {
            type: Function,
            default: noop,
        },
        moveDown: {
            type: Function,
            default: noop,
        },
        moveTop: {
            type: Function,
            default: noop,
        },
        moveBottom: {
            type: Function,
            default: noop,
        },
    },
};
</script>
