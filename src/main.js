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
  ConfigProvider
} from "ant-design-vue";
import Auth from "./directives/auth";
import Authorized from "./components/Authorized";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2376320_22s4zik6wfl.js" // 在 iconfont.cn 上生成
});

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
Vue.use(ConfigProvider);
Vue.use(Auth);

Vue.component("Authorized", Authorized);
Vue.component("IconFont", IconFont);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
