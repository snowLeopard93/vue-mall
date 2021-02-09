import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentMenu: []
  },
  mutations: {
    chaneCurrentMenu(state, menu) {
      menu = menu.filter(item => {
        return item.title;
      });
      state.currentMenu = menu;
    }
  },
  getters: {
    currentMenu: state => {
      return state.currentMenu;
    }
  },
  actions: {},
  modules: {}
});
