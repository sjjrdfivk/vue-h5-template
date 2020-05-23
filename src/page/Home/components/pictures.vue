<template>
  <div class="movies" v-loading="loading">
    4
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
