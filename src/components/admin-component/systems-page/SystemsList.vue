<template>
  <div>
        <Button :label="'додати'" @handleClick="this.handleAddSystem" />
        <!-- <h3 v-if="request" >Loadind...</h3> -->
        <Table  >
            <Thead slot="thead" :fields="['Назва','Дата створення','','']" />
            <Tbody slot="tbody">
                <tr v-for="system in systems" :key="system._id" >
                    <td>{{system.name}}</td>
                    <td>{{system.create| parseTime }}</td>
                    <td><Button :label="'редагувати'" :btnStyle="'success'" @handleClick="editSystem(system._id)"/></td>
                    <td><Button :label="'видалити'" :btnStyle="'danger'" @handleClick="deleteSystem(system._id)" /></td>
                </tr>
            </Tbody>
        </Table>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { parseTimeStamp } from "@/utils";

import { GET_ALL_SYSTEMS_FOR_ADMIN, DELETE_SYSTEM } from "@/store/constants";

import Button from "@/components/admin-component/Button";
import Table from "@/components/admin-component/table/Table";
import Tbody from "@/components/admin-component/table/Tbody";
import Thead from "@/components/admin-component/table/Thead";
export default {
    name: "SystemsList",
    components: {
        Button,
        Table,
        Tbody,
        Thead
    },
    created() {
        this[GET_ALL_SYSTEMS_FOR_ADMIN]();
    },
    methods: {
        handleAddSystem() {
            this.$router.push("/admin/dashboard/systems/new");
        },
        editSystem(id) {
            this.$router.push(`/admin/dashboard/systems/edit/${id}`);
        },
        deleteSystem(id) {
            this[DELETE_SYSTEM](id);
        },
        ...mapActions([GET_ALL_SYSTEMS_FOR_ADMIN, DELETE_SYSTEM])
    },
    computed: {
        systems() {
            return this.$store.getters.allSystemsAdmin;
        }
    },
    filters: {
        parseTime(time) {
            return parseTimeStamp(+time);
        }
    }
};
</script>
