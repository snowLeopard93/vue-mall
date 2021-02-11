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
    option(val) {
      this.chart.setOption(val);
    }
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true
    // }
  },
  methods: {
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom);
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
            areaStyle: {
              opacity: 0.8,
              color: item.isGradient
                ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: item.areaColor[0]
                    },
                    {
                      offset: 1,
                      color: item.areaColor[1]
                    }
                  ])
                : item.color
            },
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
