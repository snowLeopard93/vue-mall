<template>
  <div>
    <MyModifyDrawer :title="title" @submit="submitForm" @close="close">
      <template v-slot:content>
        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.loginNameLabel']"
                prop="loginName"
              >
                <a-input
                  v-model="ruleForm.loginName"
                  autocomplete="off"
                  :placeholder="
                    $t('message')['app.system.user.loginNamePlaceholder']
                  "
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.userNameLabel']"
                prop="userName"
              >
                <a-input
                  v-model="ruleForm.userName"
                  autocomplete="off"
                  :placeholder="
                    $t('message')['app.system.user.userNamePlaceholder']
                  "
                />
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
                <a-input
                  v-model="ruleForm.email"
                  autocomplete="off"
                  :placeholder="
                    $t('message')['app.system.user.emailPlaceholder']
                  "
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.telPhoneLabel']"
                prop="telPhone"
              >
                <a-input
                  v-model="ruleForm.telPhone"
                  autocomplete="off"
                  :placeholder="
                    $t('message')['app.system.user.telPhonePlaceholder']
                  "
                />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-model-item
                :label="$t('message')['app.system.user.statusLabel']"
              >
                <MySelect
                  :dataSource="statusList"
                  @handleChange="changeStatus"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.user.addressLabel']"
                prop="address"
              >
                <a-input
                  v-model="ruleForm.address"
                  autocomplete="off"
                  :placeholder="
                    $t('message')['app.system.user.addressPlaceholder']
                  "
                />
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
                  :placeholder="
                    $t('message')['app.system.user.remarkPlaceholder']
                  "
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
import {
  validateTextMaxLen,
  validateTextareaMaxLen
} from "../../../utils/validate";

export default {
  name: "UserModify",
  data() {
    return {
      title: "新增用户",
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
      },
      statusList: [
        {
          value: "1",
          label: "正常"
        },
        {
          value: "2",
          label: "锁定"
        }
      ]
    };
  },
  methods: {
    changeStatus(data) {
      this.ruleForm.status = data;
    },
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
          this.$refs["ruleForm"].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    close() {
      this.$store.commit("system/changeModifyDrawerVisible", false);
      this.$refs["ruleForm"].resetFields();
    }
  }
};
</script>

<style scoped></style>
