import * as types from '../mutation-types';

const state = {
  all: [],
};

const getters = {
  allFiles: state => state.all,
};

const actions = {
  getAllFiles() {
    // initialize sd card
    this.$socket.send('M21');
    // request file list
    this.$socket.send('M20 S2');
  },
};

const mutations = {
  [types.RECIEVE_FILES](state, { files }) {
    state.all = files; // eslint-disable-line no-param-reassign
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
