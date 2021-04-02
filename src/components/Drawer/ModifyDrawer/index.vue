<template>
  <div>
    <a-drawer
      :title="title"
      :width="width"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
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
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1
        }"
      >
        <a-button type="primary" class="button-left" @click="submitForm">
          {{ $t("message")["app.submitLabel"] }}
        </a-button>
        <a-button @click="onClose">
          {{ $t("message")["app.cancelLabel"] }}
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default {
  name: "MyModifyDrawer",
  props: {
    title: {
      type: String,
      required: false,
      default: () => "新增"
    },
    width: {
      type: String,
      required: false,
      default: () => "720px"
    },
    ruleForm: {
      type: Object,
      required: true,
      default: () => {}
    },
    rules: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  computed: mapState({
    visible: state => state.system.modifyDrawerVisible
  }),
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
    },
    onClose() {
      this.$store.commit("system/changeModifyDrawerVisible", false);
    }
  }
};
</script>
<style scoped lang="less"></style>
