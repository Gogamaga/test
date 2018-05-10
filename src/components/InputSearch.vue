<template>
  <div class="input-search-container">
    <label v-if="label" :for="id" class="input-search__label">{{label}}</label>
    <input class="input-search"
           :type="type"
           :id="id" 
           @input="$emit('handleInput', $event)" 
           @keypress="$emit('handleKeyPress', $event)" 
           :value="value"
           :placeholder="placeholder"
           :class="className"
    >
  </div>
</template>

<script>
export default {
    name: "InputSearch",
    props: {
        type: {
            type: String,
            default: "text"
        },
        handleInput: {
            type: Function,
            default: function() {}
        },
        handleKeyPress: {
            type: Function,
            default: function() {}
        },
        value: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        className: {
            type: String,
            default: ""
        }
    }
};
</script>

<style>
.input-search-container {
    width: 100%;
    padding: 5px 10px;
}
.input-search {
    padding: 10px 10px;
    font-weight: 400;
    width: 100%;
    border: 0;
    border: 1px solid #7e7e7e;
    border-radius: 2px;
}
.input-search__label {
    display: block;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 1.2rem;
}
</style>
