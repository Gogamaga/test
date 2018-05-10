import axios from "axios";
import { LOCALHOST } from "../constants";

export const articles = {
  getAllArticles() {
    return axios.get(`${LOCALHOST}/articles`);
  },
  getOneArticle(id) {
    return axios.get(`${LOCALHOST}/articles/${id}`);
  },
  saveArticle(article) {
    return axios.post(`${LOCALHOST}/articles`, article);
  },
  deleteArticles(id) {
    return axios.delete(`${LOCALHOST}/articles/${id}`);
  },
  editArticle(id, article) {
    return axios.put(`${LOCALHOST}/articles/${id}`, article);
  }
};

export const users = {
  login(user) {
    return axios.post(`${LOCALHOST}/admin/login`, user);
  }
};

export const mountains = {
  getAllMountains() {
    return axios.get(`${LOCALHOST}/mountains`);
  },
  saveMountain(mountain) {
    return axios.post(`${LOCALHOST}/mountains`, mountain);
  },
  deleteMountain(id) {
    return axios.delete(`${LOCALHOST}/mountains/${id}`);
  },
  getOneMountain(id) {
    return axios.get(`${LOCALHOST}/mountains/${id}`);
  },
  editMountain(id, mountain) {
    return axios.put(`${LOCALHOST}/mountains/${id}`, mountain);
  }
};

export const countries = {
  getAllCountries() {
    return axios.get(`${LOCALHOST}/countries`);
  },
  getOneCountry(id) {
    return axios.get(`${LOCALHOST}/countries/${id}`);
  },
  saveCountry(country) {
    return axios.post(`${LOCALHOST}/countries`, country);
  },
  editCountry(id, country) {
    return axios.put(`${LOCALHOST}/countries/${id}`, country);
  },
  deleteCountry(id) {
    return axios.delete(`${LOCALHOST}/countries/${id}`);
  }
};

export const systems = {
  getAllSystems() {
    return axios.get(`${LOCALHOST}/systems`);
  },
  saveSystem(system) {
    return axios.post(`${LOCALHOST}/systems`, system);
  },
  getOneSystem(id) {
    return axios.get(`${LOCALHOST}/systems/${id}`);
  },
  deleteSystem(id) {
    return axios.delete(`${LOCALHOST}/systems/${id}`);
  },
  editSystem(id, system) {
    return axios.put(`${LOCALHOST}/systems/${id}`, system);
  }
};
