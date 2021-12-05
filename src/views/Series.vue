<template>
  <div class="series">
    <ListView store="series">
      <ListCardData
        v-for="serie in series"
        :key="serie.id"
        :element="serie"
        type="serie"
        @click="goToSeriesDetails(serie.id)"
      />
    </ListView>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ListCardData from "@/components/ListCardData";
import ListView from "@/components/ListView.vue";

export default {
  name: "Characters",
  components: { ListCardData, ListView },
  setup() {
    const store = useStore();

    const router = useRouter();

    const series = computed(() => {
      return store.state.series.listData;
    });

    function goToSeriesDetails(characterId) {
      router.push(`/series/${characterId}`);
    }

    return {
      series,
      goToSeriesDetails,
    };
  },
};
</script>


