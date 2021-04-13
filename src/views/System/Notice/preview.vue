<template>
  <div>
    <MyDialog :title="title">
      <template v-slot:content>
        <div v-html="notice.content"></div>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NoticePreview",
  data() {
    return {
      title: "公告预览"
    };
  },
  computed: mapState({
    notice: state => state.notice.currentSelectNotice
  }),
  methods: {}
};
</script>

<style scoped></style>
