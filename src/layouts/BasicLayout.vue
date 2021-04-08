<template>
  <div :class="[`nav-theme-${theme}`]">
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header
        :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }"
      >
        <Header :header-theme="theme" />
      </a-layout-header>
      <a-layout :style="{ padding: 0, marginTop: '64px' }">
        <a-layout-sider
          :theme="theme"
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
          <SiderMenu :menu-theme="theme" :collapsed="collapsed" />
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
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import MyBreadcrumb from "../components/Breadcrumb";

import { mapState } from "vuex";

export default {
  name: "BasicLayout",
  computed: mapState({
    collapsed: state => state.system.collapsed,
    theme: state => state.system.theme
  }),
  components: {
    Header,
    Footer,
    SiderMenu,
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
