<template>
  <div class="character">
    <CharacterInformation class="character__block" :character="character" />
    <CharacterComics class="character__block" :comics="comics" />
  </div>
</template>

<script>
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  inject,
  computed,
} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CharacterInformation from "@/components/CharacterInformation.vue";
import CharacterComics from "@/components/CharacterComics.vue";

export default defineComponent({
  name: "Character",
  components: { CharacterInformation, CharacterComics },
  setup() {
    const store = useStore();
    const emitter = inject("emitter");

    const route = useRouter();

    const character = computed(() => {
      return store.state.characters.characterSelected;
    });

    const comics = computed(() => {
      return store.state.characters.comics;
    });

    onBeforeMount(() => {
      store
        .dispatch(
          "characters/getCharacterById",
          route.currentRoute.value.params.id
        )
        .then(() => getComics())
        .catch((err) => {
          const message =
            err.response && err.response.data && err.response.data.message
              ? err.response.data.message
              : "Ha ocurrido un error";
          emitter.emit("notification", message);
        });
    });

    onBeforeUnmount(() => {
      store.commit("characters/SET_CHARACTER_SELECTED", {});
      store.commit("characters/SET_COMICS", []);
    });

    function getComics() {
      store
        .dispatch(
          "characters/getSpecialEndpoint",
          character.value.comics.collectionURI
        )
        .catch((err) => {
          const message =
            err.response && err.response.data && err.response.data.message
              ? err.response.data.message
              : "Ha ocurrido un error";
          emitter.emit("notification", message);
        });
    }

    return {
      character,
      comics,
    };
  },
});
</script>

<style lang="scss" scoped>
.character {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  padding-bottom: 80px;
  overflow-y: auto;

  &__block {
    margin: 20px;
  }
}
</style>
