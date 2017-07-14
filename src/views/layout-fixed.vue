<template>
    <div id="components-layout-demo-fixed">
        <v-layout>
            <v-header :style="{position: 'fixed', width: '100%', top: 0}">
                <div class="logo"></div>
                <v-menu theme="dark" mode="horizontal" :data="menuData" :style="{lineHeight: '64px'}"></v-menu>
            </v-header>

            <v-content :style="{ padding: '0 50px', marginTop: '64px' }">
                <v-breadcrumb :style="{ margin: '12px 0' }">
                    <v-breadcrumb-item>Home</v-breadcrumb-item>
                    <v-breadcrumb-item href="">List</v-breadcrumb-item>
                    <v-breadcrumb-item href="">App</v-breadcrumb-item>
                </v-breadcrumb>
                <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
            </v-content>
            <v-footer :style="{ textAlign: 'center' }">
                Ant Design ©2016 Created by Ant UED
            </v-footer>
        </v-layout>
    </div>
</template>

<script lang="babel">
    export default{
        data() {
            return {
                menuData: [{
                    name: 'nav 1',
                    selected: true
                }, {
                    name: 'nav 2',
                }, {
                    name: 'nav 3',
                }],
            };
        },

        mounted() {
            let removeDom = document.querySelectorAll('.page-wrapper > header')[0];
            if (removeDom) removeDom.remove();
        }
    }
</script>

<style lang="less">
    #components-layout-demo-fixed .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 24px 16px 0;
        float: left;
    }
</style>
