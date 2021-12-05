import { createStore } from "vuex";
import { charactersModule } from "./charactersModule";
import {  seriesModule } from "./seriesModule"

const store = createStore({
  modules: {
    characters: charactersModule,
    series: seriesModule
  },
});

export default store;