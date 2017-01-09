<template>
    <div class="header-bar">
      <button class="menu-btn" v-on:click="menuBtnClick">菜单</button>
      <h5 class="title">cnode社区</h5>
      
    </div>
</template>
<script>
    export default {
      props: {
        menuBtnClick: {
          type: Function,
          default: function () {}
        }
      },
      created () {
      }
    }
</script>
<style lang="scss" scoped>
    $barHeight:44px;
    @mixin setBarHeight ($barHeight) {
      height:$barHeight;
      line-height: $barHeight;
    }
    .header-bar {
      position: fixed;
      left:0;
      right:0;
      top:0;
      background:#fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      z-index: 13;
      @include setBarHeight($barHeight);
      .menu-btn {
        position: absolute;
        left:0;
        top:0;
        width:44px;
        text-align: center;
        border: none;
        background: none;
        @include setBarHeight($barHeight);
        &:active{
          border:none;
          outline: none;
        }
      }
      .title {
        @include setBarHeight($barHeight);
        width:100%;
        padding: 0 40px;
        text-align: center;
        box-sizing: border-box;
      }
    }
    
    
</style>