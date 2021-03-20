<template>
  <div>
    <MyToolBar
      :searchInputPlaceholder="searchInputPlaceholder"
      @handleRefresh="getLogData"
      @handleChangeSearchParamName="changeSearchParamName"
      @handleSearchBtnClick="getParams"
    >
      <template v-slot:leftToolBar />
      <template v-slot:rightToolBar />
    </MyToolBar>
    <MyTable :columns="columns" :data-source="logList" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Log",
  mounted() {
    this.getLogData();
  },
  data() {
    return {
      columns: [
        {
          title: "日志名称",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "日志类型",
          dataIndex: "logType",
          key: "logType"
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
          title: "操作",
          key: "action"
        }
      ],
      searchParams: {},
      logList: [],
      searchInputPlaceholder: "请输入日志名称"
    };
  },
  methods: {
    changeSearchParamName(data) {
      this.searchParams.name = data;
      this.getLogData();
    },
    getParams(data) {
      this.searchParams.name = data;
      this.getLogData();
    },
    getLogData() {
      const params = this.searchParams;
      axios({
        url: "api/system/log",
        method: "post",
        params: params
      }).then(response => {
        this.logList = response.data;
      });
    }
  }
};
</script>

<style scoped></style>
