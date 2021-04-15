let theme = localStorage.getItem("vue-mall-theme");
if (!theme) {
  localStorage.setItem("vue-mall-theme", "light");
}

export default {
  namespaced: true,
  state: {
    // 侧边菜单是否展开
    collapsed: false,
    // 主题
    theme: localStorage.getItem("vue-mall-theme"),
    // 当前菜单
    currentMenu: [],
    // “查看详情”抽屉是否打开
    detailDrawerVisible: false,
    // “新增、修改”抽屉是否打开
    modifyDrawerVisible: false,
    // “详情”对话框是否打开
    dialogVisible: false,
    // “确认框”是否打开
    confirmDialogVisible: false
  },
  mutations: {
    changeCollapsed(state, collapsed) {
      state.collapsed = collapsed;
    },
    changeTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem("vue-mall-theme", theme);
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
    },
    changeDialogVisible(state, visible) {
      state.dialogVisible = visible;
    },
    changeConfirmDialogVisible(state, visible) {
      state.confirmDialogVisible = visible;
    }
  },
  getters: {
    collapsed: state => {
      return state.collapsed;
    },
    theme: state => {
      return state.theme;
    },
    currentMenu: state => {
      return state.currentMenu;
    },
    detailDrawerVisible: state => {
      return state.detailDrawerVisible;
    },
    modifyDrawerVisible: state => {
      return state.modifyDrawerVisible;
    },
    dialogVisible: state => {
      return state.dialogVisible;
    },
    confirmDialogVisible: state => {
      return state.confirmDialogVisible;
    }
  },
  actions: {},
  modules: {}
};
