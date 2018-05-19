import Vue from "vue";
import Router from "vue-router";

import admin from "@/router/admin/";
import articlesPage from "@/router/ui/articles-page";

import IndexPage from "@/components/index-page/IndexPage.vue";
import Article from "@/components/article-page/Article.vue";
import PhotosPage from "@/components/photos-page/PhotosPage.vue";
import UserWrap from "@/components/UserWrap";

import MapWraper from "@/components/map-page/MapWraper";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "header-navigator__nav-list-link_active",
  routes: [
    {
      path: "/",
      component: UserWrap,
      children: [
        {
          path: "/",
          component: IndexPage,
          name: "UI.Index"
        },
        {
          path: "/article/:id",
          component: Article,
          name: "UI.Article"
        },
        {
          path: "/photos",
          component: PhotosPage,
          name: "UI.Photos"
        },
        articlesPage,
        {
          path: "/map",
          component: MapWraper,
          name: "UI.Map"
        }
      ]
    },
    admin
  ]
});
