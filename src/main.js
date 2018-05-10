// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import * as VueGoogleMaps from "vue2-google-maps";
import cookieParse from "cookie-parse";
import router from "./router";
import store from "./store";
import { VueMasonryPlugin } from "vue-masonry";

import { API_KEY_GOOGLE_MAPS } from "./constants";

router.beforeEach((to, from, next) => {
  const cookie = cookieParse.parse(document.cookie);
  if (/\admin\/dashboard/.test(to.path)) {
    if (!!cookie.userName) {
      next();
    } else {
      next({ path: "/admin/login" });
    }
  } else {
    next();
  }
});

Vue.config.productionTip = false;
Vue.use(VueMasonryPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY_GOOGLE_MAPS,
    libraries: "places"
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
