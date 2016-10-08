<template>
  <div class="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" v-show="show" v-el:opts :style.sync="styles">
    <div style="overflow: auto;">
      <ul class="ant-select-dropdown-menu ant-select-dropdown-menu-vertical  ant-select-dropdown-menu-root">
        <li class="ant-select-dropdown-menu-item"
            :class="{ 'ant-select-dropdown-menu-item-disabled': item.disabled, 'ant-select-dropdown-menu-item-selected': value===item.value }"
            style="-webkit-user-select: none;" @click="select($index)" v-for="item in options">{{ item.text }}
        </li>
        <li class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" v-if="options.length===0"
            style="-webkit-user-select: none;">{{notfound || '无匹配项'}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      options: {
        type: Array
      },
      disabled: Boolean,
      stylus: {
        type: Object,
        twoWay: true
      },
      value: [String,Number],
      multiple: Boolean,
      placeholder: String,
      notfound: String
    },
    computed: {
      styles () {
        return [
          {
            top: this.stylus.top + 'px' || 0,
            left: this.stylus.left + 'px' || 0,
            width: this.stylus.width + 'px'
          }
        ]
      }
    },
    created () {
      if (!this.placeholder && !this.value && this.options && this.options.length > 0) {
        this.value = this.options[0].value
      }
    },
    methods: {
      select (index) {
        let opt = this.options[index]
        if (!opt.disabled) {
          this.show = false
          this.$dispatch('select-event', opt)
        }
      }
    },
    ready () {
      if (!this.disabled) {
        document.body.appendChild(this.$els.opts)
      }
    }
  }
</script>