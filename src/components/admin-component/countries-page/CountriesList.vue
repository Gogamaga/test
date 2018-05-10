<template>
  <div>
        <Button :label="'додати'" @handleClick="this.handleAddCountries" />
        <h3 v-if="request" >Loadind...</h3>
        <Table v-else >
            <Thead slot="thead" :fields="['Назва','Дата створення','','']" />
            <Tbody slot="tbody">
                <tr v-for="country in countries" :key="country._id" >
                    <td>{{country.name}}</td>
                    <td>{{country.create|parseTime }}</td>
                    <td><Button :label="'редагувати'" :btnStyle="'success'" @handleClick="editCountry(country._id)"/></td>
                    <td><Button :label="'видалити'" :btnStyle="'danger'" @handleClick="deleteCountry(country._id)" /></td>
                </tr>
            </Tbody>
        </Table>
    </div>
</template>

<script>
import { mapActions } from "vuex";

import { parseTimeStamp } from "@/utils";

import Table from "@/components/admin-component/table/Table";
import Thead from "@/components/admin-component/table/Thead";
import Tbody from "@/components/admin-component/table/Tbody";
import Button from "@/components/admin-component/Button";
import { GET_ALL_COUNTRIES_FOR_ADMIN, DELETE_COUNTRY } from "@/store/constants";
export default {
    name: "CountriesList",
    components: {
        Table,
        Thead,
        Tbody,
        Button
    },
    created() {
        this.GET_ALL_COUNTRIES_FOR_ADMIN();
    },
    beforeRouteEnter(to, from, next) {
        next(vm => console.log(vm));
    },
    methods: {
        ...mapActions([GET_ALL_COUNTRIES_FOR_ADMIN, DELETE_COUNTRY]),
        handleAddCountries() {
            this.$router.push("/admin/dashboard/countries/new");
        },
        editCountry(id) {},
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
        }
    },
    filters: {
        parseTime(time) {
            return parseTimeStamp(+time);
        }
    }
};
</script>

