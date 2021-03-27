<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" @click="getNoticeData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
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
      @dblclick="dbClickRow"
    />
    <NoticeDetail />
  </div>
</template>

<script>
import NoticeDetail from "./detail";
import { mapState } from "vuex";

export default {
  name: "index",
  components: {
    NoticeDetail
  },
  mounted() {
    this.getNoticeData();
  },
  computed: mapState({
    noticeList: state => state.notice.noticeList
  }),
  data() {
    return {
      columns: [
        {
          title: "标题",
          dataIndex: "title",
          key: "title"
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
          title: "内容",
          dataIndex: "content",
          key: "content"
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
          key: "action"
        }
      ],
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
      searchTitle: ""
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
      this.$store.commit("notice/getCurrentSelectNotice", data);
      this.$store.commit("system/changeDetailDrawerVisible", true);
    }
  }
};
</script>

<style scoped></style>
