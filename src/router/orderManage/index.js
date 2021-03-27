let orderManageRoutes = [
  {
    path: "/orderManage",
    name: "orderManage",
    meta: {
      icon: "setting",
      title: "订单管理",
      authority: ["admin"]
    },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../../layouts/BasicLayout"),
    children: [
      {
        path: "/orderManage/order",
        name: "order",
        meta: {
          title: "订单管理"
        },
        hideChildrenInMenu: true,
        component: () =>
          import(
            /* webpackChunkName: "orderManage" */ "../../views/OrderManage/Order/index"
          ),
        children: [
          {
            path: "/orderManage/order",
            redirect: "/orderManage/order/index"
          },
          {
            path: "/orderManage/order/index",
            name: "order",
            component: () =>
              import(
                /* webpackChunkName: "orderManage" */ "../../views/OrderManage/Order/index"
              )
          }
        ]
      }
    ]
  }
];

export default orderManageRoutes;
