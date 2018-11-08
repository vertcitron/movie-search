<template>
  <div class="movie">
    <h5>{{movie.title}}</h5>
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
      return imgConf.base_url + imgConf.poster_sizes[0] + this.movie.poster_path
    }
  }
}
</script>

<style>
  .movie {
    width: 240px;
    background-color: white;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    margin: 8px;
    padding: 12px;
  }
  .movie h5 {
    margin: 0;
    height: 40px;
  }
</style>
