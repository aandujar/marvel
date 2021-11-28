<template>
  <div class="character-comics">
    <h1>Comics</h1>
    <div class="character-comics__carousel">
      <div class="character-comics__carousel__icon">
        <transition name="fade">
          <ButtonCarrousel
            icon="left"
            v-show="position > 1"
            @clicked="showNext"
          />
        </transition>
      </div>
      <div
        class="character-comics__carousel__container"
        v-if="position !== null && comics.length > 0"
      >
        <div v-for="(comic, index) in comics" :key="comic.id">
          <div
            class="character-comics__carousel__container__comic"
            v-show="isCurrentComic(index)"
            :id="`comic${Number(index) + 1}`"
          >
            <img
              class="character-comics__carousel__container__comic__img"
              :src="getFormattedImg(comic)"
            />
            <div
              class="
                character-comics__carousel__container__comic__text
                character-comics__carousel__container__comic__text--bold
              "
            >
              {{ comic.title }}
            </div>
            <div class="character-comics__carousel__container__comic__text">
              <Icon
                icon="comic"
                class="character-comics__carousel__container__comic__text__icon"
                height="25px"
                width="25px"
              />
              {{ comic.pageCount }}
            </div>
            <div class="character-comics__carousel__container__comic__text">
              <Icon
                icon="calendar"
                class="character-comics__carousel__container__comic__text__icon"
                height="25px"
                width="25px"
              />{{ getFormattedDate(comic.dates[0]) }}
            </div>
          </div>
        </div>
      </div>
      <div class="character-comics__carousel__icon">
        <transition name="fade">
          <ButtonCarrousel
            icon="right"
            v-show="position < comics.length"
            @clicked="showPrevious"
          />
        </transition>
      </div>
    </div>
    <div class="character-comics__position">
      <div
        v-for="(comic, index) in comics"
        :key="index"
        class="character-comics__position__item"
        :class="{
          'character-comics__position__item--selected': isCurrentComic(index),
          'character-comics__position__item--not-selected':
            !isCurrentComic(index),
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ButtonCarrousel from "@/components/ButtonCarrousel.vue";
import Icon from "@/components/Icon.vue";

export default defineComponent({
  name: "CharacterComics",
  components: { ButtonCarrousel, Icon },
  props: { comics: { type: Array, required: true } },
  setup() {
    const position = ref(1);

    function isCurrentComic(index) {
      return position.value !== null && Number(index) + 1 === position.value;
    }

    function getFormattedImg(item) {
      return item.thumbnail
        ? `${item.thumbnail.path}.${item.thumbnail.extension}`
        : "";
    }

    function getFormattedDate(date) {
      const splittedDate = date.date.split("T")[0].split("-");
      return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
    }

    function emptyClasses(currentImg) {
      if (
        currentImg.classList.contains(
          "character-comics__carousel__container__comic--hide-left"
        )
      ) {
        currentImg.classList.remove(
          "character-comics__carousel__container__comic--hide-left"
        );
      }
      if (
        currentImg.classList.contains(
          "character-comics__carousel__container__comic--hide-right"
        )
      ) {
        currentImg.classList.remove(
          "character-comics__carousel__container__comic--hide-right"
        );
      }
      if (
        currentImg.classList.contains(
          "character-comics__carousel__container__comic--show-left"
        )
      ) {
        currentImg.classList.remove(
          "character-comics__carousel__container__comic--show-left"
        );
      }
      if (
        currentImg.classList.contains(
          "character-comics__carousel__container__comic--show-right"
        )
      ) {
        currentImg.classList.remove(
          "character-comics__carousel__container__comic--show-right"
        );
      }
    }

    function showPrevious() {
      emptyClasses(document.getElementById(`comic${position.value}`));
      document
        .getElementById(`comic${position.value}`)
        .classList.add(
          "character-comics__carousel__container__comic--hide-left"
        );
      setTimeout(() => {
        position.value = Number(position.value) + 1;
        emptyClasses(document.getElementById(`comic${position.value}`));
        document
          .getElementById(`comic${position.value}`)
          .classList.add(
            "character-comics__carousel__container__comic--show-left"
          );
      }, 1000);
    }

    function showNext() {
      emptyClasses(document.getElementById(`comic${position.value}`));
      document
        .getElementById(`comic${position.value}`)
        .classList.add(
          "character-comics__carousel__container__comic--hide-right"
        );
      setTimeout(() => {
        position.value = Number(position.value) - 1;
        emptyClasses(document.getElementById(`comic${position.value}`));
        document
          .getElementById(`comic${position.value}`)
          .classList.add(
            "character-comics__carousel__container__comic--show-right"
          );
      }, 1000);
    }

    return {
      position,
      isCurrentComic,
      getFormattedImg,
      getFormattedDate,
      showPrevious,
      showNext,
    };
  },
});
</script>

