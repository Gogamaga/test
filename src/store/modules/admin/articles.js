import { articles } from "../../../api/admin";
import {
  GET_ALL_ARTICLES_FOR_ADMIN,
  GET_ONE_ARTICLE_FOR_ADMIN,
  SAVE_ARTICLE,
  DELETE_ONE_ARTICLE,
  EDIT_ARTICLE
} from "../../constants";

const state = {
  articles: [],
  article: {}
};

const mutations = {
  [GET_ALL_ARTICLES_FOR_ADMIN](state, payload) {
    state.articles = payload.articles;
  },
  [GET_ONE_ARTICLE_FOR_ADMIN](state, payload) {
    state.article = payload.article;
  },
  [SAVE_ARTICLE](state, payload) {
    state.idSavedArticle = payload.id;
  },
  [DELETE_ONE_ARTICLE](state, payload) {
    state.articles = state.articles.filter(article => article._id !== payload.id);
  },
  [EDIT_ARTICLE](state, payload) {
    state.article = payload.article;
  }
};

const actions = {
  [GET_ALL_ARTICLES_FOR_ADMIN](context) {
    articles
      .getAllArticles()
      .then(({ data }) => context.commit({ type: GET_ALL_ARTICLES_FOR_ADMIN, articles: data }));
  },
  [GET_ONE_ARTICLE_FOR_ADMIN](context, id) {
    articles
      .getOneArticle(id)
      .then(({ data }) => context.commit({ type: GET_ONE_ARTICLE_FOR_ADMIN, article: data }));
  },
  [SAVE_ARTICLE](context, article) {
    return articles.saveArticle(article).then(({ data }) => {
      return data._id;
    });
  },
  [DELETE_ONE_ARTICLE](context, id) {
    articles.deleteArticles(id).then(result => context.commit({ type: DELETE_ONE_ARTICLE, id }));
  },
  [EDIT_ARTICLE](context, { id, article }) {
    return articles
      .editArticle(id, article)
      .then(({ data }) => context.commit({ type: EDIT_ARTICLE, article: data }));
  }
};

const getters = {
  allArticlesAdmin(state) {
    return state.articles;
  },
  articleAdmin(state) {
    return state.article;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
