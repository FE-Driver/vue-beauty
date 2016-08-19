<template>
  <div class="ant-row">
    <slot></slot>
  </div>
</template>
<script>
  import { defaultProps } from '../../utils'
  export default {
    props: defaultProps({
      gutter: Number
    }),
    ready(){
      if(this.gutter){
        let half = this.gutter/2;
        this.$el.style.marginLeft = -half + 'px';
        this.$el.style.marginRight= -half + 'px';

        console.log(this.$children)
        for(let $child of this.$children){
          $child.$el.style.paddingLeft = half + 'px';
          $child.$el.style.paddingRight = half + 'px';
        }
      }
    }
  }
</script>
