<template>
  <div :class="[`header-theme-${headerTheme}`]" class="header">Header</div>
</template>

<script>
export default {
  name: "Header",
  props: {
    headerTheme: {
      type: String,
      default: "dark"
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
</style>
