// import axios from "axios";
import { add, read } from "../../utils/indexedDB";
import { filterData } from "../../utils/util";

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
      console.log(params);
      let request = read("role");
      request.onsuccess = event => {
        console.log(request.result);
        let roleList = request.result;
        let filterRoleList = filterData(roleList, params);
        console.log("读取成功！", event);
        commit("getRoleList", filterRoleList);
      };
      // axios({
      //   url: "api/system/role",
      //   method: "post",
      //   params: params
      // }).then(response => {
      //   commit("getRoleList", response.data);
      // });
    },
    addRole({ commit }, params) {
      let request = add("role", params);
      request.onsuccess = event => {
        console.log("写入成功！", event);
        let readRequest = read("role");
        readRequest.onsuccess = event => {
          console.log(readRequest.result);
          console.log("读取成功！", event);
          commit("getRoleList", readRequest.result);
        };
      };
      request.onerror = event => {
        console.log("写入失败", event);
      };
    }
  },
  modules: {}
};
