<template>
  <div class="movie">
    <h4>{{movie.title}}</h4>
    <img :src="posterUrl">
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: { type: Object, required: true }
  },
  computed: {
    posterUrl () {
      const imgConf = this.$store.getters['config/images']
      return imgConf.base_url + imgConf.poster_sizes[1] + this.movie.poster_path
    }
  }
}
</script>

<style>
  .movie {
    width: 320px;
    background-color: white;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    margin: 8px;
    padding: 12px;
  }
  .movie h4 {
    margin-top: 0;
  }
</style>
