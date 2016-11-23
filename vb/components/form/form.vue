<template>
    <form :class="wrapClasses">
        <slot></slot>
    </form>
</template>

<script>
import { defaultProps } from '../../utils'

export default {
  name:'v-form',
  data:()=>({
    prefix: 'ant-form',
    fields: {},
    fieldLength: 0
  }),
  props: {
    model: Object,
    rules: Object,
    direction: {
      type: String,
      default: 'inline'
    }
  },
  created() {
    this.$on('form.addField', field => {
      this.fields[field.prop] = field;
      this.fieldLength++;
    });
    this.$on('form.removeField', field => {
      delete this.fields[field.prop];
      this.fieldLength--;
    });
  },
  computed: {
    wrapClasses () {
      return `${this.prefix} ${this.prefix}-${this.direction}`
    }
  },
  methods: {
    resetFields() {
      for (let prop in this.fields) {
        let field = this.fields[prop];
        field.resetField();
      }
    },
    validate(callback) {
      var count = 0;
      var valid = true;

      for (let prop in this.fields) {
        let field = this.fields[prop];
        field.validate('', errors => {
          if (errors) {
            valid = false;
          }

          if (++count === this.fieldLength) {
            callback(valid);
          }
        });
      }
    },
    validateField(prop, cb) {
      var field = this.fields[prop];
      if (!field) { throw new Error('must call validateField with valid prop string!'); }

      field.validate('', cb);
    }
  }
}

</script>