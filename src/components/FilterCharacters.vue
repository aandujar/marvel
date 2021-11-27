<template>
  <div
    class="filter-characters"
    :class="{
      'filter-characters--shown': showFilter,
      'filter-characters--hided': !showFilter,
    }"
  >
    <div class="filter-characters__button">
      <Icon
        class="filter-characters__button__icon"
        v-show="showFilter"
        icon="up"
        v-on:click="toggleMenu"
      />
      <Icon
        class="filter-characters__button__icon"
        v-show="!showFilter"
        icon="down"
        v-on:click="toggleMenu"
      />
    </div>
    <div
      class="filter-characters__content"
      :class="{
        'filter-characters__content--shown': showFilter,
        'filter-characters__content--hided': !showFilter,
      }"
    >
      <Textfield
        class="filter-characters__content__textfield"
        @name="setName"
      />
      <Select
        class="filter-characters__content__select"
        @changed="setResults"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Select from "@/components/Select.vue";
import Textfield from "@/components/Textfield.vue";
import Icon from "@/components/Icon.vue";

export default defineComponent({
  name: "FilterCharacters",
  components: { Select, Textfield, Icon },
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

    return { showFilter, toggleMenu, setName, setResults };
  },
});
</script>

<style lang="scss" scoped>
.filter-characters {
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
  .filter-characters {
    width: 70%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}

@media (max-width: 400px) {
  .filter-characters {
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>