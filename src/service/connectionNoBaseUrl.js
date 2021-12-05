import axios from 'axios';
import md5 from 'js-md5';

// base url

// token config
axios.interceptors.request.use(
    (config) => {
    if(!Object.prototype.hasOwnProperty.call(config, 'params')){
       config['params'] = {};
     }
   // config.params['apikey'] = '840768363d0e8b9d476bc8d9de58c4d6';
   // const hash = md5(`${new Date().getTime()}d5c3100d08265c1f065aaf766e2c0f1ae7081837840768363d0e8b9d476bc8d9de58c4d6`);

   config.params['apikey'] = '473933b53b381161580b6b73c123d2a5';
   const hash = md5(`${new Date().getTime()}ca3a8758dc8a7590182356a205075e85ec092909`);
    config.params['hash'] = hash;
    return config
  }
);


export default {
  $axios: axios
};