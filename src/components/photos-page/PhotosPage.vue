<template>
  <div class="photo-page">
      <photos-page-mountains-list/>
      <photo-page-list/>
  </div>
</template>

<script>
import PhotoPageList from "./PhotoPageList";
import PhotosPageMountainsList from "./PhotosPageMountainsList";
import { isMoment } from "moment";
export default {
    name: "PhotosPage",
    components: {
        PhotosPageMountainsList,
        PhotoPageList
    }
};
</script>
<style>
.photo-page {
    width: 100%;
    display: flex;
}

.photo-page__list {
    width: 80%;
}

.photo-page__container img {
    width: 19.5%;
    margin-bottom: 1px;
    cursor: pointer;
}

.photo-page-section {
    box-shadow: 0px 15px 13px -8px rgba(163, 163, 163, 0.52);
    margin-bottom: 15px;
    padding-bottom: 15px;
}

.photo-page_mountain-list {
    width: 25%;
}
.mountains-list .mountains-list__item {
    text-transform: capitalize;
    
}
.mountains-list .mountains-list__item__active {
    border-right: 2px solid #0099cc;
    transition: text-alight 0.2s ease-out;
}
.mountains-list .mountains-list__item__active a {
    color: #0099cc;
    text-align: right;
}

.mountains-list .mountains-list__item:last-child {
    margin-top: 5px;
    margin-left: 15px;
}

.mountains-list_fixed {
    position: fixed;
    top: 60px;
}
</style>


