<template>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary dropdown-toggle" 
            type="button" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
            @click="handleToggleMenu">Dropdown</button>
    <div class="dropdown-menu" :class="{'show':menuVisibility}">
      <a class="dropdown-item" href="#" @click.prevent="$emit('handleDelete', idDelete)" >видалити</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" 
         class="form-control" 
         aria-label="Text input with dropdown button"
         :name="name"
         :value="value"
         @input="$emit('handleInput', $event, id)"
         >
</div>
</template>

<script>
import Input from "./Input";
export default {
    name: "InputWithDropDown",
    components: {
        Input
    },
    props: {
        value: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        },
        idDelete: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            menuVisibility: false
        };
    },
    methods: {
        handleToggleMenu() {
            this.menuVisibility = !this.menuVisibility;
        }
    }
};
</script>
