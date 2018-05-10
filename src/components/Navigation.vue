<template>
  <nav class="header-navigator" :class="{small : headerTransition}">
      <div class="header-navigator__logo">
                    <a href="">G</a>
        </div>
        <ul class="header-navigator__nav-list">
            <NavigatorLink @test="test" :activeLink='activeLink' :textInner='"Головна"' :to="'/'" />
            <NavigatorLink @test="test" :activeLink='activeLink' :textInner='"Статті"' :to="'/articles'"/>
            <NavigatorLink @test="test" :activeLink='activeLink' :textInner='"thirth"' :to="'/s'"/>
            <NavigatorLink @test="test" :activeLink='activeLink' :textInner='"Фото"' :to="'/photos'"/>
            <NavigatorLink @test="test" :activeLink='activeLink' :textInner='"fifth"' :to="'/a'"/>
        </ul>
    </nav>
</template>

<script>
import NavigatorLink from "./NavigatorLink.vue";
export default {
    name: "Navigation",
    data() {
        return {
            activeLink: "first",
            headerTransition: false
        };
    },
    components: {
        NavigatorLink
    },
    methods: {
        test(e) {
            this.activeLink = e;
        }
    },
    beforeUpdate() {},
    created() {
        window.addEventListener("scroll", e => {
            const headerNavigator = document.querySelector(".header-navigator");
            const headerBackground = document.querySelector(".header-background");
            if (window.pageYOffset > 200) {
                this.headerTransition = true;
            } else {
                this.headerTransition = false;
            }
        });
    }
};
</script>

<style>
.header-navigator {
    width: 100%;
    background-color: #282e35;
    position: fixed;
    z-index: 20;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.28);
}
</style>


