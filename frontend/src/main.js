import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueFilterDateFormat);

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount("#app");
