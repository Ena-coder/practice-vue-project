<template>
  <div class="testVuexChild">
    <h5>-----------testVuexChild-------------</h5>
    <h2>{{count}}</h2>
    <van-button type="primary" @click="updateStuDate({age: 16})">修改aa4的年龄为16</van-button>
    <h4>{{greaterStu}}</h4>
    <h2>{{greaterStulen}}</h2>
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  name:"testVuexChild",
  components:{
  },
  data(){
  return{}
  },
  computed:{
    ...mapState(['count','students']),
    ...mapGetters(['greaterStu', 'greaterStulen'])
  },
  watch:{

  },
  methods:{
    ...mapMutations(['updateStuDate'])
    // updateStuDate(){
    //   var amount = {
    //     age: 16
    //   }
    //   this.$store.dispatch('updateStuDate', amount).then(res => {console.log('完成了更新操作');
    //   })
    // }
  }
}
</script>
<style scoped>

</style>
