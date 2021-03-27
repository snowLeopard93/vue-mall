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
          status: "1"
        },
        {
          key: 2,
          orderId: "1234568",
          orderNum: "D00002",
          ctime: "2021-03-26 12:10:00",
          orderName: "订单2",
          status: "2"
        },
        {
          key: 3,
          orderId: "1234569",
          orderNum: "D00003",
          ctime: "2021-03-27 09:00:00",
          orderName: "订单3",
          status: "3"
        },
        {
          key: 4,
          orderId: "1234570",
          orderNum: "D00004",
          ctime: "2021-03-27 10:20:00",
          orderName: "订单4",
          status: "4"
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
          status: "1"
        },
        {
          key: 2,
          orderId: "1234568",
          orderNum: "D00002",
          ctime: "2021-03-26 12:10:00",
          orderName: "订单2",
          status: "2"
        },
        {
          key: 3,
          orderId: "1234569",
          orderNum: "D00003",
          ctime: "2021-03-27 09:00:00",
          orderName: "订单3",
          status: "3"
        },
        {
          key: 4,
          orderId: "1234570",
          orderNum: "D00004",
          ctime: "2021-03-27 10:20:00",
          orderName: "订单4",
          status: "4"
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
