<template>
  <div class="character-information">
      <img
        :src="getFormattedImg(character)"
        class="character-information__img"
      />
      <div
        class="character-information__text character-information__text--bold"
      >
        {{ character.name }}
      </div>
      <div class="character-information__text">
        {{ getDescription }}
      </div>
      <div class="character-information__block" v-if="showSeriesBlock">
        <div
          class="character-information__block__title"
          @click="toogleShowSeries"
        >
          Series <Icon :icon="showSeries ? 'up' : 'down'" />
        </div>
        <div
          class="character-information__block__items"
          :class="{
            'character-information__block__items--shown': showSeries,
            'character-information__block__items--hided': !showSeries,
          }"
        >
          <div
            v-for="serie in character.series.items"
            :key="serie.id"
            class="character-information__block__items__item"
          >
            {{ serie.name }}
          </div>
        </div>
      </div>
      <div class="character-information__block" v-if="showStoriesBlock">
        <div
          class="character-information__block__title"
          @click="toogleShowStories"
        >
          Historias <Icon :icon="showStories ? 'up' : 'down'" />
        </div>
        <div
          class="character-information__block__items"
          :class="{
            'character-information__block__items--shown': showStories,
            'character-information__block__items--hided': !showStories,
          }"
        >
          <div v-for="story in character.stories.items" :key="story.id">
            <div
              v-for="story in character.stories.items"
              :key="story.id"
              class="character-information__block__items__item"
            >
              {{ story.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import Icon from "@/components/Icon.vue";

export default defineComponent({
  name: "CharacterInformation",
  props: { character: { type: Object, required: true } },
  components: { Icon },
  setup(props) {
    const showSeries = ref(false);

    const showStories = ref(false);

    const showSeriesBlock = computed(() => {
      console.log(props.character)
      return (
        props.character.series &&
        props.character.series.items &&
        props.character.series.items.length > 0
      );
    });

    const showStoriesBlock = computed(() => {
      return (
        props.character.stories &&
        props.character.stories.items &&
        props.character.stories.items.length > 0
      );
    });

    const getDescription = computed(() => {
      return props.character.description && props.character.description.length > 0
        ? props.character.description
        : "Sin descripción";
    });

    function toogleShowStories() {
      showStories.value = !showStories.value;
    }

    function toogleShowSeries() {
      showSeries.value = !showSeries.value;
    }

    function getFormattedImg(item) {
      return item.thumbnail
        ? `${item.thumbnail.path}.${item.thumbnail.extension}`
        : "";
    }

    return {
      showSeries,
      showStories,
      showSeriesBlock,
      showStoriesBlock,
      getDescription,
      toogleShowStories,
      toogleShowSeries,
      getFormattedImg,
    };
  },
});
</script>

<style lang="scss" scoped>
.character-information {
  width: 400px;
  background-color: $white;
  box-shadow: 0px 0px 35px -9px $black-shadows;
  border-radius: 20px;
  min-height: 570px;

  &__text {
    padding: 10px;
    font-size: 1.2em;

    &--bold {
      font-weight: bold;
    }
  }

  &__img {
    height: 300px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;

    &__title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2em;
      font-weight: bold;
    }

    &__items {
      overflow-y: auto;
      font-size: 1.1em;

      &--hided {
        height: 0;
        opacity: 0;
        transition: height 1.5s, opacity 0.5s;
      }

      &--shown {
        height: 200px;
        opacity: 1;
        transition: height 0.5s, opacity 1.5s;
      }

      &__item {
        font-size: 1em;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>