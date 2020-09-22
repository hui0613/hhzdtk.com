import { axios } from './Ajax';

class SearchMode {
  async search() {
    await axios('get', 'api/search')
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }
}

export { SearchMode };
