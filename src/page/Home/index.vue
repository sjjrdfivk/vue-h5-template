<template>
  <div class="home-page">
    <section class="home-section">
      <movies v-show="shift === 'movies'"></movies>
      <music v-show="shift === 'music'"></music>
      <books v-show="shift === 'books'"></books>
      <pictures v-show="shift === 'pictures'"></pictures>
    </section>
    <footer class="home-container">
      <mu-container>
        <mu-bottom-nav :value.sync="shift" shift>
            <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </footer>
  </div>
</template>

<script>
import movies from './components/movies'
import music from './components/music'
import books from './components/books'
import pictures from './components/pictures'
export default {
  data () {
    return {
      shift: 'movies'
    }
  },
  created () {
  },
  components: {
    movies, music, books, pictures
  }
}
</script>
<style scope lang="less">
.container{
  padding: 0;
}
.home-page{
  display: flex;
  width: 100%;
  height: 100%;
  .home-section{
    margin-bottom:56px;
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    padding: 1rem .2rem 0;
  }
  .home-container{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
