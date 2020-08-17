import tpl from "./index.ejs";
import "./index.scss";

import tools from "../../../../utils/tools";

class BlogPost {
  constructor() {
    this.name = "blogPost";
  }
  tpl(data) {
    let list = "";
    console.log(data)
    data.forEach((item) => {
      list += tools.tplReplace(tpl(),{
        id: item._id,
        title: item.title,
        brief: item.summary,
        author: item.author,
        date: item.date,
      });
    });
    return list;
  }
}

export { BlogPost };
