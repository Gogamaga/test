<template>
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
export default {
    name: "UserWrap",
    components: {
        Header,
        Footer,
        Main
    }
};
</script>
