import tpl from "./search.ejs";
import "./search.scss";
import tools from "../../../utils/tools";

class Search {
  constructor() {
    this.name = "search";
    this.tpl = tpl;
    this.init();
  }
  init() {}
}

export { Search };
