<template>
  <div ref="chartDom"></div>
</template>

<script>
import * as echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  name: "AreaLineChart",
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      defaultOption: {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "渐变堆叠面积图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: []
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: []
      }
    };
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    option() {
      this.refreshChart();
    }
  },
  methods: {
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom);
      this.refreshChart();
    },
    refreshChart() {
      if (this.option && this.option.xData) {
        this.defaultOption.xAxis[0].data = this.option.xData;
      }
      let series = [];
      if (this.option && this.option.series) {
        this.option.series.forEach(item => {
          series.push({
            type: "line",
            stack: item.isStack ? item.stackName || "总量" : "",
            name: item.name,
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: item.data
          });
        });
      }
      this.defaultOption.series = series;
      this.chart.setOption(this.defaultOption);
    },
    resize() {
      this.chart.resize();
    }
  }
};
</script>

<style scoped></style>
