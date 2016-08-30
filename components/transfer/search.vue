<template>
	<div>
		<input 
			placeholder="{{searchPlaceholder}}"
			:class="[prefixCls, 'ant-input']"
			@input="handleChange"
			v-model="value">
		<a href="#" 
			v-if="value && value.length > 0"
			:class="`${prefixCls}-action`" 
			@click="clear($event)">
      <v-icon type="cross-circle"></v-icon>
    </a>
    <span
    	v-else
    	:class="prefixCls + '-action'">
    	<v-icon type="search"></v-icon>
    </span>
	</div>
</template>
<script>
	import { defaultProps } from '../../utils'
	import vIcon from '../iconfont'
	function noop() {};
	export default {
		props: defaultProps({
			prefixCls: '',
			placeholder: [],
			onChange: noop,
			handleClear: noop,
			value: '',
			searchPlaceholder: ''
		}),
		data() {
			return {
			};
		},
		methods: {
			handleChange() {
				this.onChange(this.value);
			},
			clear(e) {
				e.preventDefault();
				this.handleClear();
			}
		},
		components: {
			vIcon
		}
	}
</script>