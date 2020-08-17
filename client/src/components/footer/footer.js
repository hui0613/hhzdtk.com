import tpl from "./footer.ejs";
import "./footer.scss";

import tools from "../../utils/tools";

class Footer {
  constructor(el) {
    this.name = "footer";
    this.$el = el;
    // this.tpl = tpl;
  }
  init() {
    this.render();
  }
  tpl() {
    return tools.tplReplace(tpl(), {
      year: new Date().getFullYear(),
    });
  }
}

export { Footer };
