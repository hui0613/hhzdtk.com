import tpl from "./index.ejs";
import "./index.scss";
import tools from "../../utils/tools";

class Err {
  constructor(el) {
    this.name = "error";
  }
  tpl() {
    return tools.tplReplace(tpl(), {
      errorData: "error",
    });
  }
}

export { Err };
