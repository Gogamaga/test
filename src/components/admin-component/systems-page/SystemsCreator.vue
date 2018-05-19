<template>
    <wraper-for-created :handleBackToList="handleBackToList">
        <Input :name="'name'" @handleInput="handleInput" :value="system.name" />
        <Button v-if="!isEdit" :label="'зберегти'" @handleClick="handleSaveSystem" />
        <Button v-else :label="'редагувати'" @handleClick="handleEditSystem" />
    </wraper-for-created>
</template>

<script>
import { mapActions } from "vuex";

import { SAVE_SYSTEM, GET_ONE_SYSTEM_FOR_ADMIN, EDIT_SYSTEM } from "@/store/constants";

import WraperForCreated from "@/components/admin-component/WraperForCreated";
import Button from "@/components/admin-component/Button";
import Input from "@/components/admin-component/Input";
export default {
    name: "SystemsCreator",
    components: {
        WraperForCreated,
        Input,
        Button
    },
    data() {
        return {
            system: {
                name: ""
            }
        };
    },
    created() {
        if (/\edit/.test(this.$route.path)) {
            const { id } = this.$route.params;
            this[GET_ONE_SYSTEM_FOR_ADMIN](id);
        }
    },
    methods: {
        handleBackToList() {
            this.$router.push({
                name: "Admin.System.List"
            });
        },
        handleSaveSystem() {
            this.$store.dispatch(SAVE_SYSTEM, this.system).then(id => {
                this.$router.push({
                    name: "Admin.System.Edit",
                    params: {
                        id
                    }
                });
            });
        },
        handleEditSystem() {
            const { _id, name } = this.system;
            this[EDIT_SYSTEM]({ id: _id, system: { name } });
        },
        handleInput({ target }) {
            const { name, value } = target;
            this.system[name] = value;
        },
        ...mapActions([SAVE_SYSTEM, GET_ONE_SYSTEM_FOR_ADMIN, EDIT_SYSTEM])
    },
    computed: {
        isEdit() {
            return /\edit/.test(this.$route.path) ? true : false;
        },
        systemFromStore() {
            return this.$store.getters.getOneSystemForAdmin;
        }
    },
    watch: {
        systemFromStore(nextProps, prevProps) {
            this.system = Object.assign({}, nextProps);
        },
        $route(nextProps, prevProps) {
            if (/\edit/.test(nextProps.path) && nextProps.params.id !== prevProps.params.id) {
                const { id } = nextProps.params;
                this[GET_ONE_SYSTEM_FOR_ADMIN](id);
            }
        }
    }
};
</script>
