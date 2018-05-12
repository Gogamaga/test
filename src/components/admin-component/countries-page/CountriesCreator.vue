<template>
    <div className="container-fluid">
        <Button :label="'назад до списку'" @handleClick="handleBackToList" />
        <div class="row justify-content-center align-items-center" :style="{'height': '80vh'}">
            <div className="col-lg-4 col-md-6 col-sm-8">
                <span v-if="!isValid" style="color:red">заповніть поле</span>
                <Input @handleInput="handleInput" name="name" :value="country.name" />
                <Button v-if="isEdit" :label="'редагуати'" @handleClick="handleEditCountry" />
                <Button v-else :label="'зберегти'" @handleClick="handleSaveCountry" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import mediaelement from "mediaelement/full";
import Input from "@/components/admin-component/Input";
import Button from "@/components/admin-component/Button";

import { SAVE_COUNTRY, GET_ONE_COUNTRY_FOR_ADMIN, EDIT_COUNTRY } from "@/store/constants";
export default {
    name: "CountriesCreator",
    components: {
        Input,
        Button
    },
    data() {
        return {
            country: {
                name: ""
            },
            isValid: true
        };
    },
    created() {
        if (/\edit/.test(this.$route.path)) {
            const { id } = this.route.params;
            this[GET_ONE_COUNTRY_FOR_ADMIN](id);
        }
    },
    methods: {
        handleSaveCountry() {
            if (!this.country.name) {
                this.isValid = false;
                return;
            }
            this.isValid = true;
            this.$store.dispatch(SAVE_COUNTRY, this.country).then(id => {
                this.$router.push({
                    name: "Admin.Countries.Edit",
                    params: {
                        id
                    }
                });
            });
        },
        handleEditCountry() {
            const { _id, name } = this.country;

            this[EDIT_COUNTRY]({ id: _id, country: { name } });
        },
        handleInput(e) {
            const { name, value } = e.target;
            this.country[name] = value;
        },
        handleBackToList() {
            this.$router.push({
                name: "Admin.Countries.List",
                params: { page: "1" }
            });
        },
        ...mapActions([GET_ONE_COUNTRY_FOR_ADMIN, EDIT_COUNTRY])
    },
    computed: {
        isEdit() {
            return /\edit/.test(this.$route.path) ? true : false;
        },
        route() {
            return this.$route;
        },
        countryFromStore() {
            return this.$store.getters.getOneCountryForAdmin;
        }
    },
    watch: {
        route(nextProps, prevProps) {
            if (/\edit/.test(nextProps.path) && nextProps.params.id !== prevProps.params.id) {
                const { id } = nextProps.params;
                this[GET_ONE_COUNTRY_FOR_ADMIN](id);
            }
        },
        countryFromStore(nextProps, prevProps) {
            this.country = Object.assign({}, nextProps);
        }
    }
};
</script>
<style>

</style>

