import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

import VueFullPage from 'vue-fullpage.js';

Vue.use(VueFullPage);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});







