<template>
    <div class="header-background">
        <div class="header-background__container">
            <img v-for="(image) in images" :key="image.id" :src="image.image" class="header-background__image" alt="" @transitionend="transitionend" :style='{width:`${headerBackgroundWidth}px`}'>
        </div>
    </div>
</template>
<script>
export default {
    name: "HeaderSlider",
    props: {
        images: {
            type: Array,
            default() {
                return [];
            }
        },
        intervalTime: {
            type: Number,
            default: 5000
        }
    },
    data() {
        return {
            headerBackgroundWidth: 0
        };
    },
    mounted() {
        this.headerBackgroundWidth = document.querySelector(".header-background").offsetWidth;
    },
    beforeUpdate() {
        this.intervalId = setInterval(this.startSlider, this.intervalTime);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        startSlider() {
            const parent = document.querySelector(".header-background__container");
            const firstChild = parent.firstElementChild;
            firstChild.style.marginLeft = -this.headerBackgroundWidth + "px";
            firstChild.style.width = this.headerBackgroundWidth + "px";
        },
        transitionend() {
            const parent = document.querySelector(".header-background__container");
            const firstChild = parent.firstElementChild;
            const removedFirstChild = parent.removeChild(firstChild);
            (removedFirstChild.style.marginLeft = 0),
                (removedFirstChild.style.width = this.headerBackgroundWidth + "px");
            parent.appendChild(removedFirstChild);
        }
    }
};
</script>

<style>
.header-background {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    overflow: hidden;
}
.header-background__container {
    width: max-content;
}
.header-background__image {
    display: block;
    float: left;
    transition: margin-left 0.5s ease-in-out;
}
</style>
