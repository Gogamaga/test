import {
  GET_ALL_SYSTEMS_FOR_ADMIN,
  SAVE_SYSTEM,
  GET_ONE_SYSTEM_FOR_ADMIN,
  DELETE_SYSTEM,
  EDIT_SYSTEM
} from "@/store/constants";

import { systems } from "@/api/admin";

const state = {
  systems: [],
  system: {}
};

const mutations = {
  [GET_ALL_SYSTEMS_FOR_ADMIN](state, payload) {
    state.systems = payload.systems;
  },
  [GET_ONE_SYSTEM_FOR_ADMIN](state, payload) {
    state.system = payload.system;
  },
  [DELETE_SYSTEM](state, payload) {
    state.systems = state.systems.filter(system => system._id !== payload.id);
  },
  [EDIT_SYSTEM](state, payload) {
    state.system = payload.system;
  }
};

const actions = {
  [GET_ALL_SYSTEMS_FOR_ADMIN](context) {
    return systems
      .getAllSystems()
      .then(({ data }) => context.commit({ type: GET_ALL_SYSTEMS_FOR_ADMIN, systems: data }));
  },
  [SAVE_SYSTEM](context, system) {
    return systems.saveSystem(system).then(({ data }) => data._id);
  },
  [GET_ONE_SYSTEM_FOR_ADMIN](context, id) {
    return systems
      .getOneSystem(id)
      .then(({ data }) => context.commit({ type: GET_ONE_SYSTEM_FOR_ADMIN, system: data }));
  },
  [DELETE_SYSTEM](context, id) {
    return systems.deleteSystem(id).then(({ data }) => context.commit({ type: DELETE_SYSTEM, id }));
  },
  [EDIT_SYSTEM](context, { id, system }) {
    return systems
      .editSystem(id, system)
      .then(({ data }) => context.commit({ type: EDIT_SYSTEM, system: data }));
  }
};

const getters = {
  allSystemsAdmin(state) {
    return state.systems;
  },
  getOneSystemForAdmin(state) {
    return state.system;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
