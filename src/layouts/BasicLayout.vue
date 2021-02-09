<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        v-model="collapsed"
        collapsible
        width="256px"
      >
        <div class="logo">Ant Design Vue Mall</div>
        <SiderMenu :menu-theme="navTheme" :collapsed="collapsed" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            v-if="navLayout === 'left'"
            v-auth="['admin']"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <MyBreadcrumb />
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <Authorized :authority="['admin']">
      <SettingDrawer />
    </Authorized>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";
import MyBreadcrumb from "../components/Breadcrumb";

export default {
  name: "BasicLayout",
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer,
    MyBreadcrumb
  }
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}

.trigger:hover {
  background: #eeeeee;
}

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark >>> .logo {
  color: #ffffff;
}
</style>
