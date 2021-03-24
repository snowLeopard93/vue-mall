<template>
  <div>
    <a-drawer
      title="Create a new account"
      :width="720"
      :visible="detailDrawerVisible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <slot name="content"> </slot>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1
        }"
      ></div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  name: "MyDetailDrawer",
  computed: {
    detailDrawerVisible() {
      return this.$store.getters.detailDrawerVisible;
    }
  },
  methods: {
    onClose() {
      console.log("detailDrawerClose");
      this.$store.commit("changeDetailDrawerVisible", false);
    }
  }
};
</script>
<style scoped lang="less"></style>
