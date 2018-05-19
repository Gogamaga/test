<template>
  <div class="form-group">
    <label v-if="label" :for="labelId">{{label}}</label>
    <input :type="type"
           class="form-control" 
           :id="labelId" 
           aria-describedby="emailHelp" 
           :placeholder="placeholder" 
           @input="$emit('handleInput', $event, id)" 
           :value="value"
           :name='name'
           :checked="checked" >
  </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        type: {
            type: String,
            default: "text"
        },
        label: {
            type: String,
            default: ""
        },
        labelId: {
            type: String
        },
        placeholder: {
            type: String,
            default: ""
        },
        value: {
            type: [String, Number],
            default: ""
        },
        checked: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        }
    }
};
</script>

<style scoped>
/* @import "bootstrap/dist/css/bootstrap.min.css"; */
</style>

