<template>
    <div>
        <header-bar :menu-btn-click="showMenu"></header-bar>
        <div class="has-header">home</div>
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

<style lang="scss" scoped>
    
    .has-header { 
        margin-top: 44px;
        
    }
    .item {
            line-height: 44px;
     }
    
</style>
<script>
    import HeaderBar from 'component/Header.vue'
    import MenuBox from 'component/MenuBox.vue'
    export default {
      data () {
        return {
          isMenuShow: false,
          list: []
        }
      },
      mouted () {

      },
      created () {
        console.log(this.$http)
      },
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