<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import { defaultProps, oneOfType, oneOf, guid } from '../../utils'
import velocity from 'velocity-animate'
import ANIM_TYPES from './animTypes'

const BackEase = {
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55]
}

function transformArguments (arg) {
  if (Array.isArray(arg) && arg.length === 2) {
    return arg
  }
  return [arg, arg]
}

export default {
  name: 'v-queue-anim',
  props: defaultProps({
    show: true,
    interval: oneOfType([Number, Array], 100),
    duration: oneOfType([Number, Array], 500),
    delay: oneOfType([Number, Array], 0),
    type: oneOfType([String, Array], 'right'),
    animConfig: oneOfType([String, Array]),
    ease: oneOfType([String, Array], 'easeOutQuart'),
    animatingClassName: Array,
    watchValue: oneOfType([String, Array]),
    leaveReverse: false
  }),

  data () {
    return {
      originChildren: [],
      children: [],
      childrenShow: {}
    }
  },

  compiled () {
    this.animatingClassName = this.animatingClassName || ['queue-anim-entering', 'queue-anim-leaving']
  },

  ready () {
    this.keysAnimating = []

    const freeChild = this._getFreeKeysAndChild()
    this.keysAnimating = Object.keys(freeChild)
    this.children = freeChild
    this.originChildren = freeChild

    this.$on('queue-anim-hidden', () => {
      this._hiddenVelocityNode()
      return true
    })

    if (this.show) {
      this._animateEnter()
    }else{
      this._hiddenVelocityNode()
      this.$broadcast('queue-anim-hidden')
    }
  },

  beforeDestory () {
    if (this.originChildren && this.originChildren.length > 0) {
      this.originChildren.forEach(child => {
        velocity(child, 'stop')
      })
    }
  },

  isActHideAnimate: false,

  watch: {
    show (value) {
      if (value) {
        this.isActHideAnimate = true
        this.$nextTick(() => {
          this.$broadcast('queue-anim-hidden')
          setTimeout(() => {
            this._animateEnter()
            this.isActHideAnimate = false
          }, 50)
        })
      } else {
        this._animateLeave(() => {
          if (!this.isActHideAnimate) {
            this.$broadcast('queue-anim-hidden')
          }
        })
      }
    },

    watchValue (newValue, oldValue) {
      this.$nextTick(() => {
        let shouldEnterChild = []
        let shouldLeaveChild = []

        const newChild = this._getKeysChild()
        const nodeMap = {}

        // 不要问我性能问题，先实现再说
        //
        // TODO: 删除的动画暂时实现不了，等之后再看看有没有方法
        for (let i = 0; i < this.children.length; i++) {
          let curChild = this.children[i]
          let hasRemove = true
          for (let j = 0; j < newChild.length; j++) {
            if (curChild.key === newChild[j].key) {
              hasRemove = false
            }
          }
          if (hasRemove) {
            shouldLeaveChild.push(curChild)
          }
        }

        for (let i = 0; i < newChild.length; i++) {
          let curChild = newChild[i]
          let hasAdd = true
          for (let j = 0; j < this.children.length; j++) {
            if (curChild.key === this.children[j].key) {
              hasAdd = false
            }
          }
          if (hasAdd) {
            shouldEnterChild.push(curChild)
          }
        }

        shouldEnterChild.forEach(this._performEnter)
        shouldLeaveChild.forEach(this._performLeave)

        this.children = newChild
      })
    }
  },

  methods: {
    _getKeysChild () {
      const ret = []
      const keyNodes = Array.prototype.slice.call(this.$el.querySelectorAll('[key]'))
      keyNodes.forEach(child => {
        if (!child) {
          return
        }

        child.setAttribute('__scope_key__', 1)

        const key = child.getAttribute('key')

        if (!key) {
          return
        }

        ret.push({
          key: key,
          el: child
        })
      })

      return ret
    },

    _getFreeKeysAndChild () {
      const ret = []
      const keyNodes = Array.prototype.slice.call(this.$el.querySelectorAll('[key]:not([__scope_key__])'))
      keyNodes.forEach(child => {
        if (!child) {
          return
        }

        child.setAttribute('__scope_key__', 1)

        const key = child.getAttribute('key')

        if (!key) {
          return
        }

        ret.push({
          key: key,
          el: child
        })
      })

      return ret
    },

    _getVelocityConfig (index) {
      if (this.animConfig) {
        return transformArguments(this.animConfig)[index]
      }
      return ANIM_TYPES[transformArguments(this.type)[index]]
    },

    _getVelocityEnterConfig () {
      return this._getVelocityConfig(0)
    },

    _getVelocityLeaveConfig () {
      const config = this._getVelocityConfig(1)
      const ret = {}
      Object.keys(config).forEach((key) => {
        if (Array.isArray(config[key])) {
          ret[key] = Array.prototype.slice.call(config[key]).reverse()
        } else {
          ret[key] = config[key]
        }
      })
      return ret
    },

    _getVelocityEasing () {
      return transformArguments(this.ease).map(easeName => {
        if (typeof easeName === 'string') {
          return BackEase[easeName] || easeName
        }
      })
    },

    _hiddenVelocityNode () {
      this.children.forEach((item, i) => {
        const node = item.el
        if (!node) {
          return
        }
        node.style.visibility = 'hidden'
        velocity(node, 'stop')
      })
    },

    _animateEnter () {
      this.children.forEach(this._performEnter)
    },

    _performEnter (item, i) {
      const node = item.el
      const key = item.key

      if (!node) {
        return
      }
      const interval = transformArguments(this.interval)[0]
      const delay = transformArguments(this.delay)[0];
      const duration = transformArguments(this.duration)[0]
      node.style.visibility = 'hidden'
      velocity(node, 'stop')
      velocity(node, this._getVelocityEnterConfig('enter'), {
        delay: interval * i + delay,
        duration: duration,
        easing: this._getVelocityEasing()[0],
        visibility: 'visible',
        begin: (elements) => {
          this._enterBegin(key, elements)
          if (node.__vue__) {
            const _enterFn = node.__vue__._animateEnter
            _enterFn && _enterFn()

            const children = node.__vue__.$children
            children.forEach(item => {
              item._animateEnter && item._animateEnter()
            })
          }
        },
        complete: this._enterComplete.bind(this, key)
      })
    },

    _animateLeave (done) {
      this.children.forEach((item, i) => {
        this._performLeave(item, i, done)
      })
    },

    _performLeave (item, i, done) {
      const node = item.el
      const key = item.key
      if (!node) {
        return
      }
      const interval = transformArguments(this.interval)[1]
      const delay = transformArguments(this.delay)[1]
      const duration = transformArguments(this.duration)[1]
      const order = this.leaveReverse ? (this.children.length - i - 1) : i
      velocity(node, 'stop')
      velocity(node, this._getVelocityLeaveConfig('leave'), {
        delay: interval * order + delay,
        duration: duration,
        easing: this._getVelocityEasing()[1],
        begin: this._leaveBegin.bind(this),
        complete: (elements) => {
          this._leaveComplete(key, elements)
          const len = this.children.length
          if (i === len - 1) {
            done && typeof done === 'function' && done()
          }
        }
      })
    },

    _enterBegin (key, elements) {
      const self = this
      if (this.keysAnimating.indexOf(key) >= 0) {
        this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1)
      }
      elements.forEach(elem => {
        elem.className = elem.className.replace(self.animatingClassName[1], '').trim()
        elem.className += (' ' + self.animatingClassName[0])
      })
    },

    _enterComplete (key, elements) {
      const self = this
      if (this.keysAnimating.indexOf(key) >= 0) {
        this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1)
      }
      elements.forEach(elem => {
        elem.className = elem.className.replace(self.animatingClassName[0], '').trim()
      })
    },

    _leaveBegin (elements) {
      const self = this
      elements.forEach(elem => {
        elem.className = elem.className.replace(self.animatingClassName[0], '').trim()
        elem.className += (' ' + self.animatingClassName[1])
      })
    },

    _leaveComplete (key, elements) {
      const self = this
      if (this.keysAnimating.indexOf(key) < 0) {
        return
      }
      this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1)
      elements.forEach(elem => {
        elem.className = elem.className.replace(self.animatingClassName[1], '').trim()
      })
    }
  }
}

</script>
