<template>
  <div class="list-card-data" @mouseover="showData" @mouseleave="hideData">
    <img class="list-card-data__image" :src="$functions.getImg(element)" />
    <div
      class="list-card-data__name list-card-data__name--hided"
      :id="getIdElement"
    >
      <div
        class="list-card-data__name__text list-card-data__name__text--hided"
        :id="getIdText"
      >
        {{ getTitle }}
      </div>
      <Button
        class="list-card-data__name__button list-card-data__name__button--hided"
        :id="getIdButton"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Button from "@/components/Button.vue";

export default {
  name: "ListCardData",
  components: { Button },
  props: { element: { type: Object, required: true }, type: { type: String, required: true } },
  setup(props) {

    const getTitle = computed(() => {
      return props.type === "character" ? props.element.name : props.element.title; 
    });

    const getIdElement = computed(() => {
      return `element${props.element.id}`;
    });

    const getIdText = computed(() => {
      return `text${props.element.id}`;
    });

    const getIdButton = computed(() => {
      return `button${props.element.id}`;
    });

    function showData() {
      const element = document.getElementById(getIdElement.value);

      if (element.classList.contains("list-card-data__name--shown")) {
        element.classList.remove("list-card-data__name--shown");
      }

      if (element.classList.contains("list-card-data__name--hided")) {
        element.classList.remove("list-card-data__name--hided");
      }

      element.classList.add("list-card-data__name--shown");

      const text = document.getElementById(getIdText.value);

      if (text.classList.contains("list-card-data__name__text--shown")) {
        text.classList.remove("list-card-data__name__text--shown");
      }

      if (text.classList.contains("list-card-data__name__text--hided")) {
        text.classList.remove("list-card-data__name__text--hided");
      }

      text.classList.add("list-card-data__name__text--shown");

      const button = document.getElementById(getIdButton.value);

      if (button.classList.contains("list-card-data__name__button--shown")) {
        button.classList.remove("list-card-data__name__button--shown");
      }

      if (button.classList.contains("list-card-data__name__button--hided")) {
        button.classList.remove("list-card-data__name__button--hided");
      }

      button.classList.add("list-card-data__name__button--shown");
    }

    function hideData() {
      const element = document.getElementById(getIdElement.value);

      if (element.classList.contains("list-card-data__name--hided")) {
        element.classList.remove("list-card-data__name--hided");
      }
      if (element.classList.contains("list-card-data__name--shown")) {
        element.classList.remove("list-card-data__name--shown");
      }

      element.classList.add("list-card-data__name--hided");

      const text = document.getElementById(getIdText.value);

      if (text.classList.contains("list-card-data__name__text--hided")) {
        text.classList.remove("list-card-data__name__text--hided");
      }

      if (text.classList.contains("list-card-data__name__text--shown")) {
        text.classList.remove("list-card-data__name__text--shown");
      }

      text.classList.add("list-card-data__name__text--hided");

      const button = document.getElementById(getIdButton.value);

      if (button.classList.contains("list-card-data__name__button--hided")) {
        button.classList.remove("list-card-data__name__button--hided");
      }

      if (button.classList.contains("list-card-data__name__button--shown")) {
        button.classList.remove("list-card-data__name__button--shown");
      }

      button.classList.add("list-card-data__name__button--hided");
    }

    return { getTitle, getIdElement, getIdText, getIdButton, showData, hideData };
  },
};
</script>

<style lang="scss" scoped>
.list-card-data {
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
    height: 100%;
    width: 100%;
  }
}
@media (max-width: 600px) {
  .list-card-data {
    position: relative;
    z-index: 10;
    height: 200px;
    width: 200px;
    background-color: $white;
  }
}
</style>