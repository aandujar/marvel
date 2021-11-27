<template>
  <div class="characters">
    <FilterCharacters @filter="setFilter" />
    <div class="characters__content">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
        @click="goToCharacterDetails(character.id)"
      />
    </div>
    <Pagination
      ref="pagination"
      :totalElements="totalElements"
      :results="Number(filter.results)"
      @page="setOffset"
    />
  </div>
</template>

<script>
import { defineComponent, computed, reactive, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import CharacterCard from "@/components/CharacterCard";
import Pagination from "@/components/Pagination";
import FilterCharacters from "@/components/FilterCharacters";

export default defineComponent({
  name: "Characters",
  components: { CharacterCard, Pagination, FilterCharacters },
  setup() {
    const store = useStore();

    const router = useRouter();

    const emitter = inject("emitter");

    const pagination = ref(null);

    const filter = reactive({ name: "", results: 20 });

    const offset = ref(0);

    const characters = computed(() => {
      return store.state.characters.characters;
    });

    const totalElements = computed(() => {
      return store.state.characters.totalElements;
    });

    function setOffset(offsetValue) {
      offset.value = offsetValue;
      getCharacters();
    }

    function setFilter(filterValue) {
      filter.name = filterValue.name;
      filter.results = filterValue.results;
      pagination.value.goFirstPageNoChecks();
    }

    function getCharacters() {
      const params = { offset: offset.value, limit: filter.results };
      if (filter.name.length > 0) {
        params["nameStartsWith"] = filter.name;
      }
      store.dispatch("characters/getCharacters", params).catch((err) => {
        const message =
          err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : "Ha ocurrido un error";
        emitter.emit("notification", message);
      });
    }

    function goToCharacterDetails(characterId) {
      router.push(`/characters/${characterId}`);
    }

    return {
      characters,
      totalElements,
      filter,
      pagination,
      setFilter,
      setOffset,
      getCharacters,
      goToCharacterDetails,
    };
  },
});
</script>

<style lang="scss" scoped>
.characters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 80px;
  padding-left: 35px;

  &__content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
  }
}
</style>
