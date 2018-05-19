<template>

</template>


<script>
export default {
    name: "HeadTitle",
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    created() {
        document.title = this.title;
    },
    watch: {
        title() {
            document.title = this.title;
        }
    }
};
</script>
