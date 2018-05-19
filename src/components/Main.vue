<template>
   <main class="main">
        <router-view ></router-view>
       
    </main>
</template>

<script>
import IndexPage from "./index-page/IndexPage";
export default {
    name: "Main",
    components: {
        IndexPage
    },
    data() {
        return {};
    }
};
</script>
<style>
.main {
    margin-top: 70vh;
    padding: 20px;
    background-color: #fff;
    /* display: flex; */
    border-top: #0099cc 3px solid;
}
.short-text-block {
    padding: 5px;
    background-color: #2a74fb;
    color: #fff;
    display: block;
    width: max-content;
    margin-bottom: 15px;
    font-size: 0.9rem;
}
.mountains-list {
    width: 100%;
    padding: 10px 20px;
}
.mountains-list .mountains-list__item {
    padding: 10px;
    margin-bottom: 5px;
}
.mountains-list .mountains-list__item a {
    font-size: 1.2rem;
    font-weight: 400;
    display: block;
}
</style>


