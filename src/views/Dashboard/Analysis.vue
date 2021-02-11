<template>
  <div>
    <BarChart :option="chartOption1" style="height: 400px;" />

    <AreaLineChart :option="chartOption2" style="height: 400px;" />
  </div>
</template>

<script>
import random from "lodash/random";
import BarChart from "../../components/Echart/BarChart";
import AreaLineChart from "../../components/Echart/AreaLineChart";
export default {
  name: "Analysis",
  data() {
    return {
      chartOption1: {
        xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        series: [
          {
            name: "销量",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
      chartOption2: {
        xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        series: [
          {
            name: "Line1",
            isGradient: false,
            isStack: true,
            stackName: "总量",
            color: "rgba(128, 255, 165)",
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: "Line2",
            isGradient: true,
            isStack: true,
            stackName: "总量",
            areaColor: ["rgba(0, 221, 255)", "rgba(77, 119, 255)"],
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: "Line3",
            isGradient: true,
            isStack: true,
            stackName: "总量",
            areaColor: ["rgba(55, 162, 255)", "rgba(116, 21, 219)"],
            data: [320, 132, 201, 334, 190, 130, 220]
          }
        ]
      }
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.chartOption1.series[0].data = this.chartOption1.series[0].data.map(
        () => random(100)
      );
      this.chartOption1 = { ...this.chartOption1 };
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    BarChart,
    AreaLineChart
  }
};
</script>

<style scoped></style>
