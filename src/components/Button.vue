<template>
  <div class="button">
    <button class="button__content" type="button" v-on:click="clicked">
      Ver detalles
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  setup(props, {emit}) {
    function clicked() {
      emit("clicked");
    }

    return { clicked };
  },
};
</script>

<style lang="scss" scoped>
.button {
  &__content {
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    color: black;
    background-color: $white;
    width: 100px;
    &:hover {
      box-shadow: 0px 0px 22px -5px $white;
    }
  }
}
</style>