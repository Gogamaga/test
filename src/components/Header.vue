<template>
    <header>
        <header-slider :images="images"/>
        
        <Navigation/>
    </header>
</template>

<script>
import Navigation from "./Navigation.vue";
import HeaderSlider from "@/components/HeaderSlider";
const images = [
    { id: 1, image: "http://punjabvisahub.com/wp-content/uploads/2018/02/mm1.jpg" },
    {
        id: 2,
        image: "http://www.nationalparks.nsw.gov.au/~/media/081E09666B2B401280A858AAEF01C195.ashx"
    },
    {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/1_mount_hua_shan_china_2011.jpg"
    }
];
export default {
    name: "Header",
    components: {
        Navigation,
        HeaderSlider
    },
    data() {
        return {
            images
        };
    },
    methods: {
        hadleClick() {
            const parent = document.querySelector(".header-background__container");
            const firstChild = parent.firstElementChild;
            firstChild.style.marginLeft = "-1300px";
        },
        transitionend(e) {}
    },
    computed: {
        img() {
            return this.imagesConfig.active;
        }
    }
};
</script>

<style>

</style>


  

