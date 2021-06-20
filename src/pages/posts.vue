<template>
  <div class="wrapper">
    <h1>posts list</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActios } from 'vuex'
export default {
  components:{},
  props:{},
  data (){
    return {
      // posts: []
    }
  },
  watch:{},
  computed:{
    ...mapState(['posts'])
  },
  // vue ssr特殊渲染生命周期
  serverPrefetch() {
    return this.getPosts()
  },
  methods:{
    ...mapActios(['getPosts'])
  },
  created (){},
  mounted (){}
}
</script>
