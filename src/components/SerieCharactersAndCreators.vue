<template>
  <div class="serie-data">
    <!-- characters -->
    <div class="serie-data__block">
      <div class="serie-data__block__title" @click="toogleShowCharacters">
        Personajes
        <Icon v-show="showCharacters" icon="up" />
        <Icon v-show="!showCharacters" icon="down" />
      </div>
      <div
        class="serie-data__block__content"
        :class="{
          'serie-data__block__content--shown-data':
            showCharacters && areCharacters,
          'serie-data__block__content--shown-no-data':
            showCharacters && !areCharacters,
          'serie-data__block__content--hided': !showCharacters,
        }"
      >
        <div v-if="!areCharacters" class="serie-data__block__content__no-data">
          No hay personajes disponibles
        </div>
        <div
          class="serie-data__block__content__item"
          v-for="character in data.characters"
          :key="character.id"
        >
          <img
            class="serie-data__block__content__item__img"
            :src="$functions.getImg(character)"
            :alt="character.name"
          />
          {{ character.name }}
        </div>
      </div>
    </div>
    <!-- creators -->
    <div class="serie-data__block">
      <div class="serie-data__block__title" @click="toogleShowCreators">
        Creadores
        <Icon v-show="showCreators" icon="up" />
        <Icon v-show="!showCreators" icon="down" />
      </div>
      <div
        class="serie-data__block__content"
        :class="{
          'serie-data__block__content--shown-data': showCreators & areCreators,
          'serie-data__block__content--shown-no-data':
            showCreators & !areCreators,
          'serie-data__block__content--hided': !showCreators,
        }"
      >
        <div
          v-if="data.creators.length === 0"
          class="serie-data__block__content__no-data"
        >
          No hay creadores disponibles
        </div>
        <div
          class="serie-data__block__content__item"
          v-for="creator in data.creators"
          :key="creator.id"
        >
          <img
            class="serie-data__block__content__item__img"
            :src="$functions.getImg(creator)"
            :alt="creator.fullName"
            v-show="showCreators"
          />
          <div v-show="showCreators">{{ creator.fullName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "SerieCharactersAndCreators",
  props: { data: { type: Object, required: true } },
  setup(props) {
    const showCharacters = ref(false);

    const showCreators = ref(false);

    const areCharacters = computed(() => {
      return props.data.characters.length > 0;
    });

    const areCreators = computed(() => {
      return props.data.creators.length > 0;
    });

    function toogleShowCharacters() {
      showCharacters.value = !showCharacters.value;
    }

    function toogleShowCreators() {
      showCreators.value = !showCreators.value;
    }

    return {
      showCharacters,
      showCreators,
      areCharacters,
      areCreators,
      toogleShowCharacters,
      toogleShowCreators,
    };
  },
};
</script>

<style lang="scss" scoped>
.serie-data {
  min-height: 100px;
  width: 500px;
  background-color: $white;
  box-shadow: 0px 0px 35px -9px $black-shadows;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    margin-bottom: 20px;

    &__title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 1.2em;
      font-weight: bold;
      cursor: pointer;
      z-index: 50;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      width: 100%;
      padding-top: 10px;
      z-index: 30;
      overflow-y: auto;

      &--shown-data {
        height: 200px;
        opacity: 1;
        transition: height 1s, opacity 1.5s;
      }

      &--shown-no-data {
        height: 50px;
        opacity: 1;
        transition: height 1s, opacity 1.5s;
      }

      &--hided {
        height: 0px;
        opacity: 0;
        transition: height 1.5s, opacity 1s;
      }

      &__no-data {
        display: flex;
        justify-content: center;
        font-size: 1.2em;
      }

      &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        font-size: 1em;
        padding-top: 10px;
        padding-bottom: 10px;

        &__img {
          height: 40px;
          width: 40px;
          border-radius: 20px;
          margin-right: 10px;
          margin-left: 20%;
        }
      }
    }
  }
}

@media (max-width: 660px) {
  .serie-data {
    width: 450px;
  }
}

@media (max-width: 580px) {
  .serie-data {
    width: 380px;
  }
}

@media (max-width: 500px) {
  .serie-data {
    width: 330px;
  }
}

@media (max-width: 420px) {
  .serie-data {
    width: 220px;
  }
}

  @media (max-width: 330px) {
  .serie-data {
    width: 160px;
  }
  }

   @media (max-width: 290px) {
  .serie-data {
    width: 140px;
  }
}
</style>
