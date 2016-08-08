<template lang="html">
  <ul :class="[prefix,{[prefix+'-disabled']: disabled}]" @mouseout="recovery">
    <li class="{{prefix}}-star {{item}}" v-for="item in lightArr" track-by="$index" @mouseover="allLight($index)" @click="selected">
      <div :class="prefix+'-star-content'"  @mouseover="halfLight($index,$event)"></div>
    </li>
  </ul>
</template>

<script>

export default {
  data:()=>({
    prefix: 'ant-rate',
    value: 0
  }),
  props:{
    count: {
      type: Number,
      default:5,
      coerce: function (val) {
        return Math.round(val);
      }
    },
    defaultValue: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    allowHalf: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    lightArr(){
      var arr  = new Array(this.count);
      for(var i=0;i<parseInt(this.value);i++){
        arr[i] = this.prefix+'-star-full';
      }
      if(parseInt(this.value) !== this.value){
        arr[i] = this.prefix+'-star-half';
      }
      return arr;
    }
  },
  methods: {
    recovery () {
      this.value = this.defaultValue;
    },
    allLight (index) {
      if(this.disabled) return;
      this.value = index+1;
    },
    halfLight (index,e) {
      if(this.disabled) return;
      if(this.allowHalf){
        this.value = index+0.5;
        e.stopPropagation();
      }
    },
    selected () {
      if(this.disabled) return;
      this.defaultValue = this.value;
      this.onChange(this.value);
    },
    //根据allowHalf 对value进行不同的处理
    valueHandle(val){
      //如果允许半选 整数直接返回  小数将小数部分变成.5
      if(val>this.count){
        return this.count;
      }
      if(this.allowHalf){
        let _v = parseInt(val);
        if(_v !== val){
          val = _v + 0.5;
        }
        return val;
      }else{
        //不允许半选直接四舍五入
        return Math.round(val);
      }
    }
  },
  created(){
    this.value = this.defaultValue = this.valueHandle(this.defaultValue);
  }
}

</script>
