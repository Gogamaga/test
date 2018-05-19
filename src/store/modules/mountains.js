import { mountains } from "@/api";

import { GET_ALL_MOUNTAINS_NAME, GET_ALL_MOUNTAINS } from "@/store/constants";

const state = {
  mountainsName: [],
  mountains: []
};

const mutations = {
  [GET_ALL_MOUNTAINS_NAME](state, payload) {
    state.mountainsName = payload.mountainsName;
  },
  [GET_ALL_MOUNTAINS](state, payload) {
    state.mountains = payload.mountains;
  }
};

const actions = {
  [GET_ALL_MOUNTAINS_NAME](context) {
    return mountains
      .getAllMountainsName()
      .then(({ data }) => context.commit({ type: GET_ALL_MOUNTAINS_NAME, mountainsName: data }));
  },
  [GET_ALL_MOUNTAINS](context) {
    return mountains
      .getAllMountains()
      .then(({ data }) => context.commit({ type: GET_ALL_MOUNTAINS, mountains: data }));
  }
};

const getters = {
  mountainsName(state) {
    return state.mountainsName;
  },
  mountains(state) {
    return state.mountains;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
