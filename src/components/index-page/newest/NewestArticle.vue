<template>
<div>
  <div class="newest-item clearfix" >
    <img :src="photo" alt="" class="newest-item__image">
    <div class="newest-item__info">
        <span class="newest-item__date short-text-block">{{parseTime}}</span>
        <p class="newest-item__text">{{name}}</p>
    </div>
     <Button @handleronClick='handleronClick(id)' />

    <span class="newest-item__view ">
         <i class="fas fa-eye"></i>
        {{views}}
    </span>
  </div>
  </div>
</template>

<script>
import Button from "../../button";
import { parseTimeStamp } from "../../../utils";
export default {
    name: "NewestArticles",
    components: {
        Button
    },

    props: {
        create: {
            type: String
        },
        name: {
            type: String
        },
        id: {
            type: String,
            default: ""
        },
        photo: {
            type: String
        },
        views: {
            type: Number
        }
    },
    data() {
        return {
            articles: []
        };
    },
    methods: {
        handleronClick(id, e) {
            this.$router.push(`article/${id}`);
        }
    },
    computed: {
        parseTime() {
            return parseTimeStamp(+this.create);
        }
    }
};
</script>

<style>
.newest-item {
    background: white;
    padding: 15px;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.28);
    position: relative;
}
.newest-item .newest-item__info {
    position: absolute;
    bottom: 50px;
    width: 95%;
    padding: 5%;
}
.newest-item .newest-item__image {
    width: 100%;
    vertical-align: 0;
}
.newest-item .newest-item__view {
    float: right;
}
.newest-item .newest-item__text {
    font-weight: 400;
    background-color: rgba(255, 255, 255, 0.596);
    display: inline;
}
</style>


