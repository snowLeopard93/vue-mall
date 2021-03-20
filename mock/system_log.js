var _ = require("underscore");
function logData(req) {
  let method = req.method;
  let query = req.query;
  let res = null;
  switch (method) {
    case "POST":
      res = [
        {
          key: 1,
          name: "登录日志1",
          logType: "1",
          content: "XXX于2021-03-20 09:00:00登录",
          ctime: "2021-03-20 09:00:01"
        },
        {
          key: 2,
          name: "登录日志2",
          logType: "1",
          content: "XXX于2021-03-20 15:00:00登录",
          ctime: "2021-03-20 15:00:01"
        },
        {
          key: 3,
          name: "错误日志1",
          logType: "2",
          content: "错误日志1错误日志1错误日志1",
          ctime: "2021-03-20 12:00:00"
        },
        {
          key: 4,
          name: "错误日志2",
          logType: "2",
          content: "错误日志2错误日志2错误日志2",
          ctime: "2021-03-20 18:30:00"
        }
      ];
      break;
    default:
      res = [
        {
          key: 1,
          name: "登录日志1",
          logType: "1",
          content: "XXX于2021-03-20 09:00:00登录",
          ctime: "2021-03-20 09:00:01"
        },
        {
          key: 2,
          name: "登录日志2",
          logType: "1",
          content: "XXX于2021-03-20 15:00:00登录",
          ctime: "2021-03-20 15:00:01"
        },
        {
          key: 3,
          name: "错误日志1",
          logType: "2",
          content: "错误日志1错误日志1错误日志1",
          ctime: "2021-03-20 12:00:00"
        },
        {
          key: 4,
          name: "错误日志2",
          logType: "2",
          content: "错误日志2错误日志2错误日志2",
          ctime: "2021-03-20 18:30:00"
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

module.exports = logData;
