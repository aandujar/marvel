<template>
  <div id="app">
    <Loader v-if="showLoader" />
    <Toolbar v-show="isInContent" />
    <Footer v-show="isInContent" />
    <router-view
      class="content"
      :class="{
        'content--padding': isInContent,
        'content--no-padding': !isInContent,
      }"
    />
    <Notification />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Notification from "@/components/Notification";
import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: { Loader, Notification, Toolbar, Footer },
  setup() {
    const store = useStore();

    const route = useRouter();

    const showLoader = computed(() => {
      const charactersLoading = store.state.characters.loading;
      const seriesLoading = store.state.series.loading;
      return charactersLoading || seriesLoading;
    });

    const isInContent = computed(() => {
      return route.currentRoute.value.path !== "/";
    });

    return { showLoader, isInContent };
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  background-color: $grey-background;
  overflow-y: auto;
  width: 100vw;

  &__content {
    
    &--no-padding {
      padding-left: 0px;
    }

    &--padding {
      padding-left: 60px;
      padding-bottom: 80px;
      width: calc(100vw - 70px);
    }
  }
}
</style>
