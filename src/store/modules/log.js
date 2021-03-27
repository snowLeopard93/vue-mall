import axios from "axios";
export default {
  namespaced: true,
  state: {
    logList: [],
    currentSelectLog: {}
  },
  mutations: {
    getLogList(state, data) {
      state.logList = data;
    },
    getCurrentSelectLog(state, selectLog) {
      state.currentSelectLog = selectLog;
    }
  },
  getters: {
    getCurrentSelectLog: state => {
      return state.currentSelectLog;
    }
  },
  actions: {
    getLogList({ commit }, params) {
      axios({
        url: "api/system/log",
        method: "post",
        params: params
      }).then(response => {
        commit("getLogList", response.data);
      });
    }
  },
  modules: {}
};
