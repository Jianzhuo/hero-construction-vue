// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
import store from "@/store";
//import elmentUI packages
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import httpRequest from "@/utils/httpRequest";
import cloneDeep from "lodash/cloneDeep";
import App from "./App";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Buefy);

// 挂载全局
Vue.prototype.$http = httpRequest; // ajax请求方法

// 保存整站vuex本地储存初始状态
window.SITE_CONFIG["storeState"] = cloneDeep(store.state);

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
