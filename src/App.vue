<template>
  <div id="app">
    <h1>Movie Search</h1>
    <h2>Search for movies in the the Movie Database</h2>
    <h4>Example application to illustrate an article</h4>
    <p>
      <label>Type something to search</label>
      <input v-model="search" type="text" @keypress.enter="submitSearch">
      <button @click="submitSearch"> Search </button>
    </p>
    <div class="results">
      <movie-card v-for="movie in $store.getters['movies/collection']"
                  :key="movie.id"
                  :movie="movie"></movie-card>
    </div>
  </div>
</template>

<script>
import MovieCard from './components/MovieCard'
export default {
  name: 'app',
  components: { MovieCard },
  data () {
    return { search: '' }
  },
  methods: {
    submitSearch () {
      this.$store.dispatch('movies/search', this.search)
    }
  },
  created () {
    this.$store.dispatch('config/get')
  }
}
</script>

<style>
body {
  background-color: #eee;
}
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 16px;
}
#app label {
  margin-right: 16px;
}
#app input {
  margin-right: 16px;
}
#app .results {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
