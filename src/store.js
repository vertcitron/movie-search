import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'
import config from './modules/config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { movies, config }
})
