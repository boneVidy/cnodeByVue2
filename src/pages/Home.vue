<template>
    <div>
        <header-bar :menu-btn-click="showMenu"></header-bar>
        <scroller v-on:pullup="load(params)" class="container has-header" v-on:scrolling="onscroll">
          <ul class="list">
            <li class="item" v-for="item in list">
              <h3 class="margin-bottom-close"
                  v-bind:title="getBadge(item.tab, item.good, item.top, false)"
                  :class="getBadge(item.tab, item.good, item.top, true)"
                  >
                  {{item.title}}
              </h3>
              <div class="rows">
                <img :src="item.author.avatar_url" class="avatar-min">
                <div class="info">
                  <p class="rows">
                    <span class="username">
                      {{item.author.loginname}}
                    </span>
                    <span>
                      <strong>{{item.reply_count}}</strong> /{{item.visit_count}}
                      </span>
                  </p>
                </div>
              </div>
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
      @import '~STYLE/mixin.scss';
      @mixin fullflexwidth () {
        display: block;
         width: 100%;
         flex: 1;
      }
     .item{
       .avatar-min {
         display: block;
         @include marginClose(right);
       }
       .info {
         @include fullflexwidth();
         @include box-sizing();
         strong{
           color: #e74c3c;
         }
       }
       .username{
         @include box-sizing();
         @include fullflexwidth();
       }
     }
</style>
<script>
    import HeaderBar from 'component/Header.vue'
    import MenuBox from 'component/MenuBox.vue'
    import Scroller from 'component/Scroller.vue'
    import evBus from '../service/service.js'
    import {getTabInfo} from 'TOOL/util.js'
    console.log(getTabInfo)
    export default {
      data () {
        return {
          isMenuShow: false,
          list: [],
          params: {
            page: 1,
            limit: 10,
            tab: '',
            mdrender: 'false'
          }
        }
      },
      mounted () {
        this.load(this.params)
      },
      created () {
      },
      methods: {
        load (param) {
          // debugger
          this._http.get('topics', param).then(res => {
            this.list = this.list.concat(res)
            this.params.page++
            evBus.$emit('refresh')
          })
        },
        getBadge (tab, good, top, isClass) {
          return getTabInfo(tab, good, top, isClass)
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