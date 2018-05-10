<template>
    <div>
        <Button :label="'додати'" @handleClick="handleAddNewArticle" />
        <Table>
            <Thead slot="thead" :fields="['Назва', 'Гора','Перегляди','Дата створення','','']" />
            <Tbody slot="tbody">
                <tr v-for="article in articles" :key="article._id" >
                    <td>{{article.name}}</td>
                    <td>{{article.mountain.name}}</td>
                    <td>{{article.views}}</td>
                    <td>{{article.create|parseTime }}</td>
                    <td><Button :label="'редагувати'" :btnStyle="'success'" @handleClick="editArticle(article._id)"/></td>
                    <td><Button :label="'видалити'" :btnStyle="'danger'" @handleClick="deleteArticle(article._id)" /></td>
                </tr>
            </Tbody>
        </Table>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { parseTimeStamp } from "../../../utils";

import { DELETE_ONE_ARTICLE, GET_ALL_ARTICLES_FOR_ADMIN } from "@/store/constants";
import Table from "../table/Table";
import Thead from "../table/Thead";
import Tbody from "../table/Tbody";
import Button from "../Button";
export default {
    name: "ArticleList",
    components: {
        Table,
        Thead,
        Tbody,
        Button
    },
    created() {
        this.GET_ALL_ARTICLES_FOR_ADMIN();
    },
    computed: {
        articles() {
            return this.$store.getters.allArticlesAdmin;
        }
    },

    methods: {
        ...mapActions([GET_ALL_ARTICLES_FOR_ADMIN, DELETE_ONE_ARTICLE]),
        editArticle(id) {
            this.$router.push(`/admin/dashboard/articles/edit/${id}`);
        },
        deleteArticle(id) {
            this.DELETE_ONE_ARTICLE(id);
        },
        handleAddNewArticle() {
            this.$router.push("/admin/dashboard/articles/new");
        }
    },
    filters: {
        parseTime(time) {
            return parseTimeStamp(+time);
        }
    }
};
</script>

<style scoped >
/* @import "bootstrap/dist/css/bootstrap.min.css"; */
</style>
