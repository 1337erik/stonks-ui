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
      onSidenav : false,
      placement : 1,
      icon      : 'icon-home', // icon-home2
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
      icon      : 'ion-ios-cog',
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import( /* webpackChunkName: "profile" */ '../views/features/Profile.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : false,
      placement : 0,
      icon      : 'icon-universal-access',
    }
  },
  {
    path: "/mindcraft",
    name: "mindcraft",
    component: () => import( /* webpackChunkName: "mindcraft" */ '../views/features/Mindcraft.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : true,
      onSidenav : true,
      placement : 7,
      icon      : 'flaticon-meditation',
    }
  },
  {
    path: "/backlog",
    name: "backlog",
    component: () => import( /* webpackChunkName: "backlog" */ '../views/features/Backlog.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 6,
      icon      : 'icon-newspaper-o',
    }
  },
  {
    path: "/thrivemind",
    name: "thrivemind",
    component: () => import( /* webpackChunkName: "thrivemind" */ '../views/features/Thrivemind.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 2,
      icon      : 'icon-ravelry',
    }
  },
  {
    path: "/authorship",
    name: "authorship",
    component: () => import( /* webpackChunkName: "authorship" */ '../views/features/Authorship.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 3,
      icon      : 'icon-book',
    }
  },
  {
    path: "/colosseum",
    name: "colosseum",
    component: () => import( /* webpackChunkName: "colosseum" */ '../views/features/Colosseum.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 4,
      icon      : 'flaticon-workout',
    }
  },
  {
    path: "/events",
    name: "events",
    component: () => import( /* webpackChunkName: "events" */ '../views/features/Events.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 5,
      icon      : 'icon-event_seat',
    }
  },
  {
    path: "/anchor",
    name: "anchor",
    component: () => import( /* webpackChunkName: "anchor" */ '../views/features/Anchor.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 8,
      icon      : 'icon-anchor',
    }
  },
  {
    path: "/coachConnect",
    name: "coachConnect",
    component: () => import( /* webpackChunkName: "coachConnect" */ '../views/features/CoachConnect.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 9,
      icon      : 'flaticon-woman',
    }
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import( /* webpackChunkName: "shop" */ '../views/features/Shop.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 10,
      icon      : 'flaticon-stationary-bike',
    }
  },
  {
    path: "/charities",
    name: "charities",
    component: () => import( /* webpackChunkName: "charities" */ '../views/features/Charities.vue' ),
    meta: {

      authGuard : true,
      onTopnav  : false,
      onSidenav : true,
      placement : 11,
      icon      : 'flaticon-heart',
    }
  },
  {
    path: '*',
    component: () => import( /* webpackChunkName: "nothing" */ '../views/Nothing.vue' ),
  }
];
