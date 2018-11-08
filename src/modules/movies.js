/** Store module to handle movies lists **/

import Vue from 'vue'
import Movie from '../models/MovieClass'

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
          // convert all raw data movies to Movie class
          const newCollection = []
          for (const movie of response.data.results) {
            newCollection.push(new Movie(movie))
          }
          // uses Vue.set to be sure to be deeply reactive
          context.commit('setMovies', newCollection)
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
