<template>
  <div>
    <MyModifyDrawer :title="title" :ruleForm="ruleForm" :rules="rules">
    </MyModifyDrawer>
  </div>
</template>

<script>
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
  methods: {}
};
</script>

<style scoped></style>
