<template>
	<div :class="prefixCls + '-operation'">
		<v-button 
			type="primary" 
			size="small" 
			:disabled="!rightActive"
			@click="moveToLeft"
			>
	    <v-icon type="left"></v-icon>{{operations[0]}}
	  </v-button>
	  <v-button 
			type="primary" 
			size="small" 
			:disabled="!leftActive"
			@click="moveToRight"
			>
	    {{operations[1]}}<v-icon type="right"></v-icon>
	  </v-button>
	</div>
</template>
<script>
	import vButton from '../button';
	import vIcon from '../icon';

	function noop() {};
	export default {
		props: {
			prefixCls: String,
			operations: {
				type: Array,
				default: () => [],
			},
			leftActive: {
				type: Boolean,
				default: false,
			},
			rightActive: {
				type: Boolean,
				default: false,
			},
			moveToLeft: {
				type: Function,
				default: noop,
			},
			moveToRight: {
				type: Function,
				default: noop,
			},
		},
		components: {
			vButton,
			vIcon
		}
	}
</script>
