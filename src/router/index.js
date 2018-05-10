import Vue from "vue";
import Router from "vue-router";
import IndexPage from "@/components/index-page/IndexPage.vue";
import Article from "@/components/article-page/Article.vue";
import PhotosPage from "@/components/photos-page/PhotosPage.vue";
import UserWrap from "@/components/UserWrap";
import WrapArticlesPage from "@/components/articles-page/WrapArticlesPage.vue";

import Admin from "@/components/admin-component/Admin";
import LoginPage from "@/components/admin-component/LoginPage";
import DashBoard from "@/components/admin-component/DashBoard";
import ArticleList from "@/components/admin-component/article-page/ArticleList";
import ArticleCreator from "@/components/admin-component/article-page/ArticleCreator";
import CountriesList from "@/components/admin-component/countries-page/CountriesList";
import CountriesCreator from "@/components/admin-component/countries-page/CountriesCreator";
import VideoList from "@/components/admin-component/video-page/VideoList.vue";
import SystemsList from "@/components/admin-component/systems-page/SystemsList";
import SystemsCreator from "@/components/admin-component/systems-page/SystemsCreator";
import MountainCreator from "@/components/admin-component/mountains-page/MountainCreator";
import MountainsList from "@/components/admin-component/mountains-page/MountainsList";
import VideoPlayerSetting from "@/components/admin-component/video-page/VideoPlayerSetting";

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
    {
      path: "/admin",
      component: Admin,

      children: [
        {
          path: "/admin/login",
          component: LoginPage
        },
        {
          path: "/admin/dashboard",
          component: DashBoard,
          children: [
            {
              path: "/admin/dashboard/articles",
              component: ArticleList,
              meta: {
                title: "Статті"
              }
            },
            {
              path: "/admin/dashboard/articles/new",
              component: ArticleCreator,
              meta: {
                title: "Статті"
              }
            },
            {
              path: "/admin/dashboard/articles/edit/:id",
              component: ArticleCreator,
              meta: {
                title: "Статті"
              }
            },
            {
              path: "/admin/dashboard/mountains",
              component: MountainsList,
              meta: {
                title: "Гори"
              }
            },
            {
              path: "/admin/dashboard/mountains/new",
              component: MountainCreator,
              meta: {
                title: "Гори"
              }
            },
            {
              path: "/admin/dashboard/mountains/edit/:id",
              component: MountainCreator,
              meta: {
                title: "Гори"
              }
            },
            {
              path: "/admin/dashboard/systems",
              component: SystemsList,
              meta: {
                title: "Системи"
              }
            },
            {
              path: "/admin/dashboard/systems/new",
              component: SystemsCreator,
              meta: {
                title: "Системи"
              }
            },
            {
              path: "/admin/dashboard/systems/edit/:id",
              component: SystemsCreator,
              meta: {
                title: "Системи"
              }
            },
            {
              path: "/admin/dashboard/countries",
              component: CountriesList,
              meta: {
                title: "Країни"
              }
            },
            {
              path: "/admin/dashboard/countries/new",
              component: CountriesCreator,
              meta: {
                title: "Країни"
              }
            },
            {
              path: "/admin/dashboard/countries/edit/:id",
              component: CountriesCreator,
              meta: {
                title: "Країни"
              }
            },
            {
              path: "/admin/dashboard/player",
              component: VideoList,
              meta: {
                title: "Player"
              }
            },
            {
              path: "/admin/dashboard/player/setting",
              component: VideoPlayerSetting,
              meta: {
                title: "Player"
              }
            }
          ]
        }
      ]
    }
  ]
});
