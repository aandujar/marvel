<template>
  <div class="serie">
    <SerieInformation class="serie__block" :serie="serie" />
    <SerieCharactersAndCreators
      class="serie__block"
      :data="charactersAndCreators"
    />
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, inject, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SerieInformation from "@/components/SerieInformation.vue";
import SerieCharactersAndCreators from "@/components/SerieCharactersAndCreators.vue";

export default {
  name: "Serie",
  components: { SerieInformation, SerieCharactersAndCreators },
  setup() {
    const store = useStore();

    const emitter = inject("emitter");

    const route = useRouter();

    const serie = computed(() => {
      return store.state.series.serieSelected;
    });

    const charactersAndCreators = computed(() => {
      return {
        characters: store.state.series.serieCharacters,
        creators: store.state.series.serieCreators,
      };
    });

    onBeforeUnmount(() => {
      store.commit("series/SET_SERIE_SELECTED", {});
      store.commit("series/SET_SERIE_CHARACTERS", []);
      store.commit("series/SET_SERIE_CREATORS", []);
    });

    onBeforeMount(() => {
      store.commit("series/SET_LOADING", true);
      const promises = [];
      const serieId = route.currentRoute.value.params.id;
      promises.push(store.dispatch("series/getSerieById", serieId));
      promises.push(store.dispatch("series/getSerieCharactersById", serieId));
      promises.push(store.dispatch("series/getSerieCreatorsById", serieId));
      Promise.all(promises)
        .catch((err) => {
          const message =
            err.response && err.response.data && err.response.data.message
              ? err.response.data.message
              : "Ha ocurrido un error";
          emitter.emit("notification", message);
        })
        .finally(() => store.commit("series/SET_LOADING", false));
    });

    return { serie, charactersAndCreators };
  },
};
</script>

<style lang="scss" scoped>
.serie {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  padding-bottom: 80px;
  overflow-y: auto;
  align-items: flex-start;

  &__block {
    margin: 20px;
  }
}

@media (max-width: 490px) {
  .serie {
    &__block {
      margin: 20px 0px 20px 0px;
    }
  }
}
</style>