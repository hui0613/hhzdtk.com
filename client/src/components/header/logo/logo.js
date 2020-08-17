import tpl from "./logo.ejs";
import "./logo.scss";

class Logo {
  constructor() {
    this.name = "logo";
    this.tpl = tpl;
  }
  init() {}
}

export { Logo };
