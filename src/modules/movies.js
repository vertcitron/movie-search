/** Store module to handle movies lists **/

import Vue from 'vue'

export default {
  namespaced: true,
  // ----------------------------------------------------------------------------------
  state: {
    movies: []
  },
  // ----------------------------------------------------------------------------------
  getters: {
    collection: state => state.movies
  },
  // ----------------------------------------------------------------------------------
  mutations: {
    setMovies: (state, movies) => {
      // uses Vue.set to be sure to be deeply reactive
      Vue.set(state, 'movies', movies)
    }
  },
  // ----------------------------------------------------------------------------------
  actions: {
    /** Search for a movies collection matching a string  **/
    search: (context, searchString) => {
      if (!searchString) {
        context.commit('setMovies', [])
        return Promise.resolve([])
      }
      const params = {
        api_key: process.env.VUE_APP_API_KEY,
        query: searchString
      }
      // don't forget that an action should return a promise.
      return Vue.axios.get(`search/movie`, { params })
        .then(response => {
          console.log(`search successfull for "${params.query}" : ${response.data.results.length} found.`)
          context.commit('setMovies', response.data.results)
          return Promise.resolve(context.state.movies)
        })
        .catch(error => {
          // in case of error, empties the movies collection
          context.commit('setMovies', [])
          return Promise.reject(error)
        })
    }
  }
}
