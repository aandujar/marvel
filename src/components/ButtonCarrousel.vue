<template>
  <div class="button-carrousel" v-on:click="clicked">
    <Icon :focused="true" :icon="icon" />
  </div>
</template>

<script>

export default {
  name: "ButtonCarrousel",
  props: { icon: { type: String, required: true } },
  setup(props, { emit }) {
    function clicked() {
      emit("clicked");
    }

    return { clicked }
  },
};
</script>

<style lang="scss" scoped>
.button-carrousel {
  height: 80px;
  width: 80px;
  background-color: $white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:hover {
    box-shadow: 0px 0px 11px 0px $black-shadows;
    cursor: pointer;
  }
}

@media (max-width: 450px) {
  .button-carrousel {
    height: 80px;
    width: 80px;
    background-color: $white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0px 0px 11px 0px $black-shadows;
  }
}
</style>