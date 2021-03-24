<template>
  <div class="my-breadcrumb">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">{{
        item.title
      }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "MyBreadcrumb",
  computed: {
    breadcrumbList() {
      return this.$store.getters.currentMenu;
    }
  }
};
</script>

<style scoped>
.my-breadcrumb {
  height: 30px;
  line-height: 30px;
}
</style>
