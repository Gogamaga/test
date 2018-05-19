<template>
    <div class="index-page">
        <most-popular/>
        <newest/>
    </div>
</template>

<script>
import { setTitle } from "@/utils";
import MostPopular from "./MostPopular";
import Newest from "./newest/Newest";
export default {
    name: "IndexPage",
    components: {
        MostPopular,
        Newest
    },
    created() {
        setTitle("Головна");
    },
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
