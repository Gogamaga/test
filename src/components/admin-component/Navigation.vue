<template>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <navigation-link :label="'Статті'" :to="'/admin/dashboard/articles'" />
        <navigation-link :label="'Гори'" :to="'/admin/dashboard/mountains'" />
        <navigation-link :label="'Системи'" :to="'/admin/dashboard/systems'" />
        <navigation-link :label="'Країни'" :to="'/admin/dashboard/countries/1'" />
        <navigation-link :label="'Player'" :to="'/admin/dashboard/player'" />
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