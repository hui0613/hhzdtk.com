import tpl from "./main.ejs";
import "./main.scss";
import { Content } from "./content/content";
import { Aside } from "./aside/aside";
import { Err } from "../error/index";
import { Footer } from "../../components/footer/footer";
import tools from "../../utils/tools";

class Main {
  constructor(el,pageStr,data,count,hotList) {
    this.name = "main";
    this.content = new Content();
    this.aside = new Aside();
    this.footer = new Footer();

    this.$el = el;
    this.pageStr = pageStr;
    this.data = data;
    this.count = count;
    this.hotList = hotList;
  }
  init(str) {
    this.render(str);
  }
  render() {
    if (!this.data) {
      this.$el.append(
        tools.tplReplace(tpl(),{
          content: new Err().tpl(),
          aside: this.aside.tpl(),
          footer: this.footer.tpl(),
        })
      );
    } else {
      this.$el.append(
        tools.tplReplace(tpl(),{
          content: this.content.tpl(this.pageStr,this.data,this.count),
          aside: this.aside.tpl(this.hotList),
          footer: this.footer.tpl(),
        })
      );
    }
  }
}

export { Main };
