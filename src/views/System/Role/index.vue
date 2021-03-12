<template>
  <div>
    <MyTable :columns="columns" :data-source="roleList" />
  </div>
</template>

<script>
import axios from "axios";

const columns = [
  {
    title: "角色名称",
    dataIndex: "roleName",
    key: "roleName"
  },
  {
    title: "角色描述",
    dataIndex: "desc",
    key: "desc"
  },
  {
    title: "创建时间",
    dataIndex: "ctime",
    key: "ctime"
  },
  {
    title: "修改时间",
    dataIndex: "mtime",
    key: "mtime"
  },
  {
    title: "操作",
    key: "action"
  }
];

export default {
  name: "Role",
  mounted() {
    this.getRoleData();
  },
  data() {
    return {
      columns,
      roleList: []
    };
  },
  methods: {
    getRoleData() {
      axios
        .post("api/system/role", { params: { ID: 12345 } })
        .then(response => {
          this.roleList = response.data;
        });
    }
  }
};
</script>

<style scoped></style>
