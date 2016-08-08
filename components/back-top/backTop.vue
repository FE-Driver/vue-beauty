<template>
    <div class="ant-back-top" v-show="visible" @click='scrollToTop'>
        <slot>
            <div class="ant-back-top-content">
                <i class="ant-back-top-icon anticon anticon-to-top"></i>
            </div>
        </slot>
    </div>
</template>

<script>
import {defaultProps} from '../../utils'
import cx from 'classnames'

export default {
    data:()=>({
        prefix: 'ant-back-top',
        visible: false
    }),
    props: defaultProps({
        visibilityHeight:400,
        onClick: () => {}
    }),
    created(){
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(){
            const scrollTop = this.getScroll(window, true);
            this.visible = scrollTop > this.visibilityHeight;
        },
        getScroll(w, top) {
            let ret = w[`page${top ? 'Y' : 'X'}Offset`];
            const method = `scroll${top ? 'Top' : 'Left'}`;
            if (typeof ret !== 'number') {
                const d = w.document;
                // ie6,7,8 standard mode
                ret = d.documentElement[method];
                if (typeof ret !== 'number') {
                // quirks mode
                ret = d.body[method];
                }
            }
            return ret;
        },
        scrollToTop(){
            this.setScrollTop(0);
            this.onClick();
        },
        setScrollTop(value) {
            document.body.scrollTop = value;
            document.documentElement.scrollTop = value;
        }
    }
}

</script>
