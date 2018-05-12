import axios from "axios";
import { LOCALHOST } from "../constants";
axios.defaults.baseURL = LOCALHOST;
export const articles = {
  getAllArticles() {
    return axios.get(`/articles`);
  },
  getOneArticle(id) {
    return axios.get(`/articles/${id}`);
  },
  saveArticle(article) {
    return axios.post(`/articles`, article);
  },
  deleteArticles(id) {
    return axios.delete(`/articles/${id}`);
  },
  editArticle(id, article) {
    return axios.put(`/articles/${id}`, article);
  }
};

export const users = {
  login(user) {
    return axios.post(`/admin/login`, user);
  }
};

export const mountains = {
  getAllMountains() {
    return axios.get(`/mountains`);
  },
  saveMountain(mountain) {
    return axios.post(`/mountains`, mountain);
  },
  deleteMountain(id) {
    return axios.delete(`/mountains/${id}`);
  },
  getOneMountain(id) {
    return axios.get(`/mountains/${id}`);
  },
  editMountain(id, mountain) {
    return axios.put(`/mountains/${id}`, mountain);
  }
};

export const countries = {
  getAllCountries() {
    return axios.get(`/countries`);
  },
  getOneCountry(id) {
    return axios.get(`/countries/${id}`);
  },
  saveCountry(country) {
    return axios.post(`/countries`, country);
  },
  editCountry(id, country) {
    return axios.put(`/countries/${id}`, country);
  },
  deleteCountry(id) {
    return axios.delete(`/countries/${id}`);
  },
  getCountCountries() {
    return axios.get(`/countries/count`);
  },
  getCountriesForPage({ from, limit }) {
    const pagination = { from, limit };
    console.log(pagination);
    return axios.post(`/countries/countries-for-page`, pagination);
  }
};

export const systems = {
  getAllSystems() {
    return axios.get(`/systems`);
  },
  saveSystem(system) {
    return axios.post(`/systems`, system);
  },
  getOneSystem(id) {
    return axios.get(`/systems/${id}`);
  },
  deleteSystem(id) {
    return axios.delete(`/systems/${id}`);
  },
  editSystem(id, system) {
    return axios.put(`/systems/${id}`, system);
  }
};
