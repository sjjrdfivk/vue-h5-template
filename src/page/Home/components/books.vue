<template>
  <div class="movies" v-loading="loading">
    <Iscroll
    :height="500"
    ref="Iscroll"
    >
      <ul>
        <li v-for="item in list" :key='item'>
          <span>item-{{item}}</span>
        </li>
      </ul>
    </Iscroll>
  </div>
</template>

<script>
import Iscroll from '@/components/Scroll'
export default {
  data () {
    return {
      list: [],
      loading: true
    }
  },
  mounted () {
    this.initList()
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    initList () {
      for (let i = 0; i <= 30; i++) {
        this.list.push(this.list.length + 1)
      }
    },
    loadTop () {
      setTimeout(() => {
        this.list = []
        this.initList()
        this.$refs.Iscroll.finishPullDown()
      }, 2000)
    },
    loadBottom () {
      setTimeout(() => {
        this.initList()
        this.$refs.Iscroll.finishPullUp()
      }, 2000)
    }
  },
  components: {
    Iscroll
  }
}
</script>
<style scoped lang="less">
.movies{
  background: rgba(242,242,248,1);
  ul {
    li {
      margin: .1rem 0;
    }
  }
}
</style>
