<template>
  <div class="testVuex">
    <h2>testVuex</h2>
    <router-link :to="{name:'HelloWorld'}">
      <van-button type="info" style="margin-bottom: 20px">返回</van-button>
    </router-link>
    <br>
      <van-button type="primary" size="small" @click="decrement({amount:10,name:'decrement10'})">-10</van-button>
      <span style="display: inline-block; width: 50px; 
  text-align: center;">{{count}}</span>
      <van-button type="primary" size="small" @click="increment({amount:10,name:'increment10'})">+10</van-button>
      <h4>{{greaterStu}}</h4>
      <h2>{{greaterStulen}}</h2>
    <TestVuexChild />
  </div>
</template>
<script>
import TestVuexChild from '@/components/TestVuexChild'
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  name:"",
  components:{
    TestVuexChild
  },
  props:{

  },
  vuex:{

  },
  data(){
  return{
  }
  },
  computed:{
    ...mapState(['count','students']),
    ...mapGetters(['greaterStu','greaterStulen'])
  },
  methods:{
    // ...mapMutations({
    //   decrement10: 'decrement',
    //   increment10: 'increment'
    // })
    
    // addHandle(){
    //   this.$store.commit('increment')
    // },
    // subHandle(){
    //   this.$store.commit('decrement')
    // }
    ...mapMutations(['decrement','increment'])
  },
  beforeCreate(){

  },
  created(){
    
  }
}
</script>
<style scoped>
</style>
