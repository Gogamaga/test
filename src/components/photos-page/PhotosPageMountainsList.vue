<template>
  <div class="photo-page_mountain-list">
    <div class="clearfix">
         <ul class="mountains-list">
            <li class="mountains-list__item" 
            v-for="photo in photosList" 
            :key="photo._id" 
            :class="{'mountains-list__item__active': query === photo._id}" >
                <router-link  
                exact-active-class="is-active" 
                :to="`/photos?mountain=${photo._id}`" >
                {{photo.mountainName?photo.mountainName.name:''}}</router-link >
            </li>
            <li class="mountains-list__item" :class="{'mountains-list__item__active': !query}" >
                <router-link  exact-active-class="is-active" :to="`/photos`" >Всі</router-link >
            </li>
        </ul>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "PhotosPageMountainsList",
    data() {
        return {};
    },
    created() {
        this.getMountainsNameList();
    },
    computed: {
        photosList() {
            return this.$store.getters.mountainsNameList;
        },
        query() {
            return this.$route.query.mountain;
        }
    },
    methods: {
        ...mapActions(["getMountainsNameList"])
    }
};
</script>

