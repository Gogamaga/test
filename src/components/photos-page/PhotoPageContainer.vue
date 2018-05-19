<template>
  <section class="photo-page-section" >
      <photo-viewing v-if="visibilitiPhotoViewing"  :choosenPhotoSrc="choosenPhotoSrc" :photosForViewing="photos" @closePhotoViewing="handleClosePhotoViewing"/>
     <h3>{{mountainName}}</h3>
     <div class="photo-page__container" data-mountname="Говерла" v-masonry transition-duration="0.3s" item-selector=".photo-page__container__img">
         <img v-for="photo in photos" :key="photo.id" :src="photo.src" alt="" class="photo-page__container__img" @click="hadlerGetPhotoSrc(photo.src)" >
     </div>
 </section>
</template>
<script>
import PhotoViewing from "@/components/PhotoViewing";
export default {
    name: "PhotoPageContainer",
    components: {
        PhotoViewing
    },

    props: {
        photos: {
            type: Array,
            default() {
                return [];
            }
        },
        mountainName: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            visibilitiPhotoViewing: false,
            choosenPhotoSrc: ""
        };
    },
    methods: {
        hadlerGetPhotoSrc(src) {
            this.choosenPhotoSrc = src;
            this.visibilitiPhotoViewing = true;
        },
        handleClosePhotoViewing() {
            this.visibilitiPhotoViewing = false;
        }
    }
};
</script>
<style>

</style>


