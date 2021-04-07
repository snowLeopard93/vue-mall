// import axios from "axios";
import { add, read } from "../../utils/indexedDB";
import { filterData } from "../../utils/util";

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
      // axios({
      //   url: "api/system/user",
      //   method: "post",
      //   params: params
      // }).then(response => {
      //   commit("getUserList", response.data);
      // });
      let request = read("user");
      request.onsuccess = event => {
        console.log(request.result);
        let userList = request.result;
        let filterUserList = filterData(userList, params);
        console.log("读取成功！", event);
        commit("getUserList", filterUserList);
      };
    },
    addUser({ commit }, params) {
      let request = add("user", params);
      request.onsuccess = event => {
        console.log("写入成功！", event);
        let readRequest = read("user");
        readRequest.onsuccess = event => {
          console.log(readRequest.result);
          console.log("读取成功！", event);
          commit("getUserList", readRequest.result);
        };
      };
      request.onerror = event => {
        console.log("写入失败", event);
      };
    }
  },
  modules: {}
};
