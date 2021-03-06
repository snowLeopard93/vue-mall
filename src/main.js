import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Breadcrumb,
  Table,
  Form,
  Input,
  Dropdown,
  DatePicker,
  ConfigProvider,
  BackTop,
  Select,
  Divider,
  Alert,
  Row,
  Col,
  FormModel,
  Modal,
  Carousel
} from "ant-design-vue";
import VueI18n from "vue-i18n";
import Auth from "./directives/auth";
import Authorized from "./components/Authorized";
import zhCN from "./locale/zhCN";
import enUS from "./locale/enUS";
import queryString from "query-string";

import MyTable from "./components/Table";
import MySelect from "./components/Select";
import MyToolBar from "./layouts/ToolBar";
import MyDetailDrawer from "./components/Drawer/DetailDrawer";
import MyModifyDrawer from "./components/Drawer/ModifyDrawer";
import MyDialog from "./components/Dialog";
import MyConfirmDialog from "./components/Dialog/ConfirmDialog";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Table);
Vue.use(Form);
Vue.use(Input);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(ConfigProvider);
Vue.use(BackTop);
Vue.use(Select);
Vue.use(Divider);
Vue.use(Alert);
Vue.use(Row);
Vue.use(Col);
Vue.use(FormModel);
Vue.use(Modal);
Vue.use(Carousel);

Vue.use(VueI18n);
Vue.use(Auth);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2376320_qacve9z50ls.js", // 在 iconfont.cn 上生成
  // 额外属性
  extraCommonProps: {
    // class
    class: "icon"
  }
});

Vue.component("Authorized", Authorized);
Vue.component("IconFont", IconFont);
Vue.component("MyTable", MyTable);
Vue.component("MySelect", MySelect);
Vue.component("MyToolBar", MyToolBar);
Vue.component("MyDetailDrawer", MyDetailDrawer);
Vue.component("MyModifyDrawer", MyModifyDrawer);
Vue.component("MyDialog", MyDialog);
Vue.component("MyConfirmDialog", MyConfirmDialog);

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
