import connection from './connection';
import connectionNoBaseUrl from './connectionNoBaseUrl';

class CharactersService {
    getCharacters(params) {
      return connection.$axios({
        url: '/characters',
        method: 'GET',
        params: params
      })
    }

    getCharacterById(characterId) {
      return connection.$axios({
        url: `/characters/${characterId}`,
        method: 'GET'
      })
    }

    getSpecialEndpoint(endpoint) {
      return connectionNoBaseUrl.$axios.get(endpoint);
    }
  }
  
  export default new CharactersService();