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
                  :defaultValue="ruleForm.status"
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

export default {
  name: "NoticeModify",
  props: {
    title: {
      type: String,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      wangeditor: null,
      ruleForm: {
        key: "",
        noticeTitle: "",
        status: "",
        content: "",
        ctime: "",
        mtime: ""
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
    visible: state => state.system.modifyDrawerVisible,
    notice: state => state.notice.currentSelectNotice
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
    },
    notice(val) {
      if (val) {
        this.setFormInfo(val);
      }
    }
  },
  // 销毁编辑器
  beforeDestroy() {
    if (this.wangeditor) {
      this.wangeditor.destroy();
      this.wangeditor = null;
    }
  },
  methods: {
    changeStatus(data) {
      this.ruleForm.status = data;
    },
    // 对表单进行赋值操作
    setFormInfo(val) {
      this.ruleForm.key = val.key;
      this.ruleForm.noticeTitle = val.noticeTitle;
      this.ruleForm.status = val.status;
      this.ruleForm.content = val.content;
      this.ruleForm.ctime = val.ctime;
      this.ruleForm.mtime = val.mtime;
      // 判断 wangEditor渲染成功之后再赋值
      if (this.wangeditor) {
        this.wangeditor.txt.html(val.content);
      }
    },
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          let values = this.ruleForm;
          // 根据 key 是否有值 判断是新增还是修改
          let time = moment().format("YYYY-MM-DD HH:mm:ss");

          console.log("bbb", values);
          if (!values.key) {
            let key = uuidv4();
            values["key"] = key;
            values["ctime"] = time;
            values["content"] = this.wangeditor.txt.html();
            this.$store.dispatch("notice/addNotice", values);
          } else {
            values["mtime"] = time;
            values["content"] = this.wangeditor.txt.html();
            this.$store.dispatch("notice/modifyNotice", values);
          }
          this.clearForm();
          this.$store.commit("system/changeModifyDrawerVisible", false);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 清空表单
    clearForm() {
      this.ruleForm = {
        key: "",
        noticeTitle: "",
        status: "",
        content: "",
        ctime: "",
        mtime: ""
      };
      this.$refs["ruleForm"].resetFields();
    },
    close() {
      this.clearForm();
      this.$store.commit("system/changeModifyDrawerVisible", false);
    }
  }
};
</script>

<style scoped></style>
