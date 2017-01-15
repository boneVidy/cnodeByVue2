<template>
  <div>
    <scroller class="container">
      <h4>{{title}}</h4>
    </scroller>
    
  </div>
</template>
<script>
  import Scroller from 'component/Scroller.vue'
  export default {
    data () {
      return {
        title: this.$route.params.title,
        id: this.$route.params.id
      }
    },
    watch: {
      '$route': function () {
        console.log(this.$route.params)
        this.title = this.$route.params.title
        this.id = this.$route.params.id
        this.scroller.scrollTop()
      }
    },
    mounted () {
      console.log(this.$route)
    },
    components: {Scroller}
  }
</script>
<style lang="scss">
  
</style>