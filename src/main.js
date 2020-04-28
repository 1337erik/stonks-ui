import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import axios from "./axios";
Vue.prototype.$http = axios;

import "./pipes";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import i18n from "./i18n";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

import "./echo";

new Vue({

  router,
  store,
  i18n,
  render: h => h( App )
}).$mount( "#app" );
