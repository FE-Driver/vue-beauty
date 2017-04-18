import "./style/index.less";
let tipVm;
export default {
    install(Vue, options){
        /* tip组件模板 */
        const TipComponent = Vue.extend({
            template: `
                <transition name="fade">
                    <div :class="warpPlace" v-show="show">
                        <div class="ant-tooltip-content">
                            <div class="ant-tooltip-arrow"></div>
                            <div class="ant-tooltip-inner">
                                <span v-html="tip"></span>
                            </div>
                        </div>
                    </div>
                </transition>`,
            computed: {
                warpPlace(){
                    return [
                        `ant-tooltip`,
                        `ant-tooltip-placement-${this.place}`
                    ]
                }
            }
        });

        /**
         * 获取元素的坐标位置
         * @param el
         * @returns {{top: number, left: number}}
         */
        function getOffset(el) {
            let x = 0;
            let y = 0;
            let ele = el;
            while (ele) {
                x += parseInt(ele.offsetLeft, 10);
                y += parseInt(ele.offsetTop, 10);
                ele = ele.offsetParent;
            }
            return {top: y, left: x};
        }

        /**
         * 关闭方法
         */
        function closeTooltip(el, binding, directClose = false) {
            if (el.vm) {
                if (!binding.controled) {
                    if (directClose) {
                        el.vm.show = false;
                    } else {
                        /* 延时关闭,给tip本身的鼠标事件留出时间 */
                        el.closeTimer = setTimeout(() => {
                            /* show设置为false,触发view改变 */
                            el.vm.show = false;
                        }, 100);
                    }
                }
            }
        }

        /**
         * 显示方法
         */
        function openTooltip(el, binding) {
            if (!el) return;

            if (!el.vm) {
                /* 创建一个新的tip组件实例,插入到body中 */
                tipVm = el.vm = new TipComponent({
                    data: {
                        tip: el.bindingValue, /* 支持html内容 */
                        show: true,
                        place: binding.place
                    }
                }).$mount();

                document.getElementsByTagName('body')[0].appendChild(el.vm.$el);

                /* 给tip组件本身绑定鼠标事件,鼠标移上去之后停止关闭操作（从而允许复制tip中的内容）,鼠标移开后关闭 */
                el.vm.$el.addEventListener('mouseover', () => {
                    clearTimeout(el.closeTimer);
                });
                el.vm.$el.addEventListener('mouseleave', function () {
                    closeTooltip(el, binding, true)
                });
                el.vm.$el.addEventListener('click', function () {
                    closeTooltip(el, binding, true)
                });
            } else {
                el.vm.show = true;
                el.vm.tip = el.bindingValue;
            }

            setTimeout(function () {
                /* 设置tooltip的位置 */
                const offset = getOffset(el);
                const eleWidth = el.offsetWidth;
                const eleHeight = el.offsetHeight;
                var left = offset.left;
                var top = offset.top;
                const tooltipHeight = el.vm.$el.offsetHeight;
                const tooltipWidth = el.vm.$el.offsetWidth;

                switch (binding.place.toUpperCase()) {
                    case 'TOP':
                        top = offset.top - tooltipHeight;
                        left = offset.left + eleWidth / 2 - tooltipWidth / 2;
                        break;
                    case 'TOPLEFT':
                        top = offset.top - tooltipHeight;
                        left = offset.left;
                        break;
                    case 'TOPRIGHT':
                        top = offset.top - tooltipHeight;
                        left = offset.left + eleWidth - tooltipWidth;
                        break;
                    case 'BOTTOM':
                        top = offset.top + eleHeight;
                        left = offset.left + eleWidth / 2 - tooltipWidth / 2;
                        break;
                    case 'BOTTOMLEFT':
                        top = offset.top + eleHeight;
                        left = offset.left;
                        break;
                    case 'BOTTOMRIGHT':
                        top = offset.top + eleHeight;
                        left = offset.left + eleWidth - tooltipWidth;
                        break;
                    case 'LEFT':
                        top = offset.top + eleHeight / 2 - tooltipHeight / 2;
                        left = offset.left - tooltipWidth;
                        break;
                    case 'LEFTTOP':
                        top = offset.top
                        left = offset.left - tooltipWidth;
                        break;
                    case 'LEFTBOTTOM':
                        top = offset.top + eleHeight - tooltipHeight;
                        left = offset.left - tooltipWidth;
                        break;
                    case 'RIGHT':
                        top = offset.top + eleHeight / 2 - tooltipHeight / 2;
                        left = offset.left + eleWidth;
                        break;
                    case 'RIGHTTOP':
                        top = offset.top
                        left = offset.left + eleWidth;
                        break;
                    case 'RIGHTBOTTOM':
                        top = offset.top + eleHeight - tooltipHeight;
                        left = offset.left + eleWidth;
                        break;

                }
                // 设置位置
                el.vm.$el.style['left'] = left + 'px';
                el.vm.$el.style['top'] = top + 'px';
                el.vm.$el.style['position'] = 'absolute';
            }, 0);
        }

        /**
         * 注册自定义指令tooltip
         */
        const tooltip = Vue.directive('tooltip', {
            /**
             * 指令第一次绑定到元素时调用
             * @param el
             * @param binding
             */
            bind(el, binding) {
                /* 准备工作 */
                /* 识别触发事件 */
                if (binding.arg === 'focus') {
                    binding.openTrigger = 'focus';
                    binding.closeTrigger = 'blur';
                } else {
                    binding.openTrigger = 'mouseenter';
                    binding.closeTrigger = 'mouseleave';
                }
                /* 获取位置 */
                /* todo 这里限制了修饰符的顺序 */
                binding.place = Object.keys(binding.modifiers)[0] || 'top';
                binding.controled = Object.keys(binding.modifiers)[1] == 'controlled' ? true : false;
                el.bindingValue = binding.value;

                /* 绑定触发事件 */
                el.openTooltip = function () {
                    openTooltip(el, binding)
                };
                el.closeTooltip = function () {
                    closeTooltip(el, binding)
                };
                el.addEventListener(binding.openTrigger, el.openTooltip);
                el.addEventListener(binding.closeTrigger, el.closeTooltip);
                el.addEventListener('click', closeTooltip(el, binding));
            },

            /**
             * 被绑定元素所在的模板更新时调用
             * @param el
             * @param binding
             */
            update(el, binding) {
                /* 这里需要实时更新tooltip的值 */
                el.bindingValue = binding.value;
            },

            /**
             * 指令与元素解绑时调用
             * @param el
             * @param binding
             */
            unbind(el, binding) {
                /* 清理工作: 例如，删除 bind() 添加的事件监听器 */
                el.removeEventListener(binding.openTrigger, el.openTooltip);
                el.removeEventListener(binding.closeTrigger, el.closeTooltip);
            },
        });
    }
}
