import { createStore } from "vuex";
import { charactersModule } from "./charactersModule"

const store = createStore({
  modules: {
    characters: charactersModule
  },
});

export default store;