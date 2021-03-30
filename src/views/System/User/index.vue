<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <div class="leftToolBar-item">
          <a-button type="primary" @click="getUserData">
            <IconFont type="icon-refresh" style="font-size: 14px;" />
          </a-button>
        </div>
        <div class="leftToolBar-item">
          <a-button type="primary" @click="addUser">
            <IconFont type="icon-add" style="font-size: 14px;" />
          </a-button>
        </div>
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
    <div v-show="showTips" style="position: absolute;top: 75px;right: 0;">
      <a-alert message="功能开发中，请耐心等待~~" :banner="true" closable />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserDetail from "./detail";

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
      detailVisible: false,
      showTips: false
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
      this.showTips = true;
      // let params = {
      //   key: 2,
      //   loginName: "李四",
      //   userName: "李四",
      //   email: "8511646576@qq.com",
      //   telPhone: "18709897890",
      //   status: "2",
      //   createTime: "2021-02-15 12:00:00",
      //   address: "福建省厦门市",
      //   remark:
      //     "备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2"
      // };
      // let params = {
      //   key: 3,
      //   loginName: "王五",
      //   userName: "王五",
      //   email: "2511646576@qq.com",
      //   telPhone: "15709897890",
      //   status: "1",
      //   createTime: "2021-02-15 09:00:00",
      //   address: "福建省福州市",
      //   remark:
      //     "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
      // };
      // let params = {
      //   key: 4,
      //   loginName: "赵六",
      //   userName: "赵六",
      //   email: "2511646576@qq.com",
      //   telPhone: "15709897890",
      //   status: "2",
      //   createTime: "2021-02-15 09:00:00",
      //   address: "福建省福州市",
      //   remark:
      //     "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
      // };
      // let params = {
      //   key: 5,
      //   loginName: "张三1",
      //   userName: "张三1",
      //   email: "2511646576@qq.com",
      //   telPhone: "15709897890",
      //   status: "1",
      //   createTime: "2021-02-15 09:00:00",
      //   address: "福建省福州市",
      //   remark:
      //     "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
      // };
      // this.$store.dispatch("user/addUser", params);
    }
  }
};
</script>

<style scoped></style>
