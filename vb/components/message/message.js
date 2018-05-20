import Vue from 'vue';
import vMessage from './message.vue';

vMessage.newInstance = (data) => {
    const _props = data || {};

    const Instance = new Vue({
        data: _props,
        render(h) {
            return h(vMessage, {
                props: _props,
            });
        },
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const message = Instance.$children[0];

    return {
        notice(noticeProps) {
            message.add(noticeProps);
        },

        removeNotice(key) {
            message.close(key);
        },

        component: message,

        destroy() {
            message.destroy();
        },
    };
};

export default vMessage;

