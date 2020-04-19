import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( ( to, from, next ) => {

  if( !store.getters[ 'auth/isAuth' ] && to.meta.authGuard ){

    store.dispatch( 'alerts/addMessage', { type: 'error', msg: 'Unauthenticated!' });
    store.dispatch( 'auth/toggleLoginModal' );
    next({ name: 'home' });
  } else {

    store.dispatch( 'alerts/addMessage', { type: 'success', msg: 'dude nice!' });
    next();
  }
});

export default router;
