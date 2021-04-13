// import axios from "axios";

import { add, read, readOne } from "../../utils/indexedDB";
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
    // getCurrentSelectNotice: state => {
    //   return state.currentSelectNotice;
    // }
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
      request.onsuccess = () => {
        let noticeList = request.result;
        let filterNoticeList = filterData(noticeList, params);
        commit("getNoticeList", filterNoticeList);
      };
    },
    getNotice({ commit }, data) {
      let key = data.key;
      let request = readOne("notice", key);
      request.onsuccess = () => {
        let noticeList = request.result;
        commit("getCurrentSelectNotice", noticeList);
      };
    },
    addNotice({ commit }, params) {
      let request = add("notice", params);
      request.onsuccess = () => {
        let readRequest = read("notice");
        readRequest.onsuccess = () => {
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
