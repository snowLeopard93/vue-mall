<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header style="padding: 0">
        <div class="logo">Ant Design Vue Mall</div>
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
          <div class="basicLayout-sidebarMenu-icon">
            <a-icon
              v-auth="['admin']"
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="collapsed = !collapsed"
            />
          </div>
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
.logo {
  width: 256px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  display: inline-block;
}

.nav-theme-dark >>> .logo {
  color: #ffffff;
  background: #001529;
}

.nav-theme-light >>> .logo {
  color: #001529;
  background: #ffffff;
}

.basicLayout-content {
  background: #fff;
  padding: 24px;
  margin: 0;
  height: 750px;
  overflow-x: hidden;
  overflow-y: auto;
}

.basicLayout-sidebarMenu-icon {
  width: 64px;
  height: 64px;
  line-height: 64px;
  position: absolute;
  right: -67px;
  bottom: 0;
  font-size: 20px;
}
</style>
