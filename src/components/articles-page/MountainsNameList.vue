<template>
  <div class="photo-page_mountain-list photo-page_mountain-list__search">
    <div class="clearfix">
         <ul class="mountains-list">
            <li class="mountains-list__item" 
            v-for="name in mountainsName" 
            :key="name._id" 
            :class="{'mountains-list__item__active': query === name.name}" >
            
                <router-link  
                exact-active-class="is-active" 
                :to="`/articles?mountain=${name.name}`" >
                {{name.name}}</router-link >
            </li>
            <li class="mountains-list__item" :class="{'mountains-list__item__active': !query}" >
                <router-link  exact-active-class="is-active" :to="`/articles`" >Всі</router-link >
            </li>
        </ul>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { GET_ALL_MOUNTAINS_NAME } from "@/store/constants";
export default {
    name: "MountainsNameList",
    created() {
        this.GET_ALL_MOUNTAINS_NAME();
    },
    methods: {
        ...mapActions([GET_ALL_MOUNTAINS_NAME])
    },
    computed: {
        mountainsName() {
            return this.$store.getters.mountainsName;
        },
        query() {
            return this.$route.query.mountain;
        }
    }
};
</script>

<style>
.photo-page_mountain-list__search.photo-page_mountain-list__search {
    width: 100%;
}
</style>
