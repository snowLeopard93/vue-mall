import axios from "axios";

export default {
  namespaced: true,
  state: {
    noticeList: [],
    currentSelectNotice: {}
  },
  mutations: {
    getNoticeList(state, data) {
      data.forEach(item => {
        switch (item.status) {
          case "1":
            item.showStatus = "待提交";
            break;
          case "2":
            item.showStatus = "待审核";
            break;
          case "3":
            item.showStatus = "已发布";
            break;
          default:
            item.showStatus = "";
            break;
        }
      });
      state.noticeList = data;
    },
    getCurrentSelectNotice(state, selectNotice) {
      state.currentSelectNotice = selectNotice;
    }
  },
  getters: {
    getCurrentSelectNotice: state => {
      return state.currentSelectNotice;
    }
  },
  actions: {
    getNoticeList({ commit }, params) {
      axios({
        url: "api/system/notice",
        method: "post",
        params: params
      }).then(response => {
        commit("getNoticeList", response.data);
      });
    }
  },
  modules: {}
};
