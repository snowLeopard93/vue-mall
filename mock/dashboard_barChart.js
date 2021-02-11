function barChart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = {
        xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        data: [10, 20, 30, 50, 25, 15]
      };
      break;
    default:
      res = {
        xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        data: [100, 20, 30, 50, 25, 15]
      };
  }
  return res;
}

module.exports = barChart;
