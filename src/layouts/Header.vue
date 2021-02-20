<template>
  <div :class="[`header-theme-${headerTheme}`]" class="header">
    <div class="header-locale">
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
    </div>
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
  methods: {
    changeLocale({ key }) {
      this.$router.push({ query: { ...this.$route.query, locale: key } });
    }
  }
};
</script>

<style scoped>
.header {
  float: right;
  width: calc(100% - 256px);
}

.header-theme-dark {
  color: #ffffff;
  background: #001529;
}

.header-theme-light {
  color: #001529;
  background: #ffffff;
}

.header-locale {
  float: right;
  margin-right: 30px;
}
</style>
