import axios from "axios";

export default {
  namespaced: true,
  state: {
    roleList: [],
    currentSelectRole: {}
  },
  mutations: {
    getRoleList(state, data) {
      state.roleList = data;
    },
    getCurrentSelectRole(state, selectRole) {
      state.currentSelectRole = selectRole;
    }
  },
  getters: {
    getCurrentSelectRole: state => {
      return state.currentSelectRole;
    }
  },
  actions: {
    getRoleList({ commit }, params) {
      axios({
        url: "api/system/role",
        method: "post",
        params: params
      }).then(response => {
        commit("getRoleList", response.data);
      });
    }
  },
  modules: {}
};
