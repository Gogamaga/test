import {
  GET_ALL_COUNTRIES_FOR_ADMIN,
  REQUEST_COUNTRIES,
  REQUEST_SUCCESS,
  GET_ONE_COUNTRY_FOR_ADMIN,
  SAVE_COUNTRY,
  EDIT_COUNTRY,
  DELETE_COUNTRY,
  GET_COUNTRIES_COUNT,
  GET_COUNTRIES_FOR_PAGE
} from "@/store/constants";
import { countries } from "@/api/admin";

const state = {
  countries: [],
  country: {},
  request: false,
  count: 0
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
  [GET_COUNTRIES_COUNT](state, payload) {
    state.count = payload.count;
  },
  [GET_ONE_COUNTRY_FOR_ADMIN](state, payload) {
    state.country = payload.country;
  },
  [DELETE_COUNTRY](state, payload) {
    state.countries = state.countries.filter(country => country._id !== payload.id);
  },
  [GET_COUNTRIES_FOR_PAGE](state, payload) {
    state.countries = payload.countries;
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
  [GET_COUNTRIES_COUNT](context) {
    countries
      .getCountCountries()
      .then(({ data }) => context.commit({ type: GET_COUNTRIES_COUNT, count: +data }));
  },
  [GET_COUNTRIES_FOR_PAGE](context, pagination) {
    return countries
      .getCountriesForPage(pagination)
      .then(({ data }) => context.commit({ type: GET_COUNTRIES_FOR_PAGE, countries: data }));
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
  },
  getCountriesCount(state) {
    return state.count;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
