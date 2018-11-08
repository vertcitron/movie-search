/** Store module to handle TMDb config **/

import Vue from 'vue'

export default {
  namespaced: true,
  // ----------------------------------------------------------------------------------
  state: {
    images: {}
  },
  // ----------------------------------------------------------------------------------
  getters: {
    images: state => state.images
  },
  // ----------------------------------------------------------------------------------
  mutations: {
    setImages: (state, data) => {
      Vue.set(state, 'images', data)
    }
  },
  // ----------------------------------------------------------------------------------
  actions: {
    /** Search for a movies collection matching a string  **/
    get: (context) => {
      const params = { api_key: process.env.VUE_APP_API_KEY }
      // don't forget that an action should return a promise.
      return Vue.axios.get('configuration', { params })
        .then(response => {
          // uses Vue.set to be sure to be deeply reactive
          context.commit('setImages', response.data.images)
          return Promise.resolve(context.state.movies)
        })
        .catch(error => {
          // in case of error, empties the movies collection
          context.commit('setImages', {})
          return Promise.reject(error)
        })
    }
  }
}
