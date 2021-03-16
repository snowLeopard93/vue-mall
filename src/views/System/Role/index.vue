<template>
  <div>
    <div class="toolBar">
      <div class="toolBar-left">
        <a-button type="primary" @click="refreshRoleData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
      </div>
      <div class="toolBar-right">
        <div style="width: 200px;display: inline-block;margin-right: 10px;">
          <a-input
            placeholder="请输入角色名"
            v-model="searchRoleName"
            @pressEnter="changeSearchRoleName"
          />
        </div>
        <a-button type="primary" @click="getRoleData">
          <a-icon type="search" />
        </a-button>
      </div>
    </div>
    <MyTable :columns="columns" :data-source="roleList" />
  </div>
</template>

<script>
import axios from "axios";

const columns = [
  {
    title: "角色名",
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
      searchParams: {},
      searchRoleName: "",
      roleList: []
    };
  },
  methods: {
    changeSearchRoleName() {
      this.searchParams.roleName = this.searchRoleName;
      this.getRoleData(this.searchParams);
    },
    refreshRoleData() {
      const params = this.searchParams;
      axios({
        url: "api/system/role",
        method: "post",
        params: params
      }).then(response => {
        this.roleList = response.data;
      });
    },
    getRoleData() {
      this.searchParams = {
        roleName: this.searchRoleName
      };
      const params = this.searchParams;
      axios({
        url: "api/system/role",
        method: "post",
        params: params
      }).then(response => {
        this.roleList = response.data;
      });
    }
  }
};
</script>

<style scoped></style>
