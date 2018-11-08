/** Model definition file for the Movie Class **/

import store from '../store'

export default class Movie {
  constructor (rawData = {}) {
    this.id = rawData.id
    this.title = rawData.title
    this.poster_path = rawData.poster_path
  }

  get posterUrl () {
    const cfg = store.getters['config/images']
    if (this.poster_path && cfg.base_url) {
      return cfg.base_url + cfg.poster_sizes[0] + this.poster_path
    } else {
      return ''
    }
  }
}
