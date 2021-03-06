import Axios from 'axios';
import config from '../utils/config';

function axios(method, url, data) {
  return Axios({
    method: method || 'get',
    url: config.API.baseUrl + url,
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}
export { axios };
