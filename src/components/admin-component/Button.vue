<template>
  <button type="button" :class="`btn btn-${btnStyle} btn-${btnSize}`" @click="$emit('handleClick', id)" >{{label}}</button>
</template>


<script>
export default {
    name: "Button",
    props: {
        btnStyle: {
            type: String,
            default: "primary"
        },
        btnSize: {
            type: String,
            default: "sm"
        },
        label: {
            type: String
        },
        id: {
            type: String
        }
    }
};
</script>
