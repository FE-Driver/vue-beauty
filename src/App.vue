<template>
    <div class="page-wrapper">
        <header class="clearfix">
            <div class="ant-row">
                <div class="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-4">
                    <a id="logo" href="https://github.com/FE-Driver/vue-beauty" target="_blank" title="github"><img
                            alt="logo" src="./assets/VB-logo.png"><span>Vue Beauty</span></a>
                </div>
            </div>
            <div class="nav  ant-col-xs-0 ant-col-sm-17 ant-col-md-18 ant-col-lg-20">
            </div>
        </header>
        <router-view keep-alive></router-view>
    </div>
</template>

<style scoped lang="less">
    header {
        transition: opacity .5s;
        background: #fff;
        border-bottom: 1px solid #eee;
        height: 80px;
        margin-bottom: 24px;
        padding: 0 4%;
        width: 100%;
    }

    #logo {
        float: left;
        height: 80px;
        line-height: 80px;

        img {
            height: 54px;
            margin-top: 14px;
            margin-right: 8px;
        }

        span {
            float: right;
            font-size: 16px;
            font-family: Raleway, Hiragino Sans GB, sans-serif;
            line-height: 94px;
            font-weight: bold;
            color: #666;
        }
    }
</style>
