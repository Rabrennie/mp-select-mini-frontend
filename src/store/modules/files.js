import printer from '../../api/printer';
import * as types from '../mutation-types';

const state = {
  all: [],
};

const getters = {
  allFiles: state => state.all,
};

const actions = {
  getAllFiles({ commit }) {
    printer.getFiles((files) => {
      commit(types.RECIEVE_FILES, { files });
    });
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
