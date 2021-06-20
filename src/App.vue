<template>
  <div id="app">
      <!-- <h1>{{message}}</h1>
      <h2>客户端交互1</h2>
      <div>
        <input v-model="message"/>
      </div>
      <div>
        <button @click="onClick">测试</button>
      </div> -->
      <ul>
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
      </ul>
      <router-view />
    </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data (){
    return {
       message: '老婆芳芳'
    }
  },
  watch:{},
  computed:{},
  methods:{
    onClick(){
      console.log('hello')
    }
  },
  created (){

  },
  mounted (){}
}
</script>
<style lang="less" scoped>
</style>
