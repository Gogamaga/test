<template>
    <div>
        <div class="search-container-wrap">
            <head-title :title="'Статті'" />
            <section class="search-container">
                <div>
                    <article-container :articles="articles" />
                </div>
                <div class="random-photo-mount search-container__random-photo-mount">
                    <div v-for="(photo, index) in randomPhoto" :key="photo.fotos[0].id+index">
                        <span class="short-text-block random-photo-mount__name">{{photo.mountainName.name}}</span>
                        <img :src="photo.fotos[0].src" alt="">
                    </div>
                </div>
            </section>
            <aside class="right-menu right-menu-search">
                <input-search :label="'Пошук'" @handleKeyPress="handleKeyPress" @handleInput="handleInput" :value="searchValue" />
                <mountains-name-list/>
            </aside>
        </div>
        <pagination-u-i :count="articlesCount" />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  GET_RANDOM_PHOTO,
  GET_ARTICLES_FOR_ARTICLES_PAGE
} from "@/store/constants";

import HeadTitle from "@/components/HeadTitle";
import ArticleContainer from "@/components/articles-page/ArticleContainer";
import InputSearch from "@/components/InputSearch";
import MountainsNameList from "@/components/articles-page/MountainsNameList";
import PaginationUI from "@/components/PaginationUI";
export default {
  name: "WrapArticlesPage",
  data() {
    return {
      searchValue: "",
      limit: 5
    };
  },
  components: {
    ArticleContainer,
    MountainsNameList,
    InputSearch,
    HeadTitle,
    PaginationUI
  },
  created() {
    const { query } = this.$route;
    const { page } = this.$route.params;
    const limit = { from: +page * this.limit - this.limit, limit: this.limit };
    this.GET_ARTICLES_FOR_ARTICLES_PAGE({
      query,
      from: limit.from,
      limit: limit.limit
    });

    this.GET_RANDOM_PHOTO();
  },
  methods: {
    ...mapActions([GET_RANDOM_PHOTO, GET_ARTICLES_FOR_ARTICLES_PAGE]),
    handleKeyPress(e) {
      const { charCode, target } = e;
      if (charCode === 13 && target.value) {
        this.$router.push({
          name: "UI.Articles-Page",
          params: {
            page: 1
          },
          query: {
            search: target.value
          }
        });
      } else if (charCode === 13 && !target.value) {
        this.$router.push({
          name: "UI.Articles-Page",
          params: {
            page: 1
          }
        });
      }
    },
    handleInput({ target }) {
      this.searchValue = target.value;
    }
  },
  computed: {
    articles() {
      return this.$store.getters.articles;
    },
    randomPhoto() {
      return this.$store.getters.randomPhoto.slice(0, 5);
    },
    articlesCount() {
      return this.$store.getters.articlesCount;
    }
  },
  watch: {
    $route(to, from) {
      const { query } = to;
      const { page } = this.$route.params;
      const limit = {
        from: +page * this.limit - this.limit,
        limit: this.limit
      };
      this.GET_ARTICLES_FOR_ARTICLES_PAGE({
        query,
        from: limit.from,
        limit: limit.limit
      });
    }
  }
};
</script>

<style>
.search-container-wrap {
  display: flex;
}
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
}
.right-menu-search {
  width: 35%;
}
.random-photo-mount.search-container__random-photo-mount {
  display: flex;
  flex-wrap: nowrap;
}
.random-photo-mount.search-container__random-photo-mount div {
  width: 20%;
}
.random-photo-mount.search-container__random-photo-mount img {
  width: 100%;
  float: none;
  height: 100%;
}
.random-photo-mount.search-container__random-photo-mount
  .random-photo-mount__name:nth-child(odd) {
  left: 0;
}
.random-photo-mount.search-container__random-photo-mount
  .random-photo-mount__name:nth-child(even) {
  left: 0;
}
</style>

