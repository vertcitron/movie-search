<template>
  <div id="app">
    <h1>Movie Search</h1>
    <h2>Search for movies in the the Movie Database</h2>
    <h4>Example application to illustrate an article</h4>
    <p>
      <label>Type something to search</label>
      <input v-model="search" type="text">
      <button @click="submitSearch"> Search </button>
    </p>
    <ol>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  computed: {
    movies () {
      return this.$store.getters['movies/collection']
    }
  },
  data () {
    return { search: 'Harry Potter' }
  },
  methods: {
    submitSearch () {
      this.$store.dispatch('movies/search', this.search)
    }
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app label {
  margin-right: 16px;
}
#app input {
  margin-right: 16px;
}
#app ol {
  text-align: left;
  width: 50%;
  margin: 32px auto 0 auto;
}
#app ol li {
  line-height: 175%;
}
</style>
