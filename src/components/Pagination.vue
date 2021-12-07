<template>
  <div class="pagination">
    <div class="pagination__pages">
      <!-- first -->
      <div
        class="pagination__pages__item"
        :class="{
          'pagination__pages__item--disabled': getCurrentPage === 1,
          'pagination__pages__item--enabled': getCurrentPage !== 1,
        }"
        @click="firstPage"
      >
        1
      </div>
      <!-- previous -->
      <div
        class="pagination__pages__item"
        :class="{
          'pagination__pages__item--disabled': getCurrentPage === 1,
          'pagination__pages__item--enabled': getCurrentPage !== 1,
        }"
        @click="previousPage"
      >
        <Icon
          class="
            pagination__pages__item__icon pagination__pages__item__icon--left
          "
          icon="left"
          :stroke="getCurrentPage === 1 ? '#E1DBDA' : 'white'"
        />
      </div>
      <!-- current -->
      <div class="pagination__pages__item pagination__pages__item--disabled">
        {{ getCurrentPage }}
      </div>
      <!-- next -->
      <div
        class="pagination__pages__item"
        :class="{
          'pagination__pages__item--disabled': isLastPage,
          'pagination__pages__item--enabled': !isLastPage,
        }"
        @click="nextPage"
      >
        <Icon
          class="
            pagination__pages__item__icon pagination__pages__item__icon--right
          "
          icon="right"
          :stroke="isLastPage ? '#E1DBDA' : 'white'"
        />
      </div>
      <!-- last -->
      <div
        class="pagination__pages__item"
        :class="{
          'pagination__pages__item--disabled': isLastPage,
          'pagination__pages__item--enabled': !isLastPage,
        }"
        @click="lastPage"
      >
        {{
          totalElements !== 0 && results !== 0
            ? Math.floor(totalElements / results + 1)
            : ""
        }}
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref, computed } from "vue";

export default {
  name: "Pagination",
  props: {
    totalElements: { type: Number, required: true },
    results: { type: Number, required: true },
  },
  setup(props, { emit }) {
    const currentPosition = ref(0);

    const getCurrentPage = computed(() => {
      return currentPosition.value === 0
        ? 1
        : currentPosition.value / props.results + 1;
    });

    const isLastPage = computed(() => {
      return getCurrentPage.value >= getLastPage.value;
    });

    const getLastPage = computed(() => {
      return props.totalElements !== 0 && props.results !== 0
        ? Math.floor(props.totalElements / props.results + 1)
        : "";
    });

    onBeforeMount(() => {
      getPage();
    });

    function firstPage() {
      if (getCurrentPage.value !== 1) {
        currentPosition.value = 0;
        getPage();
      }
    }

    function goFirstPageNoChecks() {
      currentPosition.value = 0;
      getPage();
    }

    function previousPage() {
      if (getCurrentPage.value !== 1) {
        currentPosition.value = currentPosition.value - props.results;
        getPage();
      }
    }

    function nextPage() {
      if (!isLastPage.value) {
        currentPosition.value = currentPosition.value + props.results;
        getPage();
      }
    }

    function lastPage() {
      if (!isLastPage.value) {
        currentPosition.value = props.results * (getLastPage.value - 1);
        getPage();
      }
    }

    function getPage() {
      emit("page", currentPosition.value);
    }

    return {
      currentPosition,
      getCurrentPage,
      isLastPage,
      getLastPage,
      goFirstPageNoChecks,
      firstPage,
      previousPage,
      nextPage,
      lastPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__pages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__item {
      height: 40px;
      width: 40px;
      margin: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1em;
      box-shadow: 5px 5px 18px -1px rgba(0, 0, 0, 77%);

      &__icon {
        &--left {
          margin-right: 3px;
        }

        &--right {
          margin-left: 3px;
        }
      }

      &--enabled {
        font-weight: bold;
        cursor: pointer;
        background-color: $red-background;
        color: $white;
      }

      &--disabled {
        color: $grey;
        background-color: $white;
      }
    }
  }
}
</style>