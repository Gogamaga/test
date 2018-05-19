<template>
  <section class="most-popular">
      <most-popular-article :articles="mostViewedArticles" />
      <random-photo/>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import MostPopularArticle from "./MostPopularArticle";
import RandomPhoto from "./RandomPhoto";
export default {
    name: "MostPopular",
    components: {
        MostPopularArticle,
        RandomPhoto
    },
    data() {
        return {};
    },
    created() {
        this.getMostViewedArticles();
    },
    methods: {
        ...mapActions(["getMostViewedArticles"])
    },
    computed: {
        mostViewedArticles() {
            return this.$store.getters.mostViewedArticles;
        }
    }
};
</script>


<style>
.most-popular {
    width: 25%;
    padding: 10px 10px;
    /* flex-grow: 2; */
}
</style>

