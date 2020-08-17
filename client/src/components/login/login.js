import tpl from "./login.ejs";
import "./login.scss";
import tools from "../../utils/tools";

class Login {
  constructor(el) {
    this.name = "login";
    this.$el = el;
  }
  init() {
    this.render();
  }
  render() {
    tools.append(this.$el,tools.tplReplace(tpl(),{}))
  }
}

export { Login };
