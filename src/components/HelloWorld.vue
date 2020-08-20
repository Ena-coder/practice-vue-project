<template>
  <div class="hello">
    <van-button type="primary" @click="navToPage('/about')">跳转到图标排列页面</van-button>
    <van-button type="primary" @click="navToPage('/testVuex')">跳转到vuex测试页面</van-button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到测试页面'
    }
  },
  methods:{
    navToPage(url){
      this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
