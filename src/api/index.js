import axios from "axios";
import { LOCALHOST } from "../constants";

export const articles = {
  getNewest() {
    return axios.get(`${LOCALHOST}/ui/articles`);
  },
  getMostViewedArticles() {
    return axios.get(`${LOCALHOST}/ui/articles/mostviewed`);
  },
  getOneArticle(id) {
    return axios.get(`${LOCALHOST}/ui/articles/${id}`);
  },
  getSimilarArticle(name) {
    return axios.get(`${LOCALHOST}/ui/articles/articlebymontainname/${name}`);
  },
  getAllArticlesByMountainsName(name) {
    return axios.get(`${LOCALHOST}/ui/articles/articlebymontainname/${name}`);
  },
  searchArticleByDiscription(text) {
    return axios.get(`${LOCALHOST}/ui/articles/article-by-discription/search/?search=${text}`);
  }
};

export const photos = {
  getRandomPhotos() {
    return axios.get(`${LOCALHOST}/ui/fotos/random_photo`);
  },
  getAllPhotos() {
    return axios.get(`${LOCALHOST}/ui/fotos`);
  },
  getOneMountainPhoto(id) {
    return axios.get(`${LOCALHOST}/ui/fotos/${id}`);
  },
  getMountainsNameList() {
    return axios.get(`${LOCALHOST}/ui/fotos/mountain_name_list`);
  }
};

export const mountains = {
  getAllMountainsName() {
    return axios.get(`${LOCALHOST}/ui/mountains/mountains-name`);
  }
};
