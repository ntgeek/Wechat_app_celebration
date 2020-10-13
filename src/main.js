// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
import axios from 'axios'
import VueResource from "vue-resource"
import "element-ui/lib/theme-chalk/index.css"
import mockdata from "./util/mock"

process.env.Mock && require('./util/mock')

Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
