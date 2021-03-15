<template>
  <div>
    <div class="toolBar">
      <div class="toolBar-left">
        <a-button type="primary" @click="refreshUserData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
      </div>
      <div class="toolBar-right">
        <div style="width: 200px;display: inline-block;margin-right: 10px;">
          <a-input
            placeholder="请输入用户名"
            v-model="searchUserName"
            @pressEnter="changeSearchUserName"
          />
        </div>
        <a-button type="primary" @click="getUserData">
          <a-icon type="search" />
        </a-button>
      </div>
    </div>
    <MyTable :columns="columns" :data-source="userList" />
  </div>
</template>

<script>
import axios from "axios";

const columns = [
  {
    title: "登录名",
    dataIndex: "loginName",
    key: "loginName"
  },
  {
    title: "用户名",
    dataIndex: "userName",
    key: "userName"
  },
  {
    title: "邮箱",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "手机号",
    dataIndex: "telPhone",
    key: "telPhone"
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime"
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "备注",
    dataIndex: "remark",
    key: "remark",
    noEllipsis: true
  },
  {
    title: "操作",
    key: "action"
  }
];

export default {
  name: "User",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "searchForm" });
  },
  mounted() {
    this.getUserData();
  },
  data() {
    return {
      columns,
      searchParams: {},
      searchUserName: "",
      userList: []
    };
  },
  methods: {
    changeSearchUserName() {
      this.searchParams.userName = this.searchUserName;
      this.getUserData(this.searchParams);
    },
    refreshUserData() {
      const params = this.searchParams;
      axios({
        url: "api/system/user",
        method: "post",
        params: params
      }).then(response => {
        this.userList = response.data;
      });
    },
    getUserData() {
      this.searchParams = {
        userName: this.searchUserName
      };
      const params = this.searchParams;
      axios({
        url: "api/system/user",
        method: "post",
        params: params
      }).then(response => {
        this.userList = response.data;
      });
    }
  }
};
</script>

<style scoped>
.toolBar {
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
}

.toolBar-left {
  width: 30%;
  display: inline-block;
}

.toolBar-right {
  width: 70%;
  display: inline-block;
  float: right;
  text-align: right;
}
</style>
