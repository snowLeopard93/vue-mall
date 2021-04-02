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
      >
        <a-button type="primary" class="button-left" @click="onSubmit">
          {{ $t("message")["app.submitLabel"] }}
        </a-button>
        <a-button @click="onClose">
          {{ $t("message")["app.cancelLabel"] }}
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MyModifyDrawer",
  props: {
    title: {
      type: String,
      required: false,
      default: () => "新增"
    },
    width: {
      type: String,
      required: false,
      default: () => "720px"
    }
  },
  computed: mapState({
    visible: state => state.system.modifyDrawerVisible
  }),
  methods: {
    onSubmit() {
      this.$emit("submit");
    },
    onClose() {
      this.$store.commit("system/changeModifyDrawerVisible", false);
    }
  }
};
</script>
<style scoped lang="less"></style>
