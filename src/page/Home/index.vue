<template>
  <div class="home-page">
    <section class="home-section">
      <div v-show="home.shift === 'movies'">
        <movies v-if="actions.includes('movies')"></movies>
      </div>
      <div v-show="home.shift === 'music'">
        <music v-if="actions.includes('music')"></music>
      </div>
      <div v-show="home.shift === 'books'">
        <books v-if="actions.includes('books')"></books>
      </div>
      <div v-show="home.shift === 'pictures'">
        <pictures v-if="actions.includes('pictures')"></pictures>
      </div>
    </section>
    <footer class="home-container" ref="footer">
      <mu-container>
        <mu-bottom-nav :value.sync="shift" shift @change="change">
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
import { getRequest, postRequest } from '@/api/home.js'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      actions: ['movies']
    }
  },
  computed: {
    ...mapState(['home']), // State调用
    shift: {
      get: function () {
        return this.home.shift
      },
      set: function (value) {
        this.setHomeShift(value)
      }
    }
  },
  created () {
    // this.initData()
  },
  mounted () {
    this.setFooterHeight(this.$refs.footer.clientHeight)
  },
  methods: {
    ...mapActions(['setHomeShift', 'setFooterHeight']), // Actions调用
    change (value) {
      if (!this.actions.includes(value)) {
        this.actions.push(value)
      }
    },
    // 接口请求
    async initData () {
      getRequest({ data: '123' }).then(() => {}).catch(() => {})
      postRequest({ data: '123' }).then(() => {}).catch(() => {})
      try {
        const getRequestData = await getRequest({ data: '123' })
        const postRequestData = await postRequest({ data: '123' })
        if (getRequestData && postRequestData) {}
      } catch (error) {
      }
    }
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
    // padding: 1rem .2rem 0;
    >div{
      height: 100%;
      width: 100%;
    }
  }
  .home-container{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
