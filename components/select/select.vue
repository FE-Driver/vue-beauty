<template>
  <div class="ant-select" :class="classes" @click="select" v-el:select>
    <div class="ant-select-selection ant-select-selection--single" :style="css">
      <div class="ant-select-selection__rendered">
        <div v-if="placeholder" v-show="placeholder_show" class="ant-select-selection__placeholder"
             style="display: block; -webkit-user-select: none;">{{ placeholder }}
        </div>
        <div v-if="!placeholder" class="ant-select-selection-selected-value" v-show="value_show" :style="value_opacity">
          <slot></slot>
          {{selectedVal}}
        </div>
        <div v-if="type=='search'" class="ant-select-search ant-select-search--inline" v-show="selected">
          <div class="ant-select-search__field__wrap">
            <input @input="keyat" v-on:focus="value_opacity.opacity=.4" v-on:blur="value_opacity.opacity=1" class="ant-select-search__field" v-el:searchinput>
            <span class="ant-select-search__field__mirror"></span>
          </div>
        </div>
      </div>
      <span class="ant-select-arrow" style="-webkit-user-select: none;"><b></b></span>
    </div>
    <X-Option v-if="!disabled" :stylus.sync="stylus" :disabled="disabled" :show.sync="selected" :options.sync="options"
    :class="clazz" :multiple="multiple" :placeholder="placeholder" :notfound="notfound" :value="value" v-el:dropdownlist></X-Option>
  </div>
</template>
<script>
  import XOption from './option.vue'
  import {getOffset, closeByElement} from '../_util/_func'

  export default {
    name: 'v-select',
    components: {
      XOption
    },
    props: {
      type: String,
      id: String,
      selected: Boolean,
      size: String,
      disabled: Boolean,
      options: {
        type: Array,
        default(){
          return []
        }
      },
      value: [String,Number],
      multiple: Boolean,
      placeholder: String,
      placeholder_show: {
        type: Boolean,
        default: true
      },
      value_show: {
        type: Boolean,
        default: true
      },
      notfound: String
    },
    computed: {
      classes () {
        return [
          {
            'ant-select-open': this.selected,
            'ant-select-focused': this.selected,
            'ant-select-show-search': (this.type === 'search')
          },
          this.disabled ? 'ant-select-disabled' : 'ant-select-enabled',
          this.size ? `ant-select-${this.size}` : ''
        ]
      },
      clazz () {
        return [{
          'ant-select-dropdown--multiple': this.multiple
        }]
      },
      css () {
        if (this.type === 'search' && this.placeholder) {
          return {
            cursor: 'text'
          }
        }else if(this.disabled){
          return {
            cursor: 'not-allowed'
          }
        }
        return {
          cursor: 'pointer'
        }
      },
      source(){
        //如果search下拉,则保存原始数据源，删选后回退用
        return this.type === 'search'? [...this.options] : this.options
      },
      selectedVal(){
        if (this.source instanceof Array && this.source.length) {
          if(this.value){
            for(let item of this.source){
              if(item.value === this.value){
                return item.text
              }
            }
          }else{
            return this.source[0].text
          }
        }
      }
    },
    methods: {
      select () {
        if (!this.disabled) {
          this.position()
          this.selected = !this.selected
          if (this.type === 'search' && this.selected) {
            var that = this
            this.$els.searchinput.value = ''
            this.options = this.source
            setTimeout(function () {
              that.$els.searchinput.focus()
            }, 50)
          }
        }
      },
      position () {
        let p = getOffset(this.$els.select)
        this.stylus = {
          top: p.top + this.height + 4,
          left: p.left,
          width: this.stylus.width
        }
      },
      backdrop (e) {
        if (!closeByElement(e.target, [this.$els.select, this.$els.dropdownlist])) {
          this.selected = false
          if (this.placeholder) {
            this.placeholder_show = true
          } else {
            this.value_show = true
          }
        }
      },
      keyat (e) {
//        只有当type==search 的时候才会有搜索框
        let keyword = this.$els.searchinput.value
        if (this.placeholder) {
          if (keyword.length > 0) {
            this.placeholder_show = false
          } else {
            this.placeholder_show = true
          }
        } else {
          if (keyword.length > 0) {
            this.value_show = false
          } else {
            this.value_show = true
          }
        }
        let word = new RegExp(keyword)
        let newlist = []
        for (let i = 0; i < this.source.length; i++) {
          if (word.test(this.source[i].text)) {
            newlist.push(Object.assign({}, this.source[i]))
          }
        }
        this.options = newlist
      }
    },
    data: function () {
      return {
        stylus: {
          top: 0,
          left: 0
        },
        value_opacity: {
          opacity: '1'
        }
      }
    },
    created: function () {
      document.addEventListener('click', this.backdrop)
    },
    ready: function () {
      let that = this
      let styles = window.getComputedStyle(this.$els.select)
      this.height = parseFloat(styles.getPropertyValue('height'))
      let width = parseFloat(styles.getPropertyValue('width'))
      this.stylus = {
        width: width
      }
      let time = null
      window.addEventListener('resize', function () {
        clearTimeout(time)
        time = setTimeout(function () {
          if (!that.disabled && that.selected) {
            that.position()
          }
        }, 200)
      })
    },
    beforeDestroy () {
      document.removeEventListener('click', this.backdrop)
      window.removeEventListener('resize', this.backdrop)
      let node = this.$els.dropdownlist
      node && document.body.removeChild(node)
    },
    events: {
      'select-event': function (newVal) {
        this.placeholder = undefined
        this.value = newVal.value

        this.$dispatch('select-change', newVal)
      }
    }
  }
</script>