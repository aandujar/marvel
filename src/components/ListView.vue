<template>
  <div class="list-view">
    <Filter ref="filterComponent" :type="store" @filter="setFilter" />
    <div class="list-view__content">
      <slot></slot>
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
import {
  computed,
  reactive,
  ref,
  inject,
  onBeforeUnmount,
  onMounted,
} from "vue";
import { useStore } from "vuex";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";

export default {
  name: "ListView",
  components: { Filter, Pagination },
  props: { store: { type: String, required: true } },
  setup(props) {
    const store = useStore();

    const emitter = inject("emitter");

    const pagination = ref(null);

    const filterComponent = ref(null);

    const filter = reactive({ name: "", results: 20 });

    const offset = ref(0);

    const totalElements = computed(() => {
      return store.state[props.store].totalElements;
    });

    onBeforeUnmount(() => {
      const data = {
        filter: filter,
        offset: offset.value,
      };
      store.commit(`${props.store}/SET_FILTERS`, data);
    });

    onMounted(() => {
      if (store.state[props.store].filters !== null) {
        if (store.state[props.store].filters.offset !== null) {
          offset.value = store.state[props.store].filters.offset;
        }
        if (store.state[props.store].filters.name !== null) {
          filterComponent.value.name =
            store.state[props.store].filters.filter.name;
          filter.name = store.state[props.store].filters.filter.name;
        }
        if (store.state[props.store].filters.results !== null) {
          filterComponent.value.results =
            store.state[props.store].filters.filter.results;
          filter.results = store.state[props.store].filters.filter.results;
        }
      }

      setTimeout(
        () =>
          getData().then(() => {
            pagination.value.currentPosition = offset.value;
          }),
        1000
      );
    });

    function setOffset(offsetValue) {
      offset.value = offsetValue;
      getData();
    }

    function setFilter(filterValue) {
      filter.name = filterValue.name;
      filter.results = filterValue.results;
      pagination.value.goFirstPageNoChecks();
    }

    function getData() {
      return new Promise((resolve, reject) => {
        const params = { offset: offset.value, limit: filter.results };
        if (filter.name.length > 0) {
          const attribute = props.store === 'characters' ? 'nameStartsWith' : 'titleStartsWith';
          params[attribute] = filter.name;
        }
        store
          .dispatch(`${props.store}/getListData`, params)
          .then(() => resolve())
          .catch((err) => {
            const message =
              err.response && err.response.data && err.response.data.message
                ? err.response.data.message
                : "Ha ocurrido un error";
            emitter.emit("notification", message);
            reject();
          });
      });
    }

    return {
      totalElements,
      filter,
      pagination,
      filterComponent,
      setFilter,
      setOffset,
      getData,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-view {
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