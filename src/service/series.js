import connection from './connection';

class SeriesService {
    getSeries(params) {
      return connection.$axios({
        url: '/series',
        method: 'GET',
        params: params
      })
    }

    getSerieById(serieId) {
      return connection.$axios({
        url: `/series/${serieId}`,
        method: 'GET'
      })
    }

    getSerieCharactersById(serieId) {
      return connection.$axios({
        url: `/series/${serieId}/characters`,
        method: 'GET'
      })
    }

    getSerieCreatorsById(serieId) {
      return connection.$axios({
        url: `/series/${serieId}/creators`,
        method: 'GET'
      })
    }

  }
  
  export default new SeriesService();