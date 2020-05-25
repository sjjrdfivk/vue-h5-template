<template>
  <div id="app">
    <transition :name="transitionName">
			<navigation>
				<router-view class="Router"></router-view>
			</navigation>
		</transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-right' // 初始过渡动画方向
    }
  },
  created () {
  },
  watch: {
    $route (to, from) {
      const isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
      this.$router.isBack = false
    }
  }
}
</script>

<style lang="less">
.Loading{
  position: fixed;
  left: 45%;
  top: 30%;
}
#app {
  height: 100%;
  width: 100%;
  background: #ffffff;
}
.Router {
  position: absolute;
  height: 100vh;
  width: 100vw;
  transition: all .3s ease;
  will-change: transform;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
	transform: translate3d(-100%, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
	transform: translate3d(100%, 0 ,0);
	z-index: 1;
}
</style>
