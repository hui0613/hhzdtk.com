import { IndexMode } from '../model/index';

class App {
  constructor() {
    this.$app = document.createElement('div');
    this.$app.setAttribute('id', 'app');
    this.settingCache = null;
    this.curPage = 1;
    this.articlCache = null;
    this.pageCount = 0;
    this.hotArticle = null;

    this.indexMode = new IndexMode();
  }
  async init() {
    await this.getData();
    this.render();
  }

  async getData() {
    //  获取站点信息
    this.settingCache = await this.indexMode.getWebInfo();

    //获取最近文章
    this.hotArticle = await this.indexMode.getHostList();
  }
}

export { App };
