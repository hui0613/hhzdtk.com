
import "../scss/base.scss";
import "../scss/common.scss";
import { Header } from "../components/header/header";
import { Aside } from "../components/aside/aside";
import { Main } from "../components/main/main";

import Axios from "axios";
import config from "../utils/config";
import tools from "../utils/tools";
import { App } from "./App";
class Index extends App {
  constructor() {
    super();
    this.init();
  }

  async render() {
    await this.getArticlList();
    await this.getCounts();

    new Header(this.$app).init();
    new Aside(this.$app,this.settingCache).init();

    new Main(
      this.$app,
      "index",
      this.articlCache,
      this.pageCount,
      this.hotArticle
    ).init();
    // $("body").prepend(this.$app);
    // console.log(this.$app)
    tools.append(document.body,this.$app)
  }

  async getArticlList() {
    let page = tools.getUrlQueryValue("page") || 1;
    await Axios.post(config.API.baseUrl + "articleList",{
      page: page,
    })
      .then((response) => {
        // //console.log(response.data);
        this.articlCache = response.data;
      })
      .catch((error) => {
        this.articlCache = null;
      });
  }


  async getCounts() {
    await Axios.get(config.API.baseUrl + "getCounts",{})
      .then((response) => {
        this.pageCount = response.data;
      })
      .catch((err) => {
        this.pageCount = null;
      });
  }
}

new Index();
