<template>
	<div :class="prefixCls + '-operation'">
		<v-button 
			type="primary" 
			size="small" 
			:disabled="!rightActive"
			@click="moveToLeft"
			>
	    <span><v-icon type="left"></v-icon>{{operations[0]}}</span>
	  </v-button>
	  <v-button 
			type="primary" 
			size="small" 
			:disabled="!leftActive"
			@click="moveToRight"
			>
	    <span>{{operations[1]}}<v-icon type="right"></v-icon>
	    </span>
	  </v-button>
	</div>
</template>
<script>
	import { defaultProps } from '../../utils'
	import vButton from '../button'
	import vIcon from '../iconfont'
	function noop() {};
	export default {
		props: defaultProps({
			prefixCls: '',
			operations: [],
			leftActive: false,
			rightActive: false,
			moveToLeft: noop,
			moveToRight: noop
		}),
		data() {
			return {};
		},
		components: {
			vButton,
			vIcon
		}
	}
</script>