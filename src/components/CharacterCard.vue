<template>
  <div class="character-card" @mouseover="showData" @mouseleave="hideData">
    <img class="character-card__image" :src="getImg" />
    <div
      class="character-card__name character-card__name--hided"
      :id="getIdElement"
    >
      <div
        class="character-card__name__text character-card__name__text--hided"
        :id="getIdText"
      >
        {{ character.name }}
      </div>
      <Button
        class="character-card__name__button character-card__name__button--hided"
        :id="getIdButton"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "CharacterCard",
  components: { Button },
  props: { character: { type: Object, required: true } },
  setup(props) {
    const getImg = computed(() => {
      return `${props.character.thumbnail.path}.${props.character.thumbnail.extension}`;
    });

    const getIdElement = computed(() => {
      return `character${props.character.id}`;
    });

    const getIdText = computed(() => {
      return `text${props.character.id}`;
    });

    const getIdButton = computed(() => {
      return `button${props.character.id}`;
    });

    function showData() {
      const element = document.getElementById(getIdElement.value);

      if (element.classList.contains("character-card__name--shown")) {
        element.classList.remove("character-card__name--shown");
      }

      if (element.classList.contains("character-card__name--hided")) {
        element.classList.remove("character-card__name--hided");
      }

      element.classList.add("character-card__name--shown");

      const text = document.getElementById(getIdText.value);

      if (text.classList.contains("character-card__name__text--shown")) {
        text.classList.remove("character-card__name__text--shown");
      }

      if (text.classList.contains("character-card__name__text--hided")) {
        text.classList.remove("character-card__name__text--hided");
      }

      text.classList.add("character-card__name__text--shown");

      const button = document.getElementById(getIdButton.value);

      if (button.classList.contains("character-card__name__button--shown")) {
        button.classList.remove("character-card__name__button--shown");
      }

      if (button.classList.contains("character-card__name__button--hided")) {
        button.classList.remove("character-card__name__button--hided");
      }

      button.classList.add("character-card__name__button--shown");
    }

    function hideData() {
      const element = document.getElementById(getIdElement.value);

      if (element.classList.contains("character-card__name--hided")) {
        element.classList.remove("character-card__name--hided");
      }
      if (element.classList.contains("character-card__name--shown")) {
        element.classList.remove("character-card__name--shown");
      }

      element.classList.add("character-card__name--hided");

      const text = document.getElementById(getIdText.value);

      if (text.classList.contains("character-card__name__text--hided")) {
        text.classList.remove("character-card__name__text--hided");
      }

      if (text.classList.contains("character-card__name__text--shown")) {
        text.classList.remove("character-card__name__text--shown");
      }

      text.classList.add("character-card__name__text--hided");

      const button = document.getElementById(getIdButton.value);

      if (button.classList.contains("character-card__name__button--hided")) {
        button.classList.remove("character-card__name__button--hided");
      }

      if (button.classList.contains("character-card__name__button--shown")) {
        button.classList.remove("character-card__name__button--shown");
      }

      button.classList.add("character-card__name__button--hided");
    }

    return { getImg, getIdElement, getIdText, getIdButton, showData, hideData };
  },
});
</script>

<style lang="scss" scoped>
.character-card {
  position: relative;
  z-index: 10;
  height: 300px;
  width: 300px;
  margin: 20px;
  background-color: $white;

  &:hover {
    box-shadow: 0px 0px 17px 3px $black-shadows;
    transition: box-shadow 2s;
  }

  &__name {
    position: absolute;
    z-index: 20;
    top: 0;
    width: 100%;
    background-color: $red-background;
    opacity: 0.6;

    &--hided {
      height: 0px;
      transition: height 2s;
    }

    &--shown {
      height: 300px;
      transition: height 2s;
    }

    &__text {
      font-size: 20px;
      color: $white;
      padding-top: 20px;
      height: 50%;
      &--hided {
        opacity: 0;
        transition: opacity 1s;
      }

      &--shown {
        opacity: 1;
        transition: opacity 1s;
      }
    }

    &__button {
      padding-top: 20px;
      height: 50%;
      &--hided {
        opacity: 0;
        transition: opacity 1s;
      }

      &--shown {
        opacity: 1;
        transition: opacity 3.5s;
      }
    }
  }

  &__image {
    position: relative;
    z-index: 10;
    height: 300px;
    width: 300px;
  }
}
</style>