import { photos } from "../../api";
import {
  GET_RANDOM_PHOTO,
  GET_ALL_PHOTOS,
  GET_ONE_MOUNTAIN_PHOTOS,
  GET_MOUNTAINS_NAME_LIST
} from "../constants";

const state = {
  randomPhoto: [],
  allPhotos: [],
  mountainsNameList: []
};

const mutations = {
  [GET_RANDOM_PHOTO](state, payload) {
    state.randomPhoto = payload.photos;
  },
  [GET_ALL_PHOTOS](state, payload) {
    state.allPhotos = payload.photos;
  },
  [GET_ONE_MOUNTAIN_PHOTOS](state, payload) {
    state.allPhotos = payload.photos;
  },
  [GET_MOUNTAINS_NAME_LIST](state, payload) {
    state.mountainsNameList = payload.mountainsNameList;
  }
};

const actions = {
  [GET_RANDOM_PHOTO](context) {
    photos
      .getRandomPhotos()
      .then(({ data }) => context.commit({ type: GET_RANDOM_PHOTO, photos: data }));
  },
  getAllPhotos(context) {
    photos
      .getAllPhotos()
      .then(({ data }) => context.commit({ type: GET_ALL_PHOTOS, photos: data }));
  },
  getOneMountainPhotos(context, id) {
    photos
      .getOneMountainPhoto(id)
      .then(({ data }) => context.commit({ type: GET_ONE_MOUNTAIN_PHOTOS, photos: [data] }));
  },
  getMountainsNameList(context) {
    photos
      .getMountainsNameList()
      .then(({ data }) =>
        context.commit({ type: GET_MOUNTAINS_NAME_LIST, mountainsNameList: data })
      );
  }
};

const getters = {
  randomPhoto(state) {
    return state.randomPhoto;
  },
  allPhotos(state) {
    return state.allPhotos;
  },
  mountainsNameList(state) {
    return state.mountainsNameList;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
