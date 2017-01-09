<template>
    <div   >
        <div class="container" v-bind:id="scrollId">
          <slot></slot>
        </div>
        
      </div>
</template>
<script>
    import JRoll from 'assets/lib/JRoll.js'
    export default {
      data () {
        return {
          scrollId: `scrollerId${Date.now()}`,
          scroller: null
        }
      },
      props: {
        menuBtnClick: {
          type: Function,
          default: function () {}
        },
        canRefresh: {
          type: Boolean,
          default: false
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
        let self = this
        setTimeout(function () {
          self.scroller = new JRoll(`#${self.scrollId}`)
          // this.scroller.options.bounce = false
          self.scroller.on('scroll', function () {
            // console.log(this)
            self.$emit('scrolling', this)
          })
        }, 300)
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