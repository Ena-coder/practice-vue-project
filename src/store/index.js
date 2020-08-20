import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    students: [
      {id:1, name:'aa1', age:16},
      {id:2, name:'aa2', age:17},
      {id:3, name:'aa3', age:18},
      {id:4, name:'aa4', age:19},
      {id:5, name:'aa5', age:20}
    ]
  },
  mutations: {
    increment(state, payload){
      state.count += payload.amount
    },
    decrement(state, payload){
      state.count -= payload.amount
    },
    updateStuDate(state,payload){
      
      console.log(payload);
      var tempObj = state.students.find(item => item.name == 'aa4')
      tempObj.age = payload.age
    }
  },
  getters: {
    greaterStu(state){
      return state.students.filter(item => item.age > 18)
    },
    greaterStulen(state,getters){
      return getters.greaterStu.length
    }
  },
  actions: {
    updateStuDate({commit,state},payload){
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('updateStuDate',payload),
          resolve()
        },1000)
      })
    }
  }
})