<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" class="button-left" @click="getNoticeData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
        <a-button type="primary" @click="addNotice">
          <IconFont type="icon-add" style="font-size: 14px;" />
        </a-button>
      </template>
      <template v-slot:rightToolBar>
        <div class="searchForm-item">
          <MySelect
            :data-source="searchStatusList"
            @handleChange="changeSearchStatus"
          />
        </div>
        <div class="searchForm-item">
          <a-input
            placeholder="请输入标题"
            v-model="searchTitle"
            @pressEnter="changeSearchTitle"
          />
        </div>
        <a-button type="primary" @click="getParams">
          <a-icon type="search" />
        </a-button>
      </template>
    </MyToolBar>
    <MyTable
      :columns="columns"
      :data-source="noticeList"
      @dbClickRow="dbClickRow"
      @handleActionClick="actionClick"
    />
    <NoticeDetail />
    <NoticeModify />
    <NoticePreview />
    <MyConfirmDialog :content="content" @handleConfirmClick="deleteNotice" />
  </div>
</template>

<script>
import NoticeDetail from "./detail";
import NoticeModify from "./modify";
import NoticePreview from "./preview";

import { mapState } from "vuex";

export default {
  name: "Notice",
  components: {
    NoticeDetail,
    NoticeModify,
    NoticePreview
  },
  mounted() {
    this.getNoticeData();
  },
  computed: mapState({
    noticeList: state => state.notice.noticeList,
    currentSelectNotice: state => state.notice.currentSelectNotice
  }),
  data() {
    const columns = [
      {
        title: "标题",
        dataIndex: "noticeTitle",
        key: "noticeTitle",
        scopedSlots: { customRender: "noticeTitle" }
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        customRender: function(text, record) {
          return record.showStatus;
        }
      },
      {
        title: "创建时间",
        dataIndex: "ctime",
        key: "ctime"
      },
      {
        title: "修改时间",
        dataIndex: "mtime",
        key: "mtime"
      },
      {
        title: "操作",
        key: "action",
        scopedSlots: {
          customRender: "action",
          children: [
            {
              slotName: "edit",
              actionName: "编辑"
            },
            {
              slotName: "delete",
              actionName: "删除"
            }
          ]
        }
      }
    ];
    return {
      columns: columns,
      searchStatusList: [
        {
          id: "",
          value: "",
          label: "请选择"
        },
        {
          id: "1",
          value: "1",
          label: "待提交"
        },
        {
          id: "2",
          value: "2",
          label: "待审核"
        },
        {
          id: "3",
          value: "3",
          label: "已发布"
        }
      ],
      searchParams: {},
      searchTitle: "",
      content: "确认删除吗？"
    };
  },
  methods: {
    changeSearchStatus(data) {
      this.searchParams.status = data;
      this.getNoticeData();
    },
    changeSearchTitle() {
      this.searchParams.title = this.searchTitle;
      this.getNoticeData();
    },
    getParams() {
      this.searchParams.title = this.searchTitle;
      this.getNoticeData();
    },
    getNoticeData() {
      const params = this.searchParams;
      this.$store.dispatch("notice/getNoticeList", params);
    },
    dbClickRow(data) {
      this.$store.dispatch("notice/getNotice", data);
      this.$store.commit("system/changeDialogVisible", true);
    },
    addNotice() {
      this.$store.commit("system/changeModifyDrawerVisible", true);
    },
    deleteNotice() {
      const deleteItem = this.currentSelectNotice;
      this.$store.dispatch("notice/deleteNotice", deleteItem);
    },
    actionClick(data, actionType) {
      if (actionType === "edit") {
        this.$store.commit("system/changeModifyDrawerVisible", true);
      } else if (actionType === "delete") {
        this.$store.dispatch("notice/getNotice", data);
        this.$store.commit("system/changeConfirmDialogVisible", true);
      }
    }
  }
};
</script>

<style scoped></style>
