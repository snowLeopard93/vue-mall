export default {
  namespaced: true,
  state: {
    // 侧边菜单是否展开
    collapsed: false,
    // 当前菜单
    currentMenu: [],
    // “查看详情”抽屉是否打开
    detailDrawerVisible: false,
    // “新增、修改”抽屉是否打开
    modifyDrawerVisible: false
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
      state.detailDrawerVisible = visible;
    },
    changeModifyDrawerVisible(state, visible) {
      state.modifyDrawerVisible = visible;
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
    },
    modifyDrawerVisible: state => {
      return state.modifyDrawerVisible;
    }
  },
  actions: {},
  modules: {}
};
