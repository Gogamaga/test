<template>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <navigation-link :label="'Статті'" :to="{name: 'Admin.Articles.List'}" :root-path="'article'" />
        <navigation-link :label="'Гори'" :to="{name: 'Admin.Mountains.List'}" :root-path="'mountains'" />
        <navigation-link :label="'Системи'" :to="{name: 'Admin.System.List'}" :root-path="'systems'" />
        <navigation-link :label="'Країни'" :to="{name: 'Admin.Countries.List', params:{page:'1'}}" :root-path="'countries'" />
        <navigation-link :label="'Player'" :to="{name: 'Admin.Video.List'}" :root-path="'player'" />
        <li class="nav-link">
            <a href="#" @click="handleExitFromAdmin" style="color:#000">Вийти</a>
        </li>
    </ul>
</template>

<script>
import NavigationLink from "./NavigationLink";
export default {
    name: "Navigation",
    components: {
        NavigationLink
    },
    methods: {
        handleExitFromAdmin() {
            document.cookie = "userName=";
            this.$router.push("/admin/login");
        }
    }
};
</script>

<style scoped>
/* @import "bootstrap/dist/css/bootstrap.min.css"; */
</style>