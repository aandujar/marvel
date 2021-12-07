import seriesService from "@/service/series.js";
import { isNotEmpty, getFirstElementOfArray } from "@/globalFunctions/functions.js";

export const seriesModule = ({
  namespaced: true,
  state: {
    listData: [],
    serieSelected: {},
    serieCharacters: [],
    serieCreators: [],
    totalElements: 0,
    loading: false,
    comics: [],
    filters: null
  },
  mutations: {
    SET_LIST_DATA(state, listData) {
      state.listData = listData;
    },
    SET_SERIE_SELECTED(state, serieSelected) {
      state.serieSelected = serieSelected;
    },
    SET_SERIE_CHARACTERS(state, characters) {
      state.serieCharacters = characters;
    },
    SET_SERIE_CREATORS(state, creators) {
      state.serieCreators = creators;
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
    SET_FILTERS(state, filters) {
      state.filters = Object.assign({}, filters);
    }
  },
  actions: {
    getListData({ commit }, params) {
      commit('SET_LOADING', true);
      return new Promise((resolve, reject) => {
        seriesService.getSeries(params)
        .then((response) => {
          commit('SET_LIST_DATA', response.status === 200 && isNotEmpty(response.data) ? response.data.data.results : []);
          commit('SET_TOTAL_ELEMENTS', response.status === 200 && isNotEmpty(response.data) ? response.data.data.total : []);
          commit('SET_LOADING', false)
          resolve(response)
        })
        .catch((error) => {
          commit('SET_LOADING', false)
          reject(error)
        })
      })
    },
   getSerieById({ commit }, serieId) {
      return new Promise((resolve, reject) => {
        seriesService.getSerieById(serieId)
        .then((response) => {
          commit('SET_SERIE_SELECTED', response.status === 200 && isNotEmpty(response.data) ? getFirstElementOfArray(response.data.data.results) : {});
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
      })
    },
    getSerieCharactersById({ commit }, serieId) {
      return new Promise((resolve, reject) => {
        seriesService.getSerieCharactersById(serieId)
        .then((response) => {
          commit('SET_SERIE_CHARACTERS', response.status === 200 && isNotEmpty(response.data) ? response.data.data.results : []);
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
      })
    },
    getSerieCreatorsById({ commit }, serieId) {
      return new Promise((resolve, reject) => {
        seriesService.getSerieCreatorsById(serieId)
        .then((response) => {
          commit('SET_SERIE_CREATORS', response.status === 200 && isNotEmpty(response.data) ? response.data.data.results : []);
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
      })
    }
  }
})
