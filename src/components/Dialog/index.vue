<template>
  <div>
    <a-modal
      :visible="visible"
      :title="title"
      :footer="null"
      @ok="onSubmit"
      @cancel="onClose"
    >
      <slot name="content"></slot>
    </a-modal>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "MyDialog",
  props: {
    title: {
      type: String,
      required: true,
      default: () => {}
    }
  },
  computed: mapState({
    visible: state => state.system.dialogVisible
  }),
  methods: {
    onSubmit() {
      this.$store.commit("system/changeDialogVisible", false);
    },
    onClose() {
      this.$store.commit("system/changeDialogVisible", false);
    }
  }
};
</script>

<style scoped></style>
