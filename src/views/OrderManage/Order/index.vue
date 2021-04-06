<template>
  <div>
    <MyToolBar>
      <template v-slot:leftToolBar>
        <a-button type="primary" @click="getOrderData">
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
            placeholder="请输入订单号"
            v-model="searchOrderNum"
            @pressEnter="changeSearchOrderNum"
          />
        </div>
        <a-button type="primary" @click="getParams">
          <a-icon type="search" />
        </a-button>
      </template>
    </MyToolBar>
    <MyTable
      :columns="columns"
      :data-source="orderList"
      @dbClickRow="dbClickRow"
    />
    <OrderDetail />
  </div>
</template>

<script>
import { mapState } from "vuex";
import OrderDetail from "./detail";

export default {
  name: "Order",
  components: {
    OrderDetail
  },
  mounted() {
    this.getOrderData();
  },
  data() {
    const columns = [
      {
        title: "订单id",
        dataIndex: "orderId",
        key: "orderId"
      },
      {
        title: "订单号",
        dataIndex: "orderNum",
        key: "orderNum",
        scopedSlots: { customRender: "orderNum" }
      },
      {
        title: "订单名称",
        dataIndex: "orderName",
        key: "orderName"
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
        title: "起始点坐标",
        dataIndex: "startLngLat",
        key: "startLngLat",
        colSpan: 0,
        customRender: function(text, record) {
          return record.startLngLat;
        }
      },
      {
        title: "结束点坐标",
        dataIndex: "endLngLat",
        key: "endLngLat",
        colSpan: 0,
        customRender: function(text, record) {
          return record.endLngLat;
        }
      },
      {
        title: "操作",
        key: "action"
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
          label: "待付款"
        },
        {
          id: "2",
          value: "2",
          label: "待收货"
        },
        {
          id: "3",
          value: "3",
          label: "已完成"
        },
        {
          id: "4",
          value: "4",
          label: "已取消"
        }
      ],
      searchParams: {},
      searchOrderNum: "",
      detailVisible: false
    };
  },
  computed: mapState({
    orderList: state => state.order.orderList
  }),
  methods: {
    changeSearchStatus(data) {
      this.searchParams.status = data;
      this.getOrderData();
    },
    changeSearchOrderNum() {
      this.searchParams.orderNum = this.searchOrderNum;
      this.getOrderData();
    },
    getParams() {
      this.searchParams.orderNum = this.searchOrderNum;
      this.getOrderData();
    },
    getOrderData() {
      const params = this.searchParams;
      this.$store.dispatch("order/getOrderList", params);
    },
    dbClickRow(data) {
      this.$store.commit("order/getCurrentSelectOrder", data);
      this.$store.commit("system/changeDetailDrawerVisible", true);
    }
  }
};
</script>

<style scoped></style>
