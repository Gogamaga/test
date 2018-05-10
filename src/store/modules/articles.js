import { articles } from "../../api";
import { articles as articlesFromAdmin } from "../../api/admin";
import {
  GET_NEWEST_ARTICLE,
  GET_MOST_VIEWED_ARTICLES,
  GET_ONE_ARTICLE,
  GET_SIMILAR_ARTICLES,
  GET_ALL_ARTICLES,
  GET_ALL_ARTICLES_BY_MOUNTAIN_NAME,
  GET_ARTICLE_BY_DISCRIPTION
} from "../constants";

const state = {
  newestArticles: [],
  mostViewedArticles: [],
  article: {
    create: 0,
    discription: "",
    fotos: [],
    mountain: {
      coordinates: { latitude: 0, longitude: 0 }
    },
    name: "",
    tags: "",
    views: 0,
    _id: ""
  },
  similarArticles: [],
  articles: []
};

const mutations = {
  [GET_NEWEST_ARTICLE](state, payload) {
    state.newestArticles = payload.articles;
  },
  [GET_MOST_VIEWED_ARTICLES](state, payload) {
    state.mostViewedArticles = payload.articles;
  },
  [GET_ONE_ARTICLE](state, payload) {
    state.article = payload.article;
  },
  [GET_SIMILAR_ARTICLES](state, payload) {
    state.similarArticles = payload.articles;
  },
  [GET_ALL_ARTICLES](state, payload) {
    state.articles = payload.articles;
  },
  [GET_ALL_ARTICLES_BY_MOUNTAIN_NAME](state, payload) {
    state.articles = payload.articles;
  },
  [GET_ARTICLE_BY_DISCRIPTION](state, payload) {
    state.articles = payload.articles;
  }
};
const actions = {
  getNewestArticles(context) {
    articles
      .getNewest()
      .then(({ data }) => context.commit({ type: GET_NEWEST_ARTICLE, articles: data }));
  },
  getMostViewedArticles(context) {
    articles
      .getMostViewedArticles()
      .then(({ data }) => context.commit({ type: GET_MOST_VIEWED_ARTICLES, articles: data }));
  },
  getOneArticle(context, id) {
    return articles.getOneArticle(id).then(({ data }) => {
      context.commit({ type: GET_ONE_ARTICLE, article: data });
      articles
        .getSimilarArticle(data.mountain.name)
        .then(({ data }) => context.commit({ type: GET_SIMILAR_ARTICLES, articles: data }));
    });
  },
  [GET_ALL_ARTICLES](context) {
    return articlesFromAdmin
      .getAllArticles()
      .then(({ data }) => context.commit({ type: GET_ALL_ARTICLES, articles: data }));
  },
  [GET_ALL_ARTICLES_BY_MOUNTAIN_NAME](context, name) {
    return articles
      .getAllArticlesByMountainsName(name)
      .then(({ data }) =>
        context.commit({ type: GET_ALL_ARTICLES_BY_MOUNTAIN_NAME, articles: data })
      );
  },
  [GET_ARTICLE_BY_DISCRIPTION](context, text) {
    return articles
      .searchArticleByDiscription(text)
      .then(({ data }) => context.commit({ type: GET_ARTICLE_BY_DISCRIPTION, articles: data }));
  }
};
const getters = {
  newestArticles(state) {
    return state.newestArticles;
  },
  mostViewedArticles(state) {
    return state.mostViewedArticles;
  },
  article(state) {
    return state.article;
  },
  similarArticles(state) {
    return state.similarArticles;
  },
  articlePhotos(state) {
    return state.article.fotos;
  },
  articles(state) {
    return state.articles;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
