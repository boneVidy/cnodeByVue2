<template>
  <section>
    <div class="backdrop" v-if="isMenuShow" @click="hideMenu"></div>
    <div class="menu" :class="{'show':isMenuShow}" >
        <slot></slot>     
    </div>
    
  </section>
  
</template>
<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isMenuShow () {
        return this.isShow
      }
    },
    created () {
    },
    methods: {
      hideMenu () {
        this.isMenuShow = false
        this.$emit('hideMenu', this.isMenuShow)
      }
    }
  }
</script>
<style lang="scss" scoped>
  // @import './src/style/common.scss'
  @mixin setPos () {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .menu {
    @include setPos();
    width: 150px;
    transition: transform 0.3s ease-in;
    transform: translate3d(-150px,0, 0);
    background: #fff;
    text-align: center;
    color: #333;
    z-index:14;
    &.show{
      transform: translate3d(0,0, 0);
    }
    .item {
       line-height: 30px;
       width: 100%         
    }
  }
  .backdrop {
    @include setPos();
    right: 0;
    background: rgba(0,0,0,0.6);
  }
</style>