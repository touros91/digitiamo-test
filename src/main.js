import Vue from "vue";
import App from "./App.vue";
// touch-events library
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents);

// Bootstrap //
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//FontAwesome //
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, faMagnifyingGlass);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
