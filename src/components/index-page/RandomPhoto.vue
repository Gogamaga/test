<template>
    <div class="random-photo-mount">
        <div v-for="(photo, index) in randomPhotos" :key="photo.fotos[0].id+index" >
                <span class="short-text-block random-photo-mount__name">{{photo.mountainName.name}}</span>
                <img :src="photo.fotos[0].src" alt="">
        </div>
    </div> 
</template>

<script>
import { mapActions } from "vuex";
import { GET_RANDOM_PHOTO } from "@/store/constants";
export default {
    name: "RandomPhoto",
    data() {
        return {};
    },
    created() {
        this.GET_RANDOM_PHOTO();
    },
    methods: {
        ...mapActions([GET_RANDOM_PHOTO])
    },
    computed: {
        randomPhotos() {
            return this.$store.getters.randomPhoto;
        }
    }
};
</script>

<style>
.random-photo-mount {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
}
.random-photo-mount img {
    width: 70%;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.233);
}
.random-photo-mount div {
    padding: 5px;
    position: relative;
}
.random-photo-mount div:nth-child(odd) .random-photo-mount__name {
    top: 50%;
    right: 20%;
}
.random-photo-mount div:nth-child(even) .random-photo-mount__name {
    top: 50%;
    left: 20%;
}
.random-photo-mount div:nth-child(even) img {
    float: right;
}
.random-photo-mount .random-photo-mount__name {
    position: absolute;
}
</style>


