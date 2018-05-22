<template>
    <div class="photo-page_mountain-list photo-page_mountain-list__search">
            <router-link class="photo-page_mountain-list__search__span" :to="{
                    name:'UI.Articles-Page',
                    params:{
                        page:1
                    }
                }">Всі</router-link>
            <router-link v-for="name in mountainsName" :key="name._id" class="photo-page_mountain-list__search__span" :to="{
                    name:'UI.Articles-Page',
                    params:{
                        page:1
                    },
                    query:{
                        mountain:name.name
                    }
                }"> {{name.name}}</router-link> 
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
  display: flex;
  flex-wrap: wrap;
}
.photo-page_mountain-list__search__span {
  padding: 5px 10px;
  margin: 5px;
  background-color: #0099cc;
  font-weight: 400;
  color: #fff;
}
.photo-page_mountain-list__search__span:hover {
  color: #000;
  cursor: pointer;
}
</style>
