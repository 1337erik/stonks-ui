// an example of how to branch out routes into sub-folders.. if needed
import authentication from "./modules/authentication";

export default authentication.concat([
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {

      authGuard : false,
      onTopnav  : true,
      onSidenav : true
    }
  },
  {
    path: "/calibrate",
    name: "calibrate",
    component: () => import( /* webpackChunkName: "calibrate" */ '../views/calibrate/Calibrate.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : true,
      onSidenav : true
    }
  },
  {
    path: "/backlog",
    name: "backlog",
    component: () => import( /* webpackChunkName: "backlog" */ '../views/backlog/Backlog.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : true,
      onSidenav : true
    }
  },
  {
    path: "/thrivemind",
    name: "thrivemind",
    component: () => import( /* webpackChunkName: "thrivemind" */ '../views/thrivemind/Thrivemind.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : true,
      onSidenav : true
    }
  },
  {
    path: '*',
    component: () => import( /* webpackChunkName: "nothing" */ '../views/Nothing.vue' ),
  }
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
]);
