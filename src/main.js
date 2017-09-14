// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueWebsocket from 'vue-native-websocket';
import VueResource from 'vue-resource';
import Feather from 'feather-icons';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueWebsocket, `ws://${process.env.WS_HOST}:${process.env.WS_PORT}`, { store });
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

Feather.replace();

const routes = [
  {
    method: 'GET',
    url: '/inquiry',
    response: [
      'T19/0P19/0/0I',
    ],
  },
];

Vue.http.interceptors.unshift((request, next) => {
  const route = routes.find(item => (request.method === item.method && request.url === item.url));
  if (!route) {
    // we're just going to return a 404 here
    next(request.respondWith({ status: 404, statusText: 'Oh no! Not found!' }));
  } else {
    next(
      request.respondWith(
        route.response,
        { status: 200 },
      ),
    );
  }
});
