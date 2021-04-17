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
  data() {
    return {
      confirmDialogModal: null
    };
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
      } else {
        // 当确认弹框隐藏时 判断 Modal对象是否存在，存在则销毁
        if (this.confirmDialogModal) {
          this.confirmDialogModal.destroyAll();
        }
      }
    }
  },
  methods: {
    showConfirm() {
      let that = this;
      this.confirmDialogModal = Modal.confirm({
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
