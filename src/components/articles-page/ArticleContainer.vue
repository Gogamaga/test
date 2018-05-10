<template>
<ul class="search-container__list list-articles">
  <li class="list-articles__item" v-for="article in articles" :key="article._id" >
    <router-link :to="`/article/${article._id}`" >
        <div class="list-articles__text">{{article.discription | shortDiscription}}</div>
         <div class="list-articles__date">{{article.create | parseTime}}</div>
    </router-link>
  </li>
  <li v-if="articles.length === 0" class="articles-no-found">
      <p>Немає результатів пошуку</p>
  </li>
</ul>
</template>

<script>
import { parseTimeStamp } from "@/utils";
export default {
    name: "ArticleContainer",
    props: {
        articles: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    filters: {
        shortDiscription(text) {
            return text.length > 400 ? text.slice(0, 500) + "..." : text;
        },
        parseTime(time) {
            return parseTimeStamp(+time);
        }
    }
};
</script>
<style>
.articles-no-found {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #7e7e7e;
}
</style>

