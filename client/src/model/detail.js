import { axios } from './Ajax';

class DetailModel {
  async getDetail(id) {
    let data = {};
    await axios('get', `api/detail?p=${id}`, {})
      .then((res) => {
        data = res.data[0];
      })
      .catch((err) => {
        throw new Error(err);
      });
    return data;
  }
}

export { DetailModel };
