<template>
  <div>
    <MyDialog :title="title">
      <template v-slot:content>
        <div v-html="notice.content"></div>
      </template>
    </MyDialog>
    <!-- <MyDetailDrawer :title="title">
      <template v-slot:content>
        <div class="noticeDetail-box">
          <div class="noticeDetail-label">标题：</div>
          <div class="noticeDetail-detail">{{ notice.noticeTitle }}</div>
          <div class="noticeDetail-label">状态：</div>
          <div class="noticeDetail-detail">{{ notice.showStatus }}</div>
          <div class="noticeDetail-label">创建时间：</div>
          <div class="noticeDetail-detail">{{ notice.ctime }}</div>
          <div class="noticeDetail-label">修改时间：</div>
          <div class="noticeDetail-detail">{{ notice.mtime }}</div>
        </div>
        <div class="noticeDetail-long-box">
          <div class="noticeDetail-label">内容：</div>
          <div class="noticeDetail-long-detail">{{ notice.content }}</div>
        </div>
      </template>
    </MyDetailDrawer> -->
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
