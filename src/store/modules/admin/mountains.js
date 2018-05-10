import { mountains } from "@/api/admin";
import {
  GET_ALL_MOUNTAINS_FOR_ADMIN,
  SAVE_MOUNTAIN,
  DELETE_MOUNTAIN,
  GET_ALL_COUNTRIES_FOR_ADMIN,
  GET_ALL_SYSTEMS_FOR_ADMIN,
  GET_COUNTRIES_AND_SYSTEM_FOR_CREATING_MOUNTAIN,
  GET_ONE_MOUNTAIN_FOR_ADMIN,
  EDIT_MOUNTAIN
} from "@/store/constants";

const state = {
  mountains: [],
  mountain: {}
};

const mutations = {
  [GET_ALL_MOUNTAINS_FOR_ADMIN](state, payload) {
    state.mountains = payload.mountains;
  },
  [DELETE_MOUNTAIN](state, payload) {
    state.mountains = state.mountains.filter(mountain => mountain._id !== payload.id);
  },
  [GET_ONE_MOUNTAIN_FOR_ADMIN](state, payload) {
    state.mountain = payload.mountain;
  },
  [EDIT_MOUNTAIN](state, payload) {
    state.mountain = payload.mountain;
  }
};

const actions = {
  [GET_ALL_MOUNTAINS_FOR_ADMIN](context) {
    mountains
      .getAllMountains()
      .then(({ data }) => context.commit({ type: GET_ALL_MOUNTAINS_FOR_ADMIN, mountains: data }));
  },
  [SAVE_MOUNTAIN](context, mountain) {
    return mountains.saveMountain(mountain).then(({ data }) => data._id);
  },
  [DELETE_MOUNTAIN](context, id) {
    return mountains.deleteMountain(id).then(() => context.commit({ type: DELETE_MOUNTAIN, id }));
  },
  [GET_COUNTRIES_AND_SYSTEM_FOR_CREATING_MOUNTAIN](context) {
    context.dispatch(GET_ALL_COUNTRIES_FOR_ADMIN);
    context.dispatch(GET_ALL_SYSTEMS_FOR_ADMIN);
  },
  [GET_ONE_MOUNTAIN_FOR_ADMIN](context, id) {
    return mountains
      .getOneMountain(id)
      .then(({ data }) => context.commit({ type: GET_ONE_MOUNTAIN_FOR_ADMIN, mountain: data }));
  },
  [EDIT_MOUNTAIN](context, { id, mountain }) {
    return mountains
      .editMountain(id, mountain)
      .then(({ data }) => context.commit({ type: EDIT_MOUNTAIN, mountain: data }));
  }
};

const getters = {
  allMountainsForAdmin(state) {
    return state.mountains;
  },
  getOneMountainForAdmin(state) {
    return state.mountain;
  }
};

export default { state, mutations, actions, getters };
