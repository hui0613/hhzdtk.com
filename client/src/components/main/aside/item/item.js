import tpl from "./item.ejs";
import "./item.scss";
import tools from "../../../../utils/tools";
class HotItem {
  constructor() {
    this.name = "hotItem";
  }
  tpl(data) {
    let list = "";
    if (data) {
      data.forEach((item) => {
        list += tools.tplReplace(tpl(),{
          id: item._id,
          title: item.title,
        });
      });
      // console.log(list);
      return list;
    }
  }
}

export { HotItem };
