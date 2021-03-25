<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" @click="getUserData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
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
  </div>
</template>

<script>
import UserDetail from "./detail";
import axios from "axios";

export default {
  name: "User",
  components: {
    UserDetail
  },
  mounted() {
    this.getUserData();
  },
  data() {
    return {
      columns: [
        {
          title: "登录名",
          dataIndex: "loginName",
          key: "loginName",
          slots: { title: "customTitle" },
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
      ],
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
      userList: [],
      detailVisible: false
    };
  },
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
      axios({
        url: "api/system/user",
        method: "post",
        params: params
      }).then(response => {
        this.formatUserData(response.data);
      });
    },
    formatUserData(data = []) {
      data.forEach(item => {
        switch (item.status) {
          case "1":
            item.showStatus = "正常";
            break;
          case "2":
            item.showStatus = "已锁定";
            break;
          default:
            item.showStatus = "";
            break;
        }
      });
      this.userList = data;
    },
    dbClickRow() {
      this.$store.commit("system/changeDetailDrawerVisible", true);
    }
  }
};
</script>

<style scoped></style>
