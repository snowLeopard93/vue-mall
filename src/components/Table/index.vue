<template>
  <div>
    <a-table :columns="tableColumns" :data-source="dataSource" />
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
          ellipsis: !item.noEllipsis
        });
      });
      this.tableColumns = tableColumns;
    }
  }
};
</script>

<style scoped></style>
