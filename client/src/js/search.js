import '../scss/base.scss';
import '../scss/common.scss';
import { Header } from '../components/header/header';
import { Aside } from '../components/aside/aside';
import { Main } from '../components/main/main';

import tools from '../utils/tools';
import { App } from './App';
class Search extends App {
  constructor() {
    super();
    this.init();
  }

  async render() {
    await this.getArticlList();
    await this.getCounts();

    new Header(this.$app).init();
    new Aside(this.$app, this.settingCache).init();

    new Main(
      this.$app,
      'index',
      this.articlCache,
      this.errData,
      this.pageCount,
      this.hotArticle
    ).init();
    tools.append(document.body, this.$app);
  }

  async getArticlList() {
    let page = tools.getUrlQueryValue('page') || 1;
    if (page != this.curPage || this.articlCache == null) {
      this.curPage = page;
      let res = await this.indexMode.getArticlList(page);
      this.articlCache = res.data;
      this.errData = res.err;
    }
  }

  async getCounts() {
    this.pageCount = await this.indexMode.getCounts();
    // console.log(this.pageCount);
  }
}

new Search();
