<template>
    <div>
        <Button :label="'додати'" @handleClick="this.handleAddCountries" />
        <h3 v-if="request">Loadind...</h3>
        <Table v-else>
            <Thead slot="thead" :fields="['Назва','Дата створення','','']" />
            <Tbody slot="tbody">
                <tr v-for="country in countries" :key="country._id">
                    <td>{{country.name}}</td>
                    <td>{{country.create|parseTime }}</td>
                    <td>
                        <Button :label="'редагувати'" :btnStyle="'success'" @handleClick="editCountry(country._id)" />
                    </td>
                    <td>
                        <Button :label="'видалити'" :btnStyle="'danger'" @handleClick="deleteCountry(country._id)" />
                    </td>
                </tr>
            </Tbody>
        </Table>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <Pagination :count="count" :countInPage="limit.count" />
                <div class="col-lg-3">
                    <v-select :options="numberItemInPage" v-model="limit" :deselectVisible="false" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapActions } from "vuex";

import vSelect from "vue-select";

import { parseTimeStamp } from "@/utils";

import Table from "@/components/admin-component/table/Table";
import Thead from "@/components/admin-component/table/Thead";
import Tbody from "@/components/admin-component/table/Tbody";
import Button from "@/components/admin-component/Button";
import Pagination from "@/components/admin-component/Pagination";
import {
    GET_ALL_COUNTRIES_FOR_ADMIN,
    DELETE_COUNTRY,
    GET_COUNTRIES_COUNT,
    GET_COUNTRIES_FOR_PAGE
} from "@/store/constants";
export default {
    name: "CountriesList",
    components: {
        Table,
        Thead,
        Tbody,
        Button,
        Pagination,
        vSelect
    },
    data() {
        return {
            limit: { label: "5", count: 5 },
            numberItemInPage: [
                { label: "5", count: 5 },

                { label: "10", count: 10 },
                { label: "20", count: 20 }
            ]
        };
    },
    created() {
        const { page } = this.$route.params;
        const pageNumber = +page * this.limit.count - this.limit.count;
        this.GET_COUNTRIES_COUNT();
        this.GET_COUNTRIES_FOR_PAGE({ from: pageNumber, limit: this.limit.count });
    },

    methods: {
        ...mapActions([
            GET_ALL_COUNTRIES_FOR_ADMIN,
            DELETE_COUNTRY,
            GET_COUNTRIES_COUNT,
            GET_COUNTRIES_FOR_PAGE
        ]),
        handleAddCountries() {
            this.$router.push({ name: "Admin.Countries.New" });
        },
        editCountry(id) {
            this.$router.push({
                name: "Admin.Countries.Creator",
                params: {
                    id
                }
            });
        },
        deleteCountry(id) {
            this[DELETE_COUNTRY](id);
        }
    },
    computed: {
        countries() {
            return this.$store.getters.allCountriesAdmin;
        },
        request() {
            return this.$store.getters.requestAllCountries;
        },
        count() {
            return this.$store.getters.getCountriesCount;
        }
    },
    filters: {
        parseTime(time) {
            return parseTimeStamp(+time);
        }
    },
    watch: {
        $route() {
            const { page } = this.$route.params;
            const pageNumber = +page * this.limit.count - this.limit.count;
            this.GET_COUNTRIES_FOR_PAGE({ from: pageNumber, limit: this.limit.count });
        },
        limit() {
            const { page } = this.$route.params;
            const pageNumber = +page * this.limit.count - this.limit.count;
            this.GET_COUNTRIES_FOR_PAGE({ from: pageNumber, limit: this.limit.count });
        }
    }
};
</script>

<style>
.clear {
    display: none;
}
</style>

