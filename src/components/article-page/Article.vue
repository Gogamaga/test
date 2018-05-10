<template>
    <div class="item-page">
        <photo-viewing v-if="visibilitedPhotoViewing" @closePhotoViewing="handleClosePhotoViewing" :photosForViewing="article.fotos" :choosenPhotoSrc="choosenPhotoSrc" />
        <article-photo @hadlerGetPhotoSrc="hadlerGetPhotoSrc" />
        <article-mount-info :info='article.mountain' />
        <div class="item-page__mount-description">
            <p v-for="(text, index) in splitDiscription(article.discription)" :key="index" >
                {{text}}
            </p>
        </div>
        <article-google-maps :position='position' />
        
    <div class="item-page__most-popular">
        <most-popular-article :articles='similarArticles' />
    </div>        

    </div>
</template>

<script>
import { mapActions } from "vuex";

import ArticlePhoto from "./ArticlePhoto";
import ArticleMountInfo from "./ArticleMountInfo";
import ArticleGoogleMaps from "./ArticleGoogleMaps";
import MostPopularArticle from "../index-page/MostPopularArticle";
import PhotoViewing from "../PhotoViewing";
export default {
    name: "Article",
    components: {
        ArticlePhoto,
        ArticleMountInfo,
        ArticleGoogleMaps,
        MostPopularArticle,
        PhotoViewing
    },
    data() {
        return {
            discription: "",
            visibilitedPhotoViewing: false,
            photosForViewing: [],
            choosenPhotoSrc: ""
        };
    },
    created() {
        const id = this.$router.history.current.params.id;
        this.getOneArticle(id);
    },
    beforeRouteUpdate(to, from, next) {
        to.params.id !== from.params.id && this.getOneArticle(to.params.id);
        next();
    },
    computed: {
        article() {
            return this.$store.getters.article;
        },
        similarArticles() {
            return this.$store.getters.similarArticles;
        },
        position() {
            return !this.article.mountain.coordinates
                ? { lat: 10, lng: 10 }
                : this.article.mountain.coordinates;
        }
    },
    methods: {
        ...mapActions(["getOneArticle"]),
        splitDiscription(discription = "") {
            return discription.split("\n");
        },
        hadlerGetPhotoSrc(src) {
            this.visibilitedPhotoViewing = true;
            this.choosenPhotoSrc = src;
        },
        handleClosePhotoViewing() {
            this.visibilitedPhotoViewing = false;
        }
    }
};
</script>

<style>
.item-page__google-maps {
    height: 500px;
    padding: 20px;
}
.item-page__google-maps .item-page__google-maps__mount {
    height: 100%;
}

.item-page__photo-container {
    width: 400px;
    float: left;
    margin-right: 10px;
}
.item-page__photo-container div {
    padding: 2px;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.item-page__photo-container div img {
    width: 100%;
    cursor: pointer;
}
.item-page__photo-container div:first-child {
    width: 100%;
}
.item-page__photo-container div:nth-child(2),
.item-page__photo-container div:nth-child(3) {
    width: 50%;
    height: 100px;
    float: left;
}
.item-page__photo-container div:nth-child(3) {
    position: relative;
}
.item-page__photo-container div:nth-child(3) .item-page__photo-container__img-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000a6;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.item-page__photo-container
    div:nth-child(3)
    .item-page__photo-container__img-cover
    .item-page__photo-container__img-cover__amount {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
}

.item-page__mount-description p {
    font-weight: 400;
    line-height: 1.5;
    text-align: justify;
}
.item-page__mount-description p::first-letter {
    margin-left: 15px;
}

.item-page__mount-info__list {
    margin-bottom: 15px;
}
.item-page__mount-info__list .item-page__mount-info__list__item {
    padding: 15px;
    letter-spacing: 2px;
    font-size: 1.2rem;
}
.item-page__mount-info__list .item-page__mount-info__list__item::first-letter {
    margin-left: 15px;
}

.item-page__most-popular ul {
    width: 100%;
    display: flex;
}
.item-page__most-popular ul li {
    padding: 0 10px;
    max-width: 25%;
}
</style>

