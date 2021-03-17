let systemRoutes = [
  {
    path: "/system",
    name: "system",
    meta: {
      icon: "setting",
      title: "系统管理",
      authority: ["admin"]
    },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../../layouts/BasicLayout"),
    children: [
      {
        path: "/system/user",
        name: "user",
        meta: {
          title: "用户管理"
        },
        hideChildrenInMenu: true,
        component: () =>
          import(
            /* webpackChunkName: "system" */ "../../views/System/User/index"
          ),
        children: [
          {
            path: "/system/user",
            redirect: "/system/user/index"
          },
          {
            path: "/system/user/index",
            name: "user",
            component: () =>
              import(
                /* webpackChunkName: "system" */ "../../views/System/User/index"
              )
          }
        ]
      },
      {
        path: "/system/role",
        name: "role",
        meta: {
          title: "角色管理"
        },
        hideChildrenInMenu: true,
        component: () =>
          import(
            /* webpackChunkName: "system" */ "../../views/System/Role/index"
          ),
        children: [
          {
            path: "/system/role",
            redirect: "/system/role/index"
          },
          {
            path: "/system/role/index",
            name: "role",
            component: () =>
              import(
                /* webpackChunkName: "system" */ "../../views/System/Role/index"
              )
          }
        ]
      },
      {
        path: "/system/notice",
        name: "notice",
        meta: {
          title: "公告管理"
        },
        hideChildrenInMenu: true,
        component: () =>
          import(
            /* webpackChunkName: "system" */ "../../views/System/Notice/index"
          ),
        children: [
          {
            path: "/system/notice",
            redirect: "/system/notice/index"
          },
          {
            path: "/system/notice/index",
            name: "notice",
            component: () =>
              import(
                /* webpackChunkName: "system" */ "../../views/System/Notice/index"
              )
          }
        ]
      }
    ]
  }
];

export default systemRoutes;
