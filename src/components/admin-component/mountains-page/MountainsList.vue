<template>
  <div>
        <Button :label="'додати'" @handleClick="this.handleAddSystem" />
        <!-- <h3 v-if="request" >Loadind...</h3> -->
        <Table  >
            <Thead slot="thead" :fields="['Назва','Система','Країна', 'Висота','Дата створення','','']" />
            <Tbody slot="tbody">
                <tr v-for="mountain in mountains" :key="mountain._id" >
                    <td>{{mountain.name}}</td>
                    <td>{{mountain.system}}</td>
                    <td>{{mountain.country}}</td>
                    <td>{{mountain.height}}</td>
                    <td>{{mountain.create| parseTime }}</td>
                    <td><Button :label="'редагувати'" :btnStyle="'success'" @handleClick="editMountain(mountain._id)"/></td>
                    <td><Button :label="'видалити'" :btnStyle="'danger'" @handleClick="deleteMountain(mountain._id)" /></td>
                </tr>
            </Tbody>
        </Table>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { parseTimeStamp } from "@/utils";
import { DELETE_MOUNTAIN, GET_ALL_MOUNTAINS_FOR_ADMIN } from "@/store/constants";

import Button from "@/components/admin-component/Button";
import Table from "@/components/admin-component/table/Table";
import Tbody from "@/components/admin-component/table/Tbody";
import Thead from "@/components/admin-component/table/Thead";
export default {
    name: "MountainsList",
    components: {
        Button,
        Table,
        Tbody,
        Thead
    },
    created() {
        this.GET_ALL_MOUNTAINS_FOR_ADMIN();
    },
    methods: {
        ...mapActions([GET_ALL_MOUNTAINS_FOR_ADMIN, DELETE_MOUNTAIN]),
        editMountain(id) {
            this.$router.push(`/admin/dashboard/mountains/edit/${id}`);
        },
        deleteMountain(id) {
            this.DELETE_MOUNTAIN(id);
        },
        handleAddSystem() {
            this.$router.push("/admin/dashboard/mountains/new");
        }
    },
    computed: {
        mountains() {
            return this.$store.getters.allMountainsForAdmin;
        }
    },
    filters: {
        parseTime(time) {
            return parseTimeStamp(+time);
        }
    }
};
</script>
