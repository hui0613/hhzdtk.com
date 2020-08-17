const $ = require("jquery");
import { WaterFall } from "../components/comp/waterfall";
import Axios from "axios";
import config from "../utils/config";

class Index {
  constructor() {
    this.$app = $("<div id=app>");
    this.name = "index";
    this.comCount = 0;

    this.init();
  }
  async init() {
    // await this.getDatas();
    this.render();
  }
  render() {
    new WaterFall(this.$app, this.getDatas).init();
    $("body").prepend(this.$app);
  }
  async getDatas() {
    await Axios.post(config.API.baseUrl + "comList", { page: 1 })
      .then((response) => {
        console.log(response.data);
        this.imgData = response.data;
        // this.imgData.push(...response.data);
        // this.comCount = 30;
      })
      .catch((err) => {});

    // await Axios.post(config.API.baseUrl + 'comCount',{ page: 1 }).then(response => {
    //     // //console.log(response.data)
    //     this.comCount = response.data
    // }).catch(err => {
    //     //console.log(err)
    // })
  }
}
new Index();
