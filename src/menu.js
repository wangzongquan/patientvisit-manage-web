var menus = [
  {
    action: "home",
    title: "首页",
    path:"/index",
    items: [{ title: "统计", path: "/dashboard" }]
  },
  {
    action: "apps",
    title: "患者随访",
    path:"/item",
    items: [
      { title: " 随访计划", path: "/category"},
      { title: "医生随访", path: "/brand" },
      { title: "科室随访", path: "/list" }
    ]
  },
  {
    action: "people",
    title: "患者回访",
    path:"/user",
    items: [
      { title: "回访任务管理", path: "/statistics" },
      { title: "回访中心回访", path: "/list" },
      { title: "回访记录处理", path: "/list" },
      { title: "回访\随访工作监督", path: "/list" }
    ]
  },
  {
    action: "attach_money",
    title: "统计与分析",
    path:"/trade",
    items: [
      { title: "我的查询", path: "/order" },
      { title: "指标分析", path: "/logistics" },
      { title: "报表中心", path: "/promotion" }
    ]
  },
  {
    action: "settings",
    title: "系统管理",
    path:"/authority",
    items: [
      { title: "回访/随访工作维护", path: "/list" },
      { title: "数据采集监控", path: "/list" },
      { title: "患者信息", path: "/list" },
      { title: "组织架构", path: "/list" },
      { title: "知识库", path: "/list" },
      { title: "权限管理", path: "/permission" },
      { title: "角色管理", path: "/role" },
      { title: "人员管理", path: "/member" }
    ]
  },
  {
    action: "settings",
    title: "vueUI测试",
    path:"/test",
    items: [
      { title: "UI测试", path: "/ui" }
    ]
  }
]

export default menus;
