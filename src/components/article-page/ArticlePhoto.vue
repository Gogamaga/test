<template>
<div class="item-page__photo-container">
  <div v-for="(photo, index) in photos" :key="photo.id" >
    
    <img :src="photo.src" alt="" class="item-page__photo-container__img" @click="$emit('hadlerGetPhotoSrc',photo.src)" >
    <div class="item-page__photo-container__img-cover" v-if="index===2" @click="$emit('hadlerGetPhotoSrc',photo.src)" >
        <span class="item-page__photo-container__img-cover__amount"  >{{photosLength}} фото</span>
    </div>
  </div>
</div>
                        
</template>


<script>
export default {
    name: "ArticlePhoto",
    data() {
        return {};
    },
    computed: {
        photosLength() {
            return this.$store.getters.articlePhotos.length;
        },
        photos() {
            return !this.$store.getters.articlePhotos
                ? []
                : this.$store.getters.articlePhotos.slice(0, 3);
        }
    }
};
</script>

