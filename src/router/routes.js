// https://bootstrap-vue.org/docs/icons
// ^^ THE ICONS

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
      onTopnav  : true,
      onSidenav : true,
      placement : 1,
      icon      : 'house-fill',
    }
  },
  {
    path: "/farms",
    name: "farms",
    component: () => import( /* webpackChunkName: "farms" */ '../views/features/Farms.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 22,
      icon      : 'tree',
    }
  },
  {
    path: "/coins",
    name: "coins",
    component: () => import( /* webpackChunkName: "farms" */ '../views/features/Coins.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 33,
      icon      : 'wallet',
    }
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import( /* webpackChunkName: "settings" */ '../views/features/Settings.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 99,
      icon      : 'gear',
    }
  },
  {
    path: "/eventFarm",
    name: "eventFarm",
    component: () => import( /* webpackChunkName: "settings" */ '../views/features/EventFarm.vue' ),
    meta: {

      forGod    : true,
      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 2,
      icon      : 'gem',
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import( /* webpackChunkName: "profile" */ '../views/features/Profile.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 100,
      icon      : 'person-circle',
    }
  },
  {
    path: '*',
    component: () => import( /* webpackChunkName: "nothing" */ '../views/Nothing.vue' ),
  }
];
