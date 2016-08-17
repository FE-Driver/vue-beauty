/**
 * Created by bailey on 16/8/11.
 */
import Vue from 'vue';
import { addStyle } from '../utils/dom';

// tip组件模板
const TipComponent = Vue.extend({
    template: `
        <div class="ant-tooltip ant-tooltip-placement-{{place}}" v-if="show" transition="fade">
            <div class="ant-tooltip-content">
                    <div class="ant-tooltip-arrow"></div>
                    <div class="ant-tooltip-inner"><span>{{{tip}}}</span></div>
            </div>
        </div>`
});

const tooltip = Vue.directive('tooltip', {
    openTrigger:'mouseover',
    closeTrigger:'mouseout',
    leftFactor:0.5, // 默认水平位置系数
    topFactor:0.5, // 默认垂直位置系数
    bind: function () {
        // 准备工作
        // 识别触发事件
        if (this.arg === 'focus'){
            this.openTrigger = 'focus';
            this.closeTrigger = 'blur';
        }

        // 获取位置
        this.place = Object.keys(this.modifiers)[0] || 'top';

        // 设置位置系数
        if (this.place.toUpperCase().includes('LEFT')){
            this.leftFactor = 0;
        } else if (this.place.toUpperCase().includes('RIGHT')){
            this.leftFactor = 1;
        }
        if (this.place.toUpperCase().includes('TOP')){
            this.topFactor = 0;
        } else if (this.place.toUpperCase().includes('BOTTOM')){
            this.topFactor = 1;
        }

        // 绑定触发事件
        this.el.addEventListener(this.openTrigger, this.open.bind(this));
        this.el.addEventListener(this.closeTrigger, this.close.bind(this));
    },
    update: function (value) {
        this.value = value;
        // 值更新时的工作
    },
    unbind: function () {
        // 清理工作
        // 例如，删除 bind() 添加的事件监听器
        this.el.removeEventListener(this.openTrigger, this.open);
        this.el.removeEventListener(this.closeTrigger, this.close);
    },
    /**
     * 获取元素的坐标位置
     * @param el
     * @returns {{top: number, left: number}}
     */
    getOffset: function (el) {
        let x = 0;
        let y = 0;
        let ele = el;
        while (ele) {
            x += parseInt(ele.offsetLeft, 10);
            y += parseInt(ele.offsetTop, 10);
            ele = ele.offsetParent;
        }
        return { top: y, left: x };
    },
    /**
     * 显示方法
     */
    open: function () {
        const offset = this.getOffset(this.el);
        const eleWidth = this.el.offsetWidth;
        const eleHeight = this.el.offsetHeight;
        const self = this;

        // 创建一个新的tip组件实例,插入到body中
        this.vm = new TipComponent({
            data : {
                tip : this.value, // 支持html内容
                show: true,
                place : this.place
            }
        }).$mount().$appendTo('body');

        // 这是内部api,使用v-if指令之后,渲染后的dom存在$el.nextElementSibling属性上,而不是$el上,很奇怪
        this.tooltip = this.vm.$el.nextElementSibling;

        // 给tip组件本身绑定鼠标事件,鼠标移上去之后停止关闭操作（从而允许复制tip中的内容）,鼠标移开后关闭
        this.tooltip.addEventListener('mouseover', () => {
            clearTimeout(self.closeTimer);
        });
        this.tooltip.addEventListener('mouseout', this.close.bind(this));

        // 设置位置
        addStyle(this.tooltip, {
            left: `${offset.left + (eleWidth * this.leftFactor)}px`,
            top: `${offset.top + (eleHeight * this.topFactor)}px`
        });
    },
    /**
     * 关闭方法
     */
    close: function () {
        const self = this;
        if (this.vm){
            // 延时关闭,给tip本身的鼠标事件留出时间
            this.closeTimer = setTimeout(() => {
                // show设置为false,触发view改变
                self.vm.show = false;
            }, 100);
        }
    }
});

export default tooltip;
