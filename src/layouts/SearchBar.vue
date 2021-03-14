<template>
  <div class="searchBar">
    <slot />
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style scoped>
.searchBar {
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
}
</style>
