import Vue from 'vue';
import vNotification from './notification.vue';

vNotification.newInstance = (data) => {
    const _props = data || {};

    const Instance = new Vue({
        data: _props,
        render(h) {
            return h(vNotification, {
                props: _props,
            });
        },
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const notification = Instance.$children[0];

    return {
        notice(noticeProps) {
            notification.add(noticeProps);
        },

        removeNotice(key) {
            notification.close(key);
        },

        component: notification,

        destroy() {
            notification.destroy();
        },
    };
};

export default vNotification;
