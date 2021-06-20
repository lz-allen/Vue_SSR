import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: []
    }),
    mutations: {
      setPosts(state, data) {
        state.posts = data
      }
    },
    actions: {
      // 服务端渲染期间必须返回promise
      async getPosts({commit}) {
        const { data } = await axios.get('https://cnodejs.org/api/v1/topics')
        commit('setPosts', data.data)
      }
    }
  })
}
