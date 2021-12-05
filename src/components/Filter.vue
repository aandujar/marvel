<template>
  <div
    class="filter"
    :class="{
      'filter--shown': showFilter,
      'filter--hided': !showFilter,
    }"
  >
    <div class="filter__button">
      <Icon
        class="filter__button__icon"
        v-show="showFilter"
        icon="up"
        v-on:click="toggleMenu"
      />
      <Icon
        class="filter__button__icon"
        v-show="!showFilter"
        icon="down"
        v-on:click="toggleMenu"
      />
    </div>
    <div
      class="filter__content"
      :class="{
        'filter__content--shown': showFilter,
        'filter__content--hided': !showFilter,
      }"
    >
      <Textfield
        class="filter__content__textfield"
        :type="type"
        @name="setName"
      />
      <Select
        class="filter__content__select"
        @changed="setResults"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Select from "@/components/Select.vue";
import Textfield from "@/components/Textfield.vue";
import Icon from "@/components/Icon.vue";

export default {
  name: "Filter",
  components: { Select, Textfield, Icon },
  props: { type: { type: String, required: true } },
  setup(props, { emit }) {
    const showFilter = ref(false);
    const name = ref("");
    const results = ref(20);

    function toggleMenu() {
      showFilter.value = !showFilter.value;
    }

    function setName(nameValue) {
      name.value = nameValue;
      sendFilter();
    }

    function setResults(resultsValue) {
      results.value = resultsValue;
      sendFilter();
    }

    function sendFilter() {
      const data = { name: name.value, results: results.value };
      emit("filter", data);
    }

    return { showFilter, name, results, toggleMenu, setName, setResults };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  width: 87%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

  &--shown {
    height: 150px;
    transition: height 1s;
  }

  @media (max-width: 1003px) {
    &--shown {
      height: 200px;
      transition: height 1s;
    }
  }

  &--hided {
    height: 30px;
    transition: height 1s;
  }

  &__button {
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: flex-end;

    &__icon {
      height: 30px;
      width: 30px;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: $grey-background;
        transition: background-color 2s ease-out;
      }

      &:not(:hover) {
        background-color: none;
        transition: background-color 2s ease-out;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    &--shown {
      opacity: 1;
      transition: opacity 1.5s ease-in;
    }

    @media (max-width: 1003px) {
      &--shown {
        opacity: 1;
        transition: opacity 4s;
      }
    }

    &--hided {
      opacity: 0;
      transition: opacity 0.5s;
    }

    &__textfield {
      width: 400px;
      margin: 10px;
    }

    @media (max-width: 600px) {
      &__textfield {
        width: 200px;
        margin: 10px;
      }
    }

    &__select {
      height: 23px;
      margin: 10px;
    }
  }
}

@media (max-width: 950px) {
  .filter {
    width: 70%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}

@media (max-width: 400px) {
  .filter {
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>