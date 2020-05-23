<template>
  <div class="movies"  v-loading="loading">
    <mu-button color="primary" @click="$router.push({path:'/DetailPage'})">跳转详情页面</mu-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
<style scoped lang="less">

</style>
