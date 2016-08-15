/**
 * Created by bailey on 16/8/11.
 */
import Vue from 'vue';
import { addClass,addStyle } from '../utils/dom';

// todo 显示和关闭时的动画
// todo 延时关闭,鼠标放置在tip上后暂停关闭

const tooltip = Vue.directive('tooltip', {
    openTrigger:'mouseover',
    closeTrigger:'mouseout',
    leftFactor:0.5,
    topFactor:0.5,
    bind: function () {
        // 准备工作
        // 例如，添加事件处理器或只需要运行一次的高耗任务
        if (this.arg === 'focus'){
            this.openTrigger = 'focus';
            this.closeTrigger = 'blur';
        }

        this.place = Object.keys(this.modifiers)[0] || 'top';

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

        this.el.addEventListener(this.openTrigger, this.open.bind(this));
        this.el.addEventListener(this.closeTrigger, this.close.bind(this));
    },
    update: function (value) {
        this.value = value;
        // 值更新时的工作
        // 也会以初始值为参数调用一次
    },
    unbind: function () {
        // 清理工作
        // 例如，删除 bind() 添加的事件监听器
        this.el.removeEventListener(this.openTrigger, this.open);
        this.el.removeEventListener(this.closeTrigger, this.close);
    },
    getOffset: function (el) {
        let x = 0;
        let y = 0;
        let ele = el;
        while (ele) {
            x += parseInt(ele.offsetLeft);
            y += parseInt(ele.offsetTop);
            ele = ele.offsetParent;
        }
        return { top: y, left: x };
    },
    open: function () {
        const offset = this.getOffset(this.el);
        const eleWidth = this.el.offsetWidth;
        const eleHeight = this.el.offsetHeight;
        const body = document.body;
        this.tooltip = document.createElement('div');
        this.tooltip.innerHTML = `<div class="ant-tooltip-content"><div class="ant-tooltip-arrow"></div><div class="ant-tooltip-inner"><span>${this.value}</span></div></div>`;
        body.appendChild(this.tooltip);
        addClass(this.tooltip, `ant-tooltip ant-tooltip-placement-${this.place}`);
        addStyle(this.tooltip, {
            left: `${offset.left + (eleWidth * this.leftFactor)}px`,
            top: `${offset.top + (eleHeight * this.topFactor)}px`
        });
    },
    close: function () {
        if (this.tooltip){
            const body = document.body;
            body.removeChild(this.tooltip);
        }
    }
});

export default tooltip;
