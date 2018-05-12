<template>
    <ul class="most-popular__list list-articles">
        <li class="most-popular__list-item list-articles__item" v-for="(article, index) in articles" :key="index">
            <router-link :to="`/article/${article._id}`">
                <div class="most-popular__list-item__text list-articles__text">{{article.discription | shortDiscription}}</div>
                <div class="most-popular__list-item__date list-articles__date">{{article.create| parseTime}}</div>
            </router-link>
        </li>
    </ul>
</template>

<script>
import { parseTimeStamp } from "../../utils";

export default {
    name: "MostPopularArticle",
    data() {
        return {};
    },
    props: {
        articles: {
            type: Array,
            default() {
                return [];
            }
        }
    },

    methods: {},
    filters: {
        parseTime(time) {
            return parseTimeStamp(+time);
        },
        shortDiscription(discription) {
            return discription.length > 150 ? discription.slice(0, 150) + "..." : discription;
        }
    }
};
</script>

<style>
.list-articles__item {
    margin-top: 20px;
}
.list-articles__item .list-articles__text {
    font-weight: 400;
    transition: color 0.2s;
}
.list-articles__item .list-articles__text:hover {
    color: #0099cc;
}
.list-articles__item .list-articles__date {
    margin-top: 10px;
    color: #7e7e7e;
    font-weight: 100;
    font-size: 0.9rem;
}
</style>


