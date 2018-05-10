<template>
  <div className="container-fluid">
      <Button :label="'назад до списку'" @handleClick="backToList" />
      <div class="row">
        <div class="col-lg-5 col-md-5">
            <Input :label="'Назва'" 
                    :labelId="'name'" 
                    :name="'name'" 
                    :value="article.name"
                    @handleInput="handleInput"        
            />
            <text-area :label="'Текст статті'" 
                        :labelId="'discription'" 
                        :name="'discription'" 
                        :value="article.discription" 
                        :rows="7"
                        @handleInput="handleInput" 
            />
            <v-select :options="mountains" v-model="selected" />
            <Button v-if="isEdit" :label="'редагувати'" @handleClick="editArticle" />
            <Button v-else :label="'зберегти'" @handleClick="saveArticle" />
        </div>
        <div class="col-lg-7 col-md-7">
            <div class='row' v-for="photo in article.fotos" :key="photo.id">
                <div class="col-lg-10 col-md-10">
                    <InputWithDropDown @handleInput="handleInputPhotos(photo.id, $event)"
                                        @handleDelete="handleDeletePhoto(photo.id)" 
                                       :name="'src'"
                                       :value='photo.src' 
                    />
                    <Input :placeholder="'опис фото'" 
                            :value="photo.caption"
                            :name="'caption'"
                            @handleInput="handleInputPhotos(photo.id, $event)" 
                    />
                </div>
                <div class="col-lg-2 col-md-2 align-items-center" :style="'display:flex'">
                    <img v-if="photo.src" :src="photo.src" alt="..." class="img-thumbnail">
                </div>
            </div>
            <Button :label="'додати'" @handleClick="addPhoto" />
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import shortid from "shortid";
import vSelect from "vue-select";

import {
    SAVE_ARTICLE,
    GET_ONE_ARTICLE_FOR_ADMIN,
    GET_ALL_MOUNTAINS_FOR_ADMIN,
    EDIT_ARTICLE
} from "@/store/constants";
import Button from "@/components/admin-component/Button";
import Input from "@/components/admin-component/Input";
import TextArea from "@/components/admin-component/TextArea";
import InputWithDropDown from "@/components/admin-component/InputWithDropDown";
export default {
    name: "ArticleCreator",
    data() {
        return {
            article: {
                name: "",
                discription: "",
                fotos: [],
                mountain: {}
            },
            mountains: [],
            selected: null
        };
    },
    components: {
        Button,
        Input,
        TextArea,
        vSelect,
        InputWithDropDown
    },

    created() {
        /\edit/.test(this.$route.path) && this.GET_ONE_ARTICLE_FOR_ADMIN(this.$route.params.id);
        this.GET_ALL_MOUNTAINS_FOR_ADMIN();
    },

    methods: {
        ...mapActions([
            GET_ONE_ARTICLE_FOR_ADMIN,
            GET_ALL_MOUNTAINS_FOR_ADMIN,
            SAVE_ARTICLE,
            EDIT_ARTICLE
        ]),
        backToList() {
            this.$router.push("/admin/dashboard/articles");
        },
        handleInput(e) {
            const name = e.target.name;
            const value = e.target.value;
            this.article[name] = value;
        },
        handleInputPhotos(id, e) {
            const name = e.target.name;
            const value = e.target.value;
            this.article.fotos = this.article.fotos.map(photo => {
                if (photo.id === id) {
                    photo[name] = value;
                }
                return photo;
            });
        },
        addPhoto() {
            const id = shortid.generate();
            this.article.fotos.push({ id, src: "", caption: "" });
        },
        handleDeletePhoto(id) {
            this.article.fotos = this.article.fotos.filter(photo => {
                return photo.id !== id;
            });
        },
        saveArticle() {
            const { article } = this;
            for (let field in article) {
                if (article[field] === "mountain") {
                    for (let field in mountain) {
                        if (!article.mountain[field]) {
                            return;
                        }
                    }
                }
                if (!article[field]) {
                    return;
                }
            }
            this.SAVE_ARTICLE(this.article).then(id => {
                this.$router.push(`/admin/dashboard/articles/edit/${id}`);
            });
        },
        editArticle() {
            const { article: { _id }, article } = this;
            this.EDIT_ARTICLE({ id: _id, article });
        }
    },
    computed: {
        articleStore() {
            return this.$store.getters.articleAdmin;
        },
        mountainsStore() {
            return this.$store.getters.allMountainsForAdmin;
        },
        isEdit() {
            return /\edit/.test(this.$route.path) ? true : false;
        }
    },
    watch: {
        articleStore() {
            this.article = { ...this.articleStore };
            this.selected = this.articleStore.mountain;
        },
        mountainsStore() {
            this.mountains = this.mountainsStore.map(mountain => {
                return { name: mountain.name, label: mountain.name, id: mountain._id };
            });
        },
        selected() {
            this.article = { ...this.article, mountain: this.selected };
        },
        $route(nextProps, prevProps) {
            if (/\edit/.test(nextProps.path) && nextProps.params.id !== prevProps.params.id) {
                const { id } = nextProps.params;
                this[GET_ONE_ARTICLE_FOR_ADMIN](id);
            }
        }
    }
};
</script>

<style scoped >
/* @import "bootstrap/dist/css/bootstrap.min.css"; */
</style>