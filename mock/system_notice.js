var _ = require("underscore");
function noticeData(req) {
  let method = req.method;
  let query = req.query;
  let res = null;
  switch (method) {
    case "POST":
      res = [
        {
          key: 1,
          title: "公告1",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          content: "公告1公告1公告1公告1"
        },
        {
          key: 2,
          title: "公告2",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          content: "公告2公告2公告2公告2"
        },
        {
          key: 3,
          title: "公告3",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          content: "公告3公告3公告3公告3"
        }
      ];
      break;
    default:
      res = [
        {
          key: 1,
          title: "公告1",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          content: "公告1公告1公告1公告1"
        },
        {
          key: 2,
          title: "公告2",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          content: "公告2公告2公告2公告2"
        },
        {
          key: 3,
          title: "公告3",
          status: 1,
          ctime: "2021-02-15 09:00:00",
          mtime: "2021-02-15 09:00:00",
          content: "公告3公告3公告3公告3"
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

module.exports = noticeData;
