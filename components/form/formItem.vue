<template>
<div :class="itemCls">
    <v-col :class="labelCls" v-if="label" :span="labelCol.span" :offset="labelCol.offset">
        <label for="userName" class="" v-text="label"></label>
    </v-col>
    <v-col :span="wrapperCol.span" :offset="wrapperCol.offset">
        <div :class="controlCls">
			<slot></slot>
		</div>
    </v-col>
</div>
</template>

<script>
import {vRow, vCol} from '../layout'
import { defaultProps, oneOfType } from '../../utils'
import cx from 'classnames'

export default {
  data:()=>({
    prefix: 'ant-form-item',
  }),
  props: defaultProps({
      label: String,
      labelCol: {},
      wrapperCol: {}
  }),
  components: {vRow,vCol},
  computed: {
    itemCls () {
      return cx({
        'ant-row': true,
        [`${this.prefix}`]: true
      })
    },
    labelCls () {
        return cx({
            [`${this.prefix}-label`]: true
        })
    },
    controlCls () {
        return cx({
            [`${this.prefix}-control`]: true
        })
    }
  }
}

</script>
