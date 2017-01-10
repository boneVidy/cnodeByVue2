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
    // import JRoll from 'assets/lib/JRoll.js'
    // import IScroll from 'iscroll'
    import XScroll from 'xscroll'
    
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
      computed: {
        needRefresh () {
          if (!this.canRefresh) {
            return false
          }
          if (this.scroller) {
            this.refresh()
            return true
          }
        }
      },
      methods: {
        refresh () {
          this.scroller.refresh()
          this.canRefresh = false
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
        scroller.render()
        // this.scroller.options.bounce = false
        // scroller.on('scroll', function () {
        //   console.log(this)
        //   self.$emit('scrolling', this)
        // })
        // scroller.on('scrollEnd', function () {
        //   console.log(this)
        //   self.$emit('scrolling', this)
        // })
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