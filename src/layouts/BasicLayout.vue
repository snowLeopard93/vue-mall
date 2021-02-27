<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header style="padding: 0">
        <Header :header-theme="navTheme" />
      </a-layout-header>
      <a-layout>
        <a-layout-sider
          v-if="navLayout === 'left'"
          :theme="navTheme"
          :trigger="null"
          v-model="collapsed"
          collapsible
          width="256px"
        >
          <SiderMenu :menu-theme="navTheme" :collapsed="collapsed" />
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <MyBreadcrumb />
          <a-layout-content class="basicLayout-content">
            <router-view></router-view>
          </a-layout-content>
          <a-layout-footer>
            <Footer />
          </a-layout-footer>
        </a-layout>
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
  computed: {
    collapsed() {
      return this.$store.getters.collapsed;
    },
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
.basicLayout-content {
  background: #fff;
  padding: 24px;
  margin: 0;
  height: 750px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
