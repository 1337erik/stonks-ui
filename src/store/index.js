import Vue from "vue";
import Vuex from "vuex";

import auth from './modules/auth';
import alerts from './modules/alerts';
import nav from './modules/nav';
import transactions from './modules/transactions';
import coins from './modules/coins';
import farms from './modules/farms';

window.numeral = require( 'numeral' );

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
    transactions,
    coins,
    farms,
  }
});
