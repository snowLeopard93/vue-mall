<template>
  <div></div>
</template>
<script>
import { mapState } from "vuex";
import { Modal } from "ant-design-vue";

export default {
  name: "MyConfirmDialog",
  props: {
    content: {
      type: String,
      required: true,
      default: () => {}
    }
  },
  computed: mapState({
    visible: state => state.system.confirmDialogVisible
  }),
  watch: {
    visible(val) {
      if (val) {
        this.$nextTick(() => {
          this.showConfirm();
        });
      }
    }
  },
  methods: {
    showConfirm() {
      let that = this;
      console.log(Modal);
      Modal.confirm({
        title: that.content,
        onOk() {
          that.$emit("handleConfirmClick");
        },
        onCancel() {}
      });
    }
  }
};
</script>
