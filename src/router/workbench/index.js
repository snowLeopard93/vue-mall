let workbenchRoutes = [
  {
    path: "/",
    redirect: "/workbench/overview"
  },
  {
    path: "/workbench",
    name: "workbench",
    meta: {
      icon: "setting",
      title: "工作台",
      authority: ["admin"]
    },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../../layouts/BasicLayout"),
    children: [
      {
        path: "/workbench/overview",
        name: "overview",
        meta: {
          title: "总览"
        },
        component: () =>
          import(
            /* webpackChunkName: "workbench" */ "../../views/Workbench/Overview"
          )
      }
    ]
  }
];
export default workbenchRoutes;
