<template>
	<div>
		<input :placeholder="searchPlaceholder" :class="[prefixCls, 'ant-input']" @input="handleChange" :value="value">
		<a href="#" v-if="value" :class="`${prefixCls}-action`" @click="clear($event)">
			<v-icon type="cross-circle"></v-icon>
		</a>
		<span v-else :class="prefixCls + '-action'">
			<v-icon type="search"></v-icon>
		</span>
	</div>
</template>
<script>
import vIcon from '../icon';

export default {
    props: {
        prefixCls: String,
        placeholder: {
            type: Array,
			default: () => [],
		},
		handleClear: {
			type: Function,
			default: ()=> {},
		},
		value: {
			type: String,
			default: '',
		},
		searchPlaceholder: {
			type: String,
			default: '',
		},
	},
	methods: {
		handleChange(e) {
			this.$emit('input', e.target.value);
			this.$emit('change', e.target.value);
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
