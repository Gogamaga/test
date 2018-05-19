import { articles } from "../../api";
import { articles as articlesFromAdmin } from "../../api/admin";
import {
  GET_NEWEST_ARTICLE,
  GET_MOST_VIEWED_ARTICLES,
  GET_ONE_ARTICLE,
  GET_SIMILAR_ARTICLES,
  GET_ALL_ARTICLES,
  GET_ALL_ARTICLES_BY_MOUNTAIN_NAME,
  GET_ARTICLE_BY_DISCRIPTION,
  GET_ARTICLES_COUNT,
  GET_ARTICLES_LIMIT,
  GET_ARTICLES_FOR_ARTICLES_PAGE
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
  articles: [],
  count: 0
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
    state.count = payload.count;
  },

  [GET_ARTICLE_BY_DISCRIPTION](state, payload) {
    state.articles = payload.articles;
    state.count = payload.count;
  },

  [GET_ARTICLES_LIMIT](state, payload) {
    state.articles = payload.articles;
    state.count = payload.count;
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

  [GET_ALL_ARTICLES_BY_MOUNTAIN_NAME](context, searchQuery) {
    return articles.getAllArticlesByMountainsName(searchQuery).then(({ data }) =>
      context.commit({
        type: GET_ALL_ARTICLES_BY_MOUNTAIN_NAME,
        articles: data.articles,
        count: data.count
      })
    );
  },

  [GET_ARTICLE_BY_DISCRIPTION](context, searchQuery) {
    return articles.searchArticleByDiscription(searchQuery).then(({ data }) => {
      context.commit({
        type: GET_ARTICLE_BY_DISCRIPTION,
        articles: data.result,
        count: data.count
      });
    });
  },

  [GET_ARTICLES_LIMIT](context, pagination) {
    return articles
      .getArticlesLimit(pagination)
      .then(({ data }) =>
        context.commit({ type: GET_ARTICLES_LIMIT, articles: data.articles, count: data.count })
      );
  },

  [GET_ARTICLES_FOR_ARTICLES_PAGE](context, searchQuery) {
    const { query, from, limit } = searchQuery;

    if (query.search) {
      return context.dispatch(GET_ARTICLE_BY_DISCRIPTION, { search: query.search, from, limit });
    } else if (query.mountain) {
      return context.dispatch(GET_ALL_ARTICLES_BY_MOUNTAIN_NAME, {
        mountain: query.mountain,
        from,
        limit
      });
    } else {
      return context.dispatch(GET_ARTICLES_LIMIT, { from, limit });
    }
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
  },
  articlesCount(state) {
    return state.count;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
