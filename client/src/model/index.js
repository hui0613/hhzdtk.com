import { axios } from './Ajax';

class IndexMode {
  // 获取站点信息
  async getWebInfo() {
    let data = {};
    await axios('get', 'api/webInfo', {})
      .then((res) => {
        data.data = res.data[0];
        // console.log(res);
      })
      .catch((err) => {
        let status = err.response.status;
        if (status === 404) {
          data.err = '<h2>404<h2/>页面不见啦！！！';
        } else if (status === 500) {
          data.err = '<h2>500<h2/>出错啦！！！';
        }
        throw new Error(err);
      });
    // console.log(res);
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
    let list = {};
    await axios('post', 'api/articleList', { page: num })
      .then((res) => {
        // console.log(res);
        list.data = res.data;
      })
      .catch((err) => {
        let status = err.response.status;
        if (status === 404) {
          list.err = '<h2>404<h2/>页面不见啦！！！';
        } else if (status === 500) {
          list.err = '<h2>500<h2/>出错啦！！！';
        }
        // throw new Error(err);
      });
    return list;
  }

  async getCounts() {
    let count = 0;
    await axios('get', 'api/getCounts', {})
      .then((res) => {
        count = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return count;
  }
}

export { IndexMode };
