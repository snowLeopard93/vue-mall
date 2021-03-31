<template>
  <div>
    <MyModifyDrawer :title="title" @submit="handleSubmit">
      <template v-slot:content>
        <a-form :form="form" layout="vertical" hide-required-mark>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item
                :label="$t('message')['app.system.user.loginNameLabel']"
              >
                <a-input
                  v-decorator="[
                    'loginName',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' }
                      ]
                    }
                  ]"
                  :placeholder="
                    $t('message')['app.system.user.loginNamePlaceholder']
                  "
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                :label="$t('message')['app.system.user.userNameLabel']"
              >
                <a-input
                  v-decorator="[
                    'userName',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' }
                      ]
                    }
                  ]"
                  :placeholder="
                    $t('message')['app.system.user.userNamePlaceholder']
                  "
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item :label="$t('message')['app.system.user.emailLabel']">
                <a-input
                  v-decorator="[
                    'email',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' }
                      ]
                    }
                  ]"
                  :placeholder="
                    $t('message')['app.system.user.emailPlaceholder']
                  "
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                :label="$t('message')['app.system.user.telPhoneLabel']"
              >
                <a-input
                  v-decorator="[
                    'telPhone',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' }
                      ]
                    }
                  ]"
                  :placeholder="
                    $t('message')['app.system.user.telPhonePlaceholder']
                  "
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item
                :label="$t('message')['app.system.user.statusLabel']"
              >
                <a-input
                  v-decorator="[
                    'status',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' }
                      ]
                    }
                  ]"
                  :placeholder="
                    $t('message')['app.system.user.statusPlaceholder']
                  "
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                :label="$t('message')['app.system.user.addressLabel']"
              >
                <a-input
                  v-decorator="[
                    'address',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' }
                      ]
                    }
                  ]"
                  :placeholder="
                    $t('message')['app.system.user.addressPlaceholder']
                  "
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="24">
              <a-form-item
                :label="$t('message')['app.system.user.remarkLabel']"
              >
                <a-textarea
                  v-decorator="[
                    'remark',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter url description'
                        }
                      ]
                    }
                  ]"
                  :rows="4"
                  :placeholder="
                    $t('message')['app.system.user.remarkPlaceholder']
                  "
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
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
    return {
      title: "新增"
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "modifyUserForm" });
  },
  methods: {
    handleSubmit() {
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          let key = uuidv4();
          let createTime = moment().format("YYYY-MM-DD HH:mm:ss");
          values["key"] = key;
          values["createTime"] = createTime;
          this.$store.dispatch("user/addUser", values);
          this.$store.commit("system/changeModifyDrawerVisible", false);
        }
      });
    }
  }
};
</script>

<style scoped></style>
