<template>
  <div class="characters">
    <ListView store="characters">
      <ListCardData
        v-for="character in characters"
        :key="character.id"
        :element="character"
        type="character"
        @click="goToCharacterDetails(character.id)"
      />
    </ListView>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ListCardData from "@/components/ListCardData.vue";
import ListView from "@/components/ListView.vue";

export default {
  name: "Characters",
  components: { ListCardData, ListView },
  setup() {
    const store = useStore();

    const router = useRouter();

    const characters = computed(() => {
      return store.state.characters.listData;
    });

    function goToCharacterDetails(characterId) {
      router.push(`/characters/${characterId}`);
    }

    return {
      characters,
      goToCharacterDetails,
    };
  },
};
</script>


