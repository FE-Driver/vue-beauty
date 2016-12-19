<template>
  <div
    tabindex="0"
    :class="{ 'multiselect--active': isOpen, 'multiselect--disabled': disabled, ['multiselect-'+size]: size }"
    @focus="activate()"
    @blur="searchable ? false : deactivate()"
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keydown.enter.stop.prevent.self="addPointerElement()"
    @keydown.tab.stop="addPointerElement()"
    @keyup.esc="deactivate()"
    class="multiselect">
      <div @mousedown.prevent="toggle()" class="multiselect__select"></div>
      <div v-el:tags class="multiselect__tags">
        <span
          v-for="option in visibleValue"
          track-by="$index"
          onmousedown="event.preventDefault()"
          class="multiselect__tag">
            <span v-text="getOptionLabel(option)"></span>
            <i
              aria-hidden="true"
              tabindex="1"
              @keydown.enter.prevent="removeElement(option)"
              @mousedown.prevent="removeElement(option)"
              class="multiselect__tag-icon">
            </i>
        </span>
        <template v-if="value && value.length > limit">
          <strong v-text="limitText(value.length - limit)"></strong>
        </template>
        <div v-show="loading" transition="multiselect__loading" class="multiselect__spinner"></div>
        <input
          name="search"
          type="text"
          autocomplete="off"
          :placeholder="placeholder"
          v-el:search
          v-if="searchable"
          v-model="search"
          :disabled="disabled"
          @focus.prevent="activate()"
          @blur.prevent="deactivate()"
          @keyup.esc="deactivate()"
          @keyup.down="pointerForward()"
          @keyup.up="pointerBackward()"
          @keydown.enter.stop.prevent.self="addPointerElement()"
          @keydown.tab.stop="addPointerElement()"
          @keydown.delete="removeLastElement()"
          class="multiselect__input"/>
          <span
            v-if="!searchable && !multiple"
            class="multiselect__single"
            v-text="currentOptionLabel || placeholder">
          </span>
      </div>
      <ul
        transition="multiselect"
        :style="listSty"
        v-el:list
        v-show="isOpen"
        @mousedown.stop.prevent=""
        class="multiselect__content">
        <slot name="beforeList"></slot>
        <li v-if="multiple && max !== 0 && max === value.length">
          <span class="multiselect__option">
            <slot name="maxElements">Maximum of {{ max }} options selected. First remove a selected option to select another.</slot>
          </span>
        </li>
        <template v-if="!max || value.length < max">
          <li
            v-for="option in filteredOptions"
            track-by="$index"
            tabindex="0"
            :class="{ 'multiselect__option--highlight': $index === pointer && this.showPointer, 'multiselect__option--selected': !isNotSelected(option) }"
            class="multiselect__option"
            @mousedown.prevent="select(option)"
            @mouseenter="pointerSet($index)"
            :data-select="option.isTag ? tagPlaceholder : selectLabel"
            :data-selected="selectedLabel"
            :data-deselect="deselectLabel">
            <partial :name="optionPartial" v-if="optionPartial.length"></partial>
            <span v-else v-text="getOptionLabel(option)"></span>
          </li>
        </template>
        <li v-show="filteredOptions.length === 0 && search">
          <span class="multiselect__option">
            <slot name="noResult">No elements found. Consider changing the search query.</slot>
          </span>
        </li>
        <slot name="afterList"></slot>
    </ul>
  </div>
</template>

<script>
  import multiselectMixin from './multiselectMixin'
  import pointerMixin from './pointerMixin'
  import {getOffset} from '../_util/_func'

  export default {
    name: 'v-multiselect',
    mixins: [multiselectMixin, pointerMixin],
    data: ()=>({
      style: {},
      container: null
    }),
    props: {
      popupContainer: {
        type: Function,
        default: ()=> document.body
      },
      size: String,
      position: {
        type: String, 
        default: 'absolute'
      },
      /**
       * Name of the registered custom option partial
       * @default 'multiselectBasicOptionPartial'
       * @type {String}
       */
      optionPartial: {
        type: String,
        default: ''
      },
      /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
      selectLabel: {
        type: String,
        default: '回车选择'
      },
      /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
      */
      selectedLabel: {
        type: String,
        default: '已选择'
      },
      /**
       * String to show when pointing to an alredy selected option
       * @default 'Press enter to remove'
       * @type {String}
      */
      deselectLabel: {
        type: String,
        default: '回车删除一个标签'
      },
      /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
      */
      showLabels: {
        type: Boolean,
        default: true
      },
      /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 'label'
       * @type {String}
       */
      limit: {
        type: Number,
        default: 99999
      },
      /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
      limitText: {
        type: Function,
        default: count => `and ${count} more`
      },
      /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
      */
      loading: {
        type: Boolean,
        default: false
      },
      /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
      */
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      visibleValue () {
        return this.multiple
          ? this.value.slice(0, this.limit)
          : []
      },
      listSty () {
        return {
          maxHeight: this.maxHeight+'px',
          ...this.style
        }
      }
    },
    ready () {
      this.container = this.popupContainer()
      /* istanbul ignore else */
      if (!this.showLabels) {
        this.deselectLabel = this.selectedLabel = this.selectLabel = ''
      }
      this.$els.list.style.position = this.position;
      this.container.appendChild(this.$els.list);
      this.$nextTick(()=>{
          this.setPosition();
      })

      window.addEventListener('resize',()=> {
          clearTimeout(this.resizeTimer);
          this.resizeTimer = setTimeout(()=> {
              this.setPosition();
          }, 200)
      })
    },
    methods: {
      setPosition(){
          if(!this.$el){
              return
          }
          let p = getOffset(this.$el, this.container);

          this.$set('style',{
              top: p.bottom + 'px',
              left: p.left + 'px',
              width: p.right - p.left + 'px'
          })
      }
    }
  }
</script>