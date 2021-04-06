<template>
  <div>
    <MyModifyDrawer :title="title" @submit="submitForm" @close="close">
      <template v-slot:content>
        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.role.roleNameLabel']"
                prop="roleName"
              >
                <a-input
                  v-model="ruleForm.roleName"
                  autocomplete="off"
                  :placeholder="$t('message')['app.system.role.roleNameLabel']"
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                :label="$t('message')['app.system.role.statusLabel']"
              >
                <MySelect
                  :data-source="statusList"
                  @handleChange="changeStatus"
                />
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="24">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.role.roleDescLabel']"
                prop="desc"
              >
                <a-textarea
                  v-model="ruleForm.desc"
                  autocomplete="off"
                  :rows="4"
                  :placeholder="
                    $t('message')['app.system.roleDesc.roleDescLabel']
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
  name: "RoleModify",
  data() {
    return {
      title: "新增角色",
      ruleForm: {
        roleName: "",
        desc: "",
        status: ""
      },
      rules: {
        roleName: [
          {
            required: true,
            message: "不能为空！"
          },
          { validator: validateTextMaxLen }
        ],
        desc: [{ validator: validateTextareaMaxLen }]
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
          let values = this.ruleForm;
          let key = uuidv4();
          let createTime = moment().format("YYYY-MM-DD HH:mm:ss");
          values["key"] = key;
          values["ctime"] = createTime;

          console.log(values);
          this.$store.dispatch("role/addRole", values);
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
