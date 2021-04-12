<template>
  <div>
    <MyModifyDrawer :title="title" @submit="submitForm" @close="close">
      <template v-slot:content>
        <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-model-item
                has-feedback
                :label="$t('message')['app.system.notice.titleLabel']"
                prop="noticeTitle"
              >
                <a-input
                  v-model="ruleForm.noticeTitle"
                  autocomplete="off"
                  :placeholder="
                    $t('message')['app.system.notice.titlePlaceholder']
                  "
                />
              </a-form-model-item>
            </a-col>
            <a-col :span="12">
              <a-form-model-item
                :label="$t('message')['app.system.notice.statusLabel']"
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
                :label="$t('message')['app.system.notice.contentLabel']"
                prop="content"
              >
                <div ref="wangeditorDom"></div>
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
import { mapState } from "vuex";
import E from "wangeditor";
import { validateTextMaxLen } from "../../../utils/validate";

// let wangeditor;

export default {
  name: "NoticeModify",
  data() {
    return {
      title: "新增公告",
      wangeditor: null,
      ruleForm: {
        noticeTitle: "",
        status: "",
        content: ""
      },
      rules: {
        title: [
          {
            required: true,
            message: "不能为空！"
          },
          { validator: validateTextMaxLen }
        ]
      },
      statusList: [
        {
          value: "1",
          label: "待提交"
        },
        {
          value: "2",
          label: "待审核"
        },
        {
          value: "3",
          label: "已发布"
        }
      ]
    };
  },
  computed: mapState({
    visible: state => state.system.modifyDrawerVisible
  }),
  watch: {
    visible() {
      if (this.visible) {
        // 确保dom加载完再执行渲染富文本编辑器的操作
        this.$nextTick(() => {
          if (!this.wangeditor) {
            this.wangeditor = new E(this.$refs.wangeditorDom);
            this.wangeditor.create();
          } else {
            this.wangeditor.txt.html("");
          }
        });
      }
    }
  },
  // 销毁编辑器
  beforeDestroy() {
    this.wangeditor.destroy();
    this.wangeditor = null;
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
          values["content"] = this.wangeditor.txt.html();
          this.$store.dispatch("notice/addNotice", values);
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
