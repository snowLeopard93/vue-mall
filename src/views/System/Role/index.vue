<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" @click="getRoleData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
      </template>
      <template v-slot:rightToolBar>
        <div class="searchForm-item">
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
    <MyTable
      :columns="columns"
      :data-source="roleList"
      @dbClickRow="dbClickRow"
    />
    <RoleDetail />
  </div>
</template>

<script>
import { mapState } from "vuex";
import RoleDetail from "./detail";

export default {
  name: "Role",
  components: {
    RoleDetail
  },
  mounted() {
    this.getRoleData();
  },
  data() {
    const columns = [
      {
        title: "角色名",
        dataIndex: "roleName",
        key: "roleName",
        scopedSlots: { customRender: "roleName" }
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
    return {
      columns: columns,
      searchParams: {},
      searchRoleName: ""
    };
  },
  computed: mapState({
    roleList: state => state.role.roleList
  }),
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
      this.$store.dispatch("role/getRoleList", params);
    },
    dbClickRow(data) {
      this.$store.commit("role/getCurrentSelectRole", data);
      this.$store.commit("system/changeDetailDrawerVisible", true);
    }
  }
};
</script>

<style scoped></style>
