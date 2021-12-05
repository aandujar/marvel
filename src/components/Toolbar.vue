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
      stroke="white"
      :strokeWidth="2"
    />
    <Icon
      v-show="!showToolbar"
      icon="arrowRight"
      v-on:click="show"
      class="toolbar__icon"
      height="40px"
      width="40px"
      stroke="white"
      :strokeWidth="2"
    />

    <div class="toolbar__content">
      <ToolbarItem type="home" :showToolbar="showToolbar" v-on:click="goTo('')" />  
      <ToolbarItem type="characters" :showToolbar="showToolbar" v-on:click="goTo('characters')" />  
      <ToolbarItem type="series" :showToolbar="showToolbar" v-on:click="goTo('series')" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Icon from "@/components/Icon.vue";
import ToolbarItem from "@/components/ToolbarItem.vue";
import { useRouter } from "vue-router";

export default {
  name: "Toolbar",
  components: { Icon, ToolbarItem },
  setup() {
    const router = useRouter();

    const showToolbar = ref(false);

    function hide() {
      showToolbar.value = false;
    }

    function show() {
      showToolbar.value = true;
    }

    function goTo(path) {
      router.push(`/${path}`);
    }

    return {
      showToolbar,
      hide,
      show,
      goTo
    };
  },
};
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
    width: 60px;
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
  }
}
</style>