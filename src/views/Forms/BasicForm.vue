<template>
  <div>
    <a-form :layout="formLayout" :form="form" @submit="handleSubmit">
      <a-form-item
        label="Field A"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        has-feedback
      >
        <a-input
          placeholder="input placeholder"
          v-decorator="[
            'fieldA',
            {
              rules: [
                {
                  required: true,
                  message: '不能为空！'
                },
                {
                  validator: validateFieldA
                }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "BasicForm",
  data() {
    return {
      formLayout: "horizontal"
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "basicForm" });
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    validateFieldA(rule, value, callback) {
      if (value && value.length <= 5) {
        callback("长度不能小于5");
      }
      callback();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style scoped></style>
