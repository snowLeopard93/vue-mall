var _ = require("underscore");
function orderData(req) {
  let method = req.method;
  let query = req.query;
  let res = null;
  switch (method) {
    case "POST":
      res = [
        {
          key: 1,
          orderId: "1234567",
          orderNum: "D00001",
          ctime: "2021-03-26 12:00:00",
          orderName: "订单1",
          status: "1",
          startLngLat: [119.258055, 26.093902],
          endLngLat: [119.280469, 26.04219]
        },
        {
          key: 2,
          orderId: "1234568",
          orderNum: "D00002",
          ctime: "2021-03-26 12:10:00",
          orderName: "订单2",
          status: "2",
          startLngLat: [121.527889, 31.297896],
          endLngLat: [119.015167, 25.456768]
        },
        {
          key: 3,
          orderId: "1234569",
          orderNum: "D00003",
          ctime: "2021-03-27 09:00:00",
          orderName: "订单3",
          status: "3",
          startLngLat: [118.085907, 24.460378],
          endLngLat: [113.331084, 23.112223]
        },
        {
          key: 4,
          orderId: "1234570",
          orderNum: "D00004",
          ctime: "2021-03-27 10:20:00",
          orderName: "订单4",
          status: "4",
          startLngLat: [121.497204, 31.243453],
          endLngLat: [100.161979, 25.676203]
        }
      ];
      break;
    default:
      res = [
        {
          key: 1,
          orderId: "1234567",
          orderNum: "D00001",
          ctime: "2021-03-26 12:00:00",
          orderName: "订单1",
          status: "1",
          startLngLat: [119.258055, 26.093902],
          endLngLat: [119.280469, 26.04219]
        },
        {
          key: 2,
          orderId: "1234568",
          orderNum: "D00002",
          ctime: "2021-03-26 12:10:00",
          orderName: "订单2",
          status: "2",
          startLngLat: [121.527889, 31.297896],
          endLngLat: [119.015167, 25.456768]
        },
        {
          key: 3,
          orderId: "1234569",
          orderNum: "D00003",
          ctime: "2021-03-27 09:00:00",
          orderName: "订单3",
          status: "3",
          startLngLat: [118.085907, 24.460378],
          endLngLat: [113.331084, 23.112223]
        },
        {
          key: 4,
          orderId: "1234570",
          orderNum: "D00004",
          ctime: "2021-03-27 10:20:00",
          orderName: "订单4",
          status: "4",
          startLngLat: [121.497204, 31.243453],
          endLngLat: [100.161979, 25.676203]
        }
      ];
  }

  var keys = _.keys(query);
  var filterParams = {};
  _.each(keys, keyItem => {
    if (query[keyItem]) {
      filterParams[keyItem] = query[keyItem];
    }
  });
  res = _.where(res, filterParams);
  return res;
}

module.exports = orderData;
