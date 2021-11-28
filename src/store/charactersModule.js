import charactersService from "@/service/characters.js";

export const charactersModule = ({
    namespaced: true,
  state: {
    characters: [],
    characterSelected: {},
    totalElements: 0,
    loading: false,
    comics: [],
    filters: null
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_CHARACTER_SELECTED(state, character) {
      state.characterSelected = character;
    },
    SET_CURRENT_POSITION(state, currentPosition) {
      state.currentPosition = currentPosition;
    },
    SET_TOTAL_ELEMENTS(state, totalElements) {
      state.totalElements = totalElements;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_COMICS(state, comics) {
      state.comics = comics;
    },
    SET_FILTERS(state, filters) {
      state.filters = Object.assign({}, filters);
    }
  },
  actions: {
    getCharacters({ commit }, params) {
      commit('SET_LOADING', true);
      return new Promise((resolve, reject) => {
        charactersService.getCharacters(params)
        .then((response) => {
          commit('SET_CHARACTERS', response.status === 200 ? response.data.data.results : []);
          commit('SET_TOTAL_ELEMENTS', response.status === 200 ? response.data.data.total : []);
          commit('SET_LOADING', false)
          resolve(response)
        })
        .catch((error) => {
          commit('SET_LOADING', false)
          reject(error)
        })
      })
    },
    getCharacterById({ commit }, characterId) {
      commit('SET_LOADING', true);
      return new Promise((resolve, reject) => {
        charactersService.getCharacterById(characterId)
        .then((response) => {
          commit('SET_CHARACTER_SELECTED', response.status === 200 ? response.data.data.results[0] : {});
          commit('SET_LOADING', false)
          resolve(response)
        })
        .catch((error) => {
          commit('SET_LOADING', false)
          reject(error)
        })
      })
    },
    getSpecialEndpoint({ commit }, endpoint) {
      commit('SET_LOADING', true);
      return new Promise((resolve, reject) => {
        charactersService.getSpecialEndpoint(endpoint)
        .then((response) => {
          commit('SET_COMICS', response.status === 200 ? response.data.data.results : []);
          commit('SET_LOADING', false)
          resolve(response)
        })
        .catch((error) => {
          commit('SET_LOADING', false)
          reject(error)
        })
      })
    }
  }
})
