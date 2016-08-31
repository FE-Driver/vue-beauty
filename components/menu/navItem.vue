<template>
  <li class="ant-menu-item">
    <div class="ant-menu-submenu-title badge-transition" @click="toggle">
      <span >{{item.name}}</span>
      <slot></slot>

      <span v-if="hasChildren" class="triangle" :class="{'down':open, 'up': !open}"></span>
    </div>
    <ul v-show="open" v-if="hasChildren">
      <nav-item class="item" v-for="item in item.children" :item="item">
      </nav-item>
    </ul>
  </li>
</template>
<!--<style scoped>-->
  <!--.item {-->
    <!--cursor: pointer;-->
    <!--padding-top: 1em;-->
  <!--}-->

  <!--.bold {-->
    <!--font-weight: bold;-->
  <!--}-->
  <!--.open {-->
    <!--color: #42A5F5;-->
  <!--}-->

  <!--ul, li{-->
    <!--list-style-type: none;-->
  <!--}-->

  <!--ul ul ul{-->
    <!--padding-left: 1.2em;-->
  <!--}-->

  <!--li > div {-->
    <!--position: relative;-->
  <!--}-->

  <!--li a {-->
    <!--color: #000;-->
  <!--}-->
  <!--li a:link,-->
  <!--li a:visited,-->
  <!--li a:hover,-->
  <!--li a:active{-->
    <!--text-decoration: none;-->
  <!--}-->

  <!--.triangle {-->
    <!--position: absolute;-->
    <!--height: 0;-->
    <!--width: 0;-->
    <!--margin-left: 8px;-->
    <!--border: 6px solid;-->
  <!--}-->

  <!--.down {-->
    <!--top: 10px;-->
    <!--border-color: #42A5F5 transparent transparent transparent;-->
  <!--}-->
  <!--.up {-->
    <!--top: 3px;-->
    <!--border-color: transparent transparent #42A5F5 transparent;-->
  <!--}-->

<!--</style>-->

<script>
  export default {
    name: 'navItem',
    props: {
      item: Object
    },
    data: function () {
      return {
        open: false,
      }
    },
    computed: {
      hasChildren() {
        return this.item.children &&this.item.children.length
      },
      hasIcon(){
        return this.item.icon? true: false;
      }
    },
    methods: {
      toggle: function () {
        if (this.hasChildren) {
          this.open = !this.open
        }
      }
    },
    ready(){
      console.log(this.item);
    }
  }
</script>