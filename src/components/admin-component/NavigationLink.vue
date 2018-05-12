<template>
    <li class="nav-item">
        <router-link :to='to' class="nav-link" :class="{active: isActive}" id="article-tab" data-toggle="tab" role="tab" aria-selected="true">{{label}}</router-link>
    </li>
</template>

<script>
export default {
    name: "NavigationLink",
    props: {
        label: {
            type: String
        },
        to: {
            type: Object,
            default() {
                return {};
            }
        },
        rootPath: {
            type: String,
            default: ""
        }
    },
    computed: {
        isActive() {
            const to = new RegExp(this.rootPath);
            return to.test(this.$route.path);
        }
    }
};
</script>

<style scoped>
/* @import "bootstrap/dist/css/bootstrap.min.css"; */
</style>