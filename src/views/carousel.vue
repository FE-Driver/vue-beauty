<template>
    <div>
        <section class="markdown">
            <h1>Carousel 走马灯</h1>
            <p>
                旋转木马，一组轮播的区域。
            </p>
            <h2>何时使用</h2>
            <ul>
                <li>当有一组平级的内容。</li>
                <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>
                <li>常用于一组图片或卡片轮播。</li>
            </ul>
            <h2>组件演示</h2>
        </section>
        <v-Row :gutter="16">
            <v-Col span="12">
                <code-box
                    title="基本"
                    describe="最典型的用法"
                >
                    <v-carousel :after-change="onChange">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </v-carousel>
                    <template slot="js">
                    export default {
                        data: function() {
                            return {
                                onClose: function() {
                                    console.log(this);
                                }
                            }
                        }
                    }
                    </template>
                    <template slot="css">
                    .ant-carousel .slick-slide h3{
                        text-align: center;
                        height: 100px;
                        line-height: 100px;
                        background: #71B5DE;
                        color: #fff;
                        overflow: hidden;
                        margin: 0;
                    }
                    </template>
                </code-box>

                <code-box
                    title="渐显"
                    describe="切换效果为渐显"
                >
                    <v-carousel :fade="true">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </v-carousel>
                    <template slot="css">
                    .ant-carousel .slick-slide h3{
                        text-align: center;
                        height: 100px;
                        line-height: 100px;
                        background: #71B5DE;
                        color: #fff;
                        overflow: hidden;
                        margin: 0;
                    }
                    </template>
                </code-box>
            </v-col>
            <v-Col span="12">
                <code-box
                    title="垂直"
                    describe="垂直显示"
                    id="components-carousel-demo-vertical"
                >
                    <v-carousel :vertical="true">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </v-carousel>
                    <template slot="css">
                    .ant-carousel .slick-slide h3{
                        text-align: center;
                        height: 100px;
                        line-height: 100px;
                        background: #71B5DE;
                        color: #fff;
                        overflow: hidden;
                        margin: 0;
                    }
                    #components-carousel-demo-vertical .ant-carousel {
                        margin-right: 35px;
                    }
                    </template>
                </code-box>

                <code-box
                    title="自动切换"
                    describe="自动切换下一张"
                >
                    <v-carousel :autoplay="true">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </v-carousel>
                    <template slot="css">
                    .ant-carousel .slick-slide h3{
                        text-align: center;
                        height: 100px;
                        line-height: 100px;
                        background: #71B5DE;
                        color: #fff;
                        overflow: hidden;
                        margin: 0;
                    }
                    </template>
                </code-box>
            </v-col>
        </v-row>
        <api-table
            :apis='apis'
        ></api-table>
    </div>
</template>
<script>
  import codeBox from '../components/codeBox'
  import apiTable from '../components/apiTable'

  export default {
     components: {
         codeBox,
         apiTable
     },
      data: function () {
          return {
              onClose: function() {
                  console.log(this);
              },
              show: true,
              num: 6,
              apis: [
                  {
                      parameter: 'fade',
                      explain: '是否采用渐显模式,为true采用fade,为false采用scrollx',
                      type: 'Boolean',
                      default: 'false'
                  },{
                      parameter: 'dots',
                      explain: '是否显示面板指示点',
                      type: 'Boolean',
                      default: 'true'
                  },{
                      parameter: 'vertical',
                      explain: '是否垂直显示dots',
                      type: 'boolean',
                      default: 'true'
                  },{
                      parameter: 'autoplay',
                      explain: '是否自动切换',
                      type: 'Boolean',
                      default: 'false'
                  },
                  {
                      parameter: 'easing',
                      explain: '动画效果',
                      type: 'String',
                      default: 'linear'
                  },
                  {
                      parameter: 'onChange',
                      explain: '切换面板的回调',
                      type: 'Function',
                      default: '无'
                  }
              ]
          }
      },
      methods: {
          onChange (current) {
              this.$message.info(current);
          }
      }
  }
</script>
<style>
    .ant-carousel .slick-slide h3{
        text-align: center;
        height: 100px;
        line-height: 100px;
        background: #71B5DE;
        color: #fff;
        overflow: hidden;
        margin: 0;
    }
    #components-carousel-demo-vertical .ant-carousel {
        margin-right: 35px;
    }
</style>