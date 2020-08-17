import tpl from "./nav.ejs";
import "./nav.scss";

class Nav {
  constructor() {
    this.name = "nav";
    this.tpl = tpl;
  }
}

export { Nav };
