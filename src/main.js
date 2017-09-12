// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueWebsocket from 'vue-native-websocket';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueWebsocket, 'ws://192.168.1.194:81', { store });
store.$socket = Vue.prototype.$socket;

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
