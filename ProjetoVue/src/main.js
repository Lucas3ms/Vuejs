import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; //mportando  o modulo
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueResource); //Registrando o modulo/plugin no global view object
Vue.use(VueRouter);

const router = new VueRouter ({ 
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
