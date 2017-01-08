// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import httpPlg from 'PLUGINS/http.js'
import App from './App'
import routes from 'ROUTERS/mainRouter.js'
console.log(httpPlg)
// console.log(routers)
/* eslint-disable no-new */
const plugins = [VueRouter, VueResource, httpPlg]
plugins.map(plg => Vue.use(plg))
const router = new VueRouter({
  routes: routes
})

router.beforeEach(function (to, from, next) {
  console.log(to, from)
  next()
})
console.log(App)
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
