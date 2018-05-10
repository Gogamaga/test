<template>
  <div class="container-fluid">
        <div class="col-lg-12">
            <navigation/>
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
export default {
    name: "DashBoard",
    components: {
        Navigation
    }
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>

