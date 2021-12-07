<template>
  <div
    class="toolbar-item"
    @mouseenter="setColour('black')"
    @mouseleave="setColour('white')"
  >
    <Icon
      :icon="type"
      class="toolbar-item__icon"
      :stroke="colour"
      :strokeWidth="4"
    />
    <div
      class="toolbar-item__text"
      :class="{
        'toolbar-item__text--shown': showToolbar,
        'toolbar-item__text--hided': !showToolbar,
      }"
      :style="`color:${colour}`"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "ToolbarItem",
  props: {
    type: { type: String, required: true },
    showToolbar: { type: Boolean, required: true },
  },
  setup(props) {
    const colour = ref("white");

    function setColour(newColour) {
      colour.value = newColour;
    }

    const title = computed(() => {
      let section = "";
      switch (props.type) {
        case "characters":
          section = "Personajes";
          break;
        case "series":
          section = "Series";
          break;
        default:
          section = "Inicio";
          break;
      }

      return section;
    });

    return { colour, title, setColour };
  },
};
</script>

<style lang="scss" scoped>
.toolbar-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2em;
  margin-bottom: 20px;
  cursor: pointer;
  height: 40px;
  min-width: 35px;
  padding-left: 5px;
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
</style>


