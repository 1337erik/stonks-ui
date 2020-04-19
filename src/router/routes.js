// an example of how to branch out routes into sub-folders.. if needed
// import authentication from "./modules/authentication";

// export default authentication.concat([

export default [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {

      authGuard : false,
      onTopNav  : true
    }
  },
  {
    path: "/calibrate",
    name: "calibrate",
    component: () => import( /* webpackChunkName: "calibrate" */ '../views/calibrate/Calibrate.vue' ),
    meta: {

      authGuard : true,
      onTopNav  : true
    }
  },
  {
    path: "/backlog",
    name: "backlog",
    component: () => import( /* webpackChunkName: "backlog" */ '../views/backlog/Backlog.vue' ),
    meta: {

      authGuard : true,
      onTopNav  : true
    }
  },
  // {
  //   path: "/coaching",
  //   name: "coaching",
  //   // component: () => import( /* webpackChunkName: "home" */ '../views/coaching/index.vue' ),
  //   meta: {}
  // },
  // {
  //   path: "/thrivemind",
  //   name: "thrivemind",
  //   // component: () => import( /* webpackChunkName: "home" */ '../views/thrivemind/index.vue' ),
  //   meta: {}
  // },
  // {
  //   path: "/forums",
  //   name: "forums",
  //   // component: () => import( /* webpackChunkName: "knowledge" */ '../views/forums/index.vue' ),
  //   meta: {}
  // }
];
