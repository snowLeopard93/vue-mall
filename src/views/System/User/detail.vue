<template>
  <div>
    <MyDetailDrawer :title="title">
      <template v-slot:content>
        <div class="userDetail-box">
          <div class="userDetail-label">登录名：</div>
          <div class="userDetail-detail">{{ user.loginName }}</div>
          <div class="userDetail-label">用户名：</div>
          <div class="userDetail-detail">{{ user.userName }}</div>
          <div class="userDetail-label">邮箱：</div>
          <div class="userDetail-detail">{{ user.email }}</div>
          <div class="userDetail-label">手机号：</div>
          <div class="userDetail-detail">{{ user.telPhone }}</div>
          <div class="userDetail-label">状态：</div>
          <div class="userDetail-detail">{{ user.showStatus }}</div>
          <div class="userDetail-label">创建时间：</div>
          <div class="userDetail-detail">{{ user.createTime }}</div>
          <div class="userDetail-label">地址：</div>
          <div class="userDetail-detail">{{ user.address }}</div>
        </div>
        <div class="userDetail-long-box">
          <div class="userDetail-label">备注：</div>
          <div class="userDetail-long-detail">{{ user.remark }}</div>
        </div>
      </template>
    </MyDetailDrawer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserDetail",
  data() {
    return {
      title: "查看详情"
    };
  },
  computed: mapState({
    user: state => state.user.currentSelectUser
  }),
  methods: {}
};
</script>

<style scoped>
.userDetail-box {
  display: flex;
  flex-wrap: wrap;
}

.userDetail-label {
  width: 15%;
  text-align: right;
  margin-bottom: 10px;
}

.userDetail-detail {
  width: 35%;
  margin-bottom: 10px;
}

.userDetail-long-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.userDetail-long-detail {
  width: 85%;
}
</style>
