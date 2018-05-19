<template>
  <thead class="thead-dark">
        <tr>
            <th scope="col" v-for="(field, index) in fields" :key="index" >{{field}}</th>
           
        </tr>
    </thead>
</template>
<script>
export default {
    name: "Thead",
    props: {
        fields: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style scoped >

</style>


