<template>
    <li>
        <router-link :to="to" class="header-navigator__nav-list-link" @click.stop="$emit('test',textInner)" v-bind:class="{'header-navigator__nav-list-link_active': activeLink===textInner}" >{{textInner}}</router-link>
    </li>
</template>


<script>
export default {
    name: "NavigatorLink",
    props: ["textInner", "activeLink", "to"],
    data() {
        return {};
    }
};
</script>

<style>
.header-navigator.small .header-navigator__nav-list .header-navigator__nav-list-link {
    padding: 20px 15px 20px 0;
}
.header-navigator.small .header-navigator__logo a {
    font-size: 3.5rem;
}
.header-navigator__logo {
    font-size: 1.5rem;
    align-self: stretch;
    position: relative;
}
.header-navigator__logo a {
    position: absolute;
    transition: all 0.2s;
    background-color: #0075d0;
    font-size: 5.1rem;
    color: #fff;
    padding: 0 20px;
    font-weight: 400;
    font-family: "Cormorant", serif;
}
.header-navigator__nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.header-navigator__nav-list
    .header-navigator__nav-list-link.header-navigator__nav-list-link_active:after {
    opacity: 1;
}
.header-navigator__nav-list .header-navigator__nav-list-link {
    padding: 35px 15px 35px 0;
    text-transform: uppercase;
    font-size: 1.1rem;
    display: block;
    color: #fff;
    margin-right: 10px;
    letter-spacing: 1.5px;
    position: relative;
    transition: all 0.2s;
}
.header-navigator__nav-list .header-navigator__nav-list-link:after {
    content: "";
    display: block;
    height: 1px;
    background-color: #fff;
    position: absolute;
    width: calc(100% - 15px);
    bottom: 0;
    opacity: 0;
    transition: all 0.2s;
}
.header-navigator__nav-list .header-navigator__nav-list-link:hover:after {
    opacity: 1;
}
.header-navigator__nav-list .header-navigator__nav-list-link__karpaty {
    color: #ff0033;
}
.header-navigator__nav-list .header-navigator__nav-list-link__karpaty:after {
    background-color: #ff0033;
}

.header-navigator__search-input {
    border: none;
    height: 25px;
    width: 200px;
    border: 1px solid #7e7e7e;
    background-color: transparent;
    padding: 15px 5px;
}
.header-navigator__search-input:focus {
    outline: none;
    border: 1px solid #0099cc;
    color: #fff;
    font-weight: 400;
}
</style>


