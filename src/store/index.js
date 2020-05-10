import Vue from "vue";
import Vuex from "vuex";

import auth from './modules/auth';
import alerts from './modules/alerts';
import nav from './modules/nav';
import intentions from './modules/intentions';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {},
  mutations: {},
  actions: {},
  getters: {

  },
  modules: {

    auth,
    alerts,
    nav,
    intentions,
  }
});
