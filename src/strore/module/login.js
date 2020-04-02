export default {
  namespaced: true,
  state:{
    username:"",
    userpassword:""
  },
  mutations: {
    updateUserName(state, data) {
      state.username = data
    },
    updateUserPassword(state, data) {
      state.userpassword = data
    }
  },
  action:{
    UserName({commit}, val) {
      //do something 可以做一些异步操作
      commit('updateUserName', val)
    },
    UserPassword({commit}, val) {
      commit('updateUserPassword', val)
    }
  },
  getters:{
    userInfo(state) {
      return {'username': state.username, 'userpassword': state.userpassword}
    }
  },
  moudules:{

  }

}
