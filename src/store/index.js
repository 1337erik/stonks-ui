import Vue from "vue";
import Vuex from "vuex";

import auth from './modules/auth';
import alerts from './modules/alerts';

import routes from '@/router/routes';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {},
  mutations: {},
  actions: {},
  getters: {

    topNavRoutes(){

      return routes.filter( r => r.meta.onTopNav );
    }
  },
  modules: {

    auth,
    alerts,
  }
});