import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      name: 'xiaoming',
      count: 1,
    },
    mutations: {
        increment (state) {
           state.count ++
        },
        addTen: state => {
          state.count += 10;
        },
        test: state => {
          console.log("action1 延时测试，哦也")
        },
        test2: state => {
          console.log("action2 延时测试，哦也")
        }
    },
    getters: {
        getcount : state => {
          return state.count;
        }
    },
    actions: {
        increment (context) {
          context.commit('increment');
        },
        test ({commit}) {
          return new Promise((resolve, reject) => {
            setTimeout(function(){
                commit('test');
                resolve();
            },3000)
          })
          
        },
        test2({commit,dispatch}) {
          return dispatch('test').then(()=> {
            commit('test2');
          })
        }
    },
    
    
  });