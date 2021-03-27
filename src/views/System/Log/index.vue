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
    <MyTable
      :columns="columns"
      :data-source="logList"
      @dbClickRow="dbClickRow"
    />
    <LogDetail />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LogDetail from "./detail";

export default {
  name: "Log",
  components: {
    LogDetail
  },
  mounted() {
    this.getLogData();
  },
  computed: mapState({
    logList: state => state.log.logList
  }),
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
      this.$store.dispatch("log/getLogList", params);
    },
    dbClickRow(data) {
      this.$store.commit("log/getCurrentSelectLog", data);
      this.$store.commit("system/changeDetailDrawerVisible", true);
    }
  }
};
</script>

<style scoped></style>
