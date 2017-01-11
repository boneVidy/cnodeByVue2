<template>
    <div>
        <header-bar :menu-btn-click="showMenu"></header-bar>
        <scroller v-on:pullup="load" class="container has-header" v-on:scrolling="onscroll">
          <ul>
            <li class="news-item" v-for="news in list">
              <h4 class="title">{{news.title}}</h4>
              <div class="avatar-box"></div>
            </li>
          </ul>
        </scroller>
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
    .item {
            line-height: 44px;
     }
     .news-item {
       padding: 10px 15px;
       font-size:15px;
       border-bottom: 1px solid #ccc;
       overflow: hidden;
       .title{
         color: #333
       }
     }
     .avatar-box {

     }
</style>
<script>
    import HeaderBar from 'component/Header.vue'
    import MenuBox from 'component/MenuBox.vue'
    import Scroller from 'component/Scroller.vue'
    import evBus from '../service/service.js'
    export default {
      data () {
        return {
          isMenuShow: false,
          list: []
        }
      },
      mounted () {
        this.load()
      },
      created () {
      },
      methods: {
        load () {
          // debugger
          this._http.get('topics').then(res => {
            this.list = this.list.concat(res)
            evBus.$emit('refresh')
          })
        },
        showMenu () {
          this.isMenuShow = true
        },
        whenMenuHide () {
          this.isMenuShow = false
        },
        onscroll (ev) {
          console.log(ev)
        }
      },
      components: {
        HeaderBar,
        MenuBox,
        Scroller
      }
    }
</script>