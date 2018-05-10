import Vue from "vue";
import Vuex from "vuex";
import articles from "./modules/articles";
import photos from "./modules/photos";
import articlesAdmin from "./modules/admin/articles";
import mountainsAdmin from "./modules/admin/mountains";
import countriesAdmin from "./modules/admin/countries";
import systemsAdmin from "./modules/admin/systems";
import mountains from "./modules/mountains";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles,
    photos,
    mountains,
    articlesAdmin,
    mountainsAdmin,
    countriesAdmin,
    systemsAdmin
  }
});
