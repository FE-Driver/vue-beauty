<template>
<div :class="itemCls">
    <v-col :class="labelCls" v-if="label" :span="labelCol.span" :offset="labelCol.offset">
        <label for="userName" :class="[{'ant-form-item-required':required}]" v-text="label"></label>
    </v-col>
    <v-col :span="wrapperCol.span" :offset="wrapperCol.offset">
        <div :class="controlCls">
			<slot></slot>
            <div v-if="help" v-text="help" class="{{this.prefixCls}}-explain"></div>
		</div>
    </v-col>
</div>
</template>

<script>
import {vRow, vCol} from '../layout'
import { defaultProps, oneOfType } from '../../utils'

export default {
  data:()=>({
    prefix: 'ant-form-item',
  }),
  props: defaultProps({
      prefixCls:'ant-form',
      label: String,
      labelCol: {},
      wrapperCol: {},
      help: String,
      validateStatus: String,
      hasFeedback: false,
      required: false
  }),
  components: {vRow,vCol},
  computed: {
    itemCls () {
      return [
          'ant-row',
          this.prefix,
          {[`${this.prefix}-with-help`]: this.help}
      ]
    },
    labelCls () {
        return `${this.prefix}-label`
    },
    controlCls () {
        let status = {error:'has-error',warning:'has-warning',success:'has-success',validating:'is-validating'}[this.validateStatus];

        return [
            `${this.prefix}-control`,
            {'has-feedback': this.hasFeedback},
            {[status]:status}
        ]
    }
  }
}

</script>
