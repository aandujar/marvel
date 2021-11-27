<template>
  <div class="select">
    <label for="select" class="select__label">Número de resultados</label>
    <select
      name="select"
      id="select"
      class="select__item"
      v-on:change="changed"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20" selected>20</option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Select",
  setup(props, { emit }) {
    function changed() {
      emit("changed", document.getElementById("select").value);
    }

    return { changed };
  },
});
</script>


<style lang="scss">
.select {
  width: 400px;
  text-align: left;

  &__item {
    border-top: none;
    border-left: none;
    border-bottom: 1 px solid $black;
    border-right: none;
    margin-top: 20px;
    appearance: none;
    width: 75px;
    margin-left: 10px;
    margin-right: 10px;
    
    &:focus {
      outline: 0;
      border-bottom: 1px solid $blue-primary;
    }

    &__label {
      font-size: 1.2em;
    }
  }
}
</style>