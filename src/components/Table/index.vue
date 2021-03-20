<template>
  <div>
    <a-table
      :columns="tableColumns"
      :data-source="dataSource"
      :scroll="{ x: 1000, y: 490 }"
    />
  </div>
</template>

<script>
export default {
  name: "My-Table",
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => {}
    },
    dataSource: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      tableColumns: []
    };
  },
  mounted() {
    this.renderColumns();
  },
  methods: {
    renderColumns() {
      let tableColumns = [];
      this.columns.forEach(item => {
        tableColumns.push({
          title: item.title,
          dataIndex: item.dataIndex,
          key: item.key,
          width: item.width,
          ellipsis: !item.noEllipsis,
          customRender: item.customRender
        });
      });
      this.tableColumns = tableColumns;
    }
  }
};
</script>

<style scoped lang="less">
/deep/ .ant-table-body {
  overflow: auto !important;
}

/deep/ .ant-table-body {
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #f5f5f5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bdbdbd;
  }
}
</style>
