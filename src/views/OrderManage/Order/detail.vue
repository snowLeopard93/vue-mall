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
      <template v-slot:otherContent>
        <div
          v-if="visible"
          style="height:500px"
          id="mapContainer"
          tabindex="0"
        ></div>
      </template>
    </MyDetailDrawer>
  </div>
</template>

<script>
import AMap from "AMap";
import { mapState } from "vuex";

export default {
  name: "OrderDetail",
  data() {
    return {
      title: "查看详情"
    };
  },
  computed: mapState({
    order: state => state.order.currentSelectOrder,
    visible: state => state.system.detailDrawerVisible
  }),
  watch: {
    visible() {
      if (this.visible) {
        // 确保dom加载完再执行渲染地图的操作
        this.$nextTick(() => {
          console.log(this.order);
          this.initAMap();
        });
      }
    }
  },
  methods: {
    initAMap() {
      const startLngLat = this.order.startLngLat;
      const endLngLat = this.order.endLngLat;
      let map = new AMap.Map("mapContainer", {
        resizeEnable: true,
        zoom: 10,
        lang: "zh_cn"
      });
      AMap.plugin(["AMap.ToolBar", "AMap.Scale", "AMap.Driving"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
        var driving = new AMap.Driving({
          map: map,
          // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
          policy: AMap.DrivingPolicy.LEAST_TIME
        });

        driving.search(startLngLat, endLngLat, function(status, result) {
          // 成功获取路线之后 执行小车动画效果
          if (status === "complete") {
            let route = result.routes && result.routes[0];
            let lineArr = [];

            route.steps.forEach(stepItem => {
              lineArr.push([
                stepItem.start_location.lng,
                stepItem.start_location.lat
              ]);
              lineArr.push([
                stepItem.end_location.lng,
                stepItem.end_location.lat
              ]);
            });

            let marker = new AMap.Marker({
              map: map,
              position: [116.478935, 39.997761],
              icon: "https://webapi.amap.com/images/car.png",
              offset: new AMap.Pixel(-26, -13),
              autoRotation: true,
              angle: -90
            });

            // 绘制轨迹
            new AMap.Polyline({
              map: map,
              path: lineArr,
              showDir: true,
              strokeColor: "#28F", //线颜色
              strokeWeight: 6 //线宽
            });

            let passedPolyline = new AMap.Polyline({
              map: map,
              strokeColor: "#AF5", //线颜色
              strokeWeight: 6 //线宽
            });

            marker.on("moving", function(e) {
              passedPolyline.setPath(e.passedPath);
            });

            marker.moveAlong(lineArr, 1000);
          }
        });
      });
    }
  }
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
