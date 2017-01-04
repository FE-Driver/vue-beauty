<template lang="html">

  <section class="code-box" :class="{'expand': open}">
    <section class="code-box-demo">
      <slot></slot>
    </section>
    <section class="code-box-meta markdown">
      <div class="code-box-title"><a>{{ title }}</a></div>
      <div><p>{{{ describe }}}</p></div>
      <span class="collapse anticon anticon-circle-o-right" @click="handleOpen"></span>
    </section>
    <section class="highlight-wrapper" :class="{'highlight-wrapper-expand': open}">
      <div class="highlight">
        <pre>
          <code class="code">{{ code }}</code>
        </pre>
      </div>
      <div v-if="jsCode" class="highlight">
        <pre>
          <code class="code">{{ jsCode }}</code>
        </pre>
      </div>
      <div v-if="cssCode" class="highlight">
        <pre>
          <code class="code">{{ cssCode }}</code>
        </pre>
      </div>
    </section>
  </section>

</template>

<script lang="babel">
  import hljs from 'highlight.js'
  import beautify from 'beautify'

  export default {
    props: {
      title: String,
      describe: String,
      code: String
    },
    data: ()=> ({
      open: false,
      jsCode: '',
      cssCode: ''
    }),
    ready(){
      this.jsCode = this.slotHandle('js', 'js');
      this.cssCode = this.slotHandle('css', 'css');

      if(!this.code){
        this.code = this.slotHandle();
      }

      this.$nextTick(()=> {
        let blocks = this.$el.querySelectorAll('pre code');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
      })
    },
    methods: {
      slotHandle(slot='default', type='html'){
        const _slot = this._slotContents[slot];
        if(!_slot) return false;

        const container = document.createElement('div')
        container.appendChild(_slot.cloneNode(true))

        return beautify(container.innerHTML, {format: type})
      },
      handleOpen() {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="less" scoped>

  .code-box {
    border: 1px solid #e9e9e9;
    border-radius: 6px;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0 0 16px;
    transition: all .2s ease;

    .collapse {
      position: absolute;
      right: 16px;
      bottom: 16px;
      cursor: pointer;
      width: 18px;
      height: 18px;
      font-size: 18px;
      line-height: 18px;
      opacity: .5;
      text-align: center;
      transform: rotate(90deg);
      transition: all .3s ease;
      color: #999;
      background: #fff;
      user-select: none;
      border-radius: 100%;

      &:hover {
        opacity: 1;
      }
    }

    &:hover {
      box-shadow: 0 0 6px rgba(0, 0, 0, .15);
      position: relative;
      z-index: 10;
      background: #fff;

      .code-box-title {
        background: #fbfbfb;
        box-shadow: 0 -1.2px 0 #e9e9e9;
      }

      .code-box-meta {
        background: #fbfbfb;
      }
    }

    .code-box-demo {
      border-bottom: 1px solid #e9e9e9;
      padding: 42px 20px 50px;
    }

    .highlight-wrapper {
      max-height: 0;
      opacity: 0;
      overflow: auto;
      transition: all .4s ease;
      border-radius: 0 0 6px 6px;
    }

    .highlight-wrapper-expand {
      max-height: 500px;
      opacity: 1;
    }
    .highlight{
      &:not(:first-child){
        border-top: 1px dashed #e9e9e9;
      }
      pre{
        line-height: 0;
        padding: 8px;
      }
      .code {
        background: none;
        line-height: 1.8;
      }
    }
  }

  .code-box.expand>.code-box-meta {
    border-radius: 0;
    border-bottom: 1px dashed #e9e9e9;

    &>.collapse{
      transform: rotate(-90deg);
    }
  }

  .code-box-meta {
    position: relative;
    padding: 16px;
    border-radius: 0 0 6px 6px;
    transition: background-color .4s ease;
    width: 100%;
    font-size: 12px;

    p {
      margin: 0;
    }
  }

  .code-box-title {
    position: absolute;
    top: -14px;
    padding: 1px 1.1em;
    color: #777;
    border-radius: 6px;
    background: #fff;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
  }

  .code-box-title:before {
    font-family: anticon;
    content: "\E6D2";
    font-size: 16px;
    vertical-align: middle;
    line-height: 22px;
    position: relative;
    margin-right: 8px;
    top: -2px;
    color: #ccc;
    transform: rotate(-45deg);
    display: inline-block;
  }

  .code-box .code-box-title a,
  .code-box .code-box-title a:hover {
    color: #666;
    font-size: 14px;
  }

</style>