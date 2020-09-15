import detailTpl from "./detail.ejs";
import "./detail.scss";

import tools from "../../../../utils/tools";
import { Info } from "./info/info";
import { Text } from "./text/text";

class Detail {
  constructor(detail) {
    this.name = "detail";
    this.info = new Info();
    this.text = new Text();
  }
  tpl(detail) {
    return tools.tplReplace(detailTpl(), {
      info: this.info.tpl(detail),
      text: this.text.tpl(detail),
    });
  }
}

export { Detail };
