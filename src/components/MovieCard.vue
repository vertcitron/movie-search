<template>
  <div class="movie">
    <h5>{{movie.title}}</h5>
    <img :src="movie.posterUrl" onerror="this.src=''">
  </div>
</template>

<script>
import Movie from '../models/MovieClass'
export default {
  name: 'MovieCard',
  props: {
    movie: { type: Movie, required: true }
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
