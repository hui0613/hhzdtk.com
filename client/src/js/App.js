import Axios from "axios";
import config from "../utils/config";

class App {
  constructor() {
    this.$app = document.createElement('div');
    this.$app.setAttribute('id','app')
    this.settingCache = null;
    this.articlCache = null;
    this.pageCount = 0;
    this.hotArticle = null;
  }
  async init() {
    await this.getWebInfo();
    await this.getHostList();
    this.render();
  }

  async getWebInfo() {
    // 获取站点的基本信息  头像等
    await Axios.get(config.API.baseUrl + "webInfo",{})
      .then((response) => {
        this.settingCache = {
          web_avatar: response.data[0].web_avatar,
          web_host: response.data[0].web_host,
          web_motton: response.data[0].web_motton,
          web_name: response.data[0].web_name,
        };
      })
      .catch((error) => {
        this.settingCache = {
          web_avatar: null,
          web_host: null,
          web_motton: null,
          web_name: null,
        };
      });
  }
  async getHostList() {
    await Axios.get(config.API.baseUrl + "hotList",{})
      .then((response) => {
        // console.log(response);
        this.hotArticle = response.data;
      })
      .catch((error) => {
        this.hotArticle = null;
      });
  }
}

export { App };
