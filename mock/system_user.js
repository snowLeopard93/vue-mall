function userData(method) {
  let res = null;
  switch (method) {
    case "POST":
      res = [
        {
          key: 1,
          loginName: "张三",
          userName: "张三",
          email: "2511646576@qq.com",
          telPhone: "15709897890",
          status: 1,
          createTime: "2021-02-15 09:00:00",
          address: "福建省福州市",
          remark:
            "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
        },
        {
          key: 2,
          loginName: "李四",
          userName: "李四",
          email: "8511646576@qq.com",
          telPhone: "18709897890",
          status: 1,
          createTime: "2021-02-15 12:00:00",
          address: "福建省厦门市",
          remark:
            "备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2"
        },
        {
          key: 3,
          loginName: "王五",
          userName: "王五",
          email: "2511646576@qq.com",
          telPhone: "15709897890",
          status: 1,
          createTime: "2021-02-15 09:00:00",
          address: "福建省福州市",
          remark:
            "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
        },
        {
          key: 4,
          loginName: "赵六",
          userName: "赵六",
          email: "2511646576@qq.com",
          telPhone: "15709897890",
          status: 1,
          createTime: "2021-02-15 09:00:00",
          address: "福建省福州市",
          remark:
            "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
        }
      ];
      break;
    default:
      res = [
        {
          key: 1,
          loginName: "张三",
          userName: "张三",
          email: "2511646576@qq.com",
          telPhone: "15709897890",
          status: 1,
          createTime: "2021-02-15 09:00:00",
          address: "福建省福州市",
          remark:
            "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
        },
        {
          key: 2,
          loginName: "李四",
          userName: "李四",
          email: "8511646576@qq.com",
          telPhone: "18709897890",
          status: 1,
          createTime: "2021-02-15 12:00:00",
          address: "福建省厦门市",
          remark:
            "备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2备注2"
        },
        {
          key: 3,
          loginName: "王五",
          userName: "王五",
          email: "2511646576@qq.com",
          telPhone: "15709897890",
          status: 1,
          createTime: "2021-02-15 09:00:00",
          address: "福建省福州市",
          remark:
            "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
        },
        {
          key: 4,
          loginName: "赵六",
          userName: "赵六",
          email: "2511646576@qq.com",
          telPhone: "15709897890",
          status: 1,
          createTime: "2021-02-15 09:00:00",
          address: "福建省福州市",
          remark:
            "备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1备注1"
        }
      ];
  }
  return res;
}

module.exports = userData;
