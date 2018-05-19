<template>
    <div class="container">
        <button @click="changeCenter">dsdf</button>
        <GmapMap :center="position" :zoom="10" map-type-id="terrain" style="width: 100%; height: 500px">
            <GmapMarker v-for="mountain in mountains" :key="mountain._id" :position="{lat:+mountain.coordinates.latitude, lng:+mountain.coordinates.longitude}" :clickable="true" :draggable="true" @click="center=m.position" :title="mountain.name">

            </GmapMarker>
        </GmapMap>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { GET_ALL_MOUNTAINS } from "@/store/constants";
export default {
    name: "MapWraper",
    data() {
        return {
            position: { lat: 48.16022491, lng: 24.49998093 }
        };
    },
    created() {
        this.GET_ALL_MOUNTAINS();
    },
    methods: {
        changeCenter() {
            this.position = { lat: 48.16022491, lng: 24.49998093 };
        },
        ...mapActions([GET_ALL_MOUNTAINS])
    },
    computed: {
        mountains() {
            return this.$store.getters.mountains;
        }
    }
};
</script>
