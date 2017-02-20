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

<script lang="babel">
    export default {
        name:'MenuItemGroup',
        props: {
            title: String
        }
    }
</script>