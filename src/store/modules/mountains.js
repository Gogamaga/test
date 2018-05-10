import { mountains } from "@/api";

import { GET_ALL_MOUNTAINS_NAME } from "@/store/constants";

const state = {
  mountainsName: []
};

const mutations = {
  [GET_ALL_MOUNTAINS_NAME](state, payload) {
    state.mountainsName = payload.mountainsName;
  }
};

const actions = {
  [GET_ALL_MOUNTAINS_NAME](context) {
    return mountains
      .getAllMountainsName()
      .then(({ data }) => context.commit({ type: GET_ALL_MOUNTAINS_NAME, mountainsName: data }));
  }
};

const getters = {
  mountainsName(state) {
    return state.mountainsName;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
