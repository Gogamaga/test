<template>
<div class="search-container-wrap">
  <section class="search-container">
      <div>
          <article-container :articles="articles" />
      </div>
      <div class="random-photo-mount search-container__random-photo-mount">
          <div v-for="(photo, index) in randomPhoto" :key="photo.fotos[0].id+index" >
              <span class="short-text-block random-photo-mount__name">{{photo.mountainName.name}}</span>
              <img :src="photo.fotos[0].src" alt="">
          </div>
      </div>
      
  </section>
  <aside class="right-menu right-menu-search">
          <input-search :label="'Пошук'" 
                        @handleKeyPress="handleKeyPress"
                        @handleInput="handleInput"
                        :value="searchValue"
          />
          <mountains-name-list/>
      </aside>
      </div>
</template>

<script>
import { mapActions } from "vuex";
import {
    GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_BY_MOUNTAIN_NAME,
    GET_ARTICLE_BY_DISCRIPTION,
    GET_RANDOM_PHOTO
} from "@/store/constants";
import ArticleContainer from "@/components/articles-page/ArticleContainer";
import InputSearch from "@/components/InputSearch";
import MountainsNameList from "@/components/articles-page/MountainsNameList";
export default {
    name: "WrapArticlesPage",
    data() {
        return {
            searchValue: ""
        };
    },
    components: {
        ArticleContainer,
        MountainsNameList,
        InputSearch
    },
    created() {
        const { query } = this.$route;
        this.searchByQuery(query);

        this.GET_RANDOM_PHOTO();
    },
    methods: {
        ...mapActions([
            GET_ALL_ARTICLES,
            GET_RANDOM_PHOTO,
            GET_ALL_ARTICLES_BY_MOUNTAIN_NAME,
            GET_ARTICLE_BY_DISCRIPTION
        ]),
        handleKeyPress(e) {
            const { charCode, target } = e;
            if (charCode === 13 && target.value) {
                this.$router.push(`/articles?search=${target.value}`);
            } else if (charCode === 13 && !target.value) {
                this.$router.push(`/articles`);
            }
        },
        handleInput({ target }) {
            this.searchValue = target.value;
        },
        searchByQuery(query) {
            if (query.mountain) {
                return this.GET_ALL_ARTICLES_BY_MOUNTAIN_NAME(query.mountain);
            } else if (query.search) {
                return this.GET_ARTICLE_BY_DISCRIPTION(query.search);
            } else {
                this.GET_ALL_ARTICLES();
            }
        }
    },
    computed: {
        articles() {
            return this.$store.getters.articles;
        },
        randomPhoto() {
            return this.$store.getters.randomPhoto.slice(0, 5);
        }
    },
    watch: {
        $route(to, from) {
            const query = to.query.mountain;
            this.searchByQuery(to.query);
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
}
.random-photo-mount.search-container__random-photo-mount .random-photo-mount__name:nth-child(odd) {
    left: 0;
}
.random-photo-mount.search-container__random-photo-mount .random-photo-mount__name:nth-child(even) {
    left: 0;
}
</style>

