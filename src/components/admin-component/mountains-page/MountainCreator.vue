<template>
    <wraper-for-created :handleBackToList="handleBackToList">
        <Input name="name" label="Назва" @handleInput="handleInput" :value="mountain.name" />
        <Input name="height" label="Висота" type="number" @handleInput="handleInput" :value="mountain.height" />
        <v-select :options="countries" v-model="selectedCountry" />
        <v-select :options="systems" v-model="selectedSystem" />
        <Input name="latitude" type="number" label="Широта" @handleInput="handleInput" :value="mountain.coordinates.latitude" />
        <Input name="longitude" type="number" label="Довгота" @handleInput="handleInput" :value="mountain.coordinates.longitude" />
        <Button v-if="isEdit" label="редагувати" @handleClick="editMountain" />
        <Button v-else label="зберегти" @handleClick='saveMountain' />
    </wraper-for-created>
</template>
<script>
import { mapActions } from "vuex";
import vSelect from "vue-select";

import WraperForCreated from "@/components/admin-component/WraperForCreated";
import Input from "@/components/admin-component/Input";
import Button from "@/components/admin-component/Button";

import {
    GET_COUNTRIES_AND_SYSTEM_FOR_CREATING_MOUNTAIN,
    SAVE_MOUNTAIN,
    GET_ONE_MOUNTAIN_FOR_ADMIN,
    EDIT_MOUNTAIN
} from "@/store/constants";
export default {
    name: "MountainCreator",
    components: {
        WraperForCreated,
        Input,
        Button,
        vSelect
    },
    data() {
        return {
            mountain: {
                name: "",
                height: 0,
                country: "",
                system: "",
                coordinates: {
                    latitude: 0,
                    longitude: 0
                }
            },
            selectedCountry: null,
            selectedSystem: null
        };
    },
    created() {
        /\edit/.test(this.$route.path) && this.GET_ONE_MOUNTAIN_FOR_ADMIN(this.$route.params.id);
        this.GET_COUNTRIES_AND_SYSTEM_FOR_CREATING_MOUNTAIN();
    },
    methods: {
        handleBackToList() {
            this.$router.push({
                name: "Admin.Mountains.List"
            });
        },
        handleInput({ target }) {
            const { name, value } = target;
            name === "latitude" || name === "longitude"
                ? (this.mountain.coordinates[name] = +value)
                : (this.mountain[name] = value);
        },
        saveMountain() {
            const { mountain } = this;
            for (let field in mountain) {
                if (mountain[field] === "coordinates") {
                    for (let fieldCoordinates in mountain.coordinates) {
                        if (!mountain.coordinates[fieldCoordinates]) {
                            return;
                        }
                    }
                }
                if (!mountain[field]) {
                    return;
                }
            }
            this.SAVE_MOUNTAIN(this.mountain).then(id =>
                this.$router.push({
                    name: "Admin.Mountains.Edit",
                    params: {
                        id
                    }
                })
            );
        },
        editMountain() {
            const { mountain: { _id }, mountain } = this;
            this.EDIT_MOUNTAIN({ id: _id, mountain });
        },
        ...mapActions([
            GET_COUNTRIES_AND_SYSTEM_FOR_CREATING_MOUNTAIN,
            SAVE_MOUNTAIN,
            GET_ONE_MOUNTAIN_FOR_ADMIN,
            EDIT_MOUNTAIN
        ])
    },
    computed: {
        countries() {
            return this.$store.getters.allCountriesAdmin.map(country => {
                return { name: country.name, label: country.name };
            });
        },
        systems() {
            return this.$store.getters.allSystemsAdmin.map(system => {
                return { name: system.name, label: system.name };
            });
        },
        isEdit() {
            return /\edit/.test(this.$route.path) ? true : false;
        },
        mountainFromStore() {
            return this.$store.getters.getOneMountainForAdmin;
        }
    },
    watch: {
        selectedCountry() {
            this.mountain = {
                ...this.mountain,
                country: this.selectedCountry ? this.selectedCountry.name : ""
            };
        },
        selectedSystem() {
            this.mountain = {
                ...this.mountain,
                system: this.selectedSystem ? this.selectedSystem.name : ""
            };
        },
        mountainFromStore(nextProps, prevState) {
            const { system, country } = nextProps;
            this.mountain = Object.assign({}, nextProps);
            this.selectedCountry = { name: country, label: country };
            this.selectedSystem = { name: system, label: system };
        },
        $route(nextProps, prevProps) {
            if (/\edit/.test(nextProps.path) && nextProps.params.id !== prevProps.params.id) {
                const { id } = nextProps.params;
                this[GET_ONE_MOUNTAIN_FOR_ADMIN](id);
            }
        }
    }
};
</script>
