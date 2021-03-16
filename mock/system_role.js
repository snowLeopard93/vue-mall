var _ = require("underscore");
function roleData(req) {
  let method = req.method;
  let query = req.query;
  let res = null;
  switch (method) {
    case "POST":
      res = [
        {
          key: 1,
          roleName: "系统管理员",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          desc: "系统管理员"
        },
        {
          key: 2,
          roleName: "商家",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          desc: "商家"
        },
        {
          key: 3,
          roleName: "买家",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          desc: "买家"
        }
      ];
      break;
    default:
      res = [
        {
          key: 1,
          roleName: "系统管理员",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          desc: "系统管理员"
        },
        {
          key: 2,
          roleName: "商家",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          desc: "商家"
        },
        {
          key: 3,
          roleName: "买家",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          desc: "买家"
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

module.exports = roleData;
