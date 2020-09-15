import tpl from "./text.ejs";
import "./text.scss";
import tools from "../../../../../utils/tools";

class Text {
  constructor() {
    this.name = "text";
  }
  tpl(data) {
    return tools.tplReplace(tpl(), {
      content: data.htmlcontent,
    });
  }
}

export { Text };
