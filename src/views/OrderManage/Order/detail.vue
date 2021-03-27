<template>
  <div>
    <MyDetailDrawer :title="title">
      <template v-slot:content>
        <div class="orderDetail-box">
          <div class="orderDetail-label">订单id：</div>
          <div class="orderDetail-detail">{{ order.orderId }}</div>
          <div class="orderDetail-label">订单号：</div>
          <div class="orderDetail-detail">{{ order.orderNum }}</div>
          <div class="orderDetail-label">订单名称：</div>
          <div class="orderDetail-detail">{{ order.orderName }}</div>
          <div class="orderDetail-label">状态：</div>
          <div class="orderDetail-detail">{{ order.showStatus }}</div>
          <div class="orderDetail-label">创建时间：</div>
          <div class="orderDetail-detail">{{ order.ctime }}</div>
        </div>
      </template>
    </MyDetailDrawer>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "OrderDetail",
  data() {
    return {
      title: "查看详情"
    };
  },
  computed: mapState({
    order: state => state.order.currentSelectOrder
  }),
  methods: {}
};
</script>

<style scoped>
.orderDetail-box {
  display: flex;
  flex-wrap: wrap;
}

.orderDetail-label {
  width: 15%;
  text-align: right;
  margin-bottom: 10px;
}

.orderDetail-detail {
  width: 35%;
  margin-bottom: 10px;
}

.orderDetail-long-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.orderDetail-long-detail {
  width: 85%;
}
</style>
