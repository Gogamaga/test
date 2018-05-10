<template>
  <div class="item-page__google-maps">
    <div class="item-page__google-maps__mount">
        <GmapMap
  :center="markers[0].position"
  :zoom="10"
  map-type-id="terrain"
  style="width: 100%; height: 500px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
    :title="'LKJKOOK'"
  />
</GmapMap>
    </div>
 </div>
</template>

<script>
export default {
    name: "ArticleGoogleMaps",
    data() {
        return {
            markers: [{ position: { lat: 0, lng: 0 } }]
        };
    },
    watch: {
        position(newProps, prevProps) {
            this.markers = [{ position: { lat: +newProps.latitude, lng: +newProps.longitude } }];
        }
    },
    props: ["position"]
};
</script>

