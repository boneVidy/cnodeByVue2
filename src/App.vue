<template>
  <div class="container">
    <header-bar :menu-btn-click="showMenu"></header-bar>
    <keep-alive>
      <router-view class="container has-header"></router-view>
    </keep-alive>
    <menu-box v-on:hideMenu="whenMenuHide" :is-show="isMenuShow">
            <div class="item">全部</div>
            <div class="item">精华</div>
            <div class="item">分享</div>
            <div class="item">问答</div>
            <div class="item">招聘</div>
            <div class="item">消息</div>
            <div class="item">关于</div>
        </menu-box>
  </div>
</template>
<script>
  import HeaderBar from 'component/Header.vue'
  import MenuBox from 'component/MenuBox.vue'
  export default {
    data () {
      return {
        isMenuShow: false
      }
    },
    created () {},
    methods: {
      showMenu () {
        this.isMenuShow = true
      },
      whenMenuHide () {
        this.isMenuShow = false
      }
    },
    components: {
      HeaderBar,
      MenuBox
    }
  }
</script>
<style lang="scss">
  @import './src/style/common.scss';
  
</style>