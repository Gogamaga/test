import Vue from "vue";
import Router from "vue-router";

import admin from "@/router/admin/";

import IndexPage from "@/components/index-page/IndexPage.vue";
import Article from "@/components/article-page/Article.vue";
import PhotosPage from "@/components/photos-page/PhotosPage.vue";
import UserWrap from "@/components/UserWrap";
import WrapArticlesPage from "@/components/articles-page/WrapArticlesPage.vue";

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
          component: IndexPage
        },
        {
          path: "/article/:id",
          component: Article
        },
        {
          path: "/photos",
          component: PhotosPage
        },
        {
          path: "/articles",
          component: WrapArticlesPage
        }
      ]
    },
    admin
  ]
});
