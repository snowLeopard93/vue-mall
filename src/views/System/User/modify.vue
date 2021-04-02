<template>
  <div>
    <MyModifyDrawer :title="title" @submit="submitForm">
      <template v-slot:content>
        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.loginNameLabel']"
                prop="loginName"
              >
                <a-input v-model="ruleForm.loginName" autocomplete="off" />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.userNameLabel']"
                prop="userName"
              >
                <a-input v-model="ruleForm.userName" autocomplete="off" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.emailLabel']"
                prop="email"
              >
                <a-input v-model="ruleForm.email" autocomplete="off" />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.telPhoneLabel']"
                prop="telPhone"
              >
                <a-input v-model="ruleForm.telPhone" autocomplete="off" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.statusLabel']"
                prop="status"
              >
                <a-input v-model="ruleForm.status" autocomplete="off" />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.addressLabel']"
                prop="address"
              >
                <a-input v-model="ruleForm.address" autocomplete="off" />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="24">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.remarkLabel']"
                prop="remark"
              >
                <a-textarea
                  v-model="ruleForm.remark"
                  autocomplete="off"
                  :rows="4"
                />
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
      </template>
    </MyModifyDrawer>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default {
  name: "UserModify",
  data() {
    let validateTextMaxLen = (rule, value, callback) => {
      if (value && value.length > 16) {
        callback("长度不能大于16");
      }
      callback();
    };
    let validateTextareaMaxLen = (rule, value, callback) => {
      if (value && value.length > 64) {
        callback("长度不能大于64");
      }
      callback();
    };
    return {
      title: "新增",
      ruleForm: {
        loginName: "",
        userName: "",
        email: "",
        telPhone: "",
        status: "",
        address: "",
        remark: ""
      },
      rules: {
        loginName: [
          {
            required: true,
            message: "不能为空！"
          },
          { validator: validateTextMaxLen }
        ],
        userName: [
          {
            required: true,
            message: "不能为空！"
          },
          { validator: validateTextMaxLen }
        ],
        email: [{ validator: validateTextMaxLen }],
        telPhone: [{ validator: validateTextMaxLen }],
        status: [{ validator: validateTextMaxLen }],
        address: [{ validator: validateTextMaxLen }],
        remark: [{ validator: validateTextareaMaxLen }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          let values = this.ruleForm;
          let key = uuidv4();
          let createTime = moment().format("YYYY-MM-DD HH:mm:ss");
          values["key"] = key;
          values["createTime"] = createTime;
          this.$store.dispatch("user/addUser", values);
          this.$store.commit("system/changeModifyDrawerVisible", false);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped></style>
