import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    currentMenu: []
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
    }
  },
  getters: {
    collapsed: state => {
      return state.collapsed;
    },
    currentMenu: state => {
      return state.currentMenu;
    }
  },
  actions: {},
  modules: {}
});
