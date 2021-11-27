<template>
  <div
    class="toolbar"
    :class="{ 'toolbar--shown': showToolbar, 'toolbar--hided': !showToolbar }"
  >
    <Icon
      v-show="showToolbar"
      icon="arrowLeft"
      v-on:click="hide"
      class="toolbar__icon"
      height="40px"
      width="40px"
      :stroke="white"
      :strokeWidth="2"
    />
    <Icon
      v-show="!showToolbar"
      icon="arrowRight"
      v-on:click="show"
      class="toolbar__icon"
      height="40px"
      width="40px"
      :stroke="white"
      :strokeWidth="2"
    />

    <div class="toolbar__content">
      <div
        class="toolbar__content__item"
        @click="goStart"
        @mouseenter="setColorHome(black)"
        @mouseleave="setColorHome(white)"
      >
        <Icon
          icon="home"
          class="toolbar__content__item__icon"
          :stroke="colorHome"
          :strokeWidth="4"
        />
        <div
          class="toolbar__content__item__text"
          :class="{
            'toolbar__content__item__text--shown': showToolbar,
            'toolbar__content__item__text--hided': !showToolbar,
          }"
          :style="`color:${colorHome}`"
        >
          Inicio
        </div>
      </div>
      <div
        class="toolbar__content__item"
        @click="goCharacters"
        @mouseenter="setColorCharacters(black)"
        @mouseleave="setColorCharacters(white)"
      >
        <Icon
          icon="character"
          class="toolbar__content__item__icon"
          :stroke="colorCharacters"
          :strokeWidth="4"
        />
        <div
          class="toolbar__content__item__text"
          :class="{
            'toolbar__content__item__text--shown': showToolbar,
            'toolbar__content__item__text--hided': !showToolbar,
          }"
          :style="`color:${colorCharacters}`"
        >
          Personajes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Icon from "@/components/Icon.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Toolbar",
  components: { Icon },
  setup() {
    const router = useRouter();

    const white = "white";

    const black = "black";

    const showToolbar = ref(false);


    const colorHome = ref("white");

    const colorCharacters = ref("white");

    function setColorHome(color) {
      colorHome.value = color;
    }

    function setColorCharacters(color) {
      colorCharacters.value = color;
    }

    function hide() {
      showToolbar.value = false;
    }

    function show() {
      showToolbar.value = true;
    }

    function goStart() {
      router.push("/");
    }

    function goCharacters() {
      router.push("/characters");
    }

    return {
      showToolbar,
      hide,
      show,
      goStart,
      goCharacters,
      setColorHome,
      setColorCharacters,
      colorCharacters,
      colorHome,
      white,
      black,
    };
  },
});
</script>

<style lang="scss" scoped>
.toolbar {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  background-color: $red-background;
  z-index: 200;
  box-shadow: 0px 0px 35px -9px $black-shadows;
  display: flex;
  flex-direction: column;
  color: white;

  &--hided {
    width: 50px;
    transition: width 1s;
  }

  &--shown {
    width: 200px;
    transition: width 1s;
  }

  &__icon {
    cursor: pointer;
    margin-left: 5px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 10px;

    &__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.2em;
      margin-bottom: 20px;
      cursor: pointer;
      height: 40px;
      cursor: pointer;

      &:hover {
        background-color: white;
      }

      &__icon {
        margin-right: 10px;
        flex-shrink: 0;
        stroke: white;

        &:hover {
          stroke: #e53935;
        }
      }

      &__text {
        color: $white;
        &--hided {
          opacity: 0;
          transition: opacity 0.5s;
        }

        &--shown {
          opacity: 1;
          transition: opacity 2.5s;
        }
      }
    }
  }
}
</style>