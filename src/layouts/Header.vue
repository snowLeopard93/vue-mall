<template>
  <div class="header" :class="[`header-theme-${headerTheme}`]">
    <div class="header-sidebarMenu-icon">
      <a-icon
        v-auth="['admin']"
        type="menu"
        class="trigger"
        @click="changeCollapsed"
      />
    </div>
    <div class="header-logo">Ant Design Vue Mall</div>
    <div class="header-theme" title="主题切换">
      <IconFont
        type="icon-switch-on"
        style="font-size: 30px;"
        v-show="headerTheme === 'dark'"
        @click="changeTheme('light')"
      />
      <IconFont
        type="icon-switch-off"
        style="font-size: 30px;"
        v-show="headerTheme === 'light'"
        @click="changeTheme('dark')"
      />
    </div>
    <!-- <div class="header-locale">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-icon type="global" />
        </a>
        <a-menu
          slot="overlay"
          @click="changeLocale"
          :selected-keys="[$route.query.locale || 'zhCN']"
        >
          <a-menu-item key="zhCN">
            中文
          </a-menu-item>
          <a-menu-item key="enUS">
            英文
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    headerTheme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    // 切换菜单收缩
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      this.$store.commit("system/changeCollapsed", this.collapsed);
    },
    // 切换语言
    changeLocale({ key }) {
      this.$router.push({ query: { ...this.$route.query, locale: key } });
      this.$i18n.locale = key;
    },
    // 切换主题
    changeTheme(theme) {
      this.$store.commit("system/changeTheme", theme);
    }
  }
};
</script>

<style scoped>
.header {
  box-shadow: 0 0 4px #001529a3;
}
.header-theme-dark {
  color: #ffffff;
  background: #001529;
}

.header-theme-light {
  color: #001529;
  background: #ffffff;
}

.header-sidebarMenu-icon {
  width: 80px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
}

.header-logo {
  width: 256px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
}

.header-theme {
  float: right;
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 20px;
}

.header-locale {
  float: right;
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 20px;
}

.icon {
  color: #1da57a;
  vertical-align: -0.25em;
}
</style>
