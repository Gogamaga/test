<template>
    <div className="container-fluid">
        <div class="row justify-content-md-center align-items-center" :style="{ height: '100vh' }">
            <div class="col-md-6 col-lg-4 p-5 bg-light " :style="{ boxShadow: '0px 0px 14px 0px rgba(181,181,181,1)' }">
                <h2>Вхід</h2>
                <Input :label="'Логін'" :labelId="'login'" :placeholder="'введіть логін'" :name="'name'" @handleInput="handleInput" :value="name" />
                <Input :label="'Пароль'" :labelId="'login'" :placeholder="'введіть пароль'" :name="'password'" @handleInput="handleInput" :value="password" />
                <Button @handleClick='handleClick' :label="'Увійти'" />
            </div>
        </div>
    </div>
</template>

<script>
import { users } from "@/api/admin";
import Input from "@/components/admin-component/Input";
import Button from "@/components/admin-component/Button";
export default {
    name: "LoginPage",
    components: {
        Input,
        Button
    },
    created() {
        // localStorage.setItem("user", JSON.stringify({ name: "oleh", password: 1111 }));
    },
    data() {
        return {
            name: "",
            password: ""
        };
    },
    methods: {
        handleInput(e) {
            const name = e.target.name;
            this[name] = e.target.value;
        },
        handleClick() {
            const user = { name: this.name, password: this.password };
            const localStorageUser = JSON.parse(localStorage.getItem("user"));
            if (
                user.name === localStorageUser.name &&
                +user.password === +localStorageUser.password
            ) {
                this.$route.meta.islogin = true;
                document.cookie = "userName=Vasya";
            } else {
                this.$route.meta.islogin = false;
            }
            this.$router.push("/admin/dashboard/articles");
        }
    }
};
</script>
<style scoped>
/* @import "bootstrap/dist/css/bootstrap.min.css"; */
</style>


