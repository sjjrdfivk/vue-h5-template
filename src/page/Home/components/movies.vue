<template>
  <div class="movies">
    <mu-button color="primary" @click="$router.push({path:'/DetailPage',query:{id:'123456'}})">跳转详情页面</mu-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
<style scope lang="less">

</style>