<style lang="scss" scoped>
.character-comics {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  width: 620px;
  background-color: $white;
  box-shadow: 0px 0px 35px -9px $black-shadows;
  border-radius: 20px;

  &__info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__carousel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 360px;

    &__icon {
      z-index: 5;
      height: 80px;
      width: 80px;
      margin-left: 40px;
      margin-right: 40px;
    }

    &__container {
      height: 300px;
      width: 300px;
      z-index: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 60px;

      &__comic {
        background-color: white;
        height: 200px;
        width: 250px;
        z-index: 10;
        position: relative;

        &__text {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.2em;

          &--bold {
            font-weight: bold;
          }

          &__icon {
            margin-right: 10px;
          }
        }

        &__img {
          height: 100%;
          width: 100%;
        }

        @keyframes hideLeft {
          0% {
            opacity: 1;
            margin-left: 0;
          }

          50% {
            opacity: 0.5;
          }

          100% {
            opacity: 0;
            margin-left: -200px;
          }
        }

        @keyframes showLeft {
          0% {
            opacity: 0;
            margin-left: 200px;
          }

          50% {
            opacity: 0.5;
          }

          100% {
            opacity: 1;
            margin-left: 0;
          }
        }

        @keyframes hideRight {
          0% {
            opacity: 1;
            margin-left: 0;
          }

          50% {
            opacity: 0.5;
          }

          100% {
            opacity: 0;
            margin-left: 200px;
          }
        }

        @keyframes showRight {
          0% {
            opacity: 0;
            margin-left: -200px;
          }

          50% {
            opacity: 0.5;
          }

          100% {
            opacity: 1;
            margin-left: 0;
          }
        }

        &--hide-left {
          animation-name: hideLeft;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
        }

        &--show-left {
          animation-name: showLeft;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
        }

        &--hide-right {
          animation-name: hideRight;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
        }

        &--show-right {
          animation-name: showRight;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
        }
      }
    }
    @media (max-width: 900px) {
      &__container {
        height: 300px;
        width: 150px;

        &__comic {
          background-color: white;
          border: 1px solid $black-shadows;
          height: 300px;
          width: 150px;
          z-index: 10;
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }

  &__position {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;

    &__item {
      height: 30px;
      width: 30px;
      border-radius: 20px;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 10px;
      margin-bottom: 10px;

      &--selected {
        background-color: $red-background;
        border: 1px solid $red-background;
      }

      &--not-selected {
        border: 1px solid $black-shadows;
        background-color: $white;
      }
    }

    @media (max-width: 500px) {
      &__item {
        height: 15px;
        width: 15px;
        border-radius: 10px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }

  &__filter {
    margin-top: 50px;
    width: 500px;
  }

  @media (max-width: 500px) {
    &__filter {
      margin-top: 50px;
      width: 90%;
    }
  }
}

@media (max-width: 450px) {
  .character-comics {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    width: 270px;
    background-color: $white;
    box-shadow: 0px 0px 35px -9px $black-shadows;
    border-radius: 20px;

    &__carousel {
      &__icon {
        margin-left: 0px;
        margin-right: 0px;
      }

      &__container {
        &__comic {
          &__text {
            margin-top: 20px;
          }
        }
      }

      &__position {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 60x;
        margin-bottom: 15px;
      }
    }
  }
}
</style>