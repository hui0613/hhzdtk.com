import tpl from "./info.ejs";
import "./info.scss";

import tools from "../../../../../utils/tools";

class Info {
  constructor() {
    this.name = "info";
  }
  tpl(data) {
    return tools.tplReplace(tpl(), {
      title: data.title,
      author: data.author,
      date: data.date,
    });
  }
}

export { Info };
