<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" @click="getRoleData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
      </template>
      <template v-slot:rightToolBar>
        <div style="width: 200px;display: inline-block;margin-right: 10px;">
          <a-input
            placeholder="请输入角色名"
            v-model="searchRoleName"
            @pressEnter="changeSearchRoleName"
          />
        </div>
        <a-button type="primary" @click="getParams">
          <a-icon type="search" />
        </a-button>
      </template>
    </MyToolBar>
    <MyTable :columns="columns" :data-source="roleList" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Role",
  mounted() {
    this.getRoleData();
  },
  data() {
    return {
      columns: [
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
      ],
      searchParams: {},
      searchRoleName: "",
      roleList: []
    };
  },
  methods: {
    changeSearchRoleName() {
      this.searchParams.roleName = this.searchRoleName;
      this.getRoleData();
    },
    getParams() {
      this.searchParams.roleName = this.searchRoleName;
      this.getRoleData();
    },
    getRoleData() {
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
