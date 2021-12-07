<template>
  <div class="textfield">
    <div class="textfield__label">
      <transition name="fade">
        <label
          v-show="showLabel"
          :id="getLabelId"
          for="textfield"
          class="textfield__label__text"
          >{{ getType }}</label
        >
      </transition>
    </div>
    <div class="textfield__input">
      <input
        class="textfield__input__field"
        type="text"
        id="textfield"
        :placeholder="getType"
        v-model="value"
        v-on:blur="removeFocusLabel"
        v-on:focus="focusLabel"
        @keyup.enter="sendValue"
      />
      <Icon icon="search" height="24px" width="24px" class="textfield__input__icon" v-on:click="sendValue" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "Textfield",
  props: { type: { type: String, required: true } },
  setup(props, { emit }) {
    const value = ref("");

    const getLabelId = computed(() => {
      return "labelTextfield";
    });

    const showLabel = computed(() => {
      return value.value.length > 0;
    });

    const getType = computed(() => {
      return props.type === 'characters' ? 'Personaje' : 'Serie';
    });

    function focusLabel() {
      document
        .getElementById(getLabelId.value)
        .classList.remove("textfield__label__text--not-focused");
      document
        .getElementById(getLabelId.value)
        .classList.add("textfield__label__text--focused");
    }

    function removeFocusLabel() {
      document
        .getElementById(getLabelId.value)
        .classList.remove("textfield__label__text--focused");
      document
        .getElementById(getLabelId.value)
        .classList.add("textfield__label__text--not-focused");
    }

    function sendValue() {
      emit("name", value.value);
    }

    return {
      value,
      getLabelId,
      showLabel,
      getType,
      focusLabel,
      removeFocusLabel,
      sendValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.textfield {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 70px;

  &__label {
    height: 26px;
    width: 50%;
    font-size: 1.2em;

    &__text {
      width: 100%;

      &--not-focused {
        color: $black;
      }

      &--focused {
        color: $red-background;
      }
    }
  }
  &__input {
    display: flex;
    flex-direction: row;
    height: 28px;
    width: 100%;
    
    &__field {
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid $black;
      outline: 0;
      width: 100%;

      &:focus {
        outline: 0;
        border-bottom: 1px solid $red-background;
      }
    }

    &__icon {
        cursor: pointer;
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
</style>