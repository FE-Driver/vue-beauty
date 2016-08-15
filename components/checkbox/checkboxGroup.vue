<template lang="html">
  <div class="ant-checkbox-group" >
    <v-checkbox
      v-for="option in options"
      :disabled='option.disabled'
      :checked.sync="option.checked"
      :on-change="change"
      :value="option.value"
      >
      {{option.label}}
    </v-checkbox>
  </div>
</template>

<script>

import vCheckbox from './checkbox'

export default {
  props: {
    options: Array,
    defaultValue: {
      type: Array,
      twoWay: true
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data: function () {
    return {
      change: (e) => {
        this.defaultValue = []
        for (let e of this.$children) {
          if (e.checked) {
            this.defaultValue.push(e.value)
          }
        }
        console.log(this.defaultValue);
        this.onChange(this.defaultValue)
      }
    }
  },
  created: function () {
    for (let option of this.options) {
      if (this.defaultValue) {
        for (let value of this.defaultValue) {
          if (option.value === value) {
            option.checked = true
          }
        }
      }
    }
  },
  methods: {

  },
  components: {
    vCheckbox
  }
}
</script>