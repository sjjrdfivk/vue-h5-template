<template>
  <div ref="wrapper" class="wrapper" :style="{height:`${height}px`}">
    <div>
      <div v-if="!!this.topMethod" class="loadmore-top">
        <div>{{topPullDown}}</div>
      </div>
      <slot></slot>
      <div v-if="!!this.bottomMethod" class="loadmore-bottom">
        <div>{{topUpDown}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      topPullDown: '释放更新...',
      topUpDown: '加载中...',
      scroll: ''
    }
  },
  props: {
    height: {
      type: [Number, String],
      required: true,
      default: 50
    },
    topMethod: {
      type: Function
    },
    bottomMethod: {
      type: Function
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll () {
      if (!this.scroll) {
        let pullDownRefresh = {}
        let pullUpLoad = {}
        if (typeof (this.topMethod) === 'function') {
          pullDownRefresh = {
            pullDownRefresh: {
              threshold: 30,
              probeType: 3
            }
          }
        }
        if (typeof (this.bottomMethod) === 'function') {
          pullUpLoad = {
            pullUpLoad: {
              threshold: -1
            }
          }
        }
        const option = {
          scrollY: true,
          click: true,
          ...pullDownRefresh,
          ...pullUpLoad
        }
        this.scroll = new BScroll(this.$refs.wrapper, option)
        this.scroll.on('scroll', (pos) => {
          this.scrollRoll(pos)
        })
        if (typeof (this.topMethod) === 'function') {
          this.scroll.on('pullingDown', this.pullingDown)
        }
        if (typeof (this.bottomMethod) === 'function') {
          this.scroll.on('pullingUp', this.pullingUp)
        }
      } else {
        this.scroll.refresh()
      }
    },
    scrollRoll (pos) {
      if (pos.y > -2 && pos.y < 3 && !!this.topMethod) {
        this.topPullDown = '释放更新...'
      }
    },
    // 下拉
    pullingDown () {
      this.topPullDown = '更新中...'
      this.topMethod()
    },
    // 上拉
    pullingUp () {
      this.bottomMethod()
    },
    // 重新计算
    refresh () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    finishPullDown () {
      this.refresh()
      this.topPullDown = '更新完成'
      this.scroll.finishPullDown()
    },
    finishPullUp () {
      this.refresh()
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped lang="less">
.wrapper{
  overflow: hidden;
  position: relative;
  .loadmore-top{
    position: absolute;
    width: 100%;
    height: 30px;
    top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loadmore-bottom{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
