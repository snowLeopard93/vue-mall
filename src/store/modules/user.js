export default {
  namespaced: true,
  state: {
    currentSelectUser: {}
  },
  mutations: {
    getCurrentSelectUser(state, selectUser) {
      state.currentSelectUser = selectUser;
    }
  },
  getters: {
    currentSelectUser: state => {
      return state.currentSelectUser;
    }
  },
  actions: {},
  modules: {}
};
