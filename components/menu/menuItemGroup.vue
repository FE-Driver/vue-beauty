<template>
    <li class=" ant-menu-item-group">
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
        props: {
            title: String
        },
        ready(){
            this.$on('modeChage',(mode)=>{
                this.$broadcast('modeChage',mode);
            })

            this.$on('setLevel',(level)=>{
                this.$broadcast('setLevel',level);
            })
        }
    }
</script>