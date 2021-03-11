<template>
  <div :class="[`nav-theme-${navTheme}`]">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header
        :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }"
      >
        <Header :header-theme="navTheme" />
      </a-layout-header>
      <a-layout :style="{ padding: 0, marginTop: '64px' }">
        <a-layout-sider
          :theme="navTheme"
          :trigger="null"
          v-model="collapsed"
          collapsible
          width="256px"
          :style="{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }"
        >
          <SiderMenu :menu-theme="navTheme" :collapsed="collapsed" />
        </a-layout-sider>
        <a-layout
          class="basicLayout-content"
          :class="{ 'basicLayout-content-collapsed': collapsed }"
        >
          <MyBreadcrumb />
          <a-layout-content class="basicLayout-content-content">
            <router-view></router-view>
          </a-layout-content>
          <a-layout-footer>
            <Footer />
          </a-layout-footer>
        </a-layout>
      </a-layout>
      <a-back-top :visibilityHeight="50" />
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
  margin-left: 256px;
  padding: 24px;
  min-height: calc(100vh - 64px);
}

.basicLayout-content-collapsed {
  margin-left: 80px;
}

.basicLayout-content-content {
  background: #fff;
  padding: 24px;
  margin: 0;
}
</style>
