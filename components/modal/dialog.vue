<template>
  <div>
    <div
    v-if="visible"
    :class="prefixCls + '-mask'"
    transition="fade"
    ></div>
    <div 
      :class="[prefixCls + '-wrap', wrapClassName]" 
      v-if="visible"
      tabindex="-1"
      @click.stop="_onMaskClick"
      transition="zoom">
        <div
          v-el:dialog
          role="dialog"
          :style="[modalStyle, {width: modalWidth +'px'}]"
          :class="prefixCls"
          @keydown="_onKeyDown"
          @click.stop>
          <div :class="prefixCls + '-content'">
            <a v-if="closable" tabIndex="0" @click="_close" :class="prefixCls + '-close'">
              <span :class="prefixCls + '-close-x'"></span>
            </a>
            <div v-if="title" :class="prefixCls + '-header'">
              <div :class="prefixCls + '-title'">{{title}}</div>
            </div>
            <div :class="prefixCls + '-body'">
              <slot></slot>
            </div>
            <div v-show="hasFooter" :class="prefixCls + '-footer'">
              <slot name="footer"></slot>
            </div>
          </div>
          <div tabIndex="0" v-el:sentinel :style="{width: 0, height: 0, overflow: 'hidden'}">
            sentinel
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { defaultProps, KeyCode } from '../../utils'
export default {
  props: defaultProps({
    prefixCls: 'vc-dialog',
    modalStyle: {},
    wrapClassName: String,
    onClose: () => {},
    modalWidth: Number,
    mask: true,
    title: String,
    closable: true,
    maskClosable: true,
    hasFooter: true,
    visible: Boolean,
    zIndex: Number,
    mousePosition: Object
  }),
  watch: {
    mousePosition: function(value) {
      if(this.visible && value) {
        this._startAnimation(this.$el.querySelector('.' + this.prefixCls + '-wrap'));
        this._setScrollbar()
      }
    }
  },
  transitions: {
    zoom: {
      afterLeave: function (el) {
        this._resetScrollbar();
      }
    }
  },
  methods: {
    _onMaskClick () {
      if (this.maskClosable) {
        this._close()
      }
      this.$els.dialog.focus()
    },

    _onKeyDown (e) {
      if (this.closable) {
        if (e.keyCode === KeyCode.ESC) {
          this._close()
        }
      }
      if (this.visible) {
        if (e.keyCode === KeyCode.TAB) {
          const activeElement = document.activeElement
          const dialogRoot = this.$els.dialog
          const sentinel = this.$els.sentinel
          if (e.shiftKey) {
            if (activeElement === dialogRoot) {
              sentinel.focus()
            }
          } else if (activeElement === sentinel) {
            dialogRoot.focus()
          }
        }
      }
    },

    _startAnimation (dialogNode) {
      const mousePosition = this.mousePosition;
      if (this.visible) {
        if (mousePosition) {
          let scroll = getScroll(this.$el);
          setTransformOrigin(dialogNode, `${mousePosition.x - scroll.x}px ${mousePosition.y - scroll.y}px`);
        } else {
          setTransformOrigin(dialogNode, '');
        }
      }
    },

    _setScrollbar () {
        document.body.style.paddingRight = getScrollbarWidth() + 'px';
        document.body.style.overflow = 'hidden';
    },

    _resetScrollbar() {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
    },

    _close () {
      this.onClose()
    }
  }
}
let scrollbarWidth;
let bodyIsOverflowing;
let scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

function getScroll (el) {
  const doc = el.ownerDocument
  const w = doc.defaultView || doc.parentWindow
  let ret = {
    x: w.pageXOffset,
    y: w.pageYOffset
  }
  return ret
}

function getScrollbarWidth() {
  if(!hasScrollbar()) return;

  if (scrollbarWidth !== undefined) {
    return scrollbarWidth;
  }
  let scrollDiv = document.createElement('div');
  for (let scrollProp in scrollbarMeasure) {
    if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
      scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }
  }
  document.body.appendChild(scrollDiv);
  let _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  scrollbarWidth = _scrollbarWidth;
  return scrollbarWidth;
}

function hasScrollbar() {
  return document.body.clientHeight < document.body.scrollHeight;
}

function setTransformOrigin (node, value) {
  const style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach((prefix)=> {
    style[`${prefix}TransformOrigin`] = value
  })
  style[`transformOrigin`] = value
}

</script>
