import Vue from 'vue'
import Vuex from 'vuex'
import login from '../strore/module/login'

Vue.use(Vuex)

export default new Vuex.Store({
  moudules:{
    login
  },
  strict:true, //严格模式，防止直接修改state (性能很差， 部署后改为false)

})
