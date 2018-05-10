<template>
  <div class="form-group">
    <label :for="labelId">{{label}}</label>
    <textarea class="form-control" 
              :id="labelId" 
              :placeholder="placeholder" 
              :rows="rows"
              @input="$emit('handleInput', $event)" 
              :value="value"
              :name='name' 
           />
  </div>
</template>

<script>
export default {
    name: "TextArea",
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        rows: {
            type: Number,
            default: 3
        },
        labelId: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        }
    }
};
</script>

<style scoped>
/* @import "bootstrap/dist/css/bootstrap.min.css"; */
</style>