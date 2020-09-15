import { axios } from './Ajax';

class IndexMode {
  // 获取站点信息
  async getWebInfo() {
    let data = {};
    await axios('get', 'api/webInfo', {})
      .then((res) => {
        data = res.data[0];
      })
      .catch((err) => {
        throw new Error(err);
      });
    return data;
  }

  // 获取最近文章
  async getHostList() {
    let list = [];
    await axios('get', 'api/hotList', {})
      .then((res) => {
        list = res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
    return list;
  }

  async getArticlList(num) {
    let list = [];
    await axios('post', 'api/articleList', { page: num })
      .then((res) => {
        console.log(res);
        list = res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
    return list;
  }
}

export { IndexMode };
