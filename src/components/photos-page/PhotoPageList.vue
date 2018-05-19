<template>
  <div class="photo-page__list">
      <photo-page-container v-for="photo in photosList" :key="photo._id" :photos="photo.fotos" :mountainName="photo.mountainName?photo.mountainName.name:''" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PhotoPageContainer from "./PhotoPageContainer";

export default {
    name: "PhotoPageList",
    components: {
        PhotoPageContainer
    },
    created() {
        const query = this.$route.query.mountain;
        query ? this.getOneMountainPhotos(query) : this.getAllPhotos();
    },
    methods: {
        ...mapActions(["getAllPhotos", "getOneMountainPhotos"])
    },
    computed: {
        photosList() {
            return this.$store.getters.allPhotos;
        }
    },
    watch: {
        $route(to, from) {
            const query = to.query.mountain;
            query ? this.getOneMountainPhotos(query) : this.getAllPhotos();
        }
    }
};
</script>
