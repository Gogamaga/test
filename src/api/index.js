import axios from "axios";
import { LOCALHOST } from "../constants";
axios.defaults.baseURL = LOCALHOST;

export const articles = {
  getNewest() {
    return axios.get(`/ui/articles`);
  },
  getMostViewedArticles() {
    return axios.get(`/ui/articles/mostviewed`);
  },
  getOneArticle(id) {
    return axios.get(`/ui/articles/${id}`);
  },
  getSimilarArticle(name) {
    return axios.get(`/ui/articles/articlebymontainname/${name}`);
  },
  getAllArticlesByMountainsName(name) {
    return axios.get(`/ui/articles/articlebymontainname/${name}`);
  },
  searchArticleByDiscription(text) {
    return axios.get(`/ui/articles/article-by-discription/search/?search=${text}`);
  }
};

export const photos = {
  getRandomPhotos() {
    return axios.get(`/ui/fotos/random_photo`);
  },
  getAllPhotos() {
    return axios.get(`/ui/fotos`);
  },
  getOneMountainPhoto(id) {
    return axios.get(`/ui/fotos/${id}`);
  },
  getMountainsNameList() {
    return axios.get(`/ui/fotos/mountain_name_list`);
  }
};

export const mountains = {
  getAllMountainsName() {
    return axios.get(`/ui/mountains/mountains-name`);
  }
};
