<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" @click="getNoticeData">
          <IconFont type="icon-refresh" style="font-size: 14px;" />
        </a-button>
      </template>
      <template v-slot:rightToolBar>
        <div style="width: 200px;display: inline-block;margin-right: 10px;">
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
    <MyTable :columns="columns" :data-source="noticeList" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  mounted() {
    this.getNoticeData();
  },
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
          key: "status"
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
      searchParams: {},
      searchTitle: "",
      noticeList: []
    };
  },
  methods: {
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
      axios({
        url: "api/system/notice",
        method: "post",
        params: params
      }).then(response => {
        this.noticeList = response.data;
      });
    }
  }
};
</script>

<style scoped></style>
