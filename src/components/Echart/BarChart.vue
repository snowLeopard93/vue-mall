<template>
  <div ref="chartDom"></div>
</template>

<script>
import * as echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  name: "BarChart",
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      defaultOption: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: [
          {
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
            type: "bar",
            name: item.name,
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
