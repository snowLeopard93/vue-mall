<template>
  <div>
    <MyDetailDrawer :title="title">
      <template v-slot:content>
        <div class="logDetail-box">
          <div class="logDetail-label">日志名称：</div>
          <div class="logDetail-detail">{{ log.name }}</div>
          <div class="logDetail-label">日志类型：</div>
          <div class="logDetail-detail">{{ log.logType }}</div>
          <div class="logDetail-label">创建时间：</div>
          <div class="logDetail-detail">{{ log.ctime }}</div>
        </div>
        <div class="logDetail-long-box">
          <div class="logDetail-label">内容：</div>
          <div class="logDetail-long-detail">{{ log.content }}</div>
        </div>
      </template>
    </MyDetailDrawer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LogDetail",
  data() {
    return {
      title: "查看详情"
    };
  },
  computed: mapState({
    log: state => state.log.currentSelectLog
  }),
  methods: {}
};
</script>

<style scoped>
.logDetail-box {
  display: flex;
  flex-wrap: wrap;
}

.logDetail-label {
  width: 15%;
  text-align: right;
  margin-bottom: 10px;
}

.logDetail-detail {
  width: 35%;
  margin-bottom: 10px;
}

.logDetail-long-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.logDetail-long-detail {
  width: 85%;
}
</style>
