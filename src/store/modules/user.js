import axios from "axios";

export default {
  namespaced: true,
  state: {
    userList: [],
    currentSelectUser: {}
  },
  mutations: {
    getUserList(state, data) {
      data.forEach(item => {
        switch (item.status) {
          case "1":
            item.showStatus = "正常";
            break;
          case "2":
            item.showStatus = "已锁定";
            break;
          default:
            item.showStatus = "";
            break;
        }
      });
      state.userList = data;
    },
    getCurrentSelectUser(state, selectUser) {
      state.currentSelectUser = selectUser;
    }
  },
  getters: {
    currentSelectUser: state => {
      return state.currentSelectUser;
    }
  },
  actions: {
    getUserList({ commit }, params) {
      console.log(params);
      axios({
        url: "api/system/user",
        method: "post",
        params: params
      }).then(response => {
        commit("getUserList", response.data);
      });
    }
  },
  modules: {}
};
