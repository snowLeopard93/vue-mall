<template>
  <div>
    <BarChart :option="chartOption1" style="height: 400px;" />
    <AreaLineChart :option="chartOption2" style="height: 400px;" />
  </div>
</template>

<script>
import axios from "axios";
import BarChart from "../../components/Echart/BarChart";
import AreaLineChart from "../../components/Echart/AreaLineChart";
export default {
  name: "Analysis",
  data() {
    return {
      chartOption1: {},
      chartOption2: {}
    };
  },
  mounted() {
    this.getBarChartData();
    this.getAreaLineChart();
    this.interval = setInterval(() => {
      this.getBarChartData();
      this.getAreaLineChart();
    }, 30000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    BarChart,
    AreaLineChart
  },
  methods: {
    getBarChartData() {
      axios
        .get("api/dashboard/barChart", { params: { ID: 12345 } })
        .then(response => {
          let data = response.data;
          this.chartOption1 = {
            xData: data.xData,
            series: [
              {
                name: "销量",
                data: data.data
              }
            ]
          };
        });
    },
    getAreaLineChart() {
      axios
        .get("api/dashboard/areaLineChart", { params: { ID: 12345 } })
        .then(response => {
          let data = response.data;
          let series = [];
          data.series.forEach(item => {
            series.push({
              name: item.name,
              isStack: true,
              stackName: "总量",
              data: item.data
            });
          });
          this.chartOption2 = {
            xData: data.xData,
            series: series
          };
        });
    }
  }
};
</script>

<style scoped></style>
