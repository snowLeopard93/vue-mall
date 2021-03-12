<template>
  <div>
    <MyTable :columns="columns" :data-source="userList" />
  </div>
</template>

<script>
import axios from "axios";
// import MyTable from "../../../components/Table/index";

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
  // components: {
  //   MyTable
  // },
  mounted() {
    this.getUserData();
  },
  data() {
    return {
      columns,
      userList: []
    };
  },
  methods: {
    getUserData() {
      axios
        .post("api/system/user", { params: { ID: 12345 } })
        .then(response => {
          this.userList = response.data;
        });
    }
  }
};
</script>

<style scoped></style>
