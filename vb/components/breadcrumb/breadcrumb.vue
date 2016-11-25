<template lang="html">
    <span>
        <span class="ant-breadcrumb-link" v-if="!(typeof this.href==='string')"><i :class="'anticon anticon-'+icon"></i>{{name}}</span>
        <span class="ant-breadcrumb-link" v-else><a href="{{href}}"><i :class="'anticon anticon-'+icon"></i>{{name}}</a></span>
        <span class="ant-breadcrumb-separator">{{separator?separator:'/'}}</span>
    </span>
</template>
<script>
    export default {
        name: 'v-breadcrumb',
        props: {
            name: String,
            href: String,
            separator: String,
            icon: String
        }
    }
</script>