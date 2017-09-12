import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import files from './modules/files';
// import types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
    },
  },
  actions,
  getters,
  modules: {
    files,
  },
  mutations: {
    // eslint-disable-next-line
    SOCKET_ONOPEN(state, event) {
      // eslint-disable-next-line
      state.socket.isConnected = true;
    },
    // eslint-disable-next-line
    SOCKET_ONCLOSE(state, event) {
      // eslint-disable-next-line
      state.socket.isConnected = false;
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      console.log(message, state);

      if (message.data.includes('End file list')) {
        const startIndex = message.data.includes('Begin file list\n') ? 'Begin file list\n'.length : 0;
        const endIndex = message.data.indexOf('\nEnd file list');
        state.files.all = message.data.substr(startIndex, endIndex - startIndex).split('\n'); // eslint-disable-line no-param-reassign
      }
    },
  },
});
