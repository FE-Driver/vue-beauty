<template>
    <div id="components-layout-demo-fixed-sider">
        <v-layout>
            <v-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
                <div class="logo"></div>
                <v-menu theme="dark" mode="inline" :data="menuData">
                    <template scope="{data}">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span :class="{'nav-text':data.icon}">{{data.name}}</span>
                    </template>
                    <template scope="{data}" slot="sub">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span class="nav-text">{{data.name}}</span>
                    </template>
                </v-menu>
            </v-sider>
            <v-layout :style="{ marginLeft: '200px' }">
                <v-header :style="{ background: '#fff', padding: 0 }"></v-header>
                <v-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                    <div :style="{ padding: 24, background: '#fff', textAlign: 'center' }">...
                        <br />
                        Really
                        <br />...<br />...<br />...<br />
                        long
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />...
                        <br />...<br />...<br />...<br />...<br />...<br />
                        content
                    </div>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2016 Created by Ant UED
                </v-footer>
            </v-layout>
        </v-layout>
    </div>
</template>

<script lang="babel">
    export default{
        data() {
            return {
                menuData: [{
                    name: 'nav 1',
                    icon: 'user',
                }, {
                    name: 'nav 2',
                    icon: 'video-camera',
                }, {
                    name: 'nav 3',
                    icon: 'upload',
                }, {
                    name: 'nav 4',
                    icon: 'bar-chart',
                    selected: true,
                }, {
                    name: 'nav 5',
                    icon: 'cloud-o',
                }, {
                    name: 'nav 6',
                    icon: 'appstore-o',
                }, {
                    name: 'nav 7',
                    icon: 'team',
                }, {
                    name: 'nav 8',
                    icon: 'shop',
                }]
            }
        },

        mounted() {
            let removeDom = document.querySelectorAll('.page-wrapper > header')[0];
            if (removeDom) removeDom.remove();
        }
    }
</script>

<style lang="less">
    #components-layout-demo-fixed-sider .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
</style>
