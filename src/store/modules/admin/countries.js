import {
  GET_ALL_COUNTRIES_FOR_ADMIN,
  REQUEST_COUNTRIES,
  REQUEST_SUCCESS,
  GET_ONE_COUNTRY_FOR_ADMIN,
  SAVE_COUNTRY,
  EDIT_COUNTRY,
  DELETE_COUNTRY
} from "@/store/constants";
import { countries } from "@/api/admin";

const state = {
  countries: [],
  country: {},
  request: false
};

const mutations = {
  [REQUEST_COUNTRIES](state) {
    state.request = true;
  },
  [REQUEST_SUCCESS](state) {
    state.request = false;
  },
  [GET_ALL_COUNTRIES_FOR_ADMIN](state, payload) {
    state.countries = payload.countries;
  },
  [GET_ONE_COUNTRY_FOR_ADMIN](state, payload) {
    state.country = payload.country;
  },
  [DELETE_COUNTRY](state, payload) {
    state.countries = state.countries.filter(country => country._id !== payload.id);
  }
};

const actions = {
  [GET_ALL_COUNTRIES_FOR_ADMIN](context) {
    context.commit({ type: REQUEST_COUNTRIES });
    countries.getAllCountries().then(({ data }) => {
      context.commit({ type: GET_ALL_COUNTRIES_FOR_ADMIN, countries: data });
      context.commit({ type: REQUEST_SUCCESS });
    });
  },
  [GET_ONE_COUNTRY_FOR_ADMIN](context, id) {
    context.commit({ type: REQUEST_COUNTRIES });
    countries.getOneCountry(id).then(({ data }) => {
      context.commit({ type: GET_ONE_COUNTRY_FOR_ADMIN, country: data });
      context.commit({ type: REQUEST_SUCCESS });
    });
  },
  [SAVE_COUNTRY](context, country) {
    return countries.saveCountry(country).then(({ data }) => data._id);
  },
  [EDIT_COUNTRY](context, { id, country }) {
    return countries.editCountry(id, country).then(({ data }) => console.log(data));
  },
  [DELETE_COUNTRY](context, id) {
    return countries.deleteCountry(id).then(({ data }) => {
      context.commit({ type: DELETE_COUNTRY, id });
      console.log(data);
    });
  }
};

const getters = {
  requestAllCountries(state) {
    return state.request;
  },
  allCountriesAdmin(state) {
    return state.countries;
  },
  getOneCountryForAdmin(state) {
    return state.country;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
