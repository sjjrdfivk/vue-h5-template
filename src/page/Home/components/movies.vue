<template>
  <div class="movies" v-loading="loading">
    <Iscroll
    :height="wrapperHeight"
    :top-method="loadTop"
    :bottom-method="loadBottom"
    ref="Iscroll"
    >
      <mu-list>
        <mu-list-item button v-for="item in list" :key='item' @click="goPage">
          <mu-list-item-title>Go Page</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </Iscroll>
  </div>
</template>

<script>
import Iscroll from '@/components/Scroll'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      list: [],
      loading: true,
      wrapperHeight: 0
    }
  },
  computed: {
    ...mapState(['home']) // State调用
  },
  mounted () {
    this.$nextTick(() => {
      this.wrapperHeight = (document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight) - this.home.footerHeight
    })
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
    goPage () {
      this.$router.push({ path: '/DetailPage', query: { id: '123456' } })
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
  // background: rgba(242,242,248,1);
  ul {
    li {
      margin: .1rem 0;
    }
  }
}
</style>
