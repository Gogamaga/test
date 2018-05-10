<template>
  <div id="app">
      <router-view/>
    
  </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:200,400,700");
@import url("https://fonts.googleapis.com/css?family=Kurale");
@import url("https://fonts.googleapis.com/css?family=Cormorant:400,700&subset=cyrillic");

* {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-weight: 700;
}
h1,
h2,
h3,
h4 {
    font-family: "Kurale", serif;
}
a {
    color: #000;
    text-decoration: none !important;
}
ul {
    margin: 0 !important;
}

body {
    font-family: "Fira Sans", sans-serif;
    font-size: 16px;
    line-height: 1.12;
}
.container-ui {
    width: 100%;
    max-width: 1920px;
}
.index-page {
    display: flex;
}
</style>
