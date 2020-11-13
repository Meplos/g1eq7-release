import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";
import router from "./router";
import axios from "axios";

axios.defaults.headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
};

axios.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Response:", JSON.stringify(response, null, 2));
  return response;
});

Vue.config.productionTip = false;

Vue.use(VueFilterDateFormat);
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
