<template>
    <div >
        <div class="container" v-bind:id="scrollId">
          <div class="scroll-container">
            <div class="xs-container">
              <slot></slot>
            </div>
          </div>
        </div>
        
      </div>
</template>
<script>
    import XScroll from 'LIB/xscroll/xscroll.js'
    // import Infinite from 'LIB/xscroll/plugins/infinite.js'
    import PullUp from 'LIB/xscroll/plugins/pullup.js'
    import evBus from '../service/service.js'
    const pullupDefaultConfig = () => ({
      content: 'Pull Up To Refresh',
      pullUpHeight: 60,
      height: 40,
      autoRefresh: false,
      downContent: '<strong>下拉刷新</strong>',
      upContent: '上拉刷新',
      loadingContent: 'Loading...',
      clsPrefix: 'xs-plugin-pullup-'
    })

    export default {
      data () {
        return {
          scrollId: `scrollId${Date.now()}${Math.floor(Math.random() * 100)}`
        }
      },
      props: {
        lockX: {
          type: Boolean,
          default: true
        },
        lockY: {
          type: Boolean,
          default: false
        },
        scrollbarX: {
          type: Boolean,
          default: true
        },
        scrollbarY: {
          type: Boolean,
          default: true
        },
        bounce: {
          type: Boolean,
          default: true
        }
      },
      methods: {
        refresh () {
        }
      },
      mounted () {
        let content = this.$el.querySelector('.scroll-container')
        console.log(content)
        let scroller = new XScroll({
          renderTo: `#${this.scrollId}`,
          lockX: this.lockX,
          lockY: this.lockY,
          scrollbarX: this.scrollbarX,
          scrollbarY: this.scrollbarY,
          content: content,
          bounce: this.bounce,
          // useOriginScroll: this.useOriginScroll,
          useTransition: true,
          preventDefault: true,
          // boundryCheck: this.boundryCheck,
          gpuAcceleration: true,
          stopPropagation: false
        })
        let pullup = new PullUp(pullupDefaultConfig())
        pullup.on('loading', (e) => {
          this.$emit('pullup')
        })
        let refresh = () => {
          setTimeout(() => {
            scroller.resetSize()
            pullup.complete()
          })
        }
        evBus.$on('refresh', () => {
          refresh()
        })
        scroller.plug(pullup)
        scroller.render()
      },
      created () {
      },
      destroyed () {
        if (this.scroller) {
          this.scroller.destroy()
        }
      }
    }
</script>
<style lang="scss" scoped>
    
    
    
</style>