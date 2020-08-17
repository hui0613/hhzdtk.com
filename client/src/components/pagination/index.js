import tpl from "./index.ejs";
import "./index.scss";
import tools from "../../utils/tools";
import { PageItem } from "./item/item";

class Pagination {
  constructor() {
    this.name = "pagination";
    // this.tpl = tpl;
    this.pageList = new PageItem();
  }
  tpl(count) {
    // console.log(this.pageList.tpl(count));
    return tools.tplReplace(tpl(), {
      pageItem: this.pageList.tpl(count),
    });
  }
}

export { Pagination };
