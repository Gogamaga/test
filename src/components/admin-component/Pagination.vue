<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item " :class="{disabled: currentPage===1}">
                <a class="page-link" @click.prevent="handlePrevPage" tabindex="-1">Previous</a>
            </li>
            <li v-for="(page, index) in countPaginationItem" :key="index" class="page-item" :class="{active: page === currentPage}">
                <a class="page-link" @click.prevent="handleChangePage(page)">{{page}}</a>
            </li>
            <li class="page-item" :class="{disabled: countPaginationItem===currentPage}">
                <a class="page-link" @click.prevent="handleNextPage">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    data() {
        return {};
    },
    props: {
        count: {
            type: Number,
            default: 1
        },
        countInPage: {
            type: Number,
            default: 10
        }
    },
    methods: {
        handleChangePage(page) {
            this.$router.push(`/admin/dashboard/countries/${page}`);
        },
        handleNextPage() {
            const currentPage = +this.$route.params.page;
            this.$router.push(`/admin/dashboard/countries/${currentPage + 1}`);
        },
        handlePrevPage() {
            const currentPage = +this.$route.params.page;
            this.$router.push(`/admin/dashboard/countries/${currentPage - 1}`);
        }
    },
    computed: {
        currentPage() {
            return +this.$route.params.page;
        },
        countPaginationItem() {
            return Math.ceil(this.count / this.countInPage);
        }
    }
};
</script>

<style>

</style>

