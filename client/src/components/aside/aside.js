import tpl from "./aside.ejs";
import "./aside.scss";
import tools from "../../utils/tools";
import { Avatar } from "./avatar/avatar";
import { Nav } from "./nav/nav";

class Aside {
  constructor(el,info) {
    this.name = "aside";
    this.tpl = tpl;
    this.$el = el;
    this.info = info;
    this.avatar = new Avatar();
    this.nav = new Nav();
  }
  init() {
    this.render();
  }
  render() {
    // this.$el.append(
    // tools.tplReplace(tpl(),{
    //   avatar: this.avatar.tpl(this.info),
    //   nav: this.nav.tpl(),
    // })
    // );
    tools.append(this.$el,tools.tplReplace(tpl(),{
      avatar: this.avatar.tpl(this.info),
      nav: this.nav.tpl(),
    }))
  }
}

export { Aside };
