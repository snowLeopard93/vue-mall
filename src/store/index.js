import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    currentMenu: [],
    detailDrawerVisible: false
  },
  mutations: {
    changeCollapsed(state, collapsed) {
      state.collapsed = collapsed;
    },
    chaneCurrentMenu(state, menu) {
      menu = menu.filter(item => {
        return item.title;
      });
      state.currentMenu = menu;
    },
    changeDetailDrawerVisible(state, visible) {
      console.log("changeDetailDrawerVisible");
      state.detailDrawerVisible = visible;
    }
  },
  getters: {
    collapsed: state => {
      return state.collapsed;
    },
    currentMenu: state => {
      return state.currentMenu;
    },
    detailDrawerVisible: state => {
      return state.detailDrawerVisible;
    }
  },
  actions: {},
  modules: {}
});
