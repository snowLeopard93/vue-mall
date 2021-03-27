<template>
  <div>
    <a-drawer
      :title="title"
      :width="width"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <slot name="content"></slot>

      <div>
        <a-divider />
        <slot name="otherContent"></slot>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MyDetailDrawer",
  props: {
    title: {
      type: String,
      required: false,
      default: () => "查看详情"
    },
    width: {
      type: String,
      required: false,
      default: () => "720px"
    }
  },
  computed: mapState({
    visible: state => state.system.detailDrawerVisible
  }),
  methods: {
    onClose() {
      this.$store.commit("system/changeDetailDrawerVisible", false);
    }
  }
};
</script>
<style scoped lang="less"></style>
