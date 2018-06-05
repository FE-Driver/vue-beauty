import Vue from 'vue';
import vConfirm from './confirm.vue';

vConfirm.newInstance = (properties = {}) => {
    const _props = properties;

    const Instance = new Vue({
        data: _props,
        render(createElement) {
            return createElement(vConfirm, {});
        },
        computed: {},
        methods: {},
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const confirm = Instance.$children[0];

    return {
        show(props) {
            for (const key in props) {
                if (typeof key !== 'function') {
                    confirm[key] = props[key];
                }
            }
            confirm.visible = true;
        },
        remove() {
            confirm.$parent._remove();
        },
    };
};

export default vConfirm;
