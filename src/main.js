import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Quasar from 'quasar';
Vue.use(Quasar)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/app.scss'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

[
  require.context('@/', true, /\.vue$/i, 'lazy'),
  //require.context('@/components/', true, /\.vue$/i, 'lazy'),
].forEach((Ctx) => {
  Ctx.keys().forEach((path) => {
    const name = path.split('/').pop().split('.')[0];
    Vue.component(name, () => Ctx(path));
  });
});

import wrap from './wrap.vue'
Vue.component('wrap', wrap);


import App from './App.vue'
import routes from '@/routes.js'
import store from './store'
new Vue({
  router: new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  }),
  store,
  render: h => h(App)
}).$mount('#app')

