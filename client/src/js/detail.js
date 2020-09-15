// const $ = require("jquery");
import '../scss/base.scss';
import '../scss/common.scss';
import { Header } from '../components/header/header';
import { Aside } from '../components/aside/aside';
import { Main } from '../components/main/main';
import { App } from './App';
import tools from '../utils/tools';
import { DetailModel } from '../model/detail';
// import { Double } from "mongodb";
class Index extends App {
  constructor() {
    super();
    this.init();
    this.id = tools.getUrlQueryValue('p');
    this.detail = null;
  }
  async render() {
    await this.getDetail();
    new Header(this.$app).init();
    new Aside(this.$app, this.settingCache).init();
    new Main(this.$app, 'detail', this.detail, this.hotArticle).init();
    tools.append(document.body, this.$app);
  }

  async getDetail() {
    let detailModel = new DetailModel();
    this.detail = await detailModel.getDetail(this.id);
    console.log('de' + this.detail);
  }
}

new Index();
