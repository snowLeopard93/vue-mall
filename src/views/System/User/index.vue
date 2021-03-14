<template>
  <div>
    <SearchBar>
      <a-form layout="inline" :form="form" @submit="handleSearch">
        <a-form-item label="用户名" has-feedback>
          <a-input
            placeholder="请输入用户名"
            v-decorator="[
              'userName',
              {
                rules: [
                  {
                    validator: validateSearchUserName
                  }
                ]
              }
            ]"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            <a-icon type="search" />
          </a-button>
        </a-form-item>
      </a-form>
    </SearchBar>
    <MyTable :columns="columns" :data-source="userList" />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "../../../layouts/SearchBar";

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
  components: {
    SearchBar
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "searchForm" });
  },
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
    validateSearchUserName(rule, value, callback) {
      if (value && value.length > 10) {
        callback("长度不能大于10");
      }
      callback();
    },
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          if (values) {
            this.getUserData(values);
          }
        }
      });
    },
    getUserData(params = {}) {
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

<style scoped></style>
