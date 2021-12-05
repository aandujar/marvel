<template>
  <div class="section">
    <img :src="require(`@/assets/${section}.jpg`)" class="section__image" />
    <div class="section__text">
      <h1>{{ getSection }}</h1>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Section",
  props: { section: { type: String, required: true } },
  setup(props) {

    const getSection = computed(() => {
      let title = "";
      switch(props.section) {
        case "characters":
          title = "Personajes";
          break;
        case "comics":
          title = "Cómics";
          break;
        case "series":
          title = "Series";
          break;
        default:
          break;
      }
      return title;
    });

    return { getSection }
  },
};
</script>

<style lang="scss" scoped>
.section {
  height: 300px;
  width: 300px;
  background-color: white;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 0px 24px 0px $black-shadows;
  }

  &__image {
    height: 130px;
    width: 150px;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 1em;
  }
}
</style>
