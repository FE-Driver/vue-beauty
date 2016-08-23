<template>
    <span style="display:inline-block;position:relative">
        <v-select>
            <v-tree :data="data"></v-tree>
        </v-select>
    </span>
</template>
<script>
    import vSelect from '../base/select'
    import vTree from '../tree'
    import { defaultProps } from '../../utils'
    export default {
        props: defaultProps({
            data: [],
            multiple: false,
            onSelect(){},
            onCheck(){}
        }),
        components:{vSelect,vTree}
    }
</script>