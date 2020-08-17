// const $ = require("jquery");
import "../scss/base.scss";
import "../scss/common.scss";
import { Header } from "../components/header/header";
import { Aside } from "../components/aside/aside";
import { Main } from "../components/main/main";
import { App } from "./App";
import tools from "../utils/tools";
import Axios from "axios";
import config from "../utils/config";
// import { Double } from "mongodb";
class Index extends App {
  constructor() {
    super();
    this.init();
    this.id = tools.getUrlQueryValue("p");
    this.detail = null;
  }
  async render() {
    await this.getDetail();
    new Header(this.$app).init();
    new Aside(this.$app,this.settingCache).init();
    new Main(this.$app,"detail",this.detail,this.hotArticle).init();
    // $("body").prepend(this.$app);
    tools.append(document.body,this.$app)
  }

  async getDetail() {
    console.log
    await Axios.get(config.API.baseUrl + "detail",{
      params: {
        p: this.id,
      },
    })
      .then((response) => {
        //console.log(response.data[0]);
        this.detail = response.data[0];
      })
      .catch((error) => {
        //console.log("error");
      });
  }
}

new Index();
