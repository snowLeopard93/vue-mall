import axios from "axios";

export default {
  namespaced: true,
  state: {
    orderList: [],
    currentSelectOrder: {}
  },
  mutations: {
    getOrderList(state, data) {
      data.forEach(item => {
        switch (item.status) {
          case "1":
            item.showStatus = "待付款";
            break;
          case "2":
            item.showStatus = "待收货";
            break;
          case "3":
            item.showStatus = "已完成";
            break;
          case "4":
            item.showStatus = "已取消";
            break;
          default:
            item.showStatus = "";
        }
      });
      state.orderList = data;
    },
    getCurrentSelectOrder(state, selectOrder) {
      state.currentSelectOrder = selectOrder;
    }
  },
  getters: {
    getCurrentSelectOrder: state => {
      return state.currentSelectOrder;
    }
  },
  actions: {
    getOrderList({ commit }, params) {
      axios({
        url: "api/orderManage/order",
        method: "post",
        params: params
      }).then(response => {
        commit("getOrderList", response.data);
      });
    }
  },
  modules: {}
};
