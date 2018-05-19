<template>
    <section class="newest">
        <newest-article v-for="article in newestArticles" :key='article._id' :create='article.create' :name='article.name' :id="article._id"  :photo='article.fotos[0].src' :views="article.views" />
    </section>
</template>

<script>
import NewestArticle from "./NewestArticle";
import { mapActions } from "vuex";
import { articles } from "../../../api";
export default {
    name: "Newest",
    components: {
        NewestArticle
    },
    data() {
        return {
            articles: []
        };
    },
    computed: {
        newestArticles() {
            return this.$store.getters.newestArticles;
        }
    },
    methods: {
        ...mapActions(["getNewestArticles"])
    },
    created() {
        this.getNewestArticles();
    }
};
</script>

<style>
.newest {
    width: 50%;
    padding: 10px 15px;
}

.newest > .newest-item {
    margin-top: 20px;
}
</style>


