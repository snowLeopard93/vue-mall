<template>
  <div>
    <MyDetailDrawer :title="title">
      <template v-slot:content>
        <div class="noticeDetail-box">
          <div class="noticeDetail-label">标题：</div>
          <div class="noticeDetail-detail">{{ notice.title }}</div>
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
    </MyDetailDrawer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NoticeDetail",
  data() {
    return {
      title: "查看详情"
    };
  },
  computed: mapState({
    notice: state => state.notice.currentSelectNotice
  }),
  methods: {}
};
</script>

<style scoped>
.noticeDetail-box {
  display: flex;
  flex-wrap: wrap;
}

.noticeDetail-label {
  width: 15%;
  text-align: right;
  margin-bottom: 10px;
}

.noticeDetail-detail {
  width: 35%;
  margin-bottom: 10px;
}

.noticeDetail-long-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.noticeDetail-long-detail {
  width: 85%;
}
</style>
