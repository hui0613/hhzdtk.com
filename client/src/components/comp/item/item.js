import tpl from "./item.ejs";
import "./item.scss";
import tools from "../../../utils/tools";

class Item {
  constructor() {
    this.name = "Item";
  }
  tpl(data) {
    let list = "";
    data.forEach((item) => {
      list += tools.tplReplace(tpl(), {
        src: item.src,
        href: item.href,
        name: item.name,
        desc: item.desc,
      });
    });
    return list;
  }
}

export { Item };
