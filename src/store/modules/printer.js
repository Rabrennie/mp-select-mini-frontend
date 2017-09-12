import api from '../../api/printer';
import * as types from '../mutation-types';

const state = {
  extruder: 0,
  platform: 0,
};

const getters = {
  extruderTemp: state => state.extruder,
  platformTemp: state => state.platform,
};

const actions = {
  getTemps({ commit }) {
    api.getTemps((temps) => {
      commit(types.RECIEVE_TEMPS, { temps });
    }, () => {});
  },
};

const mutations = {
  [types.RECIEVE_TEMPS](state, { temps }) {
    state.platform = temps.platform; // eslint-disable-line no-param-reassign
    state.extruder = temps.extruder; // eslint-disable-line no-param-reassign
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
