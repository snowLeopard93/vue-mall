<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" class="button-left" @click="getUserData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
        <a-button type="primary" @click="addUser">
          <IconFont type="icon-add" style="font-size: 14px;" />
        </a-button>
      </template>
      <template v-slot:rightToolBar>
        <div class="searchForm-item">
          <MySelect
            :data-source="searchStatusList"
            @handleChange="changeSearchStatus"
          />
        </div>
        <div class="searchForm-item">
          <a-input
            placeholder="请输入用户名"
            v-model="searchUserName"
            @pressEnter="changeSearchUserName"
          />
        </div>
        <a-button type="primary" @click="getParams">
          <a-icon type="search" />
        </a-button>
      </template>
    </MyToolBar>
    <MyTable
      :columns="columns"
      :data-source="userList"
      @dbClickRow="dbClickRow"
    />
    <UserDetail />
    <UserModify />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserDetail from "./detail";
import UserModify from "./modify";

export default {
  name: "User",
  components: {
    UserDetail,
    UserModify
  },
  mounted() {
    this.getUserData();
  },
  data() {
    const columns = [
      {
        title: "登录名",
        dataIndex: "loginName",
        key: "loginName",
        scopedSlots: { customRender: "loginName" }
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
        key: "status",
        customRender: function(text, record) {
          return record.showStatus;
        }
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
    return {
      columns: columns,
      searchStatusList: [
        {
          id: "",
          value: "",
          label: "请选择"
        },
        {
          id: "1",
          value: "1",
          label: "正常"
        },
        {
          id: "2",
          value: "2",
          label: "已锁定"
        }
      ],
      searchParams: {},
      searchUserName: "",
      detailVisible: false
    };
  },
  computed: mapState({
    userList: state => state.user.userList
  }),
  methods: {
    changeSearchStatus(data) {
      this.searchParams.status = data;
      this.getUserData();
    },
    changeSearchUserName() {
      this.searchParams.userName = this.searchUserName;
      this.getUserData();
    },
    getParams() {
      this.searchParams.userName = this.searchUserName;
      this.getUserData();
    },
    getUserData() {
      const params = this.searchParams;
      this.$store.dispatch("user/getUserList", params);
    },
    dbClickRow(data) {
      this.$store.commit("user/getCurrentSelectUser", data);
      this.$store.commit("system/changeDetailDrawerVisible", true);
    },
    addUser() {
      this.$store.commit("system/changeModifyDrawerVisible", true);
    }
  }
};
</script>

<style scoped></style>
