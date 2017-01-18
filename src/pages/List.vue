<template>
    <div>
        <scroller v-on:pullup="load(params)" class="container" v-on:scrolling="onscroll">
          <ul class="list">
            <li class="item" v-for="item in list" @click="goDetail(item.title, item.id)">
              <h3 class="margin-bottom-close"
                  v-bind:title="getBadge(item.tab, item.good, item.top, false)"
                  :class="getBadge(item.tab, item.good, item.top, true)"
                  >
                  {{item.title}}
              </h3>
              <div class="rows">
                <img :src="item.author.avatar_url" class="avatar-min">
                <div class="info">
                  <p class="rows margin-bottom-close">
                    <span class="username">
                      {{item.author.loginname}}
                    </span>
                    <span>
                      <strong>{{item.reply_count}}</strong> /{{item.visit_count}}
                      </span>
                  </p>
                  <p class="rows">
                    <span class="col">发表于{{item.create_at | timeago}}</span>
                    <span class="col text-right">{{item.last_reply_at | timeago}}回复</span>
                   
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </scroller>
        
    </div>
</template>

<style lang="scss" scoped>
      @import '~STYLE/var.scss';
      @import '~STYLE/mixin.scss';
      @import '~STYLE/flex.scss';
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
       .rows {
         font-size: $miniFontSize;
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
        console.log(this.scroller)
      },
      created () {
      },
      methods: {
        goDetail (title, id) {
          this.$router.push({name: 'detail', params: {id, title}})
        },
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