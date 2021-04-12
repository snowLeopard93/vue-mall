// import axios from "axios";

import { add, read } from "../../utils/indexedDB";
import { filterData } from "../../utils/util";

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
      // axios({
      //   url: "api/system/notice",
      //   method: "post",
      //   params: params
      // }).then(response => {
      //   commit("getNoticeList", response.data);
      // });
      let request = read("notice");
      request.onsuccess = event => {
        console.log(request.result);
        let noticeList = request.result;
        let filterNoticeList = filterData(noticeList, params);
        console.log("读取成功！", event);
        commit("getNoticeList", filterNoticeList);
      };
    },
    addNotice({ commit }, params) {
      let request = add("notice", params);
      request.onsuccess = event => {
        console.log("写入成功！", event);
        let readRequest = read("notice");
        readRequest.onsuccess = event => {
          console.log(readRequest.result);
          console.log("读取成功！", event);
          commit("getNoticeList", readRequest.result);
        };
      };
      request.onerror = event => {
        console.log("写入失败", event);
      };
    }
  },
  modules: {}
};
