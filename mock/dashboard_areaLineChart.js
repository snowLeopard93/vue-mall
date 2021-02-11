function areaLineChart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = {
        xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        series: [
          {
            name: "Line1",
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: "Line2",
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: "Line3",
            data: [320, 132, 201, 334, 190, 130, 220]
          }
        ]
      };
      break;
    default:
      res = {
        xData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        series: [
          {
            name: "Line1",
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: "Line2",
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: "Line3",
            data: [320, 132, 201, 334, 190, 130, 220]
          }
        ]
      };
  }
  return res;
}

module.exports = areaLineChart;
