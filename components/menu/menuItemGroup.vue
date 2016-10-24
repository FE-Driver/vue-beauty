<template>
    <li class="ant-menu-item-group">
        <div class="ant-menu-item-group-title">
            {{title}}
        </div>
        <ul class="ant-menu-item-group-list">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
    export default {
        name:'v-menu-item-group',
        props: {
            title: String
        },
        ready(){
            this.$on('modeChange',val=>{
                this.$broadcast('modeChange',val);
            })
            this.$on('cancelSelected',ori=>{
                this.$broadcast('cancelSelected',ori);
            })
        }
    }
</script>