<template>
  <div class="photo-view photo-view_visible">

        <span class="photo-page__button-close" @click="$emit('closePhotoViewing')" >x</span>
                
        <span class="photo-view__button-prev" @click="handlePrevPhoto" >
        </span>
        <div class="photo-view__photo-container">
            <span>
                <span class="photo-view__photo-container__caption">Говерла</span>
                <img :src="photosForViewing[viewingPhotoIndex].src" alt="" class="photo-view__photo-container__img">
            </span>
        </div>
        <span class="photo-view__button-next" @click="handleNextPhoto" ></span>
    </div>
</template>

<script>
export default {
    name: "PhotoViewing",
    data() {
        return {
            viewingPhotoIndex: 0
        };
    },

    props: {
        choosenPhotoSrc: {
            type: String
        },
        photosForViewing: {
            type: Array
        }
    },
    computed: {},
    created() {
        this.viewingPhotoIndex = this.photosForViewing.findIndex(
            photo => photo.src === this.choosenPhotoSrc
        );
    },
    methods: {
        handlePrevPhoto() {
            if (this.viewingPhotoIndex > 0) {
                this.viewingPhotoIndex--;
            }
        },
        handleNextPhoto() {
            if (this.photosForViewing.length > this.viewingPhotoIndex + 1) {
                this.viewingPhotoIndex++;
            }
        }
    }
};
</script>
<style>
.photo-view__button-prev {
    width: 30px;
    height: 30px;
    border-left: 3px solid #0099cc;
    border-top: 3px solid #0099cc;
    border-radius: 3px;
    transform: rotate(-45deg);
    cursor: pointer;
}
.photo-view__button-prev:active {
    border-color: #fff;
}

.photo-view__button-next {
    width: 30px;
    height: 30px;
    border-left: 3px solid #0099cc;
    border-top: 3px solid #0099cc;
    border-radius: 3px;
    transform: rotate(135deg);
    cursor: pointer;
}
.photo-view__button-next:active {
    border-color: #fff;
}

.photo-view_visible {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 20;
    background-color: #000000dc;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 0;
}
.photo-view_visible .photo-view__photo-container {
    max-width: 75%;
    height: 80%;
    display: flex;
    align-items: center;
}
.photo-view_visible .photo-view__photo-container img {
    max-width: 100%;
    max-height: 100%;
    border: 5px solid #fff;
}
.photo-view_visible .photo-view__photo-container span {
    position: relative;
}
.photo-view_visible .photo-view__photo-container span .photo-view__photo-container__caption {
    position: absolute;
    bottom: 5px;
    left: 5px;
    background-color: #0075d0;
    padding: 5px;
    color: #fff;
    font-weight: 400;
}
.photo-view_visible .photo-page__button-close {
    position: absolute;
    top: 25px;
    right: 25px;
    color: #0099cc;
    cursor: pointer;
}
.photo-view_visible .photo-page__button-close:active {
    color: #fff;
}
</style>


