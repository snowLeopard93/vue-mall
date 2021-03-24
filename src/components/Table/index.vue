<template>
  <div>
    <a-table
      :pagination="pagination"
      :columns="tableColumns"
      :data-source="dataSource"
      :scroll="{ x: 1000, y: 490 }"
      :customRow="handleClickRow"
    >
    </a-table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
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
      pagination: {
        showQuickJumper: true,
        defaultPageSize: 5,
        showTotal: total => `共 ${total} 条数据`,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "15", "20"],
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize)
      },
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
          customRender: item.customRender,
          slots: item.slots,
          scopedSlots: item.scopedSlots
        });
      });
      this.tableColumns = tableColumns;
    },
    handleClickRow(record, index) {
      return {
        on: {
          dblclick: () => {
            console.log(record, index);
            console.log("点击行内容record", record);
            console.log("序号索引index", index);

            this.$emit("dbClickRow", record);
          }
        }
      };
    }
  }
};
</script>

<style scoped lang="less">
/deep/ .ant-table-body {
  overflow: auto !important;
}

// 隐藏 ant-design-vue table组件头部的纵向滚动条
/deep/ .ant-table-header {
  overflow-y: hidden !important;
}

// 设置 ant-design-vue table组件内容体的纵向滚动条
/deep/ .ant-table-body {
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #f5f5f5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #bdbdbd;
  }
}
</style>
