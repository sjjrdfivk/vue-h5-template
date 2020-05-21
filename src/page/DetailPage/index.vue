<template>
  <div class="detail-page">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="backPage">
        <mu-icon value="chevron_left"></mu-icon>
      </mu-button>
    </mu-appbar>
    详情页面
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    backPage () {
      history.back()
    }
  }
}
</script>
<style scope lang="less">
.detail-page{
  width: 100%;
  height: 100%;
}
</style>
