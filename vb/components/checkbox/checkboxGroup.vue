<template lang="html">
  <div class="ant-checkbox-group" >
    <v-checkbox
      class = "ant-checkbox-group-item"
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
  name:'v-checkbox-group',
  props: {
    options: Array,
    value: {
      type: Array,
      twoWay: true,
      default: ()=>[]
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data: function () {
    return {
      change: (e) => {
        let temp = []
        for (let e of this.$children) {
          if (e.checked === e.trueValue) {
            temp.push(e.value)
          }
        }
        this.$set('value',temp);
        this.onChange(temp)
      }
    }
  },
  watch: {
    value(){
      this.setChecked();
    }
  },
  created: function () {
    if(this.value.length){
      this.setChecked();
    }
  },
  methods: {
    setChecked(){
      for(let i=0;i<this.options.length;i++){
        if(this.value.includes(this.options[i].value)){
          this.$set(`options[${i}].checked`,true)
        }else{
          this.$set(`options[${i}].checked`,false)
        }
      }
    }
  },
  components: {
    vCheckbox
  }
}
</script>